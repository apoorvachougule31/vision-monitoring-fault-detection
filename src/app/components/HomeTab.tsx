import { Camera, Circle } from "lucide-react";

const cameras = [
  { id: 1, name: "Camera 1", type: "Ethernet", zone: "Assembly Zone A", ip: "192.168.1.201", status: "online" },
  { id: 2, name: "Camera 2", type: "USB", zone: "Packaging Zone B", port: "USB3.0-1", status: "online" },
  { id: 3, name: "Camera 3", type: "Ethernet", zone: "Quality Check Zone", ip: "192.168.1.203", status: "online" },
  { id: 4, name: "Camera 4", type: "Ethernet", zone: "Storage Zone C", ip: "192.168.1.204", status: "offline" },
];

export function HomeTab() {
  return (
    <div className="p-5">
      <h2 className="mb-5">Live camera feed</h2>
      <div className="grid grid-cols-2 gap-4">
        {cameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-[12px] overflow-hidden" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center relative">
              {camera.status === "online" ? (
                <div className="text-white/50 flex flex-col items-center">
                  <Camera className="w-16 h-16 mb-2" />
                  <span className="text-[13px]">Live feed</span>
                </div>
              ) : (
                <div className="text-white/50 flex flex-col items-center">
                  <Camera className="w-16 h-16 mb-2" />
                  <span className="text-[13px]">Camera offline</span>
                </div>
              )}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 px-2 py-1 rounded">
                <Circle className={`w-2 h-2 fill-current ${camera.status === "online" ? "text-[#639922]" : "text-[#E24B4A]"}`} />
                <span className="text-white text-[12px]">{camera.status === "online" ? "Live" : "Offline"}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-3">{camera.name}</h3>
              <div className="grid grid-cols-2 gap-3 text-[13px]">
                <div>
                  <div className="text-[11px] text-muted-foreground mb-1">Connection type</div>
                  <div>{camera.type}</div>
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground mb-1">Zone</div>
                  <div>{camera.zone}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[11px] text-muted-foreground mb-1">
                    {camera.type === "Ethernet" ? "IP Address" : "Port"}
                  </div>
                  <div className="font-mono text-[12px]">
                    {camera.type === "Ethernet" ? camera.ip : camera.port}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
