import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Board from "../components/Board";

const INFO_MENU = [
  { id: "overview", label: "행사개요" },
  { id: "visitor", label: "참관객 안내사항" },
  { id: "booth", label: "부스 참가자 안내" },
];

export default function InfoPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full flex justify-center py-40 px-4 md:px-10">
      <Board title="INFORMATION" footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
        <div className="flex border-b border-[#bae6fd] mb-8 overflow-x-auto">
          {INFO_MENU.map((item) => (
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
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "visitor" && <AttendeeTab />}
              {activeTab === "booth" && <BoothTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Board>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6 text-slate-600">
      <h3 className="text-xl font-bold text-slate-700 italic">행사 개요</h3>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>행사명:</strong> 몇 번이라도 프리즘! (킹 오브 프리즘 팬 온리전)</li>
        <li><strong>일시:</strong> 2026년 7월 4일 (토)</li>
        <li><strong>장소:</strong> 추후 공개 (서울 내)</li>
        <li><strong>대상:</strong> <span className="text-[#ff85a1] font-bold">14세 이상 여성 참관</span></li>
        <li><strong>문의:</strong> prismonlyevent@gmail.com</li>
      </ul>
      <p className="mt-6 text-sm text-slate-400">
        * 본 행사는 공식과 무관한 비공식 팬 행사입니다.
      </p>
    </div>
  );
}

function AttendeeTab() {
  return (
    <div className="space-y-6 text-slate-600">
      <h3 className="text-xl font-bold text-slate-700 italic">참관 안내 및 규정</h3>
      <ul className="list-disc pl-5 space-y-3">
        <li>모든 입장객은 사전 예매를 통해 입장 가능합니다. (현장 판매 미정)</li>
        <li>행사장 내에서는 외부 음식물 반입이 금지되어 있습니다. 보호 및 관리된 생수만 가능합니다.</li>
        <li>지나친 고성방가나 뛰는 행위는 삼가주시기 바랍니다. </li>
      </ul>
      
      <h3 className="text-xl font-bold text-slate-700 mt-10 italic">코스프레 안내</h3>
      <ul className="list-disc pl-5 space-y-3">
        <li>코스프레는 킹 오브 프리즘 관련 캐릭터만 가능합니다. (오리지널 연성 불가능)</li>
        <li>탈의실 및 메이크업룸이 별도로 제공될 예정입니다. 지정된 장소를 이용해주십시오.</li>
        <li>노출이 심하거나 타인에게 위협이 될 수 있는 소품(날이 선 금속 무기류 등)은 반입이 제한됩니다.</li>
      </ul>
    </div>
  );
}

function BoothTab() {
  return (
    <div className="space-y-6 text-slate-600">
      <h3 className="text-xl font-bold text-slate-700 italic">부스 참가자 안내</h3>
      <p>
        부스 참가자 분들을 위한 상세한 가이드라인입니다. 동인 네트워크와 협력 인쇄소를 통해 배송 대행 서비스를 지원할 예정입니다.
      </p>
      
      <h3 className="text-xl font-bold text-slate-700 mt-10 italic">부스 구성</h3>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>1부스:</strong> 책상 1개(120x60cm), 의자 2개 무상 제공, 입장 2인 무료</li>
        <li><strong>반부스:</strong> 책상 0.5개(60x60cm), 의자 1개 무상 제공, 입장 1인 무료</li>
        <li>추가 의자는 부스당 최대 1개까지 유상 대여 가능합니다.</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-700 mt-10 italic">협력 인쇄소 (예정)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-5 bg-[#bae6fd]/10 border border-[#bae6fd] rounded-lg">
          <h4 className="font-bold text-[#7c3aed] mb-2">프린트매니아</h4>
          <p className="text-sm text-slate-500">포스터 및 엽서, 책자 할인</p>
        </div>
        <div className="p-5 bg-[#bae6fd]/10 border border-[#bae6fd] rounded-lg">
          <h4 className="font-bold text-[#7c3aed] mb-2">태양출판사</h4>
          <p className="text-sm text-slate-500">회지 출력 마감 연장 혜택 무료 지원</p>
        </div>
      </div>
    </div>
  );
}
