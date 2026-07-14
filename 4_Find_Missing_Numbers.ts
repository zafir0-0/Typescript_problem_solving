const numbers: number[] = [0, 1, 2, 4, 5];

let count:number=0 
let actualSumofArray:number=0


for (let i=0;i<numbers.length;i++){
    count+=1
    actualSumofArray+= numbers[i]
}

let sumOfArray:number=  count * (count + 1) / 2

let missingnumber:number=   sumOfArray - actualSumofArray

console.log(missingnumber)





