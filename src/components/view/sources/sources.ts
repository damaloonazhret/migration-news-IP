import './sources.css';

export interface IData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

type IDate = IData[];

class Sources {
    draw<T extends IDate>(data: T) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data?.forEach((item: IData) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;

            sourceItemName.textContent = item.name;
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
