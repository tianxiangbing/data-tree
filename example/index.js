let DataTree = require('../src/index');
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
console.log(JSON.stringify(d1.result));
let d2 = new DataTree();
d2.init({ data: data, groupby: ["字段一", "字段二"] });
console.log(JSON.stringify(d2.result));
let d3 = [
    { id: 1, parentId: 0, text: "我是顶级" },
    { id: 6, parentId: 0, text: "我是顶级2" },
    { id: 2, parentId: 1, text: "我是一级" },
    { id: 3, parentId: 2, text: "我是二级" },
    { id: 4, parentId: 6, text: "我是一一级" },
    { id: 5, parentId: 3, text: "我是二一级" }
];
let res = DataTree.convert({ data: d3, parentField: "parentId", topValue: 0, keyId: "id" });
console.log(JSON.stringify(res))
/*
[
    {
        "id": 1,
        "parentId": 0,
        "text": "我是顶级",
        "child": [
            {
                "id": 2,
                "parentId": 1,
                "text": "我是一级",
                "child": [
                    {
                        "id": 3,
                        "parentId": 2,
                        "text": "我是二级",
                        "child": [
                            {
                                "id": 5,
                                "parentId": 3,
                                "text": "我是二一级"
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
        "child": [
            {
                "id": 4,
                "parentId": 6,
                "text": "我是一一级"
            }
        ]
    }
]
*/