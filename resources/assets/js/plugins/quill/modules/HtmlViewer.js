import {html_beautify} from 'js-beautify'

export class HtmlViewer {
    constructor(quill) {
        this.quill = quill;
        this.toolbar = quill.getModule('toolbar');

        let svg = '<i class="fa fa-code"></i>';

        if (typeof this.toolbar !== 'undefined')
            this.toolbar.addHandler('htmlViewer', this.htmlViewer);

        var htmlViewerBtns = document.getElementsByClassName('ql-htmlViewer');
        if (htmlViewerBtns) {
            [].slice.call(htmlViewerBtns).forEach(function (htmlViewerBtn) {
                htmlViewerBtn.innerHTML = svg;
                htmlViewerBtn.id = "ql-source-btn";
            });
        }
    }

    htmlViewer() {
        let quill = this.quill;
        let sourceView = document.getElementById('sourceView');
        if (!sourceView) {
            var txtArea = document.createElement('textarea');
            txtArea.style.cssText = "width: 100%;border: none;display:none;overflow-y:scroll;height: 100%;";
            txtArea.id = 'sourceView';
        }
        else {
            txtArea = document.getElementById('sourceView');
        }

        var htmlEditor = document.querySelector('.ql-source-view');

        if (!htmlEditor) {
            htmlEditor = quill.addContainer('ql-source-view');
            htmlEditor.style.cssText = 'position: absolute;top: 0; bottom: 0;left: 0;right: 0;display:none'
        }

        htmlEditor.appendChild(txtArea);
        if (txtArea.style.display === 'none') {
            let html = quill.root.innerHTML;
            txtArea.value = html_beautify(html);
        }

        quill.on('text-change', (delta, oldDelta, source) => {
            let html = quill.root.innerHTML;
            txtArea.value = html_beautify(html);
        });

        if (txtArea.style.display === '') {
            let html = txtArea.value;
            this.quill.pasteHTML(html);
        }
        txtArea.style.display = txtArea.style.display === 'none' ? '' : 'none';
        htmlEditor.style.display = htmlEditor.style.display === 'none' ? '' : 'none';
    }
}

