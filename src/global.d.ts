import { WINDOW_INITIAL_DATA_KEY, InitialData } from '@/shared'

export {}

declare global {
  interface Window {
    [WINDOW_INITIAL_DATA_KEY]?: InitialData
  }
}
