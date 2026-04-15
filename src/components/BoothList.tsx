import React, { useState, useMemo } from "react";
import { Search, Twitter, ChevronLeft, ChevronRight, X, ArrowUpDown } from "lucide-react";
import { BOOTH_DATA } from "../data/booths";

type SortOption = "id" | "location" | "name";

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
                booth.location.toLowerCase().includes(term) ||
                booth.tags.some(tag => tag.toLowerCase().includes(term)) ||
                booth.members.some(member => member.nickname.toLowerCase().includes(term))
            );
        });

        result = result.sort((a, b) => {
            if (sortOption === "id") {
                return a.id.localeCompare(b.id, undefined, { numeric: true });
            } else if (sortOption === "location") {
                return a.location.localeCompare(b.location, undefined, { numeric: true });
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
                        placeholder="부스명, 위치, 닉네임, 태그 검색..."
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
                            <option value="id">넘버링순</option>
                            <option value="location">부스 위치순</option>
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
                                    <span className="text-accent-gold mr-2">[{booth.id} / {booth.location}]</span>
                                    {booth.name}
                                </h3>
                                
                                {/* 참가자 목록 */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {booth.members.map((member, idx) => (
                                        <div 
                                            key={idx} 
                                            className="flex items-center gap-1.5 text-sm font-medium bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg shadow-sm group"
                                        >
                                            {member.twitter && (
                                                <a 
                                                    href={`https://twitter.com/${member.twitter}`}
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="text-[#1DA1F2] hover:opacity-80 transition-opacity flex items-center pr-1.5 border-r border-slate-200"
                                                    title={`${member.nickname}의 트위터`}
                                                >
                                                    <Twitter className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
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