import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Board from '../components/Board';
import { Map, Users, Info } from 'lucide-react';

export default function BoothPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['부스 리스트', '부스 상세정보', '부스 배치도'];

  return (
    <Board title="BOOTH" footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
      <div className="flex border-b border-primary-light mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 font-bold whitespace-nowrap transition-colors ${
              activeTab === idx ? 'text-primary border-b-2 border-primary' : 'text-slate-400 hover:text-primary/70'
            }`}
          >
            {tab}
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
            {activeTab === 0 && <BoothListTab />}
            {activeTab === 1 && <Placeholder message="부스 상세정보는 모집 완료 후 공개됩니다." icon={<Info className="w-12 h-12 text-primary-light mb-4" />} />}
            {activeTab === 2 && <Placeholder message="부스 배치도는 행사 2달 전 공개됩니다." icon={<Map className="w-12 h-12 text-primary-light mb-4" />} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Board>
  );
}

function BoothListTab() {
  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-6 rounded-lg text-center font-bold text-primary mb-8">
        부스 모집이 현재 진행 중입니다! (4/1 ~ 4/30)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50/50">
            <div className="w-12 h-12 bg-primary-light/50 flex items-center justify-center rounded-md text-primary font-bold">
              {String.fromCharCode(64 + i)}1
            </div>
            <div>
              <h4 className="font-bold text-slate-700">참가 부스명 {i}</h4>
              <p className="text-sm text-slate-500">서클 대표자</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-4 p-4 border border-dashed border-primary-light rounded-lg bg-white justify-center text-primary-light">
          모집 대기 중...
        </div>
      </div>
    </div>
  );
}

function Placeholder({ message, icon }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
      {icon}
      <p className="text-lg">{message}</p>
    </div>
  );
}
