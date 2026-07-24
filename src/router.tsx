// import { QueryClient } from "@tanstack/react-query";
// import { createRouter } from "@tanstack/react-router";
// import { routeTree } from "./routeTree.gen";

// export const getRouter = () => {
//   const queryClient = new QueryClient();

//   return createRouter({
//     routeTree,
//     context: {
//       queryClient,
//     },
//     scrollRestoration: true,
//     defaultPreloadStaleTime: 0,
//   });
// };

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: ReturnType<typeof getRouter>;
//   }
// }

import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource-variable/inter/index.css";

export function getRouter() {
  const queryClient = new QueryClient();

  return createRouter({
    routeTree,
    context: {
      queryClient,
    },
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
