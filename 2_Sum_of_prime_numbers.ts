const numbers: number[] = [11, 15, 2, 7, 6];

let prime: number[] = [];

let primesum:number = 0

for (let i=0; i<numbers.length;i++){

    let isPrime:boolean = true

    if(numbers[i]<=1){
        isPrime=false
    }

    else{
        for(let j=2; j<numbers[i];j++){

            if(numbers[i]%j==0){
                isPrime=false
                break
        }
    }
}

if (isPrime){
    prime.push(numbers[i])
}
}

for(let k=0; k<prime.length;k++){
    primesum+=prime[k]
}

console.log(primesum)
