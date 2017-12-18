/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */
import mapIcon from '../../../../plugins/gds/map-icon'

export default {
    /**
     * @return {string}
     */
    fileThum(ext, hash, size = [64, 64]) {
        ext = ext.toLowerCase()
        let str = '';
        switch (ext) {
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif':
                str = `<img src="/storage/action/view/${hash}/?w=${size[0]}&h=${size[1]}"/>`;
                break;
            case 'svg':
                str = `<img src="/storage/action/view/${hash}"/>`;
                break
            default:
                let svg = typeof mapIcon.file[ext] !== 'undefined' ? mapIcon.file[ext] : mapIcon.file.blank
                str = `<img src="${svg}"/>`
                break;
        }

        return str;
    },
    folderThum(type) {
        let svg = typeof mapIcon.folder[type] !== 'undefined' ? mapIcon.folder[type] : mapIcon.folder.clouds
        return `<img src="${svg}"/>`
    },
}