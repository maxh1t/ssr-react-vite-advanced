import { Profile } from '@/shared'

export type ProfileContextState = {
  profile?: Profile
  setProfile: (profile?: Profile) => void
}
