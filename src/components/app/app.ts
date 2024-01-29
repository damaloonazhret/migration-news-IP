import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import Controller from '../controller/controller';
import { IDataNew, ITotal } from '../../types/types';

class App {
    controller: Controller;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data: ITotal | IDataNew | void) => this.view.drawNews(data as ITotal))
        );
        this.controller.getSources((data: IDataNew | ITotal | void) => this.view.drawSources(data as IDataNew));
    }
}

export default App;
