import { motion } from "motion/react";

interface BoardProps {
  title?: string;
  children: React.ReactNode;
  footer?: string;
}

export default function Board({ title, children, footer }: BoardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto my-8"
    >
      <div className="shadow-frame">
        <div className="outer-holo-line">
          <div className="white-spacer bg-white p-[2px]">
            <div className="inner-holo-line">
              <div className="main-board">
                {title && <h1 className="title-text">{title}</h1>}
                <div className="content-text text-left">
                  {children}
                </div>
                {footer && (
                  <>
                    <div className="line-accent"></div>
                    <div className="footer-text mt-8 text-center">{footer}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
