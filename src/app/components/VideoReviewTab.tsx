import { Play } from "lucide-react";

const clips = [
  { filename: "2026-06-06_14-23-15_E401.mp4", machine: "Injection Mold 01", camera: "Camera 3", selected: true },
  { filename: "2026-06-06_12-10-33_E305.mp4", machine: "CNC Machine 03", camera: "Camera 5", selected: false },
  { filename: "2026-06-06_10-22-11_E401.mp4", machine: "Injection Mold 01", camera: "Camera 3", selected: false },
  { filename: "2026-06-06_08-44-12_E502.mp4", machine: "Assembly Line A", camera: "Camera 1", selected: false },
  { filename: "2026-06-06_07-30-28_W201.mp4", machine: "CNC Machine 03", camera: "Camera 5", selected: false },
];

export function VideoReviewTab() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="bg-[#1a1a1a] rounded-[12px] aspect-video flex flex-col items-center justify-center">
            <Play className="w-16 h-16 text-white/50" />
            <div className="text-white/70 text-[13px] mt-3">2026-06-06_14-23-15_E401.mp4</div>
          </div>

          <div className="bg-white rounded-[12px] p-4" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <div className="relative h-12 bg-gray-100 rounded mb-2">
              <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gray-200 rounded-l"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E24B4A]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 text-[11px] text-[#E24B4A]">Trigger point</div>
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground mb-3">
              <span>−30s pre-trigger</span>
              <span>00:00</span>
              <span>+30s post-trigger</span>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <h3 className="mb-4">Error details</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Machine</div>
                <div className="text-[14px]">Injection Mold 01</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Error code</div>
                <div className="text-[14px] text-[#E24B4A]">E-401</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Timestamp</div>
                <div className="text-[14px]">2026-06-06 14:23:15</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Camera</div>
                <div className="text-[14px]">Camera 3</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">File path</div>
                <div className="text-[14px] text-blue-600">/storage/clips/2026-06-06_14-23-15_E401.mp4</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Status</div>
                <div>
                  <span className="bg-[#E24B4A] text-white px-2 py-1 rounded text-[12px]">Unresolved</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="bg-primary text-white px-4 py-2 rounded text-[14px]">
                Mark reviewed
              </button>
              <button className="px-4 py-2 rounded text-[14px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="mb-3">Recorded clips</h3>
          {clips.map((clip, i) => (
            <div
              key={i}
              className={`p-3 rounded-[12px] cursor-pointer ${clip.selected ? "bg-blue-50" : "bg-white"}`}
              style={{ border: clip.selected ? "0.5px solid #3b82f6" : "0.5px solid rgba(0,0,0,0.08)" }}
            >
              <div className="text-[13px] mb-1">{clip.filename}</div>
              <div className="text-[12px] text-muted-foreground">{clip.machine}</div>
              <div className="text-[12px] text-muted-foreground">{clip.camera}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
