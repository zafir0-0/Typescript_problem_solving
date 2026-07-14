const paragraph: string =
"A Core i7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

const digits = "0123456789";

let currentNum:string=""

let numbers:number[]=[]

for (const ch of paragraph){
    if (digits.includes(ch)){
        currentNum += ch
    }
    else{
        if(currentNum !== ""){
            numbers.push(Number(currentNum))
            currentNum= ""
        }
    }
}

if (currentNum !== "") { 
    numbers.push(Number(currentNum));
 }

let laptopPrice:number = numbers[1]
let mouseprice:number= numbers[2]
let mousequantity:number = numbers[3]
let discount:number= numbers[4]

let totalPrice:number= laptopPrice+ mouseprice*mousequantity

let finalcost:number= totalPrice- (totalPrice * discount/100)

console.log(finalcost +" tk")