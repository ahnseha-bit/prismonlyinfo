import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ticket, Gift, Film, Shield } from "lucide-react";
import Board from "../components/Board";

const EVENT_MENU = [
  { id: "sticker", label: "스티커 이벤트" },
  { id: "bingo", label: "트레카 & 빙고" },
  { id: "movie", label: "응원상영 안내" },
];

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("sticker");

  return (
    <div className="w-full flex justify-center py-40 px-4 md:px-10">
      <Board title="EVENT" footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
        <div className="flex border-b border-[#bae6fd] mb-8 overflow-x-auto">
          {EVENT_MENU.map((item) => (
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
              {activeTab === "sticker" && <StickerTab />}
              {activeTab === "bingo" && <TrekaBingoTab />}
              {activeTab === "movie" && <CheerScreeningTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Board>
    </div>
  );
}

function StickerTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Gift className="w-10 h-10 text-[#7c3aed] p-2 bg-[#bae6fd]/20 rounded-full" />
        <h3 className="text-xl font-bold text-slate-700 italic">도장 쾅쾅! 스티커 이벤트</h3>
      </div>
      <p className="text-slate-600 leading-[2.1]">
        행사 당일, 각 부스에서 물품을 구매하시고 스티커를 모아보세요!<br/>
        완성된 스티커 보드를 본부석으로 가져오시면, 특별한 전단지 굿즈 세트를 드립니다. (선착순 100명)
      </p>
      
      <div className="bg-[#7c3aed]/5 p-6 rounded-lg border border-[#bae6fd] mt-6">
        <h4 className="font-bold text-[#7c3aed] mb-2">참여 팁</h4>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
          <li>입장 시 제공되는 리플렛 뒷면을 확인해주세요.</li>
          <li>도장은 부스당 1회 받을 수 있습니다.</li>
          <li>협력 부스 스티커는 2개로 인정됩니다!</li>
        </ul>
      </div>
    </div>
  );
}

function TrekaBingoTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Ticket className="w-10 h-10 text-[#7c3aed] p-2 bg-[#bae6fd]/20 rounded-full" />
        <h3 className="text-xl font-bold text-slate-700 italic">트레카 & 전단지 빙고</h3>
      </div>
      <p className="text-slate-600 leading-[2.1]">
        <strong>트레이딩 카드</strong><br/>
        참여 일러스트레이터 분들의 멋진 일러스트가 담긴 트레카를 판매합니다.<br/>
        1팩(3장) 3,000원이며, 올 컴플릿 시 비밀의 방에 입장 가능한 특수 카드를 드립니다!
      </p>

      <div className="h-px bg-slate-200 my-6"></div>
      
      <p className="text-slate-600 leading-[2.1]">
        <strong>빙고 타임</strong><br/>
        오후 3시 30분부터 진행되는 대규모 빙고 타임!<br/>
        행사장 입장 시 배부되는 빙고판으로 참여하실 수 있으며, 1등에게는 초호화 상품이 준비되어 있습니다.
      </p>
    </div>
  );
}

function CheerScreeningTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Film className="w-10 h-10 text-[#7c3aed] p-2 bg-[#bae6fd]/20 rounded-full" />
        <h3 className="text-xl font-bold text-slate-700 italic">응원상영 안내</h3>
      </div>
      <p className="text-slate-600 leading-[2.1] mb-6">
        빙고 이벤트 후, 킹 오브 프리즘 명장면을 함께 보는 미니 응원상영이 있습니다.<br/>
        야광봉과 힘찬 목소리만 있으면 준비 완료!
      </p>

      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-6">
        <h4 className="flex items-center gap-2 font-bold text-orange-600 mb-2">
          <Shield className="w-5 h-5" />
          안전 수칙
        </h4>
        <ul className="list-disc pl-5 text-sm text-orange-800 space-y-2">
          <li>개인 야광봉(펜라이트) 지참 가능합니다. 단, 지나치게 밝은 고휘도 펜라이트는 삼가주세요.</li>
          <li>스크린을 향해 물건을 던지거나 뛰쳐나가는 행위는 절대 금지됩니다.</li>
          <li>주변 사람을 배려하면서 즐겁게 관람해 주시기 바랍니다.</li>
        </ul>
      </div>
    </div>
  );
}
