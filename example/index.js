let DataTree = require('../src/index');
// let data = [
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "17农发绿债" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20200430, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "091718001", "updateDate": 0, "updateTime": 0, "valueDate": 0 },
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "１０附息国债３４" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20201028, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "100034", "updateDate": 0, "updateTime": 0, "valueDate": 0 },
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "浮息券1" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20200731, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "FX001", "updateDate": 0, "updateTime": 0, "valueDate": 0 },
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "逆浮息" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20200612, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "FXQ-N", "updateDate": 0, "updateTime": 0, "valueDate": 0 },
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "USD2" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20200612, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "USD2", "updateDate": 0, "updateTime": 0, "valueDate": 0 },
//     { "baseDecimal": 4, "branchCode": "00012", "code": "bonds_forward", "extensionParam": { "localName": "周周盈" }, "fixDate": 0, "isBackAudit": "N", "localName": "债券远期", "maturityDate": 20220531, "priceType": "R", "productTradable": "Y", "productTradableShow": "Y", "strategyId": 2, "tenorList": [], "tradable": "Y", "underlying": "ZZY1", "updateDate": 0, "updateTime": 0, "valueDate": 0 }
// ]
// let d1 = new DataTree();

// d1.init({ data: data, groupby: ["code", "underlying"] });
// console.log(JSON.stringify(d1.result));
// let data = [
//     {
//         "字段一": "A",
//         "字段二": "B",
//         "字段三": "C"
//     },
//     {
//         "字段一": "a",
//         "字段二": "b",
//         "字段三": "c"
//     },
//     {
//         "字段一": "A",
//         "字段二": "b",
//         "字段三": "c"
//     }
// ]

// d1.init({ data: data, groupby: ["字段一"] });
// console.log(JSON.stringify(d1.result));
// let d2 = new DataTree();
// d2.init({ data: data, groupby: ["字段一", "字段二"] });
// console.log(JSON.stringify(d2.result));
// let d3 = [
//     { id: 1, parentId: 0, text: "我是顶级" },
//     { id: 6, parentId: 0, text: "我是顶级2" },
//     { id: 2, parentId: 1, text: "我是一级" },
//     { id: 3, parentId: 2, text: "我是二级" },
//     { id: 4, parentId: 6, text: "我是一一级" },
//     { id: 5, parentId: 3, text: "我是二一级" }
// ];
// //childname默认为child,处理数据使用format回调方法
// let res = DataTree.convert({ data: d3, parentField: "parentId", topValue: 0, keyId: "id" ,childname:'children',format(item){
//     item.name = item.text;
// }});
// console.log(res)
// console.log(res[0].children[0].children[0]._path)
// console.log(res.constructor)
// let q = DataTree.query({data:res,value:'3'});
// console.log(q)
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
/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-11-11 17:16:02
 * @LastEditTime: 2019-11-11 17:18:30
 * @github: https://github.com/tianxiangbing
 */
