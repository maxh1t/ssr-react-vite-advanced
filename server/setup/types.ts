import { Application } from 'express'
import { renderHTML } from '@/server/renderHTML'

export type SetupArgs = {
  app: Application
  renderHTML: typeof renderHTML
}
