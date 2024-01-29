import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: 'a4d082d9215848b39a1d9fb8658306d6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
