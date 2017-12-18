/*
 * Copyright (c) 2017. giapdien1804@gmail.com|+841648392803
 */
/**
 * Created by traih on 10/8/2017.
 */
export class PathInfo {

    constructor(path) {
        this._path = path.replace('\\', '/').split('/');
    };

    get path() {
        return Object.values(Object.assign({}, this._path));
    }

    get root() {
        return this.path.shift();
    }

    get dir() {
        let dir = this.path;
        dir.shift();
        if (dir.length > 1) {
            dir.pop();
            return dir.join('/');
        }

        return '';
    };

    get base() {
        return this.path.pop();
    }

    get file() {
        let file = this.base.split('.');
        file.pop();
        return file;
    }

    get extension() {

        if (this.base.indexOf('.') !== -1) {
            let ext = this.base.split('.');
            return ext.pop();
        }

        return '';
    }
}