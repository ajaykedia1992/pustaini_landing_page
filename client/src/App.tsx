import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

// Detect base path for GitHub Pages deployment
// In dev or Manus hosting: base is "/"
// On GitHub Pages: base is "/pustaini_landing_page/"
const BASE_PATH = import.meta.env.BASE_URL || "/";

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/product/:id"} component={ProductDetail} />
      <Route path={"/cart"} component={Cart} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <WouterRouter base={BASE_PATH.replace(/\/$/, "")}>
              <AppRoutes />
            </WouterRouter>
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
