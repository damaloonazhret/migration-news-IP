export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ITotal {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IDataNew {
    sources: ISources[];
}

export enum Endpoint {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

type SourcesObject = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export interface IRequestParams {
    endpoint: Endpoint;
    options: {
        sources?: SourcesObject | string;
    };
}

export interface IObj {
    options?: {
        sources?: SourcesObject;
    };
}

export enum LoadMethod {
    GET = 'GET',
}
