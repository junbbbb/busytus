import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Image as ImageIcon, Key } from 'lucide-react';

export default function HeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    // Check if we already have a generated image in localStorage
    const savedImage = localStorage.getItem('hero_generated_image');
    if (savedImage) {
      setImageUrl(savedImage);
    }

    // Check if API key is already selected
    const checkKey = async () => {
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    };
    checkKey();
  }, []);

  const handleGenerate = async () => {
    try {
      setError(null);
      
      // 1. Ensure API key is selected
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const isSelected = await window.aistudio.hasSelectedApiKey();
        if (!isSelected) {
          await window.aistudio.openSelectKey();
          // Assume success after opening
          setHasKey(true);
        }
      }

      setIsGenerating(true);

      // 2. Initialize GenAI with the key (automatically injected into process.env.API_KEY by the platform after selection)
      // Note: The platform injects the selected key into process.env.API_KEY
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API 키를 찾을 수 없습니다. 다시 시도해주세요.");
      }

      const ai = new GoogleGenAI({ apiKey });

      // 3. Generate the image
      const prompt = "배관수리하는 배경으로 훈훈한 40대 , 머리에 안전모쓰고 작업복 입고, 아시안남자, 따봉을 날리는, 디지털카메라로 찍은 듯한. 사람은 중앙에서 살짝 우측. 옷에는 '디지타스' 라고 써있는 유니폼. (A handsome 40-something Asian man in a plumbing repair background, wearing a hard hat and work clothes, giving a thumbs up, looking like it was taken with a digital camera. The person is slightly to the right of the center. The uniform has '디지타스' written on it.)";
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: prompt,
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });

      // 4. Extract image
      let generatedBase64 = null;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            generatedBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (generatedBase64) {
        setImageUrl(generatedBase64);
        localStorage.setItem('hero_generated_image', generatedBase64);
      } else {
        throw new Error("이미지 생성에 실패했습니다.");
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "알 수 없는 오류가 발생했습니다.");
      
      // If entity not found, reset key state
      if (err.message && err.message.includes("Requested entity was not found")) {
        setHasKey(false);
        if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
          await window.aistudio.openSelectKey();
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  if (imageUrl) {
    return (
      <div className="relative w-full h-full group">
        <img 
          src={imageUrl} 
          alt="친근한 이웃 전문가" 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-2"
        >
          {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
          다시 생성하기
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-6 text-center border-2 border-dashed border-gray-300 rounded-3xl">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
        <ImageIcon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">AI 전문가 이미지 생성</h3>
      <p className="text-sm text-gray-500 mb-6 max-w-xs">
        요청하신 '디지타스' 유니폼을 입은 40대 배관 전문가 이미지를 AI로 생성합니다.
      </p>
      
      {error && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4 w-full max-w-xs">
          {error}
        </div>
      )}

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:opacity-70"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            이미지 생성 중... (약 10~20초)
          </>
        ) : (
          <>
            {!hasKey && <Key className="w-5 h-5" />}
            {hasKey ? '이미지 생성하기' : 'API 키 선택 및 생성'}
          </>
        )}
      </button>
    </div>
  );
}
