import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Map, Info } from "lucide-react";
import Board from "../components/Board";

const BOOTH_MENU = [
  { id: "list", label: "부스 리스트" },
  { id: "details", label: "부스 상세정보" },
  { id: "map", label: "부스 배치도" },
];

export default function BoothPage() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="w-full flex justify-center py-40 px-4 md:px-10">
      <Board title="BOOTH" footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
        <div className="flex border-b border-[#bae6fd] mb-8 overflow-x-auto">
          {BOOTH_MENU.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-3 font-bold whitespace-nowrap transition-colors flex-shrink-0 ${
                activeTab === item.id 
                  ? 'text-[#7c3aed] border-b-2 border-[#7c3aed]' 
                  : 'text-slate-400 hover:text-[#7c3aed]/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "list" && <BoothListTab />}
              {activeTab === "details" && <Placeholder message="부스 상세정보는 모집 완료 후 공개됩니다." icon={<Info className="w-12 h-12 text-[#bae6fd] mb-4" />} />}
              {activeTab === "map" && <Placeholder message="부스 배치도는 행사 2달 전 공개됩니다." icon={<Map className="w-12 h-12 text-[#bae6fd] mb-4" />} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Board>
    </div>
  );
}

function BoothListTab() {
  return (
    <div className="space-y-6">
      <div className="bg-[#7c3aed]/5 p-6 rounded-lg text-center font-bold text-[#7c3aed] mb-8 border border-[#bae6fd]">
        부스 모집이 현재 진행 중입니다! (4/1 ~ 4/30)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg bg-slate-50/80">
            <div className="w-12 h-12 bg-[#bae6fd]/50 flex items-center justify-center rounded-md text-[#7c3aed] font-bold">
              {String.fromCharCode(64 + i)}1
            </div>
            <div>
              <h4 className="font-bold text-slate-700">참가 부스명 {i}</h4>
              <p className="text-sm text-slate-500">서클 대표자</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-4 p-4 border border-dashed border-[#bae6fd] rounded-lg bg-white justify-center text-[#bae6fd] font-bold">
          모집 대기 중...
        </div>
      </div>
    </div>
  );
}

function Placeholder({ message, icon }: { message: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
      {icon}
      <p className="text-lg">{message}</p>
    </div>
  );
}
