import { Activity, AlertTriangle, Camera, Video } from "lucide-react";

const metrics = [
  { label: "Active errors", value: "4", color: "text-[#E24B4A]", icon: AlertTriangle },
  { label: "Cameras active", value: "3/4", color: "text-[#EF9F27]", icon: Camera },
  { label: "Clips recorded today", value: "27", color: "text-foreground", icon: Video },
  { label: "System uptime", value: "99.2%", color: "text-[#639922]", icon: Activity },
];

const cameraZones = [
  { name: "Assembly Zone A", camera: "Camera 1", lastError: "Last error: 2h ago", status: "OK", statusColor: "bg-[#639922]" },
  { name: "Packaging Zone B", camera: "Camera 2", lastError: "Last error: 15m ago", status: "Warning", statusColor: "bg-[#EF9F27]" },
  { name: "Quality Check Zone", camera: "Camera 3", lastError: "No recent errors", status: "OK", statusColor: "bg-[#639922]" },
  { name: "Storage Zone C", camera: "Camera 4", lastError: "Last error: 4h ago", status: "Fault", statusColor: "bg-[#E24B4A]" },
];

const recentErrors = [
  { code: "E-401", description: "Motion detection timeout", camera: "Camera 1", zone: "Assembly Zone A", time: "2h ago" },
  { code: "W-202", description: "Low light condition detected", camera: "Camera 2", zone: "Packaging Zone B", time: "15m ago" },
  { code: "E-305", description: "Camera connection lost", camera: "Camera 4", zone: "Storage Zone C", time: "4h ago" },
  { code: "E-401", description: "Motion detection timeout", camera: "Camera 1", zone: "Assembly Zone A", time: "5h ago" },
];

export function DashboardTab() {
  return (
    <div className="p-5 space-y-5">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">{metric.label}</div>
            <div className={`text-[26px] leading-none ${metric.color} mb-1`}>{metric.value}</div>
            <div className="text-[12px] text-muted-foreground">Current status</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">Camera zone status</h3>
          <div className="space-y-3">
            {cameraZones.map((zone, i) => (
              <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: i < cameraZones.length - 1 ? "0.5px solid rgba(0,0,0,0.04)" : "none" }}>
                <div>
                  <div className="text-[14px]">{zone.name}</div>
                  <div className="text-[12px] text-muted-foreground">{zone.camera} • {zone.lastError}</div>
                </div>
                <span className={`${zone.statusColor} text-white px-3 py-1 rounded-full text-[12px]`}>
                  {zone.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">Recent errors</h3>
          <div className="space-y-3">
            {recentErrors.map((error, i) => (
              <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < recentErrors.length - 1 ? "0.5px solid rgba(0,0,0,0.04)" : "none" }}>
                <div className="w-8 h-8 bg-[#E24B4A]/10 rounded flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-[#E24B4A]" />
                </div>
                <div className="flex-1">
                  <div className="text-[14px]">{error.code}</div>
                  <div className="text-[12px] mb-1">{error.description}</div>
                  <div className="text-[12px] text-muted-foreground">{error.camera} • {error.zone}</div>
                </div>
                <button className="text-[12px] px-3 py-1 rounded" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
