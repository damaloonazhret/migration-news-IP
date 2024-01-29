import AppLoader from './appLoader';
import { Endpoint, IDataNew, ITotal } from '../../types/types';

class AppController extends AppLoader {
    getSources(callback: (data: IDataNew | ITotal | void) => void) {
        super.getResp(
            {
                options: {},
                endpoint: Endpoint.SOURCES,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: ITotal | IDataNew | void) => void) {
        let target: (Node & ParentNode) | null | undefined = e.target as HTMLDivElement | null;
        const targetElem = target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (targetElem?.classList.contains('source__item')) {
                const sourceId = targetElem.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target?.parentNode;
        }
    }
}

export default AppController;
