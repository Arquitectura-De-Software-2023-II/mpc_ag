/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from 'express'
const router = express.Router()

// Test Route
router.get('/ping', (_req, res) => {
  res.send('pong')
})

export const helloRoutes: Router = router
