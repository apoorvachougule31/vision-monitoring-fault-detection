const machines = [
  {
    name: "Injection Mold 01",
    status: "Fault",
    statusColor: "bg-[#E24B4A]",
    type: "Injection molding machine",
    camera: "Camera 3",
    errorsToday: 4,
    errorsWeek: 12,
    lastError: "2h ago",
    plcAddress: "192.168.1.101",
  },
  {
    name: "CNC Machine 03",
    status: "OK",
    statusColor: "bg-[#639922]",
    type: "CNC milling center",
    camera: "Camera 5",
    errorsToday: 0,
    errorsWeek: 3,
    lastError: "4h ago",
    plcAddress: "192.168.1.103",
  },
  {
    name: "Assembly Line A",
    status: "Warning",
    statusColor: "bg-[#EF9F27]",
    type: "Assembly line controller",
    camera: "Camera 1",
    errorsToday: 1,
    errorsWeek: 5,
    lastError: "15m ago",
    plcAddress: "192.168.1.105",
  },
  {
    name: "Packaging Unit 02",
    status: "OK",
    statusColor: "bg-[#639922]",
    type: "Packaging automation",
    camera: "Camera 2",
    errorsToday: 0,
    errorsWeek: 1,
    lastError: "2d ago",
    plcAddress: "192.168.1.107",
  },
  {
    name: "Quality Check Station",
    status: "OK",
    statusColor: "bg-[#639922]",
    type: "Vision inspection system",
    camera: "Camera 4",
    errorsToday: 0,
    errorsWeek: 2,
    lastError: "1d ago",
    plcAddress: "192.168.1.109",
  },
  {
    name: "Conveyor System B",
    status: "OK",
    statusColor: "bg-[#639922]",
    type: "Material handling",
    camera: "Camera 6",
    errorsToday: 0,
    errorsWeek: 0,
    lastError: "5d ago",
    plcAddress: "192.168.1.111",
  },
];

export function MachinesTab() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-4">
        {machines.map((machine, i) => (
          <div key={i} className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
            <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <h3>{machine.name}</h3>
              <span className={`${machine.statusColor} text-white px-3 py-1 rounded-full text-[12px]`}>
                {machine.status}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Type</div>
                <div className="text-[14px]">{machine.type}</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Camera</div>
                <div className="text-[14px]">{machine.camera}</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Errors today</div>
                <div className="text-[14px]">{machine.errorsToday}</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Errors this week</div>
                <div className="text-[14px]">{machine.errorsWeek}</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Last error time</div>
                <div className="text-[14px]">{machine.lastError}</div>
              </div>
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">PLC address</div>
                <div className="text-[14px] font-mono">{machine.plcAddress}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
