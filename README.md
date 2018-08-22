# data-tree
把扁平化的表格数据转化成树状的json格式。对数据进行分组统计。并且可以根据关系进行树状的展示。
```json
[
    {
        "字段一": "A",
        "字段二": "B",
        "字段三": "C"
    },
    {
        "字段一": "a",
        "字段二": "b",
        "字段三": "c"
    },
    {
        "字段一": "A",
        "字段二": "b",
        "字段三": "c"
    }
]
```
这样一张表结构，如果`groupby`按`字段一`分组，将生成
```json
{
    "A": [
        {
            "字段一": "A",
            "字段二": "B",
            "字段三": "C"
        },
        {
            "字段一": "A",
            "字段二": "b",
            "字段三": "c"
        }
    ],
    "a": {
        "字段一": "a",
        "字段二": "b",
        "字段三": "c"
    }
}
```
如果同时`groupby` `字段一` `字段二`分组，将生成
```json
{
    "A": {
        "B": [
            {
                "字段一": "A",
                "字段二": "B",
                "字段三": "C"
            }
        ],
        "b": [
            {
                "字段一": "A",
                "字段二": "b",
                "字段三": "c"
            }
        ]
    },
    "a": {
        "b": [
            {
                "字段一": "a",
                "字段二": "b",
                "字段三": "c"
            }
        ]
    }
}
```
依此类推，每一个要分组的`key`都会作为对象的属性，最后一个是`key`是个数组集合.

# 使用方法
```js
let d1 = new DataTree();
let data = [
    {
        "字段一": "A",
        "字段二": "B",
        "字段三": "C"
    },
    {
        "字段一": "a",
        "字段二": "b",
        "字段三": "c"
    },
    {
        "字段一": "A",
        "字段二": "b",
        "字段三": "c"
    }
]

d1.init({ data: data, groupby: ["字段一"] });
console.log(d1.result);
let d2 = new DataTree();
d2.init({ data: data, groupby: ["字段一", "字段二"] });
console.log(d2.result);
let d3 = [
    { id: 1, parentId: 0, text: "我是顶级" },
    { id: 6, parentId: 0, text: "我是顶级2" },
    { id: 2, parentId: 1, text: "我是一级" },
    { id: 3, parentId: 2, text: "我是二级" },
    { id: 4, parentId: 6, text: "我是一一级" },
    { id: 5, parentId: 3, text: "我是二一级" }
];
//childname默认为child,处理数据使用format回调方法
let res = DataTree.convert({ data: d3, parentField: "parentId", topValue: 0, keyId: "id" ,childname:'children',format(item){
    item.name = item.text;
}});
console.log(JSON.stringify(res))
/*
[
    {
        "id": 1,
        "parentId": 0,
        "text": "我是顶级",
        "name": "我是顶级",
        "children": [
            {
                "id": 2,
                "parentId": 1,
                "text": "我是一级",
                "name": "我是一级",
                "children": [
                    {
                        "id": 3,
                        "parentId": 2,
                        "text": "我是二级",
                        "name": "我是二级",
                        "children": [
                            {
                                "id": 5,
                                "parentId": 3,
                                "text": "我是二一级",
                                "name": "我是二一级"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "parentId": 0,
        "text": "我是顶级2",
        "name": "我是顶级2",
        "children": [
            {
                "id": 4,
                "parentId": 6,
                "text": "我是一一级",
                "name": "我是一一级"
            }
        ]
    }
]
*/
```
新增`_path`和`_parents`属性绑定它的层级树路径，里面存储着从顶层一直到底层的数据。新增`_level`属性保存当前层级数。

新增query方法查找节点对象
## query:(data: [], keyId: 'id', value: '', childField: "child")
    let q = DataTree.query({data:res,value:'3'});
    console.log(q)
# NPMJS
```bash
npm install --save  datatotree
```