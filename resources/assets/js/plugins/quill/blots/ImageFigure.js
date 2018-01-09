let BlockEmbed = Quill.import('blots/block/embed');

export class ImageFigure extends BlockEmbed {
    static create(value) {
        let figure = super.create();
        if (value.hasOwnProperty('class_name'))
            figure.setAttribute('class', value.class_name);

        if (value.hasOwnProperty('align'))
            figure.setAttribute('style', `text-align: ${value.align}`);

        if (value.hasOwnProperty('float'))
            figure.setAttribute('style', `float: ${value.float};${figure.getAttribute('style')}`);

        let caption = value.hasOwnProperty('caption') ? value.caption : '';
        let figcaption = document.createElement('figcaption');
        figcaption.innerText = caption;

        let img = document.createElement('img');
        if (value.hasOwnProperty('alt'))
            img.setAttribute('alt', value.alt);
        if (value.hasOwnProperty('url'))
            img.setAttribute('src', value.url);
        if (value.hasOwnProperty('width'))
            img.setAttribute('width', value.width);
        if (value.hasOwnProperty('height'))
            img.setAttribute('height', value.height);

        if (value.hasOwnProperty('link')) {
            let link = document.createElement('a');
            link.setAttribute('href', value.link.url);
            if (value.link.hasOwnProperty('target'))
                link.setAttribute('target', value.link.target);

            link.appendChild(img);
            figure.appendChild(link);
        } else
            figure.appendChild(img);

        figure.appendChild(figcaption);

        return figure;
    }

    static value(node) {
        return {
            alt: node.getAttribute('alt'),
            url: node.getAttribute('src')
        };
    }
}

ImageFigure.blotName = 'imageFigure';
ImageFigure.tagName = 'figure';