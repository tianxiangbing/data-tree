"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        DataTree = definition();
    }
})(function () {
    "use strict";

    var DataTree = function () {
        function DataTree() {
            _classCallCheck(this, DataTree);

            this.result = {};
        }

        _createClass(DataTree, [{
            key: "init",
            value: function init(settings) {
                this.ss = _extends({ data: [], groupby: [] }, settings);
                this.format(this.ss.data, 0, this.result);
            }
        }, {
            key: "format",
            value: function format(data, i, json) {
                var groupby = this.ss.groupby;
                var key = groupby[i];
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
                for (var k in json) {
                    if (json.hasOwnProperty(k) && k.indexOf('__') === -1) {
                        this.format(json[k].__arr, i + 1, json[k]);
                    }
                }
            }
        }]);

        return DataTree;
    }();

    return DataTree;
});