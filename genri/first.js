export  function sbor (number){
    let sum = 0
    for(let i = 0; i < number.length;i++){
        if(number[i] % 2 === 1 ){
            sum += number[i]
        }
    }
    return sum


}
console.log(sbor([1,2,3,4,5,66,7]))
