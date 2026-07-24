import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Fontes do Projeto
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource-variable/inter/index.css";

/**
 * Instância única do QueryClient
 */
export const queryClient = new QueryClient();

/**
 * Instância única do Router
 */
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

/**
 * Registro de tipos do TanStack Router
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
