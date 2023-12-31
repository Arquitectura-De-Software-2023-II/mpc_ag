/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
interface msRoute {
  route: string
  port: number
  deployed?: string
}
const localhost = 'http://localhost'
const api_news = 'https://newsapi.org/v2/everything'
const env = process.env

/*
CALENDAR_MS_PORT=
CALENDAR_MS_ROUTE=
CLINIC_HISTORY_MS_PORT=
CLINIC_HISTORY_MS_ROUTE=
SERVICE_INFO_MS_PORT=
SERVICE_INFO_MS_ROUTE=
USERS_MS_PORT=
USERS_MS_ROUTE=
*/

const calendar_ms: msRoute = {
  route: env.CALENDAR_MS_ROUTE ?? localhost,
  port: parseInt(env.CALENDAR_MS_PORT ?? '3001')
}
const clinicHistory_ms: msRoute = {
  route: env.CLINIC_HISTORY_MS_ROUTE ?? localhost,
  port: parseInt(env.CLINIC_HISTORY_MS_PORT ?? '3002')
}
const contact_ms: msRoute = {
  route: env.CONTACT_MS_ROUTE ?? localhost,
  port: parseInt(env.CONTACT_MS_PORT ?? '3003')
}
const users_ms: msRoute = {
  route: env.USERS_MS_ROUTE ?? localhost,
  port: parseInt(env.USERS_MS_PORT ?? '3004'),
  deployed: 'https://mpc-users-ms.onrender.com'
}

const news_ms = {
  route: env.NEWS_MS_ROUTE ?? api_news,
  key: env.NEWS_API_KEY ?? ''
}

const msRoutes = { calendar_ms, clinicHistory_ms, contact_ms, users_ms, news_ms }
export default msRoutes
