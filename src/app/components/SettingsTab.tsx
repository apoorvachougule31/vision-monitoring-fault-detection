import { useState } from "react";

export function SettingsTab() {
  const [connectionType, setConnectionType] = useState("ethernet");

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">Camera settings</h3>
          <div className="space-y-3">
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Connection type</label>
              <select
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
                value={connectionType}
                onChange={(e) => setConnectionType(e.target.value)}
              >
                <option value="ethernet">Ethernet</option>
                <option value="usb">USB</option>
              </select>
            </div>

            {connectionType === "ethernet" ? (
              <div>
                <label className="text-[12px] text-muted-foreground block mb-1">IP address</label>
                <input
                  type="text"
                  placeholder="192.168.1.201"
                  className="w-full h-9 px-3 bg-white rounded text-[14px]"
                  style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
                />
              </div>
            ) : (
              <div>
                <label className="text-[12px] text-muted-foreground block mb-1">Port number</label>
                <input
                  type="text"
                  placeholder="USB3.0-1"
                  className="w-full h-9 px-3 bg-white rounded text-[14px]"
                  style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
                />
              </div>
            )}

            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Camera name</label>
              <input
                type="text"
                placeholder="Camera 1"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>

            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Zone assignment</label>
              <input
                type="text"
                placeholder="Assembly Zone A"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>

            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Fault detection type</label>
              <select className="w-full h-9 px-3 bg-white rounded text-[14px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                <option>Rising edge triggered</option>
                <option>Falling edge triggered</option>
              </select>
            </div>

            <button className="bg-primary text-white px-4 h-9 rounded text-[14px] w-full mt-2">
              Save camera settings
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">PLC connection</h3>
          <div className="space-y-3">
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Protocol</label>
              <select className="w-full h-9 px-3 bg-white rounded text-[14px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                <option>Modbus TCP</option>
                <option>EtherNet/IP</option>
                <option>OPC UA</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">PLC IP address</label>
              <input
                type="text"
                defaultValue="192.168.1.100"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Port</label>
              <input
                type="text"
                defaultValue="502"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Poll interval (seconds)</label>
              <input
                type="text"
                defaultValue="1"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <button className="bg-primary text-white px-4 h-9 rounded text-[14px] w-full mt-2">
              Save and reconnect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">Recording settings</h3>
          <div className="space-y-3">
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Pre-trigger buffer (seconds)</label>
              <input
                type="text"
                defaultValue="30"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Post-trigger recording (seconds)</label>
              <input
                type="text"
                defaultValue="30"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Video format</label>
              <select className="w-full h-9 px-3 bg-white rounded text-[14px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                <option>MP4 (H.264)</option>
                <option>AVI</option>
                <option>MKV</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Storage root path</label>
              <input
                type="text"
                defaultValue="/storage/clips"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Max disk usage (GB)</label>
              <input
                type="text"
                defaultValue="500"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <button className="bg-primary text-white px-4 h-9 rounded text-[14px] w-full mt-2">
              Save
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-5" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h3 className="mb-4">Alert and notification</h3>
          <div className="space-y-3">
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Email address</label>
              <input
                type="email"
                placeholder="admin@factory.com"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Alert severity</label>
              <select className="w-full h-9 px-3 bg-white rounded text-[14px]" style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}>
                <option>Critical only</option>
                <option>Critical and warnings</option>
                <option>All events</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Auto-refresh interval (seconds)</label>
              <input
                type="text"
                defaultValue="5"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <div>
              <label className="text-[12px] text-muted-foreground block mb-1">Disk warning threshold (%)</label>
              <input
                type="text"
                defaultValue="85"
                className="w-full h-9 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
              />
            </div>
            <button className="bg-primary text-white px-4 h-9 rounded text-[14px] w-full mt-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
