// //Datatypes :

// //1. Primitive Datatypes

// //string = "12344"
// //integer or number = 233434
// //boolean = true or false
// //undefined = undefined
// //null = null

// //2. Non-Primitive Datatypes

// //array :  ["hello","howareyou", "good morning"]

// // var arr = ["hello","howareyou", "good morning"]
// // console.log(arr);

// // //object :
// // var obj = {
// //    // key :  value
// //    name : "vijay",
// //    age :  343,
// //    dep :  "QA Tester"
// // }
// // console.log(obj);

// //variable types  :

// //syntax :
// //variable type variablename or ref name = value

// //var  => redeclare and reassign

// // var a = 10; //redeclaration
// //     a = 5;  //reassign
// // console.log(a);

// // let
// // let a = 10; // it can't redeclare
// //      a = 5;  // reassign
// // console.log(a);

// //const :
// // const a = 10;// it can't redeclare
// //      a = 15;// it can't reassign
// // console.log(a);

// //Operatorss :

// //arithmetic operator : +add,-sub,*mul ,/ div , % modulus ,** exponent, ++ increment , -- decrement

// //add
// // var num = 10
// //  var   num2 = 10
// // console.log(num + num2);

// // //sub

// // var sub = 10
// // var sub2 = 5
// // console.log(sub - sub2);

// // //mul

// // var num3 = 5
// // var num4  = 5
// // console.log(num3 * num4);

// // //div

// // var num5 = 10
// // var num6 = 5
// // console.log(num5 / num6);

// // //modulus

// // var num7 = 10
// // var num8 = 5
// // console.log(num7 % num8);

// // //exponent

// // var num9 = 2
// // var num10 = 5
// // console.log(num9 ** num10);

// // //increment

// // var num11 = 10
// // num11++    // 10 + 1
// // console.log(num11);

// // //decrement :

// // var num12 = 10
// // num12--  //10-1
// // console.log(num12);

// // //assignment operator :

// // var assn = 10
// // assn +=5
// // console.log(assn);

// //comparison operator :

// //single equal

// // var a = 10
// // console.log(a);

// //lessthan  <

// // var num = 10
// // var num2 = 5
// // console.log(num<num2);

// // //Greater than :

// // var num3 = 10
// // var num4 = 5
// // console.log(num3>num4);

// // //Lessthanorequals  : <=
// // var num5 = 10
// // var num6 = 10
// // console.log(num5<=num6);
// // //Greaterthanorequals : >=
// //  var num7 = 15
// //  var num8 = 15
// //  console.log(num7>=num8);

// // //logical operator :

// // // && => and
// // // || => or
// // // ! => not

// // var  num9 = 10
// // var num10 = 10
// // console.log(num9 != num10);

// // //strict operator :  [important]

// // // == double equals => check only the values it will not consider datatypes

// // var db = 5
// // var db2 = "5"
// // console.log(db==db2);

// // // === triple equals  => check both the values and datatypes

// // var db3 = 5
// // var db4 = 5
// // console.log(db3===db4);

// // //Ternary operator:
// // //syntax
// // //(condition) ? true : false

// // let age = 20
// // let limit = (age>18) ? "Your'e eligible to vote" : "You're  not eligible to vote"
// // console.log(limit);

// //Functions :

// // 1.Function statement or declaration
// //syntax :
// // function refname(){

// //}

// // function ternary() {
// //   let age = 20;
// //   let limit =
// //     age > 18 ? "Your'e eligible to vote" : "You're  not eligible to vote";
// //   console.log(limit);
// // }
// // ternary()

// //parameter and arguments :

// // function box(x){ // parameter x =78
// //    console.log(x)
// // }
// // box(78);//=> argument

// //Task =>

// //ternary operation

// //return :

// // function rtn(x){
// //    return x
// // }
// // console.log(rtn(7));

// //Function expression :

// // var a = function(x){ // x = "javaScript"
// //    console.log(x);
// // }
// // a("Javascript");

// //firstclassfunction :

// // function add(x){
// //    return x*x
// // }
// // function newfn(fn){ //fn = add()
// //    console.log(fn(5));
// // }
// // newfn(add)

// //Immediate invoke function:  [IIFC]

// //First method :
// // var num = (function (x) {
// //   console.log(x);
// // })("HElllo im IIFC Funcion")
// //   //second method :
// //   (function (c) {
// //     console.log(c);
// //   }
// // )(15);

// //Arrow function : 
// //syntax 
// //() => {}

// // let arrfn = (x)=>{return x}
// // console.log(arrfn("Arrow function"));



// //Gec => Global Execution Context : 

// // var a = 10;
// // console.log(a);

// // var b = 15
// // console.log(b);

// // function box(){
// //     var a = 20
// //     console.log(a);
// // }
// // box()


// //Hoisting


// // console.log(a);
// // const a = 20
// // console.log(a);


// //task : 

// //aP   =>  165 to 180 => "he will allow" or "he will not allow"


// //ternary 

// //(condition)? 'True" : "false"

// // var height = 170
// //              //true         //true
// // var limit = (height>165 && height<180) ? "he will allow" : "he  will not allow"

// // console.log(limit);


// //Loop : 

// //Forloop : 
// //synatx : 

// //for(initialztion; condition ; iteration){

// //}

