import React, { Fragment } from 'react'
import { LoaderFn, Route } from '@tanstack/react-location'

type Module = { default: () => JSX.Element; loader: LoaderFn }

function getRoutes(ROUTES: { [key: string]: () => Promise<Module> }) {
  return Object.keys(ROUTES).reduce<Route[]>((routes, key) => {
    const module = ROUTES[key];
    const route: Route = {
      element: () => module().then((mod) => (mod?.default ? <mod.default /> : <></>)),
      loader: (...args) => module().then((mod) => mod?.loader?.(...args)),
    }

    const segments = key
      .replace(/..\/pages|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[([^\]]+)\]/g, ':$1')
      .split('/')
      .filter(Boolean)

    segments.reduce((parent, segment, index) => {
      const path = segment.replace(/index|\./g, '/')
      const root = index === 0
      const leaf = index === segments.length - 1 && segments.length > 1
      const node = !root && !leaf
      const insert = /^\w|\//.test(path) ? 'unshift' : 'push'

      if (root) {
        const dynamic = path.startsWith(':') || path === '*'
        if (dynamic) return parent

        const last = segments.length === 1
        if (last) {
          routes.push({ path, ...route })
          return parent
        }
      }

      if (root || node) {
        const current = root ? routes : parent.children
        const found = current?.find((route) => route.path === path)
        if (found) found.children ??= []
        else current?.[insert]({ path, children: [] })
        return found || (current?.[insert === 'unshift' ? 0 : current.length - 1] as Route)
      }

      if (leaf) {
        parent?.children?.[insert]({ path, ...route })
      }

      return parent
    }, {} as Route)

    return routes
  }, [])
};


// @ts-ignore
const PAGES = import.meta.glob('../pages/**/[a-z[]*.tsx');
// @ts-ignore
const layout = import.meta.glob('../pages/_layout.tsx', { eager: true });
const App = layout?.[('../pages/_layout.tsx')].default;

export default {
  pages: [
    {
      element: <App />,
      children: [
        ...getRoutes(PAGES),
        { path: '*', element: <div>Page does not exist</div> }
      ],
    }
  ]  
}
