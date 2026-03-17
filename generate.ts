import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: "배관수리하는 배경으로 훈훈한 40대 , 머리에 안전모쓰고 작업복 입고, 아시안남자, 따봉을 날리는, 디지털카메라로 찍은 듯한. 사람은 중앙에서 살짝 우측. 옷에는 '디지타스' 라고 써있는 유니폼. (A handsome 40-something Asian man in a plumbing repair background, wearing a hard hat and work clothes, giving a thumbs up, looking like it was taken with a digital camera. The person is slightly to the right of the center. The uniform has '디지타스' written on it.)",
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        if (!fs.existsSync('./public')) {
          fs.mkdirSync('./public');
        }
        fs.writeFileSync('./public/hero-generated.jpg', buffer);
        console.log("Image saved to public/hero-generated.jpg");
      }
    }
  } catch (e) {
    console.error("Error generating image:", e);
  }
}
run();
