import { Search, ChevronDown } from "lucide-react";

const errors = [
  { id: 1, timestamp: "2026-06-06 14:23:15", machine: "Injection Mold 01", code: "E-401", codeType: "critical", camera: "Camera 3", duration: "45s", status: "Unresolved" },
  { id: 2, timestamp: "2026-06-06 16:45:22", machine: "Assembly Line A", code: "W-202", codeType: "warning", camera: "Camera 1", duration: "12s", status: "Reviewed" },
  { id: 3, timestamp: "2026-06-06 12:10:33", machine: "CNC Machine 03", code: "E-305", codeType: "critical", camera: "Camera 5", duration: "1m 23s", status: "Unresolved" },
  { id: 4, timestamp: "2026-06-06 11:05:44", machine: "Packaging Unit 02", code: "I-101", codeType: "info", camera: "Camera 2", duration: "8s", status: "Reviewed" },
  { id: 5, timestamp: "2026-06-06 10:22:11", machine: "Injection Mold 01", code: "E-401", codeType: "critical", camera: "Camera 3", duration: "52s", status: "Resolved" },
  { id: 6, timestamp: "2026-06-06 09:15:55", machine: "Quality Check Station", code: "W-203", codeType: "warning", camera: "Camera 4", duration: "19s", status: "Reviewed" },
  { id: 7, timestamp: "2026-06-06 08:44:12", machine: "Assembly Line A", code: "E-502", codeType: "critical", camera: "Camera 1", duration: "2m 15s", status: "Resolved" },
  { id: 8, timestamp: "2026-06-06 07:30:28", machine: "CNC Machine 03", code: "W-201", codeType: "warning", camera: "Camera 5", duration: "14s", status: "Reviewed" },
];

const getCodeColor = (type: string) => {
  switch (type) {
    case "critical": return "bg-[#E24B4A] text-white";
    case "warning": return "bg-[#EF9F27] text-white";
    case "info": return "bg-blue-500 text-white";
    default: return "bg-gray-400 text-white";
  }
};

export function ErrorLogTab() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
        <div className="flex gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search errors..."
              className="w-full h-9 pl-10 pr-3 bg-white rounded"
              style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
            />
          </div>
          <select className="h-9 px-3 bg-white rounded min-w-[140px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
            <option>All machines</option>
            <option>Injection Mold 01</option>
            <option>CNC Machine 03</option>
          </select>
          <select className="h-9 px-3 bg-white rounded min-w-[140px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
            <option>All error types</option>
            <option>Critical</option>
            <option>Warning</option>
          </select>
          <select className="h-9 px-3 bg-white rounded min-w-[140px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <select className="h-9 px-3 bg-white rounded min-w-[140px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
            <option>All statuses</option>
            <option>Unresolved</option>
            <option>Reviewed</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-50" style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">#</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Timestamp</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Machine</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Error code</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Camera</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Duration</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Status</th>
              <th className="text-left px-3 py-2 text-[12px] text-muted-foreground">Clip</th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, i) => (
              <tr key={error.id} style={{ borderBottom: i < errors.length - 1 ? "0.5px solid rgba(0,0,0,0.04)" : "none" }}>
                <td className="px-3 py-3 text-[13px]">{error.id}</td>
                <td className="px-3 py-3 text-[13px]">{error.timestamp}</td>
                <td className="px-3 py-3 text-[13px]">{error.machine}</td>
                <td className="px-3 py-3">
                  <span className={`px-2 py-1 rounded text-[12px] ${getCodeColor(error.codeType)}`}>
                    {error.code}
                  </span>
                </td>
                <td className="px-3 py-3 text-[13px]">{error.camera}</td>
                <td className="px-3 py-3 text-[13px]">{error.duration}</td>
                <td className="px-3 py-3 text-[13px]">{error.status}</td>
                <td className="px-3 py-3">
                  <button className="text-[12px] px-3 py-1 rounded" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                    Play
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
