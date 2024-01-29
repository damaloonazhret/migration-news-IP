import { IDataNew, IRequestParams, IObj, ITotal, LoadMethod } from '../../types/types';
import { callbackError } from '../errors/errors';

class Loader {
    private readonly options: object;
    private readonly baseLink: string;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IRequestParams,
        callback: (data: IDataNew | ITotal | void) => void = () => {
            console.error(callbackError);
        }
    ) {
        this.load(LoadMethod.GET, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IObj, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            const privateKey = `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
            url += privateKey;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: ITotal | IDataNew) => void, options: object = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
