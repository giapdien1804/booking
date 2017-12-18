/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '')] = r(item);
    });
    return images;
}

export default {
    folder: importAll(require.context('./icon/folder-icon', false, /\.(png|jpe?g|svg)$/)),
    file: importAll(require.context('./icon/file-icon', false, /\.(png|jpe?g|svg)$/))
}
