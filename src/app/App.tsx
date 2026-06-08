import * as Tabs from "@radix-ui/react-tabs";
import { LayoutGrid, TriangleAlert, Play, Settings, Bell, Settings as SettingsIcon, Home, Eye } from "lucide-react";
import { HomeTab } from "./components/HomeTab";
import { DashboardTab } from "./components/DashboardTab";
import { ErrorLogTab } from "./components/ErrorLogTab";
import { VideoReviewTab } from "./components/VideoReviewTab";
import { SettingsTab } from "./components/SettingsTab";
import { ErrorModal } from "./components/ErrorModal";
import { PLCIndicator } from "./components/PLCIndicator";
import { useState, useEffect } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setShowErrorModal(true);
    }, 5000);

    return () => clearTimeout(errorTimer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation Bar */}
      <div
        className="h-[52px] bg-white flex items-center justify-between px-5"
        style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center gap-3">
          <Eye className="w-6 h-6 text-[#3b82f6]" />
          <div>
            <div className="text-[15px] leading-none" style={{ fontWeight: 500 }}>SMART EYE</div>
            <div className="text-[10px] text-muted-foreground">v2.1.4</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <PLCIndicator />
          <div className="text-right">
            <div className="text-[13px] text-foreground">{formatTime(currentTime)}</div>
            <div className="text-[11px] text-muted-foreground">{formatDate(currentTime)}</div>
          </div>
          <div className="flex items-center gap-2 bg-[#639922]/10 text-[#639922] px-3 py-1 rounded-full">
            <span className="text-[13px]" style={{ fontWeight: 500 }}>System Active</span>
          </div>
          <Bell className="w-5 h-5 text-muted-foreground cursor-pointer" />
          <SettingsIcon className="w-5 h-5 text-muted-foreground cursor-pointer" />
          <span className="text-[14px]">Admin</span>
          <div className="w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <Tabs.Root defaultValue="home" className="flex-1 flex flex-col">
        <Tabs.List
          className="flex gap-0 bg-white px-5"
          style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
        >
          <Tabs.Trigger
            value="home"
            className="flex items-center gap-2 px-[18px] py-3 text-[14px] data-[state=active]:border-b-2 data-[state=active]:border-foreground -mb-[0.5px] text-muted-foreground data-[state=active]:text-foreground"
          >
            <Home className="w-4 h-4" />
            Home
          </Tabs.Trigger>
          <Tabs.Trigger
            value="dashboard"
            className="flex items-center gap-2 px-[18px] py-3 text-[14px] data-[state=active]:border-b-2 data-[state=active]:border-foreground -mb-[0.5px] text-muted-foreground data-[state=active]:text-foreground"
          >
            <LayoutGrid className="w-4 h-4" />
            Dashboard
          </Tabs.Trigger>
          <Tabs.Trigger
            value="error-log"
            className="flex items-center gap-2 px-[18px] py-3 text-[14px] data-[state=active]:border-b-2 data-[state=active]:border-foreground -mb-[0.5px] text-muted-foreground data-[state=active]:text-foreground"
          >
            <TriangleAlert className="w-4 h-4" />
            Error log
          </Tabs.Trigger>
          <Tabs.Trigger
            value="video-review"
            className="flex items-center gap-2 px-[18px] py-3 text-[14px] data-[state=active]:border-b-2 data-[state=active]:border-foreground -mb-[0.5px] text-muted-foreground data-[state=active]:text-foreground"
          >
            <Play className="w-4 h-4" />
            Video review
          </Tabs.Trigger>
          <Tabs.Trigger
            value="settings"
            className="flex items-center gap-2 px-[18px] py-3 text-[14px] data-[state=active]:border-b-2 data-[state=active]:border-foreground -mb-[0.5px] text-muted-foreground data-[state=active]:text-foreground"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Tabs.Trigger>
        </Tabs.List>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto">
          <Tabs.Content value="home">
            <HomeTab />
          </Tabs.Content>
          <Tabs.Content value="dashboard">
            <DashboardTab />
          </Tabs.Content>
          <Tabs.Content value="error-log">
            <ErrorLogTab />
          </Tabs.Content>
          <Tabs.Content value="video-review">
            <VideoReviewTab />
          </Tabs.Content>
          <Tabs.Content value="settings">
            <SettingsTab />
          </Tabs.Content>
        </div>
      </Tabs.Root>

      {showErrorModal && (
        <ErrorModal
          errorCode="E-401"
          errorDescription="Motion detection timeout"
          camera="Camera 1"
          zone="Assembly Zone A"
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </div>
  );
}