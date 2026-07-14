const text: string = "abcaabbcc";

const newStr:string[] = text.split("")

let uniqueset:Set<string> = new Set()

let duplicate:Set<string> = new Set()

for (const ch of newStr){
    if(!uniqueset.has(ch)){
        uniqueset.add(ch)
    }
    else{
        duplicate.add(ch)

    
    }
}

let uniquecahracters:string[] = []
let count:number = 0 

for(const c of uniqueset ){
    uniquecahracters.push(c)
    count+=1
}

console.log("Unique characters:", uniquecahracters.join(", "))

console.log("Total unique characters:",count )