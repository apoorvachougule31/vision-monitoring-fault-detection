import { AlertTriangle, X } from "lucide-react";

interface ErrorModalProps {
  errorCode: string;
  errorDescription: string;
  camera: string;
  zone: string;
  onClose: () => void;
}

export function ErrorModal({ errorCode, errorDescription, camera, zone, onClose }: ErrorModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[12px] p-6 max-w-md w-full mx-4" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E24B4A]/10 rounded flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#E24B4A]" />
            </div>
            <div>
              <h3 className="text-[18px]">Error detected</h3>
              <div className="text-[13px] text-muted-foreground">New fault detected in system</div>
            </div>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-5">
          <div>
            <div className="text-[12px] text-muted-foreground mb-1">Error code</div>
            <div className="text-[16px] text-[#E24B4A]">{errorCode}</div>
          </div>
          <div>
            <div className="text-[12px] text-muted-foreground mb-1">Description</div>
            <div className="text-[14px]">{errorDescription}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[12px] text-muted-foreground mb-1">Camera</div>
              <div className="text-[14px]">{camera}</div>
            </div>
            <div>
              <div className="text-[12px] text-muted-foreground mb-1">Zone</div>
              <div className="text-[14px]">{zone}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-primary text-white px-4 h-9 rounded text-[14px]"
          >
            Acknowledge
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 h-9 rounded text-[14px]"
            style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
