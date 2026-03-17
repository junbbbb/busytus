import React from 'react';
import {
  Search,
  Menu,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  Star,
  Phone,
  MapPin,
  CheckCircle,
  Clock
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
      {/* Header - 모바일 */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5">
            <img src="/images/logo/busylogo.png" alt="비지터스" className="h-7 w-auto" />
            <span className="text-lg font-jua text-[#3b2313] tracking-wide pt-0.5">비지터스</span>
          </a>
          <div className="flex items-center gap-0.5">
            <button className="flex items-center gap-0.5 text-xs font-semibold text-[#1a1a1a] px-2.5 py-1.5 rounded-full bg-[#f7f7f7]">
              <MapPin className="w-3.5 h-3.5 text-[#1a1a1a]/40" />
              강남구
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-500">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-500">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Header - 데스크톱 */}
      <header className="hidden md:block sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2.5">
              <img src="/images/logo/busylogo.png" alt="비지터스 로고" className="h-9 w-auto" />
              <span className="text-2xl font-jua text-[#3b2313] tracking-wide pt-1">
                비지터스
              </span>
            </a>
            <button className="flex items-center gap-1 text-sm font-semibold text-[#1a1a1a] px-3 py-1.5 rounded-full bg-[#f7f7f7] hover:bg-[#efefef] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#1a1a1a]/40" />
              강남구
              <ChevronDown className="w-3.5 h-3.5 text-[#1a1a1a]/30" />
            </button>
            <nav className="flex items-center gap-5 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">수리/시공</a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">청소</a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">전문가 찾기</a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">견적요청</a>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 px-3 py-2 rounded-[10px] transition-colors">
              로그인 / 회원가입
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - 모바일 */}
        <section className="md:hidden px-4 pt-8 pb-2">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2 leading-[1.3]">
            집 고민,<br />전문가에게 맡기세요
          </h1>
          <p className="text-[#1a1a1a]/50 text-sm mb-6">
            검증된 전문가가 30분 내 출동해요.
          </p>

          {/* 검색 - 세로 스택 */}
          <div className="bg-[#f7f7f7] rounded-[14px] p-3 mb-3">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-[10px] mb-2">
              <MapPin className="w-4 h-4 text-[#1a1a1a]/30 shrink-0" />
              <input
                type="text"
                placeholder="지역을 입력하세요"
                aria-label="지역 검색"
                className="w-full text-sm outline-none bg-transparent placeholder:text-[#1a1a1a]/30 focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:rounded-md"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-[10px]">
              <Search className="w-4 h-4 text-[#1a1a1a]/30 shrink-0" />
              <input
                type="text"
                placeholder="어떤 서비스가 필요하세요?"
                aria-label="서비스 검색"
                className="w-full text-sm outline-none bg-transparent placeholder:text-[#1a1a1a]/30 focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:rounded-md"
              />
            </div>
            <button aria-label="서비스 검색하기" className="w-full bg-[#FEE500] hover:bg-[#F5DC00] text-[#1a1a1a] py-3 rounded-[10px] text-sm font-bold mt-2 transition-colors focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:outline-none">
              검색
            </button>
          </div>

          {/* 긴급 출동 - 컴팩트 */}
          <div className="flex items-center justify-between bg-[#f7f7f7] rounded-[14px] px-5 py-4">
            <div>
              <h3 className="text-[#1a1a1a] text-sm font-bold">새벽에도 출동해요</h3>
              <p className="text-[#1a1a1a]/50 text-xs mt-0.5">지금 {AVAILABLE_COMPANIES.length}개 업체 대기 중</p>
            </div>
            <a href="#" className="text-[#1a1a1a]/60 text-xs font-medium flex items-center gap-0.5 hover:text-[#1a1a1a] transition-colors shrink-0">
              출동 가능 업체 보기
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Hero Section - 데스크톱 */}
        <section className="hidden md:block pt-8 pb-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-row gap-4 min-h-[400px]">

              {/* Left - 메인 히어로 */}
              <div className="flex-[7] relative rounded-[14px] overflow-hidden flex items-center">
                <img
                  src="/images/hero/image.png"
                  alt="비지터스 전문가"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

                <div className="relative z-20 px-12 py-14 w-full">
                  <h1 className="text-4xl font-bold text-white mb-4 leading-[1.3] tracking-tight">
                    집 고민,<br />전문가에게 맡기세요
                  </h1>
                  <p className="text-white/60 text-base mb-8 leading-relaxed">
                    배관부터 청소까지, 검증된 전문가가 30분 내 출동해요.
                  </p>

                  <div className="max-w-lg">
                    <div className="flex items-center bg-white rounded-[10px] p-1.5 shadow-lg">
                      <div className="flex items-center gap-2 pl-3 pr-3 border-r border-gray-200/80">
                        <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                        <input
                          type="text"
                          placeholder="지역"
                          aria-label="지역 검색"
                          className="w-24 py-3 text-sm outline-none bg-transparent placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:rounded-md"
                        />
                      </div>
                      <div className="flex items-center flex-1">
                        <Search className="w-4 h-4 text-gray-400 ml-3 shrink-0" />
                        <input
                          type="text"
                          placeholder="어떤 서비스가 필요하세요?"
                          aria-label="서비스 검색"
                          className="w-full px-3 py-3 text-sm outline-none bg-transparent placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:rounded-md"
                        />
                      </div>
                      <button aria-label="서비스 검색하기" className="bg-[#FEE500] hover:bg-[#F5DC00] text-[#1a1a1a] px-6 py-3 rounded-[8px] text-sm font-semibold transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#FEE500]/50 focus-visible:outline-none">
                        검색
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-5 text-white/45 text-xs">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        2,000+ 검증된 전문가
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        평균 별점 4.8
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        30분 내 출동
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - 긴급 출동 */}
              <div className="flex-[3] bg-[#f7f7f7] rounded-[14px] overflow-hidden flex flex-col">
                <div className="px-5 pt-5 pb-3">
                  <h3 className="text-[#1f1b18] text-lg font-bold mb-1">새벽에도 출동해요</h3>
                  <p className="text-[#1f1b18]/50 text-xs">지금 {AVAILABLE_COMPANIES.length}개 업체가 대기 중이에요</p>
                </div>

                <div className="flex-1 px-5 relative">
                  {AVAILABLE_COMPANIES.map((company, i) => (
                    <div
                      key={company.id}
                      className={`flex items-center justify-between py-3 ${i < AVAILABLE_COMPANIES.length - 1 ? 'border-b border-[#1f1b18]/[0.06]' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#1f1b18] text-sm font-bold">{company.name}</span>
                        <span className="text-[#1f1b18]/40 text-xs">{company.specialty}</span>
                      </div>
                      <span className="text-[#1f1b18]/50 text-xs">{company.responseTime}</span>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f7f7] to-transparent pointer-events-none"></div>
                </div>

                <a href="#" className="relative z-10 px-5 pb-5 pt-1 flex justify-center items-center gap-0.5 text-[#1f1b18]/50 text-sm font-medium hover:text-[#1f1b18] transition-colors">
                  출동 가능 업체 더보기
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 md:py-12 max-w-5xl mx-auto px-4">
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
        <section className="py-8 md:py-16 bg-white">
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
        <section className="py-8 md:py-12 max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[14px] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
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
      <footer className="bg-gray-50 py-8 md:py-12 mt-8 md:mt-12">
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
