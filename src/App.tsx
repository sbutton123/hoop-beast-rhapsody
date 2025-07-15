import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Tutorials from "./pages/Tutorials";
import Showcase from "./pages/Showcase";
import Programs from "./pages/Programs";
import Workouts from "./pages/Workouts";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="programs" element={<Programs />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
