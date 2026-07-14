const text: string = "cat";

let permuation:string[]= []

function generatePermuation(str:string, current:string):void{

    if (str.length==0){
        permuation.push(current);
        return;
    }

    for (let i:number=0; i<str.length;i++){
        let ch:string= str[i]

        let remaining:string= str.slice(0,i)+ str.slice(i+1)

        generatePermuation(remaining,current+ch)
    }
}

generatePermuation(text,"")

console.log("Permutations", permuation.join(", "))
console.log("Total permutations: ", permuation.length)