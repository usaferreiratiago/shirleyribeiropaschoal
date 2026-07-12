/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PacientesImport } from './routes/pacientes'
import { Route as ContatoImport } from './routes/contato'
import { Route as FuncionariosImport } from './routes/funcionarios'
import { Route as PortfolioImport } from './routes/portfolio'
import { Route as ServicosImport } from './routes/servicos'
import { Route as VideosImport } from './routes/videos'
import { Route as SobreImport } from './routes/sobre'

const rootRoute = rootRouteImport

const IndexRoute = IndexImport.update({ path: '/', getParentRoute: () => rootRoute } as any)
const PacientesRoute = PacientesImport.update({ path: '/pacientes', getParentRoute: () => rootRoute } as any)
const ContatoRoute = ContatoImport.update({ path: '/contato', getParentRoute: () => rootRoute } as any)
const FuncionariosRoute = FuncionariosImport.update({ path: '/funcionarios', getParentRoute: () => rootRoute } as any)
const PortfolioRoute = PortfolioImport.update({ path: '/portfolio', getParentRoute: () => rootRoute } as any)
const ServicosRoute = ServicosImport.update({ path: '/servicos', getParentRoute: () => rootRoute } as any)
const VideosRoute = VideosImport.update({ path: '/videos', getParentRoute: () => rootRoute } as any)
const SobreRoute = SobreImport.update({ path: '/sobre', getParentRoute: () => rootRoute } as any)


export const routeTree = rootRoute._addFileChildren({
  '/': IndexRoute,
  '/pacientes': PacientesRoute,
  '/contato': ContatoRoute,
  '/funcionarios': FuncionariosRoute,
  '/portfolio': PortfolioRoute,
  '/servicos': ServicosRoute,
  '/videos': VideosRoute,
  '/sobre': SobreRoute,
})