/*
 * Created with Visual Studio Code.
 * github: https://github.com/tianxiangbing/data-tree
 * User: 田想兵
 * Date: 2017-08-29
 * Time: 10:00:00
 * Contact: 55342775@qq.com
 * desc: 主旨是对某一时间段里的数据进行合并，重复的记录进行去重，只取最新的记录。比如一秒钟来了1000条数据，其中有500条是重复的，那这一秒钟应该只返回500条结果。
 * 请使用https://github.com/tianxiangbing/data-tree 上的代码
 */
(function (definition) {
    // 
    if (typeof exports === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        DataTree = definition();
    }
})(function () {
    "use strict";
    class DataTree {
        constructor() {
            this.result = {};
        }
        init(settings) {
            this.ss = Object.assign({ data: [], groupby: [] }, settings);
            this.format(this.ss.data, 0, this.result);
        }
        format(data, i, json) {
            let groupby = this.ss.groupby;
            let key = groupby[i];
            data.forEach(function (item) {
                if (groupby.length === i +1) {
                    json[item[key]] = json[item[key]] || [];
                    json[item[key]].push(item);
                } else {
                    json[item[key]] = json[item[key]] || {};
                    json[item[key]].__arr = json[item[key]].__arr || [];
                    json[item[key]].__arr.push(item);
                    Object.defineProperty(json[item[key]], '__arr', {
                        enumerable: false,
                        configurable: false
                    });
                }
            });
            if (groupby.length === i+1) {
                return;
            }
            for (let k in json) {
                if (json.hasOwnProperty(k) && k.indexOf('__') === -1) {
                    this.format(json[k].__arr, i+1, json[k])
                }
            }
        }
    }
    return DataTree;
});