// // for(var i = 5; i>=0 ; i--){ // 5-1=4
// //     console.log(i);//5
 
// // }


// //string  : 

// // let str = "Javascript"
// // let store = " "
// // for(let i = str.length-1;  i>=0; i--){
// //      store += str[i]//p
// //      console.log(store);
// // }
// // console.log(store);

// //Task 
// // 0 to 10 number => variable name can use as :

// // var store = 0
// // for(var i = 0;i<=10;i++){ // 0+1
// //      store += i // 0+1=1
// //      // console.log(store);
// // }
// // console.log(store);


// // //while 

// //  var counter = 0; //initalization 
// //  while(counter<=5){ // condition 
// //      console.log(counter);
// //      counter++ //iteration
// //  }


//  //syntax :

// //  while(condition){

// //  }

// //do- while loop :

// // let docounter = 5
// // do{
// //      console.log(docounter);
// //      docounter++;
// // }while(docounter<5)


// //Task 

// //while loop reverse the number 

// //IF else : 

// //syntax
// //if(condition){
//    //statement 
// //}else{
//    ///statement
// //}

// // let vote = 1000
// // if(vote>=18 && vote <=80){ //false
// //      console.log("he is eligible to vote");
// // }else{
// //      console.log("He is not eligible");
// // }

// // //else if
 
// //  var mark = 45
// //  if(mark>=90){//false
// //      console.log("Grade A");
// //  }else if(mark>=80){ //false
// //      console.log("Grade B");
// //  }else if(mark >=70){ //false
// //      console.log("Grade C");
// //  }else if(mark >= 60){ //false
// //      console.log("Grade D");
// //  }else if(mark >=50){ //false
// //      console.log("Grade E");
// //  }else{
// //      console.log("Fail");
// //  }



// //Task :

// //sharauto => 10 => "auto will move"
// // lesserthan 10 => "auto wait for passengers"
// //greaterthan 10 => "drop the passengers"


// //Task : 

// //weather => 50 => "Too hot"
// // 30 to 49 => "weather is normal"
// //10 to  29 => "weather is cold"
// //10 to 0 => "weather is too cold"
// //less than zero => "cannot survive"



// //Global scope  => we can initalize variable in  global level


// // var a = 10 // global variable

// // function b(){ // local varable or block scope
// //     var a = 10 ;
// //     console.log(a);
// // }

// // b()

// //array methods : 
// //push
// // const provstore = ["hari","akshat","suganya","harija"]
// // provstore.push("nithish")
// // console.log(provstore);

// // //pop
// // provstore. pop()
// // console.log(provstore);


// // //unshift 

// // let ap = ["hari","akshat","suganya","harija"]
// // ap.unshift("suryaa")
// // console.log(ap);
// // //shift : 
// // ap.shift()
// // console.log(ap);

// // //concat : 

// // let fruits  = ["apple","mango"]
// // let mixedfruit = ["iceapple","pineapple"]
// // let veges = ["carrot","potato"]
// // let allfruit = fruits.concat(mixedfruit,veges)
// // console.log(allfruit);

// // //sort 

// // let num = [2,3,5,4,1]
// // num.sort((a,b)=>b-a) // for descending 
// // console.log(num);

// // let newalph = ["Vijay","nithish","Nandhini","akshat","babu"] // ASCII = American standard code for information interchange
// // newalph.sort()
// // console.log(newalph);


// // //split : 

// // const greet = "good morning"
// // const greet1 = greet.split(" ")
// // console.log(greet1);


// // //join :

// // const newjn = greet1.join(" ");
// // console.log(newjn);

// // //reverse : 
// // const a1 = "helloworld!"
// // const a2  = a1.split("").reverse().join(" ")
// // console.log(a2);


// // //slice : 
// // const arr = ["Tiger","lion","bear","elephant","rabbit"]
// // const arr1 = arr.slice(2,-2)
// // console.log(arr1);

 

// // //splice : 

// // const spl = ["sunday","monday","Tuesday","Thursday","saturday"]
// // console.log(spl);
// // spl.splice(3,1,"wednesday")
// // // spl.splice(5,0,"friday")
// // console.log(spl);

// //include 

// // const con = "javaScript"
// // const con2 = con.includes("java")
// // console.log(con2);

// // //uppercase : 

// // const up = "HElloworld!"
// // const up1 = up.toUpperCase()
// // console.log(up1);

// // //lowercase : 

// // const lp = "HELLOWORLD";
// // const lp1 = lp.toLowerCase()
// // console.log(lp1);


// // //indexof : 

// // const ind ="Trendnologies" //first occurrence
// // const ind1 = ind.indexOf("o")
// // console.log(ind1);

// // //lastindexof : 

// // const lind = "Trendnologies"
// // const lind2 = lind.lastIndexOf("o")
// // console.log(lind2);


// const obj = [{
//    name : "vijay",
//    age :  25,
//    address : "chennai",
// },

// {
//    name : "suryaa",
//    age :  25,
//    address : "chennai",
// },

// {
//    name : "jivita",
//    age :  25,
//    address : "chennai",
// },


// ]

// console.log(obj.address);
// console.log(obj.age);
// console.log(obj[1].name);

// const key = Object.keys(obj[1])
// console.log(key);

// const values = Object.values([obj[1]])
// console.log(values);

















