export default class ApiUrlService {
    apiRootUrl
    apiCurrentVersion
    apiFullRootUrl

    constructor(data) {
        this.apiRootUrl        = data.apiRootUrl
        this.apiCurrentVersion = data.apiCurrentVersion ?? ''
        this.apiFullRootUrl    = this.apiRootUrl + this.apiCurrentVersion
    }

    /**
     * build url params by object, can also join to an existing url params string
     * @param params
     * @param encodedUrlParameters
     */
    buildUrlParams(params, encodedUrlParameters) {
        if (Object.keys(params).length > 0) {
            if (encodedUrlParameters) {
                return `${encodedUrlParameters}&${ApiUrlService.encodeQueryData(params)}`
            }
            return `?${ApiUrlService.encodeQueryData(params)}`
        }
        if (encodedUrlParameters) {
            return encodedUrlParameters
        }
        return ''
    }

    /**
     * @private
     * @param data
     * @returns {string}
     */
    static encodeQueryData(data) {
        const returnValue = []
        Object.keys(data).forEach((key) => {
            if (data[key]) {
                returnValue.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            }
        })
        return returnValue.join('&')
    }
}
