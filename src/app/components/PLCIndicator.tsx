import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

export function PLCIndicator() {
  const [readActive, setReadActive] = useState(false);
  const [writeActive, setWriteActive] = useState(false);

  useEffect(() => {
    const readInterval = setInterval(() => {
      setReadActive(true);
      setTimeout(() => setReadActive(false), 150);
    }, 800);

    const writeInterval = setInterval(() => {
      setWriteActive(true);
      setTimeout(() => setWriteActive(false), 150);
    }, 1200);

    return () => {
      clearInterval(readInterval);
      clearInterval(writeInterval);
    };
  }, []);

  return (
    <div className="bg-white rounded px-3 py-2" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
      <div className="text-[11px] text-muted-foreground mb-1">PLC Communication</div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Circle className={`w-2 h-2 ${readActive ? "fill-[#639922] text-[#639922]" : "fill-gray-300 text-gray-300"} transition-colors duration-150`} />
          <span className="text-[11px]">Read</span>
        </div>
        <div className="flex items-center gap-1">
          <Circle className={`w-2 h-2 ${writeActive ? "fill-[#3b82f6] text-[#3b82f6]" : "fill-gray-300 text-gray-300"} transition-colors duration-150`} />
          <span className="text-[11px]">Write</span>
        </div>
      </div>
    </div>
  );
}
