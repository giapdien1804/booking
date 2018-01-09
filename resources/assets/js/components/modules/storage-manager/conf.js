const ALBUM_URL = {
    list: '/storage/album/d/{domain}',
    store: '/storage/album/d/{domain}',
    update: '/storage/album/{album}',
    destroy: '/storage/album/{album}'
};

const FILE_URL = {
    list: '/storage/file/a/{album}',
    store: '/storage/file/a/{album}',
    update: '/storage/file',
    trash: '/storage/trash',
    destroy: '/storage/destroy',
    restore: '/storage/restore',
    make_thum:'/storage/file/make_thum'
};

export {ALBUM_URL, FILE_URL};