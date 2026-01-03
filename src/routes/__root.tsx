import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';

const RootLayout = () => (
  <ThemeProvider defaultTheme="system" storageKey="theme">
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <ModeToggle />
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </ThemeProvider>
);

export const Route = createRootRoute({ component: RootLayout });
