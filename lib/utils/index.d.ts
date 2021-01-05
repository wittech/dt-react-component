declare const utils: {
    /**
     * 获取页面宽度
     * @return {[type]} [description]
     */
    pageWidth(): number;
    /**
     * 获取页面高度
     * @return {[type]} [description]
     */
    pageHeight(): number;
    checkExist(prop: any): boolean;
    isMacOs(): boolean;
    isWindows(): boolean;
    isMobileDevice(): boolean;
    /**
     * @description 浏览器类型和版本检测
     * @returns {Boolean} `true`表示通过兼容性检测,`false`表示不通过兼容性检测
     */
    browserCheck(): boolean;
    /**
     * 根据参数名获取URL数据
     * @param  {[type]} name [description]
     * @param  {[type]} url  [description]
     */
    getParameterByName(name: string, url?: string): string;
    /**
     * 获取图片的Base64格式
     * @param  {[type]}   img      [description]
     * @param  {Function} callback [description]
     */
    getBase64(img: any, callback: (img: any) => void): void;
    /**
     * 百分比转换
     * @param  {[type]} num       [description]
     * @param  {[type]} precision [description]
     */
    percent(num: number, precision?: number): string;
    getCssText(object?: any): string;
    /**
     * 去除空串
     */
    trim(str: string): string;
    trimlr(str: string): string;
    removeAllSpaces(str: string): string;
    /**
     * 原生 JavaScript 获取 cookie 值
     * @param name
     */
    getCookie(name: string): string;
    deleteCookie(name: string, domain?: string, path?: string): void;
    deleteAllCookies(domain: string, path: string): void;
    setCookie(name: string, value: string | number | boolean | object, days?: number): void;
    /**
     * 转换 Byte 转换为小于1024值最大单位
     * @param value 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' 转换原始值
     */
    convertBytes(value: number): string;
    toQfw(str: string): string | 0;
    textOverflowExchange(text: string, length: number): string;
    /**
     * json格式化
     * @param {格式化内容} text
     * @param {格式化占位符} space
     */
    jsonFormat(text: string, space?: number): string;
    /**
     * 多函数排序，匹配到0为止
     */
    sortByCompareFunctions(arr: any[], ...compareFunctions: any[]): void;
    /**
     * 转换排序字段
     */
    exchangeOrder(order: string): "desc" | "asc";
    /**
     * 生成一个key
     */
    generateAKey(): string;
    /**
     * 判断是否是JSON string
     * @param  {String}  str 所要验证的字符串
     * @return {Boolean}   是否是JSON字符串
     */
    isJSONStr(str: string): boolean;
    /**
     * 随机生成一串6位同时包含数字、大小写字母的字符串
     * @param len number
     */
    getRandomStr(len: number): string;
    /**
     * simply judge whether the array is equal
     * @param arr1
     * @param arr2
     * @returns arr1 === arr2
     */
    isEqualArr(arr1: string[], arr2: string[]): boolean;
};
export default utils;
