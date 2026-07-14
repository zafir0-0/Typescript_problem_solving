const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

let unique:number[] = []

let sum:number =0 

for (let i=0; i<numbers.length; i++){
    if (!unique.includes(numbers[i])){
        unique.push(numbers[i])
    }
}

for (let j=0; j<unique.length;j++){
    sum+= unique[j]
}

console.log(sum)

