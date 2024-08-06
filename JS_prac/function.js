function Sum (x,y,ope)
{

    const ope1 = 1+(x+y)/2;
    const ope2 = 1+(x-y)/2;
    return [ope1,ope2];
}
 
Sum(10,20);

let a = 10;
let b =22;
console.log(Sum(a,b));


let  X = myFunction(4,3);

function myFunction(a,b)
{
    return a*b;

}
console.log(myFunction(4,3));
//example 3  

function Addition(num1,num2) {

console.log(num1+num2);
}
Addition(331,42);



function sum(a,b){





}




function Div (a,b)
{

  return a+b
  
  ;
  


}
  const Sam = Div(9,99)
  console.log(Sam);



function loginUserMessage(user)


{
   
    if (user===undefined){
        console.log("Please  Enter a Username");
        return

    }     
  return ` ${user}just logged in`
 
  

  }


const name2 ="Sushant";

console.log("Hello "+name2+" Welcome");
console.log(`Hello ${name2} Welcome HI`);


console.log(loginUserMessage());

function Mycalculate(...num1)
{

return num1


}
console.log(Mycalculate(200,100,400))



function  SomeUser (anyobject){
    console.log('Username is ${anyobject.Username} and price is $ {anyobject.price}')



}
SomeUser("user")
