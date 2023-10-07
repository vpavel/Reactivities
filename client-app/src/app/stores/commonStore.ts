import { makeAutoObservable, reaction } from 'mobx';
import { ServerError } from '../models/serverError';

export default class CommonStore {
	error: ServerError | null = null;
	token: string | null = localStorage.getItem('jkw');
	appLoaded = false;

	constructor() {
		makeAutoObservable(this);

		reaction(
			() => this.token,
			token => {
				if(token) {
					localStorage.setItem('jwt', token)
				} else {
					localStorage.removeItem('jwt')
				}
			}
		)
	}

	setServerError(error: ServerError) {
		this.error = error;
	}

	setToken = (token: string | null) => {
		if(token) localStorage.setItem('jkt', token);
		this.token = token;
	}

	setAppLoaded = () => {
		this.appLoaded = true;
	}
}
