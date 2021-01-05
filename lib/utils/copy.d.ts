/**
 * Copy工具类
 *
 * 使用方法：
 *  import CopyUtils from 'copy.js';
 *  const instance = new CopyUtils();
 *  instance.copy(value, callback);
 */
export default class CopyUtils {
    fakeHandlerCallback: any;
    fakeHandler: any;
    fakeElem: any;
    copy(value: any, callback?: Function): void;
    removeFake(): void;
    copyText(callback: Function): void;
}
