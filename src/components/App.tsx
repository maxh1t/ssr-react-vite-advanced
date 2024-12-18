import { Route, Routes } from 'react-router'
import { ROUTES } from '../constants'
import { Layout } from './Layout'
import { lazy } from 'react'
import Home from './Home'
import { ThemeProvider } from '../context/theme'
import { AppProps } from '@/shared'
import { ProfileProvider } from '@/client/context/profile'

const Posts = lazy(() => import('./Posts'))
const Todos = lazy(() => import('./Todos'))
const Albums = lazy(() => import('./Albums'))

export function App({ profile, theme }: AppProps) {
  return (
    <ThemeProvider initialTheme={theme}>
      <ProfileProvider initialProfile={profile}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.posts} element={<Posts />} />
            <Route path={ROUTES.albums} element={<Albums />} />
            <Route path={ROUTES.todos} element={<Todos />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </ThemeProvider>
  )
}
