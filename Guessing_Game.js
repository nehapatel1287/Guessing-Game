let maximum=parseInt(prompt("Enter the maximum number!!"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;
let guess=parseInt(prompt("Enter your first guess!!"));
let attempt=1;
while(parseInt(guess)!=targetNum){
    if(guess==='q')
    break;
    attempt++;
    if(guess>targetNum){
        guess=prompt("Too hight!! Try again");
    }else{
        guess=prompt("Too low!! Try again");
    }
}
console.log(`You got it!!! With ${attempt} guess attempt.`);
