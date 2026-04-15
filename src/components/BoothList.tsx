import React, { useState, useMemo } from "react";
import { Search, Twitter, ChevronLeft, ChevronRight, X, ArrowUpDown } from "lucide-react";

// The Original Data migrated with Sample Data
const RAW_BOOTH_DATA = [
    { "name": "\\\\무지개 왕 보러가야지~!//", "members": ["초과", "다락"] },
    { "name": "2년 내에 점프할 주식 알려드립니다", "members": ["놀🍮"] },
    { "name": "366타이카즈", "members": ["현밥"] },
    { "name": "3학년 프리즘반 쥬네 선생님", "members": ["흑돈"] },
    { "name": "그대의 봄날", "members": ["린예"] },
    { "name": "금교(은교보다 2배 쎔)", "members": ["Gom"] },
    { "name": "내 피는 녹색!", "members": ["팽이"] },
    { "name": "내가 저런 챠라챠라한 녀석과 사귀다니, 무리무리! (※무리가 아니었다?!)", "members": ["재랑", "장강"] },
    { "name": "니가 스트리트계의 카리스마인가 뭔가 하는 니시나카즈키냐", "members": ["김쿰"] },
    { "name": "돈갚아", "members": ["혜키", "하카"] },
    { "name": "두 사람의 샹그릴라 ~숙명의 웨딩 어게인~", "members": ["로레", "또기", "덤"] },
    { "name": "메르해피한 다과회", "members": ["미야", "일상"] },
    { "name": "방가방가 셉토리", "members": ["킹제육", "싹싹"] },
    { "name": "사과밭에 오렌지 났네", "members": ["냐리", "메로"] },
    { "name": "사랑의 멋짐을 모르는 당신이 불쌍해요!", "members": ["크오", "쮸삐쨔빱"] },
    { "name": "사자는 프리즘, 우리는 스트릿", "members": ["으이구", "아수"] },
    { "name": "서울 투나잇 풀버스트", "members": ["기위새"] },
    { "name": "선배, 졸업하지마세요!!", "members": ["봉태", "마망, 이브"] },
    { "name": "선배는 프리덤밖에 모르는 바보", "members": ["도란"] },
    { "name": "세미덤", "members": ["므냥"] },
    { "name": "슈뢰딩거의 프리즘", "members": ["히"] },
    { "name": "스트릿 칠드런", "members": ["시정"] },
    { "name": "스트릿조 부흥위원회", "members": ["슫파게티", "린고"] },
    { "name": "시시한 프리즘 쇼 전문", "members": ["둘기"] },
    { "name": "신장개업! 캌신타레 전문점 ~만두사오세요~", "members": ["만두", "하사오"] },
    { "name": "아빠 감사해요", "members": ["믕시"] },
    { "name": "아오모리 썬샤인 과수원", "members": ["두", "타로"] },
    { "name": "아저씨 프리즘쇼 잘하지..?", "members": ["월화", "카모", "클리"] },
    { "name": "알렉없는알렉오시부스", "members": ["캉칼프"] },
    { "name": "에델로즈경영위기대책위원회", "members": ["결"] },
    { "name": "오버레를 른으로 두기", "members": ["도미", "뫄과", "원"] },
    { "name": "오빠 왜 연하세요", "members": ["배스"] },
    { "name": "우가우가 스파이럴", "members": ["폰얼", "nyaronyaro"] },
    { "name": "울퉁불퉁하다 울퉁불퉁한", "members": ["현운"] },
    { "name": "이지두부스", "members": ["유므"] },
    { "name": "정시출발! 시간엄수! 하려고 새벽에 출발했어요", "members": ["마와비", "루빈"] },
    { "name": "중 2병 치료소", "members": ["에델로즈 청소부", "아리아"] },
    { "name": "중요한 것은 “기세”", "members": ["김도련", "루이"] },
    { "name": "진히지하는부스", "members": ["뭐든", "쑥... 쑥 버무리?"] },
    { "name": "천년전프리즘스타를아십니까", "members": ["チヰ"] },
    { "name": "카케타이거즈", "members": ["골반"] },
    { "name": "캬옹이 목욕탕", "members": ["멩", "새빛"] },
    { "name": "킹은 왼쪽에 있는 편이 아름답다.", "members": ["랸", "랸"] },
    { "name": "킹을 오른쪽으로 밀어서 잠금해제", "members": ["연시", "리나"] },
    { "name": "타.이.가.", "members": ["일홍", "분덕"] },
    { "name": "타이카즈에게 꽃다발을💐", "members": ["김쨘", "병냥"] },
    { "name": "타이카즈하자영원히", "members": ["초쵹"] },
    { "name": "틀딱삼강소", "members": ["Darf", "롱"] },
    { "name": "패왕상룡객잔", "members": ["묘파"] },
    { "name": "프리즘 마켓", "members": ["실현"] },
    { "name": "프리즘 사자들이 인간을 사랑해도 합법인가요? ", "members": ["사율"] },
    { "name": "프리즘쇼절대무리!!엣?무리가 아니었다?!", "members": ["슬기", "CMD"] },
    { "name": "프리즘스타 노동조합", "members": ["Juu"] },
    { "name": "프리즘학교 무지개학과 프리즘쇼전공 사무실 ", "members": ["김설예"] },
    { "name": "플라밍고스카이", "members": ["퓰"] },
    { "name": "하우스 오브 글로리어스 슈왈츠 (with 삼강 도련님 과거에서 기다릴게)", "members": ["도마🍅", "쫀즈"] },
    { "name": "환상의 프리즘쇼! 뭔가 보여드리겠습니다!!", "members": ["2ftt"] },
    { "name": "휘핑크림많이주세요", "members": ["호집", "🍙"] },
    { "name": "DMZ (Dear My ZONE)", "members": ["냥"] }
];

