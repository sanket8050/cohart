// IIFE = IMMEDIATLY INVOKED FUNCTION EXPRESSION

(function (){
    let nam =  "sanket"     // auto matically run without call
    console.log("hello " + nam);
})();

(function sum(){      // but this sum functoin will not available outside
    let a= 8;
    let b =9;
    console.log(a+b);
})();

// parameterised
console.log("this is parameterised 🧑‍🦯‍➡️👇");
(function avg(a,b,c){
    
    console.log((a+b+c)/3);

})(5,8,8);