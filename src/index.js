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
            this.orderList=[];
        }
        init(settings) {
            this.ss = Object.assign({ data: [], groupby: [] }, settings);
            this.format(this.ss.data, 0, this.result,this.orderList);
        }
        format(data, i, json,orderList) {
            let groupby = this.ss.groupby;
            let key = groupby[i];
            data.forEach(function (item) {
                if(orderList && !json.hasOwnProperty(item[key])){
                    orderList.push(item[key]);
                }
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
        static convert({ data = [], parentField = "parentId", topValue = 0, keyId = "id" ,childname="child",format}) {
            let result = [];
            result = this.returnChild({
                data, parentField,
                parentId: topValue,
                keyId,
                childname,
                format,
                path: { id: [], parents: [] }
            });
            return result;
        }
        static returnChild({ data = [], level = 0, parentField = "parentId", parentId = 0, keyId, parent = null, path,format,childname }) {
            let res = [];
            data.forEach(item => {
                if (item[parentField] == parentId) {
                    item._parent = parent
                    item._level = level;
                    let currentPath = JSON.parse(JSON.stringify(path))
                    currentPath.id.push(item[keyId]);
                    currentPath.parents.push(Object.assign({}, item))
                    item._path = currentPath;
                    if(format){
                        let ret = format(item);
                        if(typeof ret !='undefined'){
                            item = ret;
                        }
                    }
                    res.push(item);
                    item[childname] = this.returnChild({
                        data,
                        level: level + 1,
                        parentField,
                        parentId: item[keyId],
                        keyId,
                        parent: item,
                        childname,
                        format,
                        path: currentPath
                    });
                    if (item[childname].length === 0) {
                        delete item[childname];
                    }
                }
            });
            return res;
        }
        static query(settings) {
            let defaultOption = Object.assign({
                data: [], keyId: 'id', value: '', childField: "child",result:[]
            }, settings)
            if (defaultOption.data.constructor === Array) {
                 this._getValue(defaultOption)
            } else {
                 this._getValue({ data: [defaultOption.data]}, ...defaultOption);
            }
            return defaultOption.result;
        }
        static _getValue({ data, keyId, value, childField, result }) {
            data.forEach(item => {
                if (item[keyId] == value) {
                    result.push(item);
                }
                if (item.hasOwnProperty(childField)) {
                    result.concat(this._getValue(Object.assign(arguments[0],{ data: item[childField] })));
                }
            });
            return result;
        }
    }
    return DataTree;
});