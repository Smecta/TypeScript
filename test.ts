// let isVip: boolean = true;

// if (isVip) {
//   console.log("是vip会员，可以观看完整电影");
// } else {
//   console.log("不是vip会员，试看5分钟");
// }

let age:number = 18

if (age < 18) {
    console.log('回家看熊出没')
} else{
    console.log('玩吃鸡好爽啊')
}

// let result:string = 5 < 3 ? "大于" : "小于"
// console.log(result)

let result:string = age < 18 ? '回家看熊出没' : '玩刺激好爽啊'

console.log(result)

let love:string = '我爱你三千遍'
for ( let i:number = 0; i < 3; i++){
    console.log(i)
    console.log(love)
}