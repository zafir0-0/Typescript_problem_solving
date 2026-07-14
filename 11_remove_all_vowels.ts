const text: string = "I am a SQA Engineer";

const newStr:string[]= text.toLowerCase().split("")

let updatedStr:string[]= []

for(let i:number=0;i<newStr.length;i++){

    if (newStr[i]== 'a' || newStr[i] == 'e'|| newStr[i]=='i' || newStr[i]=='o' || newStr[i]=='u'){
        continue
    }
    else{
        updatedStr.push(newStr[i])
    }
    }

    console.log(updatedStr.join(""))