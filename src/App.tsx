import React from 'react';
import {
  Search,
  Menu,
  Bell,
  User,
  ChevronRight,
  Star,
  Phone,
  MapPin
} from 'lucide-react';
import {
  PlungerIcon,
  WrenchIcon,
  BroomIcon,
  LeakIcon,
  ACIcon,
  RollerIcon,
  HouseIcon,
  GridIcon
} from './components/CategoryIcons';

const CATEGORIES = [
  { id: 1, name: '좌변기 막힘', icon: PlungerIcon },
  { id: 2, name: '하수구 뚫기', icon: WrenchIcon },
  { id: 3, name: '계단 청소', icon: BroomIcon },
  { id: 4, name: '누수 탐지', icon: LeakIcon },
  { id: 5, name: '에어컨 청소', icon: ACIcon },
  { id: 6, name: '도배/장판', icon: RollerIcon },
  { id: 7, name: '입주 청소', icon: HouseIcon },
  { id: 8, name: '전체보기', icon: GridIcon },
];

const AVAILABLE_COMPANIES = [
  { id: 1, name: '만능설비', specialty: '배관/하수구', rating: 4.8, responseTime: '30분' },
  { id: 2, name: '깔끔청소연구소', specialty: '입주청소', rating: 4.9, responseTime: '1시간' },
  { id: 3, name: '번개수리', specialty: '전기/조명', rating: 4.7, responseTime: '20분' },
  { id: 4, name: '숨쉬는공간', specialty: '에어컨', rating: 5.0, responseTime: '45분' },
  { id: 5, name: '든든잠금', specialty: '잠금장치/도어락', rating: 4.6, responseTime: '15분' },
];

