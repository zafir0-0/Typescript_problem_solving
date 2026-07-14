const amount: number = 546;
const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

let remainingAmount:number = amount

for (const note of notes){
    if(remainingAmount>=note){
        let count:number = Math.floor(remainingAmount/note)
        console.log(`${note} x ${count}`)
        remainingAmount = remainingAmount%note
    }
}

