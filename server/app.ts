import express from 'express'

import { PROD, APP_PORT } from './constants'
import { setupProd, setupDev } from './setup'
import { renderHTML } from '@/server/renderHTML'

export async function createServer() {
  const app = express()

  if (PROD) {
    await setupProd({ app, renderHTML })
  } else {
    await setupDev({ app, renderHTML })
  }

  app.listen(APP_PORT, () => {
    console.log(`http://localhost:${APP_PORT}`)
  })
}

createServer()
