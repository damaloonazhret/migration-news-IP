import './news.css';
import { IArticle } from '../../../types/types';

class News {
    draw(data: IArticle[]) {
        const dataLength = 10;
        const news = data.length >= dataLength ? data.filter((_item: IArticle, idx: number) => idx < dataLength) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
            const newsClonePhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;

            newsClonePhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsMetaAuthor.textContent = <string>(<unknown>item.author) || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescrTitle = newsClone.querySelector('.news__description-title') as HTMLHeadElement;
            const newsDescrSource = newsClone.querySelector('.news__description-source') as HTMLHeadElement;
            const newsDescrContent = newsClone.querySelector('.news__description-content') as HTMLParagraphElement;

            newsDescrTitle.textContent = item.title;
            newsDescrSource.textContent = item.source.name;
            newsDescrContent.textContent = item.description;
            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const textNews = document.querySelector('.news') as HTMLDivElement;
        textNews.innerHTML = '' as string;
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
