import Board from '../components/Board';
import { CalendarDays, MapPin } from 'lucide-react';

export default function MainPage() {
  return (
    <Board footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-[#7c3aed] italic mb-6">
          몇 번이라도 프리즘!
        </h1>
        <p className="text-xl md:text-2xl text-black/50 tracking-widest mb-12 italic">
          킹 오브 프리즘 팬 온리전
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mb-16 w-full mx-auto justify-center">
          <div className="flex flex-col items-center justify-center gap-2 bg-[#bae6fd]/30 px-6 py-6 rounded-lg w-full sm:w-1/2">
            <CalendarDays className="text-[#7c3aed] w-10 h-10 mb-2" />
            <div className="text-sm text-[#7c3aed] font-bold tracking-widest">DATE</div>
            <div className="text-lg text-slate-700 font-bold">2026. 07. 04 (토)</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#bae6fd]/30 px-6 py-6 rounded-lg w-full sm:w-1/2">
            <MapPin className="text-[#7c3aed] w-10 h-10 mb-2" />
            <div className="text-sm text-[#7c3aed] font-bold tracking-widest">VENUE</div>
            <div className="text-lg text-slate-700 font-bold">추후 공개</div>
          </div>
        </div>

        <div className="w-full text-left">
          <h2 className="text-2xl font-bold text-[#7c3aed] mb-6 border-b border-[#bae6fd] pb-2 italic text-center">Schedule</h2>
          <div className="space-y-4">
            <ScheduleItem date="2026. 04. 01" title="부스 참가자 모집 시작" />
            <ScheduleItem date="2026. 05. 01" title="부스 배치도 공개" />
            <ScheduleItem date="2026. 05. 15" title="일반 입장권 TMM 판매 시작" />
            <ScheduleItem date="2026. 06. 15" title="행사 최종 안내 공지" />
            <ScheduleItem date="2026. 07. 04" title="행사 당일" highlight />
          </div>
        </div>
      </div>
    </Board>
  );
}

function ScheduleItem({ date, title, highlight }: { date: string, title: string, highlight?: boolean }) {
  return (
    <div className={`flex flex-row justify-between items-center py-4 border-b border-dashed ${highlight ? 'border-[#7c3aed] bg-[#7c3aed]/5 px-4 rounded-md' : 'border-slate-200'}`}>
      <div className={`font-bold tracking-widest ${highlight ? 'text-[#7c3aed]' : 'text-slate-500'}`}>{date}</div>
      <div className={`text-right ${highlight ? 'font-bold text-slate-800' : 'text-slate-600'}`}>{title}</div>
    </div>
  );
}
