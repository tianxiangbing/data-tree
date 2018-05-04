/*
 * Created with Visual Studio Code.
 * github: https://github.com/tianxiangbing/data-tree
 * User: 田想兵
 * Date: 2017-08-29
 * Time: 10:00:00
 * Contact: 55342775@qq.com
 * desc: 主旨是对数组数据进行分组展示，并且可以根据关系进行树状的展示。
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
                if (groupby.length === i + 1) {
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
            if (groupby.length === i + 1) {
                return;
            }
            for (let k in json) {
                if (json.hasOwnProperty(k) && k.indexOf('__') === -1) {
                    this.format(json[k].__arr, i + 1, json[k])
                }
            }
        }
        static convert({ data = [], parentField = "parentId", topValue = 0, keyId = "id" }) {
            let result = [];
            result = this.returnChild({ data, parentField, parentId: topValue, keyId });
            return result;
        }
        static returnChild({ data = [], parentField = "parentId", parentId = 0, keyId }) {
            let res = [];
            data.forEach(item => {
                if (item[parentField] == parentId) {
                    item.child = this.returnChild({ data, parentField, parentId: item[keyId] ,keyId});
                    if (item.child.length ===0) {
                        delete item["child"];
                    }
                    res.push(item);
                }
            });
            return res;
        }
    }
    return DataTree;
});