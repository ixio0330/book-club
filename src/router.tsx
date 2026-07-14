import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import App from './App';
import { MoneyBook } from './pages/MoneyBook';
import { DoItBook } from './pages/DoItBook';

// 1. Root Route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// 2. Index Route (Home)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

type SlideSearch = {
  slide: number;
};

// 3. MoneyBook Route
const moneyBookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/money',
  validateSearch: (search: Record<string, unknown>): SlideSearch => {
    return { slide: Number(search?.slide ?? 0) };
  },
  component: MoneyBook,
});

// 4. DoItBook Route
const doItBookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doit',
  validateSearch: (search: Record<string, unknown>): SlideSearch => {
    return { slide: Number(search?.slide ?? 0) };
  },
  component: DoItBook,
});

// 5. Route Tree
const routeTree = rootRoute.addChildren([indexRoute, moneyBookRoute, doItBookRoute]);

// 6. Router Instance
export const router = createRouter({ routeTree });

// 7. Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
