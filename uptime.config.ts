import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'Uptime Status Page',
  links: [
    { link: 'https://github.com/minhtan143', label: 'GitHub' },
    { link: 'mailto:minhtantanhiep@gmail.com', label: 'Email Me' },
    { link: 'https://minhtanit.com/', label: 'Portfolio', highlight: true },
  ],
  group: {
    '🌐 Public': ['portfolio', 'hello_world'],
    '🔐 Private': [],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'portfolio',
      name: 'My Portfolio',
      method: 'GET',
      target: 'https://minhtanit.com',
      // tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://minhtanit.com',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // body: 'Hello, world!',
      responseKeyword: 'Tan Pham | Portfolio',
      // responseForbiddenKeyword: 'bad gateway',
      // checkProxy: 'https://xxx.example.com OR worker://weur',
      // checkProxyFallback: true,
    },
    {
      id: 'hello_world',
      name: 'Hello',
      method: 'GET',
      target: 'https://hello.minhtanit.com',
      // tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://hello.minhtanit.com',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // body: 'Hello, world!',
      responseKeyword: 'Hello World',
      // responseForbiddenKeyword: 'bad gateway',
      // checkProxy: 'https://xxx.example.com OR worker://weur',
      // checkProxyFallback: true,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { maintenances, pageConfig, workerConfig }