const SAMPLE_TAGS = ["굿즈", "동인지", "일러스트", "소설", "아크릴", "엽서"];
const SAMPLE_IMAGES = [
    "https://images.unsplash.com/photo-1618506557293-1eb95aaebee8?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1544654921-65f5a2ba2709?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1580130058001-52108ce4a0bc?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=400&h=300"
];

const BOOTH_DATA = RAW_BOOTH_DATA.map((booth, index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 10));
    const num = (index % 10) + 1;
    const id = `${row}${num}`;
    
    const tags = [
        SAMPLE_TAGS[index % SAMPLE_TAGS.length], 
        SAMPLE_TAGS[(index + 2) % SAMPLE_TAGS.length]
    ];

    return {
        id,
        name: booth.name,
        members: booth.members.map((m, i) => ({
            nickname: m,
            twitter: i % 2 === 0 ? `twitter_${m}` : undefined
        })),
        description: `저희 [${booth.name}] 부스에 오신 것을 환영합니다!\n올해 행사에서는 특별한 아이템들과 함께 다양한 작품을 선보일 예정입니다.\n많은 관심과 사랑 부탁드립니다!`,
        tags,
        imageUrl: SAMPLE_IMAGES[index % SAMPLE_IMAGES.length]
    };
});

type SortOption = "id" | "name";