let source  = [
    {
      "children": [
        {
          "children": [
            {
              "children": [],
              "modifyTime": null,
              "createTime": "2019-10-23 19:37:16",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 4,
              "name": "配置中心",
              "url": "/config",
              "pid": 3,
              "id": 15
            },
            {
              "children": [
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:24:47",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 2,
                  "name": "添加部门角色",
                  "url": "3e44ca9cb38e4279c3ea181ff8fde8df",
                  "pid": 21,
                  "id": 25
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:25:55",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 3,
                  "name": "更新部门角色",
                  "url": "c7176a69da2643e69ec022bea13d3619",
                  "pid": 21,
                  "id": 26
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:26:23",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 4,
                  "name": "删除部门角色",
                  "url": "cb5eb00a9033e36b2803536d3ead2e9f",
                  "pid": 21,
                  "id": 27
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 20:34:47",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 5,
                  "name": "修改角色状态",
                  "url": "c73d8f55ce5a21a993eb012f66996138",
                  "pid": 21,
                  "id": 28
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:23:48",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 1,
                  "name": "部门角色列表",
                  "url": "4f297890e99ae042d99f2ed0e3a7ff8e",
                  "pid": 21,
                  "id": 24
                }
              ],
              "modifyTime": null,
              "createTime": "2019-10-28 17:58:58",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 4,
              "name": "部门角色列表",
              "url": "/departmentRole",
              "pid": 3,
              "id": 21
            },
            {
              "children": [],
              "modifyTime": null,
              "createTime": "2019-10-18 14:34:25",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 3,
              "name": "字典管理",
              "url": "/dictionary",
              "pid": 3,
              "id": 6
            },
            {
              "children": [
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-25 15:25:12",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 1,
                  "name": "目录菜单列表",
                  "url": "8b165a98bf11f5ffe7f0ea6f67934023",
                  "pid": 5,
                  "id": 16
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-29 16:01:50",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 2,
                  "name": "获取方法",
                  "url": "cd15ebec0d4c76369e8f6a5b28b807ee",
                  "pid": 5,
                  "id": 29
                }
              ],
              "modifyTime": null,
              "createTime": "2019-10-18 14:33:06",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 2,
              "name": "菜单管理",
              "url": "/menu",
              "pid": 3,
              "id": 5
            },
            {
              "children": [
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 17:15:10",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 3,
                  "name": "更新角色",
                  "url": "bf4f8fb976ed38a70bdceb2b50eb8935",
                  "pid": 4,
                  "id": 20
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 17:14:36",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 2,
                  "name": "添加角色",
                  "url": "5df8f762383ce9d9666df07d6265ef02",
                  "pid": 4,
                  "id": 19
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 16:19:24",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 1,
                  "name": "角色列表",
                  "url": "2c31a044acfaccc6a1fe666cdda414ac",
                  "pid": 4,
                  "id": 18
                }
              ],
              "modifyTime": null,
              "createTime": "2019-10-18 14:31:50",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 1,
              "name": "角色管理",
              "url": "/role",
              "pid": 3,
              "id": 4
            }
          ],
          "modifyTime": null,
          "createTime": "2019-10-18 14:29:44",
          "status": true,
          "icon": "question-circle",
          "type": 2,
          "sort": 1,
          "name": "系统管理",
          "url": "#",
          "pid": 1,
          "id": 3
        }
      ],
      "modifyTime": "2019-10-21 16:54:31",
      "createTime": "2019-10-18 14:27:30",
      "status": true,
      "icon": null,
      "type": 1,
      "sort": 1,
      "name": "海呗后台",
      "url": "#",
      "pid": 0,
      "id": 1
    },
    {
      "children": [
        {
          "children": [
            {
              "children": [
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:13:28",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 1,
                  "name": "查询IPO进程列表",
                  "url": "5413c7e7719ed3417558d0e044a89bfe",
                  "pid": 13,
                  "id": 22
                },
                {
                  "children": [],
                  "modifyTime": null,
                  "createTime": "2019-10-28 19:15:33",
                  "status": true,
                  "icon": null,
                  "type": 4,
                  "sort": 2,
                  "name": "修改IPO进程",
                  "url": "49d8f96a5539adb093043ef8b48c3e41",
                  "pid": 13,
                  "id": 23
                }
              ],
              "modifyTime": "2019-10-29 16:03:41",
              "createTime": "2019-10-23 11:09:18",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 1,
              "name": "IPO数据",
              "url": "/ipo",
              "pid": 12,
              "id": 13
            },
            {
              "children": [],
              "modifyTime": null,
              "createTime": "2019-10-23 11:11:03",
              "status": true,
              "icon": "question-circle",
              "type": 3,
              "sort": 2,
              "name": "新闻资讯",
              "url": "/news",
              "pid": 12,
              "id": 14
            }
          ],
          "modifyTime": null,
          "createTime": "2019-10-23 11:08:47",
          "status": true,
          "icon": "question-circle",
          "type": 2,
          "sort": 1,
          "name": "资讯",
          "url": "#",
          "pid": 2,
          "id": 12
        }
      ],
      "modifyTime": null,
      "createTime": "2019-10-18 14:28:30",
      "status": true,
      "icon": null,
      "type": 1,
      "sort": 2,
      "name": "科创板后台",
      "url": "#",
      "pid": 0,
      "id": 2
    }
  ]
function format(source) {
    source.forEach(item => {
        if(!item.children || item.children.length==0){
            delete item['children']
        } else{
            format(item.children)
        }
    })
}
 format(source);
