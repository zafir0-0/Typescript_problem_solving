const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

let visitedSet:Set<number> = new Set()


for (let i=0; i<numbers.length; i++){

    if (visitedSet.has(numbers[i])){
        continue
    }

    let count:number =1

    for (let j=i+1 ; j<numbers.length;j++){

        if(numbers[i]==numbers[j]){
            count +=1
        }
    }

    if (count>=1){
        console.log(numbers[i]+": "+ count)
    }
    visitedSet.add(numbers[i])
}