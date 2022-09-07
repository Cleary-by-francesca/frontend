import ApiError from "../../modules/ApiError.js"
import ApiUrlService from '../../modules/ApiUrlService'
import TokenStorage from "../../modules/TokenStorage.js"

export default class Auth extends ApiUrlService {


    constructor(data) {
        super(data)
        this.endpoint = `${this.apiFullRootUrl}/auth`
    }

    async login(email, password) {
        try {
            return await http.post(`${this.endpoint}/login`, {email, password})
        } catch (error) {
            throw ApiError.handleError(error)
        }
    }

    async register(email, name, password) {
        try {
            return await http.post(`${this.endpoint}/register`, {email, name, password})
        } catch (error) {
            throw ApiError.handleError(error)
        }
    }

    async logout() {
        try {
            const email        = TokenStorage.getUserEmail()
            const refreshToken = TokenStorage.getRefreshToken()


            const response = await http.post(`${this.endpoint}/logout`, {
                email,
                refreshToken,
            }, TokenStorage.getAuthentication())

            TokenStorage.clearUserData()
            return response
        } catch (error) {
            throw ApiError.handleError(error)
        }
    }

    async refreshToken() {
        try {
            return await http.post(`${this.endpoint}/refresh-token`, {
                refreshToken: TokenStorage.getRefreshToken(),
                email:        TokenStorage.getUserEmail(),
            })
        } catch (error) {
            throw ApiError.handleError(error)
        }
    }
}
