import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfiniteWatchProvider, useInfiniteWatch } from "@infinitewatch/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ElevenLabsAgent from "./components/ElevenLabsAgent";
import './i18n';

const queryClient = new QueryClient();
const infiniteWatchOrgId = import.meta.env.VITE_INFINITEWATCH_ORG_ID?.trim();

if (!infiniteWatchOrgId) {
  console.error("[InfiniteWatch] Missing VITE_INFINITEWATCH_ORG_ID");
}

function AppContent() {
  useGeolocation(); // Auto-detect language based on location
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function InfiniteWatchDiagnostics() {
  const { getSessionInfo, isBlocked } = useInfiniteWatch();

  useEffect(() => {
    const id = window.setTimeout(() => {
      const info = getSessionInfo();
      const blocked = isBlocked();
      console.log("[InfiniteWatch] session info:", info);
      console.log("[InfiniteWatch] blocked:", blocked);
      (window as any).__iw = { info, blocked };
    }, 2000);

    return () => window.clearTimeout(id);
  }, [getSessionInfo, isBlocked]);

  return null;
}

function AppShell() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
        <ElevenLabsAgent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

const App = () => {
  const [isRecordingReady, setIsRecordingReady] = useState(
    typeof window !== "undefined" && document.readyState === "complete",
  );

  useEffect(() => {
    if (isRecordingReady) {
      return;
    }

    const onLoad = () => {
      // Allow one extra frame so CSS/layout settles before first snapshot.
      window.setTimeout(() => setIsRecordingReady(true), 200);
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [isRecordingReady]);

  if (!isRecordingReady) {
    return <AppShell />;
  }

  return (
    <InfiniteWatchProvider
      organizationId={infiniteWatchOrgId}
      debug={true}
      endpointConfig=""
      defaultSamplingPercent={100}
      inlineStylesheet={true}
    >
      <InfiniteWatchDiagnostics />
      <AppShell />
    </InfiniteWatchProvider>
  );
};

export default App;
