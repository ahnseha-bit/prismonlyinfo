import React from 'react';
import Board from '../components/Board';
import { ExternalLink, Twitter, ShoppingCart, Printer } from 'lucide-react';

export default function LinksPage() {
  return (
    <Board title="LINKS" footer="DIGITAL ARCHIVE © 2026 몇 번이라도 프리즘!">
      <div className="space-y-12 text-left">
        <section>
          <h2 className="text-xl font-bold text-slate-700 italic mb-6 border-b border-primary-light pb-2">공식 채널</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LinkCard 
              icon={<Twitter className="w-8 h-8 text-blue-400" />}
              title="공식 X (Twitter)"
              desc="가장 빠른 행사 소식 업데이트"
              link="https://twitter.com/prism_only_event"
            />
            <LinkCard 
              icon={<ShoppingCart className="w-8 h-8 text-rose-400" />}
              title="TMM 예매처"
              desc="입장권 및 공식 굿즈 선입금"
              link="https://takemm.com"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-700 italic mb-6 border-b border-primary-light pb-2">협력사</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LinkCard 
              icon={<Printer className="w-8 h-8 text-slate-400" />}
              title="프린트매니아"
              desc="행사 전용 할인 혜택"
              link="#"
            />
            <LinkCard 
              icon={<Printer className="w-8 h-8 text-slate-400" />}
              title="태양출판사"
              desc="마감 연장 및 배송 지원"
              link="#"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-700 italic mb-6 border-b border-primary-light pb-2">홍보 배너</h2>
          <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-lg text-slate-500">
            <div className="w-64 h-20 bg-primary/10 flex items-center justify-center border border-primary-light mb-4">
              <span className="text-primary font-bold tracking-widest text-sm">PROMO BANNER</span>
            </div>
            <p className="text-sm text-center mb-4">배너 이미지 (200x50)</p>
            <div className="w-full max-w-md bg-white p-3 text-xs border border-slate-200 rounded text-slate-400 font-mono overflow-x-auto whitespace-nowrap">
              &lt;a href="https://prism-only.com"&gt;&lt;img src="banner.png" alt="몇 번이라도 프리즘!" /&gt;&lt;/a&gt;
            </div>
          </div>
        </section>
      </div>
    </Board>
  );
}

function LinkCard({ icon, title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-lg border border-slate-200 bg-white hover:border-primary-light hover:shadow-md transition-all group">
      <div className="p-3 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-2">
          {title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-sm text-slate-500 mt-1">{desc}</p>
      </div>
    </a>
  );
}
