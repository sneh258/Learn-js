let input=43;




const checkprime=(input)=>
{
    isPrime=true;
    for (let i = 2; i < input; i++) {
        if (input % i == 0) {
            isPrime = false;
            break;
        }

}
console.log(isPrime)
}





const checkArmStrong=(input)=>
{

let n = input.length; 
let sum = 0; 
let i=0;

    while(i<input)
{
    let digit = input[i]-'0'; 
    sum = (sum + Math.pow(digit,n)); 
    i++; 
}

if(sum == input) 
{
    console.log(input, "is an Armstrong Number");
}
else{
    console.log(input, "is not an Armstrong Number");
}

}


checkArmStrong(input);
checkprime(input);