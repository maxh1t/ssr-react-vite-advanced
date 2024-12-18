import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server'
import { Theme } from './constants'

export type Profile = {
  id: string
  name: string
  username: string
  email: string
}

export type InitialData = {
  profile?: Profile
  env: {
    API_URL: string
  }
}

export type AppProps = {
  theme?: Theme
  profile?: Profile
}

export type RenderArgs = {
  url: string
  app?: AppProps
  options?: RenderToPipeableStreamOptions
}

export type Render = (args: RenderArgs) => PipeableStream
