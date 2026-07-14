const totalQuestions: number = 15;
const totalMarks: number = 100;

for(let fivemark:number=0; fivemark<=totalQuestions;fivemark++){

    let tenmark:number= totalQuestions-fivemark

    let marks = (fivemark*5)+ (tenmark*10)

    if (marks == totalMarks){
        console.log(`5-mark questions: ${fivemark}`)
        console.log(`10-mark questions: ${tenmark}`)
        break
    }
}