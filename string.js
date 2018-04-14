/** -------------------------------------------------------------------------------------------------------------------
 * string.js
 *  字符串功能扩展
 */

/**
 * function format(text:string, ...args:any): string
 * 
 * 格式化文本
 * @param {string} text - 含替换符的模板字符串
 * @param {*} args        - 替换参数列表
 * @returns {string}
 * @type {function}
 */
var format = function(reargs, types){
  return function(text) {
    var args = arguments, argc = args.length, i = 1;
    text = argc ? String(text) : "";
    text = text.replace(reargs, function(arg, type) {
      return i < argc ? types[type](args[i++]) : arg;
    });
    for(; i<argc; i++) {
      text += " " + args[i];
    }
    return text;
  }
}(/%([sdif])/g, {s: String, d: Number, f: Number, i: Number});