export default function BoothList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState<SortOption>("id");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredAndSortedBooths = useMemo(() => {
        let result = BOOTH_DATA.filter((booth) => {
            const term = searchTerm.toLowerCase();
            return (
                booth.name.toLowerCase().includes(term) ||
                booth.id.toLowerCase().includes(term) ||
                booth.tags.some(tag => tag.toLowerCase().includes(term)) ||
                booth.members.some(member => member.nickname.toLowerCase().includes(term))
            );
        });

        result = result.sort((a, b) => {
            if (sortOption === "id") {
                return a.id.localeCompare(b.id, undefined, { numeric: true });
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        return result;
    }, [searchTerm, sortOption]);

    const totalPages = Math.ceil(filteredAndSortedBooths.length / itemsPerPage);
    const currentBooths = filteredAndSortedBooths.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col gap-8 font-sans">
            {/* Filter and Sort Area */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-5 rounded-2xl border border-accent-gold/20 shadow-sm">
                <div className="relative w-full md:w-[400px] flex-shrink-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="부스명, 위치(ID), 닉네임, 태그 검색..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-8 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold/50 text-sm transition-shadow"
                    />
                    {searchTerm && (
                        <button 
                            onClick={() => { setSearchTerm(''); setCurrentPage(1); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            title="검색어 초기화"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="flex items-center text-sm text-slate-500 whitespace-nowrap bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-200">
                        <ArrowUpDown className="w-4 h-4 mr-2" />
                        <span className="mr-2">정렬:</span>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="bg-transparent font-medium focus:outline-none cursor-pointer flex-1 md:flex-none"
                        >
                            <option value="id">부스 위치순</option>
                            <option value="name">가나다순</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* List Area */}
            <div className="flex flex-col gap-6">
                {currentBooths.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 bg-white rounded-2xl border border-dashed border-accent-gold/30">
                        검색 결과가 없습니다.
                    </div>
                ) : (
                    currentBooths.map((booth) => (
                        <div
                            key={booth.id}
                            className="flex flex-col bg-white border border-accent-gold/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* 상단 헤더 */}
                            <div className="bg-slate-50/50 border-b border-accent-gold/10 px-5 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                                    <span className="text-accent-gold mr-2">[{booth.id}]</span>
                                    {booth.name}
                                </h3>
                                
                                {/* 참가자 목록 */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {booth.members.map((member, idx) => (
                                        <div 
                                            key={idx} 
                                            className="flex items-center gap-1.5 text-sm font-medium bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg shadow-sm"
                                        >
                                            {member.twitter && (
                                                <a 
                                                    href={`https://twitter.com/${member.twitter}`}
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="text-[#1DA1F2] hover:opacity-80 transition-opacity flex items-center pr-1 border-r border-slate-100"
                                                    title={`${member.nickname}의 트위터`}
                                                >
                                                    <Twitter className="w-4 h-4 fill-current" />
                                                </a>
                                            )}
                                            <span className="text-slate-700">{member.nickname}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 중단 콘텐츠 (PC: 좌우 배치, 모바일: 상하 레이아웃) */}
                            <div className="flex flex-col md:flex-row p-5 md:p-6 gap-6 md:gap-8">
                                {/* 썸네일 */}
                                <div className="w-full md:w-[320px] shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm relative group">
                                    <img
                                        src={booth.imageUrl}
                                        alt={booth.name}
                                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* 부스 소개 및 태그 */}
                                <div className="flex-1 flex flex-col pt-1 md:pt-2">
                                    <div className="text-[15px] text-slate-600 leading-relaxed whitespace-pre-wrap flex-1">
                                        {booth.description}
                                    </div>

                                    {/* 하단 영역: 해시태그 */}
                                    <div className="mt-6 pt-5 border-t border-dashed border-slate-200">
                                        <div className="flex flex-wrap gap-2">
                                            {booth.tags.map((tag, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="px-3 py-1.5 text-xs font-semibold bg-accent-gold/10 text-accent-gold rounded-full"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8 mb-12">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2.5 rounded-xl border border-slate-200 disabled:opacity-50 hover:bg-slate-50 transition-colors bg-white shadow-sm"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-1.5 border border-slate-200 rounded-xl p-1.5 bg-white shadow-sm">
                        {Array.from({ length: totalPages }).map((_, idx) => {
                            if (
                                totalPages > 5 &&
                                idx !== 0 &&
                                idx !== totalPages - 1 &&
                                Math.abs(currentPage - 1 - idx) > 1
                            ) {
                                if (idx === 1 || idx === totalPages - 2) {
                                    return <span key={idx} className="w-10 h-10 flex items-center justify-center text-slate-400 font-medium tracking-widest">...</span>;
                                }
                                return null;
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPage(idx + 1)}
                                    className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        currentPage === idx + 1
                                            ? "bg-slate-800 text-white shadow-md scale-105"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    {idx + 1}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2.5 rounded-xl border border-slate-200 disabled:opacity-50 hover:bg-slate-50 transition-colors bg-white shadow-sm"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}