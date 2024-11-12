import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface HexagonProps {
  children: ReactNode;
  className?: string;
}

const Hexagon = ({ children, className = "" }: HexagonProps) => {
  return (
    <div
      className={twJoin(
        "hexagon-clip size-24 lg:size-52 bg-white/20 my-4 flex items-center justify-center lg:hover:scale-110 hover:scale-150 transition-all duration-1000 ease-in-out",
        className
      )}
    >
      <div className="hexagon-clip size-[4.5em] lg:size-[198px] hover:bg-gradient-to-tr from-blue-300/50 to-violet-400/60  flex items-center justify-center text-xl font-bold transition-all duration-1000 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
// bg-gradient-to-tr from-blue-300/50 to-violet-400/60
