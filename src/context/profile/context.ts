import { createContext, useContext } from 'react'
import { ProfileContextState } from './types'

export const ProfileContext = createContext<ProfileContextState>({
  setProfile: () => null,
})

export const useProfileContext = () => useContext(ProfileContext)
