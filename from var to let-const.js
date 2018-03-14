// let is a block scoped version of var 
// const is like let but it's value caan't be change 
// if you change every var witht let or const you code behaves will be change because it's block scope


var  x  =  3;

function  func(randomize)  {
    if  (randomize)  {
        var  x  =  Math.random();  
        return  x;
    }
    return  x; 
}
/*when use var it will print undefind 
else print 3 
try to run this code with convert var to let and see what happen */
console.log(func(false));  



(function  func()  {
    if  (true)  {
    var  tmp  =  123;
    }
    console.log(tmp);  //  ReferenceError:  tmp  is  not  defined if you use let 
    })()





