import {authEndpoint} from "../services"


export default class TokenStorage {
	static accessToken = ''

	static LOCAL_STORAGE_TOKEN = 'token'

	static LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token'

	static LOCAL_USER_EMAIL = 'user_email'

	static LOCAL_USER_NAME = 'user_name'

	static LOCAL_USER_ID = 'user_id'

	static LOCAL_PUBLIC_ID = 'public_id'


	static isAuthenticated() {
		return !!TokenStorage.getRefreshToken()
	}

	static hasRefreshToken() {
		return this.getRefreshToken() !== null
	}

	static getAuthentication() {
		return {headers: {Authorization: `Bearer ${this.accessToken}`}}
	}

	static async getAuthenticationObject() {
		return {Authorization: `Bearer ${this.accessToken}`}
	}

	static async getNewToken() {
		if (TokenStorage.getRefreshToken()) {
			const response = await authEndpoint.refreshToken()
			TokenStorage.storeToken(response.data.accessToken)
			TokenStorage.storeRefreshToken(response.data.refreshToken)
			return response.data.accessToken
		}
	}

	static storeUserData(data) {
		TokenStorage.storeToken(data.token.accessToken)
		TokenStorage.storeRefreshToken(data.token.refreshToken)
		TokenStorage.storeUserEmail(data.user.email)
		TokenStorage.storeUserName(data.user.name)
		TokenStorage.storeUserId(data.user.id)
		TokenStorage.storePublicId(data.user.publicId)
	}

	static clearUserData() {
		localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN)
		localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN)
		localStorage.removeItem(TokenStorage.LOCAL_USER_EMAIL)
		localStorage.removeItem(TokenStorage.LOCAL_USER_NAME)
		localStorage.removeItem(TokenStorage.LOCAL_USER_ID)
		localStorage.removeItem(TokenStorage.LOCAL_PUBLIC_ID)
	}


	static storeToken(token) {
		TokenStorage.accessToken = token
	}

	static storeRefreshToken(refreshToken) {
		localStorage.setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken)
	}

	static storeUserEmail(userEmail) {
		localStorage.setItem(TokenStorage.LOCAL_USER_EMAIL, userEmail)
	}

	static storeUserName(userName) {
		localStorage.setItem(TokenStorage.LOCAL_USER_NAME, userName)
	}

	static storeUserId(userId) {
		localStorage.setItem(TokenStorage.LOCAL_USER_ID, userId)
	}

	static storePublicId(publicId) {
		localStorage.setItem(TokenStorage.LOCAL_PUBLIC_ID, publicId)
	}

	static getRefreshToken() {
		return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN)
	}

	static async getToken() {
		if (TokenStorage.accessToken) {
			return TokenStorage.accessToken
		}
		return await TokenStorage.getNewToken()
	}

	static getUserEmail() {
		return localStorage.getItem(TokenStorage.LOCAL_USER_EMAIL) || ""
	}

	static getUserName() {
		return localStorage.getItem(TokenStorage.LOCAL_USER_NAME) || ""
	}

	static getUserId() {
		return localStorage.getItem(TokenStorage.LOCAL_USER_ID) || ""
	}

	static getPublicId() {
		return localStorage.getItem(TokenStorage.LOCAL_PUBLIC_ID) || ""
	}
}
