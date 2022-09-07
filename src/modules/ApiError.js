export default class ApiError {
    config
    data
    headers
    request
    status
    statusText


    constructor(error) {
        this.config     = error.config
        this.data       = error.data
        this.headers    = error.headers
        this.request    = error.request
        this.status     = error.status
        this.statusText = error.statusText
    }

    static handleError(error) {
        if (error?.response) {
            return new ApiError(error.response)
        }
        return error
    }

    getErrorsList(errorData = this.data) {
        if (errorData.errors) {
            return ApiError.flattenErrors(errorData.errors)
        }

        return [errorData.message]
    }

    /**
     * @private
     * @param errors
     * @returns {*[]|*|*[]}
     */
    static flattenErrors(errors) {
        if (Array.isArray(errors)) {
            let flattenErrors = []

            errors.forEach((errorObject) => {
                flattenErrors = [...flattenErrors, ...ApiError.getMessages(errorObject)]
            })

            return flattenErrors
        }

        return ApiError.getMessages(errors)
    }

    /**
     * @private
     * @param error
     * @returns {*[]|*}
     */
    static getMessages(error) {
        if (error.messages) return error.messages

        return [error.message]
    }
}
