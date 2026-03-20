import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { FoodPage } from '@/pages/FoodPage'
import { RewardsPage } from '@/pages/RewardsPage'
import { AppPage } from '@/pages/AppPage'
import { DealsPage } from '@/pages/DealsPage'
import { StoresPage } from '@/pages/StoresPage'
import { AdultPage } from '@/pages/AdultPage'
import { CategoryDetailPage } from '@/pages/CategoryDetailPage'

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const foodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/food',
  component: FoodPage,
})

const rewardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rewards',
  component: RewardsPage,
})

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/app',
  component: AppPage,
})

const dealsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/deals',
  component: DealsPage,
})

const storesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stores',
  component: StoresPage,
})

const adultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/21-plus',
  component: AdultPage,
})

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$slug',
  component: CategoryDetailPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  foodRoute,
  rewardsRoute,
  appRoute,
  dealsRoute,
  storesRoute,
  adultRoute,
  categoryRoute,
])

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
