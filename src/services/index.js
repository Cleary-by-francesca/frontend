import Auth from './Auth/index.js'

const isProductionEnv = import.meta.env.MODE === 'production'

const apiData = {
    apiRootUrl:        isProductionEnv ? 'https://shifterapi.vercel.app/' : 'http://localhost:3000/',
    apiCurrentVersion: 'v1',
}

export const authEndpoint = new Auth(apiData)
