import Board from '../components/Board';
import { CalendarDays, MapPin } from 'lucide-react';

export default function MainPage() {
  return (
    <div className="w-full flex justify-center py-40 px-4 md:px-10">
      <Board footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-primary italic mb-6">
            몇 번이라도 프리즘!
          </h1>
          <p className="text-xl md:text-2xl text-black/50 tracking-widest mb-12 italic">
            킹 오브 프리즘 팬 온리전
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-16 w-full max-w-2xl mx-auto justify-center">
            <div className="flex items-center gap-4 bg-[#bae6fd]/30 px-6 py-4 rounded-lg">
              <CalendarDays className="text-[#7c3aed] w-8 h-8" />
              <div className="text-left">
                <div className="text-sm text-[#7c3aed] font-bold tracking-widest">DATE</div>
                <div className="text-lg text-slate-700">2026년 7월 4일 (토)</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#bae6fd]/30 px-6 py-4 rounded-lg">
              <MapPin className="text-[#7c3aed] w-8 h-8" />
              <div className="text-left">
                <div className="text-sm text-[#7c3aed] font-bold tracking-widest">VENUE</div>
                <div className="text-lg text-slate-700">추후 공개</div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-[#7c3aed] mb-6 border-b border-[#bae6fd] pb-2 italic">Schedule</h2>
            <div className="space-y-6">
              <ScheduleItem date="2026.04.01" title="부스 참가자 모집 시작" />
              <ScheduleItem date="2026.05.01" title="부스 배치도 공개" />
              <ScheduleItem date="2026.05.15" title="일반 입장권 TMM 판매 시작" />
              <ScheduleItem date="2026.06.15" title="행사 최종 안내 공지" />
              <ScheduleItem date="2026.07.04" title="행사 당일" highlight />
            </div>
          </div>
        </div>
      </Board>
    </div>
  );
}

function ScheduleItem({ date, title, highlight }: { date: string, title: string, highlight?: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center ${highlight ? 'bg-[#7c3aed]/10 -mx-4 px-4 py-3 rounded-lg border-l-4 border-[#7c3aed]' : ''}`}>
      <div className="font-bold text-[#7c3aed] whitespace-nowrap tracking-wide">{date}</div>
      <div className={`${highlight ? 'font-bold text-slate-800' : 'text-slate-600'}`}>{title}</div>
    </div>
  );
}
