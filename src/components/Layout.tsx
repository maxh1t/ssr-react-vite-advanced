import { Link, Outlet } from 'react-router'
import { Suspense } from 'react'
import { useThemeContext } from '@/client/context/theme'
import { ROUTES } from '@/client/constants'
import { Theme } from '@/shared'
import { useProfileContext } from '@/client/context/profile'

export function Layout() {
  const { theme, setTheme } = useThemeContext()
  const { profile } = useProfileContext()

  return (
    <div className='layout'>
      <nav>
        <div>
          <Link to={ROUTES.home}>Home</Link>
          <Link to={ROUTES.posts}>Posts</Link>
          <Link to={ROUTES.albums}>Albums</Link>
          <Link to={ROUTES.todos}>Todos</Link>
        </div>
        <div className='settings'>
          <div>{profile?.email}</div>
          <select value={theme} onChange={(event) => setTheme(event.target.value as Theme)}>
            <option value={Theme.System}>System</option>
            <option value={Theme.Light}>Light</option>
            <option value={Theme.Dark}>Dark</option>
          </select>
        </div>
      </nav>
      <main>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
