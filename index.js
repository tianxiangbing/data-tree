"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        }], [{
            key: "convert",
            value: function convert(_ref) {
                var _ref$data = _ref.data,
                    data = _ref$data === undefined ? [] : _ref$data,
                    _ref$parentField = _ref.parentField,
                    parentField = _ref$parentField === undefined ? "parentId" : _ref$parentField,
                    _ref$topValue = _ref.topValue,
                    topValue = _ref$topValue === undefined ? 0 : _ref$topValue,
                    _ref$keyId = _ref.keyId,
                    keyId = _ref$keyId === undefined ? "id" : _ref$keyId,
                    _ref$childname = _ref.childname,
                    childname = _ref$childname === undefined ? "child" : _ref$childname,
                    format = _ref.format;

                var result = [];
                result = this.returnChild({
                    data: data, parentField: parentField,
                    parentId: topValue,
                    keyId: keyId,
                    childname: childname,
                    format: format,
                    path: { id: [], parents: [] }
                });
                return result;
            }
        }, {
            key: "returnChild",
            value: function returnChild(_ref2) {
                var _this = this;

                var _ref2$data = _ref2.data,
                    data = _ref2$data === undefined ? [] : _ref2$data,
                    _ref2$level = _ref2.level,
                    level = _ref2$level === undefined ? 0 : _ref2$level,
                    _ref2$parentField = _ref2.parentField,
                    parentField = _ref2$parentField === undefined ? "parentId" : _ref2$parentField,
                    _ref2$parentId = _ref2.parentId,
                    parentId = _ref2$parentId === undefined ? 0 : _ref2$parentId,
                    keyId = _ref2.keyId,
                    _ref2$parent = _ref2.parent,
                    parent = _ref2$parent === undefined ? null : _ref2$parent,
                    path = _ref2.path,
                    format = _ref2.format,
                    childname = _ref2.childname;

                var res = [];
                data.forEach(function (item) {
                    if (item[parentField] == parentId) {
                        item._parent = parent;
                        item._level = level;
                        var currentPath = JSON.parse(JSON.stringify(path));
                        currentPath.id.push(item[keyId]);
                        currentPath.parents.push(_extends({}, item));
                        item._path = currentPath;
                        if (format) {
                            var ret = format(item);
                            if (typeof ret != 'undefined') {
                                item = ret;
                            }
                        }
                        res.push(item);
                        item[childname] = _this.returnChild({
                            data: data,
                            level: level + 1,
                            parentField: parentField,
                            parentId: item[keyId],
                            keyId: keyId,
                            parent: item,
                            childname: childname,
                            format: format,
                            path: currentPath
                        });
                        if (item[childname].length === 0) {
                            delete item[childname];
                        }
                    }
                });
                return res;
            }
        }, {
            key: "query",
            value: function query(settings) {
                var defaultOption = _extends({
                    data: [], keyId: 'id', value: '', childField: "child", result: []
                }, settings);
                if (defaultOption.data.constructor === Array) {
                    this._getValue(defaultOption);
                } else {
                    this._getValue.apply(this, [{ data: [defaultOption.data] }].concat(_toConsumableArray(defaultOption)));
                }
                return defaultOption.result;
            }
        }, {
            key: "_getValue",
            value: function _getValue(_ref3) {
                var _this2 = this,
                    _arguments = arguments;

                var data = _ref3.data,
                    keyId = _ref3.keyId,
                    value = _ref3.value,
                    childField = _ref3.childField,
                    result = _ref3.result;

                data.forEach(function (item) {
                    if (item[keyId] == value) {
                        result.push(item);
                    }
                    if (item.hasOwnProperty(childField)) {
                        result.concat(_this2._getValue(_extends(_arguments[0], { data: item[childField] })));
                    }
                });
                return result;
            }
        }]);

        return DataTree;
    }();

    return DataTree;
});