const POPULAR_SERVICES = [
  {
    id: 1,
    title: '원룸 이사/입주 청소',
    provider: '깔끔청소연구소',
    rating: 4.9,
    reviews: 128,
    price: '150,000원~',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: 2,
    title: '화장실/싱크대 하수구 막힘 뚫음',
    provider: '만능설비',
    rating: 4.8,
    reviews: 342,
    price: '50,000원~',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: 3,
    title: '벽걸이/스탠드 에어컨 완전 분해 청소',
    provider: '숨쉬는공간',
    rating: 5.0,
    reviews: 89,
    price: '70,000원~',
    image: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: 4,
    title: '미세방충망 교체 및 시공',
    provider: '바람솔솔',
    rating: 4.7,
    reviews: 215,
    price: '35,000원~',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=300'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5">
              <img 
                src="/images/logo/busylogo.png" 
                alt="비지터스 로고" 
                className="h-9 w-auto"
              />
              <span className="text-2xl font-jua text-[#3b2313] tracking-wide pt-1">
                비지터스
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-blue-600">수리/시공</a>
              <a href="#" className="hover:text-blue-600">청소</a>
              <a href="#" className="hover:text-blue-600">전문가 찾기</a>
              <a href="#" className="hover:text-blue-600">견적요청</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors hidden md:block">
              <Bell className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
              로그인 / 회원가입
            </button>
            <button className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-6 pb-10 md:pt-8 md:pb-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 md:min-h-[400px]">

              {/* Left - 메인 히어로 */}
              <div className="md:flex-[6] relative rounded-[14px] overflow-hidden flex items-center">
                {/* 배경 이미지 */}
                <img
                  src="/images/hero/image.png"
                  alt="비지터스 전문가"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 검정 그라데이션 오버레이 - 왼쪽 진하게 → 오른쪽 투명 */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

                {/* 텍스트 + 검색 */}
                <div className="relative z-20 px-8 py-12 md:px-12 md:py-14 w-full">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.3] tracking-tight">
                    집 고민,<br />전문가에게 맡기세요
                  </h1>
                  <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
                    배관부터 청소까지, 검증된 전문가가 30분 내 출동해요.
                  </p>

                  <div className="max-w-md">
                    <div className="flex items-center bg-white/95 rounded-[10px] p-1">
                      <div className="flex items-center gap-2 pl-3 pr-3 border-r border-gray-200">
                        <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                        <input
                          type="text"
                          placeholder="지역"
                          className="w-20 py-2.5 text-sm outline-none bg-transparent placeholder:text-gray-400"
                        />
                      </div>
                      <div className="flex items-center flex-1">
                        <Search className="w-4 h-4 text-gray-400 ml-3 shrink-0" />
                        <input
                          type="text"
                          placeholder="어떤 서비스가 필요하세요?"
                          className="w-full px-3 py-2.5 text-sm outline-none bg-transparent placeholder:text-gray-400"
                        />
                      </div>
                      <button className="bg-[#FEE500] hover:bg-[#F5DC00] text-[#1a1a1a] px-5 py-2.5 rounded-[10px] text-sm font-medium transition-colors whitespace-nowrap">
                        검색
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - 긴급 출동 */}
              <div className="md:flex-[3] bg-[#f7f7f7] rounded-[14px] overflow-hidden flex flex-col">
                <div className="px-5 pt-5 pb-3">
                  <h3 className="text-[#1f1b18] text-lg font-bold mb-1">새벽에도 출동해요</h3>
                  <p className="text-[#1f1b18]/40 text-xs">지금 {AVAILABLE_COMPANIES.length}개 업체가 대기 중이에요</p>
                </div>

                <div className="flex-1 px-5 relative">
                  {AVAILABLE_COMPANIES.map((company, i) => (
                    <div
                      key={company.id}
                      className={`flex items-center justify-between py-3 ${i < AVAILABLE_COMPANIES.length - 1 ? 'border-b border-[#1f1b18]/[0.06]' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#1f1b18] text-sm font-bold">{company.name}</span>
                        <span className="text-[#1f1b18]/30 text-xs">{company.specialty}</span>
                      </div>
                      <span className="text-[#1f1b18]/40 text-xs">{company.responseTime}</span>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f7f7] to-transparent pointer-events-none"></div>
                </div>

                <div className="relative z-10 px-4 pb-4">
                  <button className="w-full bg-[#1f1b18] text-white py-3 rounded-[10px] font-bold text-sm hover:bg-[#111] transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    긴급 출동 요청
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 md:py-12 max-w-5xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">어떤 서비스가 필요하신가요?</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-6 gap-x-4">
            {CATEGORIES.map((category) => (
              <button key={category.id} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#F6F6F6] group-hover:scale-105 transition-transform duration-200">
                  <category.icon />
                </div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">지금 인기 있는 서비스</h2>
              <a href="#" className="text-sm font-medium text-blue-600 flex items-center hover:underline">
                전체보기 <ChevronRight className="w-4 h-4 ml-0.5" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {POPULAR_SERVICES.map((service) => (
                <a key={service.id} href="#" className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm text-gray-500 font-medium">{service.provider}</p>
                    <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-gray-900">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                    <p className="font-bold text-gray-900 pt-1">{service.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-12 max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                전문가로 활동하고 싶으신가요?
              </h2>
              <p className="text-slate-400 text-lg">
                비지터스 파트너가 되어 더 많은 고객을 만나보세요.
              </p>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-[10px] font-bold hover:bg-gray-50 transition-colors whitespace-nowrap w-full md:w-auto">
              파트너스 가입하기
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/images/logo/busylogo.png" 
                  alt="비지터스 로고" 
                  className="h-6 w-auto grayscale opacity-80"
                />
                <h4 className="text-xl font-jua text-[#3b2313] tracking-wide pt-1">비지터스</h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">회사 소개</a></li>
                <li><a href="#" className="hover:text-gray-900">채용 안내</a></li>
                <li><a href="#" className="hover:text-gray-900">이용 약관</a></li>
                <li><a href="#" className="hover:text-gray-900">개인정보 처리방침</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">고객 센터</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">공지사항</a></li>
                <li><a href="#" className="hover:text-gray-900">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-gray-900">전문가 지원</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-400 pt-8">
            <p>© 2026 비지터스 Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
