import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import { PokemonListPage } from "../features/pokemon/pages/PokemonListPage";

const rootRoute = createRootRoute({
  component: () => <div><Outlet /></div>,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PokemonListPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
});