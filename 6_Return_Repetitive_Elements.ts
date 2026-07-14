const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

let visitedSet:Set<number> = new Set()

let repeat_element:number[]= [] 

for (let i:number=0; i<numbers.length; i++){

    if (visitedSet.has(numbers[i])){
        continue 
    }

    let count:number =1

    for (let j:number=i+1; j<numbers.length; j++){

        if(numbers[i]== numbers[j]){
            count +=1
        }
    }

    visitedSet.add(numbers[i])

    if (count>1){
        repeat_element.push(numbers[i])
    }
}

console.log(repeat_element)