const numbers:number[]= [11, 7, 2, 15, 6];

let max:number= numbers[0]

let secondmax:number = numbers[0]

for(let i:number=0; i<numbers.length; i++){

    if(numbers[i]>max){
        secondmax=max
        max= numbers[i]

    }

    else if(numbers[i]>secondmax && numbers[i]!==max){
        secondmax= numbers[i]
    }
}

let diff:number= max-secondmax

console.log(diff)