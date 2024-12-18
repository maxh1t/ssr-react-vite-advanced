import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './components/App'
import { INITIAL_DATA } from '@/client/constants'
import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <App profile={INITIAL_DATA?.profile} />
  </BrowserRouter>,
)
