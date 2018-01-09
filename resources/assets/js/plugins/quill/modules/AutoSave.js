let Delta = Quill.import('delta');

export class AutoSave {
    constructor(quill, options) {
        var change = new Delta();
        quill.on('text-change', function (delta) {
            change = change.compose(delta);
        });

        if (options.hasOwnProperty('post_url'))
            setInterval(function () {
                if (change.length() > 0) {
                    if (change.length() > 0) {
                        window.axios.post(options.post_url, {content: quill.root.innerHTML, auto_save: true})
                            .then((res) => {
                                if (options.hasOwnProperty('status')) {
                                    if (res.data.hasOwnProperty('time'))
                                        options.status.innerText = 'Tự động lưu lúc: ' + res.data.time;
                                    else
                                        options.status.innerText = 'Đã tự động lưu'
                                }
                            })
                    }
                }
            }, 20 * 1000);

        window.addEventListener('beforeunload', function (e) {
            if (change.length() > 0) {
                var confirmationMessage = "\o/";
                e.returnValue = confirmationMessage;
                return confirmationMessage;
            }
        })
    }
}