import { InitialData, Profile, WINDOW_INITIAL_DATA_KEY } from '@/shared'
import { API_URL, HTML_KEY } from '@/server/constants'

type Args = {
  html: string
  profile?: Profile
}

export function applyInitialData({ html, profile }: Args): string {
  const initialData: InitialData = {
    profile,
    env: { API_URL },
  }

  return html.replace(
    HTML_KEY,
    `<script>window.${WINDOW_INITIAL_DATA_KEY} = ${JSON.stringify(initialData)}</script>` + HTML_KEY,
  )
}
