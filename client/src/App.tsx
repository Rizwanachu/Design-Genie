import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ScrollToTop } from "@/components/ScrollToTop";

const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Contact = lazy(() => import("@/pages/Contact"));
const PoliciesAndServices = lazy(() => import("@/pages/PoliciesAndServices"));
const RoomDetail = lazy(() => import("@/pages/RoomDetail"));

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background" aria-label="Loading page" />
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/policies" component={PoliciesAndServices} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/rooms/:slug" component={RoomDetail} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
