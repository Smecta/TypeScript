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


// let names:string[] = ['小明','小李']
// console.log(names[1])
// names[1] = '小段'
// names[names.length] = '小李'
// names[names.length] = '小孟'
// console.log(names)
// console.log(names.length)

// for(let i:number = 0 ; i < names.length; i++){
//   console.log(names[i])
// }

// 找出数组中所有不为 0 的元素，放到一个新的数组中
// let list: number[] = [1,3,0,25,33,0,0,6]

// // 创建一个空数组为了方便添加不为0的元素
// let newList :number[] = []
// // 使用遍历数组，拿到数组中的每一个元素
// for(let i:number = 0; i< list.length; i++){
//   // 然后再遍历体中判断每一个元素是否为0
//   let arr:number = list[i]
//   if( arr !== 0 ){
//     // 如果不是0 则将该元素存储到空数组中
//     newList.push(arr)
//     // newList[newList.length] = arr
//   }
//   // 如果是0 就不做任何处理 
// }
// console.log(newList)

// 函数使用
// function sing(){
//   console.log('五环之歌')
// }
// sing()
// sing()

// 函数练习
// 计算两个变量num1 num2的和
// let num1:number = 10
// let num2:number = 20

// function getSum(){
//   console.log(num1+num2)
// }
// getSum()

// 函数的参数
// function sing(songName:string){
//   console.log(songName)
// }

// sing('五环之歌')
// sing('可乐')

// function fn (name:string, age:number){
//   console.log(name)
//   console.log(age)
// }
// fn('娇娇',18)

// 改造函数求和
// function sum(num1:number,num2:number){
//   let result:number = num1 + num2
//   console.log(result)
// }

// sum(10,20)
// sum(1,100)

// 计算任意数组中所有元素的和
// function getSum(nums :number[]):number{
//   let sum:number = 0 
//   for(let i:number=0;i<nums.length;i++){
//     sum += nums[i]
//   }
//   // console.log(sum)
//   return sum
// }
// let result:number = getSum([1,3,5]) + getSum([2,3,5])
// console.log(result)

// 计算任意三角形面积并返回 公式 1/2 * 底 * 高
function calcArea(a:number, h:number):number{
  // let area:number = 1/2 * a * h
  // return area
  return 1/2 * a * h
}
console.log(calcArea(10,10))

//得到任意两个数中的最大值并返回

function getMax(num1:number,num2:number):number{
  // if(num1 > num2){
  //   return num1
  // }else{
  //   return num2
  // }
  //三元表达式简化
  return num1 > num2 ? num1 : num2
}

console.log(getMax(1,3))
