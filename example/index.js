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