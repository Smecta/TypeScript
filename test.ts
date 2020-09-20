// // let isVip: boolean = true;

// // if (isVip) {
// //   console.log("是vip会员，可以观看完整电影");
// // } else {
// //   console.log("不是vip会员，试看5分钟");
// // }

// let age:number = 18

// if (age < 18) {
//     console.log('回家看熊出没')
// } else{
//     console.log('玩吃鸡好爽啊')
// }

// // let result:string = 5 < 3 ? "大于" : "小于"
// // console.log(result)

// let result:string = age < 18 ? '回家看熊出没' : '玩刺激好爽啊'

// console.log(result)

// let love:string = '我爱你三千遍'
// for ( let i:number = 0; i < 3; i++){
//     console.log(i)
//     console.log(love)
// }

// for (let i: number = 1; i <= 5; i++) {
//     if ( i === 3){
//         break
//     }

//   console.log('正在吃第'+i+'个包子');
// }

// for (let i: number = 1; i <= 5; i++) {
//     if ( i === 3){
//         continue
//     }

//   console.log('正在吃第'+i+'个包子');
// }


let names:string[] = ['小明','小李']
console.log(names[1])
names[1] = '小段'
names[names.length] = '小李'
names[names.length] = '小孟'
console.log(names)
console.log(names.length)

for(let i:number = 0 ; i < names.length; i++){
  console.log(names[i])
}