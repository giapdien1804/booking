import {ImageImport} from './ImageImport.js';
import {ImageResize} from './ImageResize.js';
import {WordCount} from "./WordCount";
import {AutoSave} from "./AutoSave";

if (window.Quill) {
    Quill.register('modules/imageImport', ImageImport);
    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/wordCount', WordCount);
    Quill.register('modules/autoSave', AutoSave);
}