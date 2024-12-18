import { PropsWithChildren, useState } from 'react'

import { ProfileContext } from './context'
import { Profile } from '@/shared'

type Props = PropsWithChildren & {
  initialProfile?: Profile
}

export function Provider({ children, initialProfile }: Props) {
  const [profile, setProfile] = useState<Profile | undefined>(initialProfile)

  return <ProfileContext value={{ profile, setProfile }}>{children}</ProfileContext>
}