console.log(source)

let tmp = [ { underlying: 'ERHGKZ20220228' },
{ underlying: 'DFZDFZ20220430' },
{ underlying: 'KHZKHZ20220520' },
{ underlying: 'C1300' },
{ underlying: 'zyw0000111' },    
{ underlying: 'lq777' },
{ underlying: 'QES0000069' },    
{ underlying: 'QES0000040' },    
{ underlying: 'QES0000044' },    
{ underlying: 'QES0000068' },
{ underlying: 'QES0000038' },
{ underlying: 'QES0000039' },
{ underlying: 'QES0000037' },
{ underlying: 'QES0000041' },
{ underlying: 'QES0000042' },
{ underlying: 'QES0000066' },
{ underlying: 'QES0000070' },
{ underlying: 'QES0000059' },
{ underlying: 'QES0000060' },
{ underlying: 'QES0000056' },
{ underlying: 'QES0000067' },
{ underlying: 'KHZKHZ20230210' },
{ underlying: '000147' },
{ underlying: '00111' },
{ underlying: '000899' },
{ underlying: '00333' },
{ underlying: '00222' },
{ underlying: '02222' },
{ underlying: '052639' },
{ underlying: 'TEST001001' },
{ underlying: '11122211' },
{ underlying: '001PT01' },
{ underlying: '12332111' },
{ underlying: '01PCHG001' },
{ underlying: '02223' },
{ underlying: 'yyl111' },
{ underlying: '000828' },
{ underlying: '01111' },
{ underlying: '007899' },
{ underlying: '177777' },
{ underlying: 'test331' },
{ underlying: 'test114' },
{ underlying: 'test113' },
{ underlying: '18' },
{ underlying: 'test115' },
{ underlying: 'test116' },
{ underlying: 'GKZGKZ20231130' },
{ underlying: 'QES0000061' },
{ underlying: 'QES0000065' },
{ underlying: 'QES0000062' },
{ underlying: 'QES0000063' },
{ underlying: 'QES0000064' },
{ underlying: '0022z' },
{ underlying: 'act3607' },
{ underlying: 'QES0000015' },
{ underlying: 'MXCSZY03' },
{ underlying: 'MXCSZY02' },
{ underlying: 'act3601' },
{ underlying: 'bctest37' },
{ underlying: 'DFZ20251130' },
{ underlying: 'QES0000012' },
{ underlying: 'KHZKHZ20251231' },
{ underlying: 'MXSH01' },
{ underlying: '166666' },
{ underlying: 'mz001' },
{ underlying: '1777776' },
{ underlying: '17777777' },
{ underlying: 'act3608' },
{ underlying: 'Z21004' },
{ underlying: 'Z21002' },
{ underlying: 'S21003' },
{ underlying: 'act3663' },
{ underlying: '0001521' },
{ underlying: '009527' },
{ underlying: 'C208' },
{ underlying: 'C207' },
{ underlying: 'XDESK_0001' },
{ underlying: 'XDESK_001' },
{ underlying: 'XDESK_004' },
{ underlying: 'XDESK_002' },
{ underlying: '000WYING' },
{ underlying: 'lq666' },
{ underlying: 'XDESK001' },
{ underlying: 'XDESK0013' },
{ underlying: 'XDESK002' },
{ underlying: 'XDESK0012' },
{ underlying: 'XDESK003' },
{ underlying: 'XDESK0011' },
{ underlying: '0001520' },
{ underlying: '000115' },
{ underlying: 'NongFaZhai002' },
{ underlying: 'JinChuKou002' },
{ underlying: 'GuoKaiZhai001' },
{ underlying: 'XFNongFaZhai001' },
{ underlying: '150025' },
{ underlying: '160008' },
{ underlying: '160019' },
{ underlying: '180017' },
{ underlying: 'XDESK111' },
{ underlying: '1018' }
]
// console.log(tmp)
let data = new DataTree();
data.init({
    data: tmp,
    groupby: ['underlying']
});
console.log(data.result)
console.log(data.orderList)
var i = 0 ;
for(let k in data.result){
    i ++;
}
console.log(i)
console.log(data.orderList.length)