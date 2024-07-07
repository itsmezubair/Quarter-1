                      //-------------------------CLASS 1----------------------//                          
                          
                          ///-----------ARITHMETIC OPERATORS------------///

                                    //----- +, -, /, %, *, -----//

/*let numberofFaculty = 4;

let numberofManagement =3;

let numberofAbsentFaculty = 2;

let totalNumberofFaculty = numberofFaculty * 21;

let quantityofBiryani = 20 / totalNumberofFaculty;


//console.log(numberofFaculty + numberofManagement - numberofAbsentFaculty);

//console.log(totalNumberofFaculty);

console.log(quantityofBiryani+" kg");*/






                                 //----------CONCATINATION---------//




/*let firstName = "Zubair";
let age = 18;
console.log(`hello my name is ${firstName} and my age is ${age}.`);*/



                             //------------UNARY OPERATOR-----------//

                                //------ ++, --, ---------//

/*let index = 10;
++index;
--index;
++index;
--index;
--index;
console.log(index);*/


// let index = 10;
// let result = ++index + ++index + 6 + --index + -2;
// console.log(result);




                          //----------ASSIGNMENT OPERATOR-------------//

                            //-------- +=, -=, *=, /=, %=, --------//

/*let num1: number =20;
num1 -=22;
console.log(num1);

let num1: number =20;
num1 +=22;
console.log(num1);


let num1: number =20;
num1 *=22;
console.log(num1);


let num1: number =20;
num1 /=22;
console.log(num1);



let num1: number =20;
num1 %=22;
console.log(num1);

*/




                                 //-----------RELATIONAL OPERATOR----------//

                               //--------- <,  > , <= , >= , == , != -------//


/*let num1 = 6;
let num2 =6;

console.log(num1 <= num2);

let num1 = 6;
let num2 =6;

console.log(num1 >= num2);


let num1 = 6;
let num2 =6;

console.log(num1 != num2);

let num1 = 6;
let num2 =6;

console.log(num1 > num2);


let num1 = 6;
let num2 =6;

console.log(num1 < num2);



let num1 = 6;
let num2 =6;

console.log(num1 == num2);*/




                           //-----------------CLASS 02------------------//






               /////----------LOGICAL OPERATORS------------////

                     ///---- AND(&&), OR(||)------///   

                            
                              // Or//


             //------ if, if-else, if-else-if statements-------//


                                //--- && ---//


                       //-------  AND OPERATOR -------//

        /*TRUE       FALSE        =  FALSE

        FALSE      TRUE         =  FALSE

        TRUE       TRUE         =  TRUE

        FALSE      FALSE        =  FALSE     */


                            //-------OR OPERATOR------//


       /*TRUE       FALSE       =  TRUE

        FALSE      TRUE         =  TRUE

        TRUE       TRUE         =  TRUE

        FALSE      FALSE        =  FALSE     */



/*let percentage = 40;


if(percentage >= 90) {
    console.log("party!!!!");
}
else{
    console.log("No Party!!");
}*/


//let achiJob = true;
//let canCook = false;

//console.log(achiJob && canCook);

/*if(achiJob && canCook)
{
    console.log("Rishtaa pakka!!");
}
else{
    console.log("Rejected");
}*/

/*let gmail = false;
let password = true;


if(gmail || password)
{
    console.log("continue");
}
else{
    console.log("error");
}*/

 
                            //--- || ----//





/*let isKhubsoorat = false;
let isAmeer = false;
if(isKhubsoorat || isAmeer)
{
    console.log("Rishta Pakka!!!");
}
else{
    console.log("Rejected");
}*/

       

                  //----- if, if-else, if-else-if ----//



                          

/*let myPercentage = 40;

if(myPercentage >= 90) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 70) {
    console.log("Your Grade is A");
}
else { 
    console.log("Fail");               //Your Grade is Fail//
}*/
       


                            

/*let myPercentage = 70;

if(myPercentage >= 90) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 70) {
    console.log("Your Grade is A");
}
else { 
    console.log("Fail");                //Your Grade is A//
}*/

  



/*let myPercentage = 90;

if(myPercentage >= 90) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 70) {
    console.log("Your Grade is A");
}
else if(myPercentage >= 60) {
    console.log("Your Grade is B");
}
else { 
    console.log("Fail");                  //Your Grade is A+//

}*/



        

  /* let myPercentage = 61;

   if(myPercentage >= 90) 
   {
       console.log("Your Grade is A+");
   }
   else if(myPercentage >= 70) {
       console.log("Your Grade is A");
   }
   else if(myPercentage >= 60) {
       console.log("Your Grade is B");
   }
   else { 
       console.log("Fail");                    //Your Grade is B//
   }*/



      
   //condition is false because of OR operator. put AND opertor//

/*let myPercentage = 101;
if(myPercentage >= 90 || myPercentage <= 100) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 70) {
    console.log("Your Grade is A");
}
else if(myPercentage >= 60) {
    console.log("Your Grade is B");
}
else { 
    console.log("Fail");
} */

                 // Your Percentage is above 100 //

/*let myPercentage = 101;

if(myPercentage >= 90 && myPercentage <= 100) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 80 && myPercentage <= 69 ) {
    console.log("Your Grade is A");
}
else if(myPercentage >= 69 && myPercentage <=54) {
    console.log("Your Grade is B");
}
else { 
    console.log("Your Percentage is Above 100");
}*/


      // A+ //

/*let myPercentage = 101;

if(myPercentage >= 90 ) 
{
    console.log("Your Grade is A+");
}
else if(myPercentage >= 80 ) {
    console.log("Your Grade is A");
}*/
/*else if(myPercentage >= 69 && myPercentage <=54) {
    console.log("Your Grade is B");
}
else { 
    console.log("Your Percentage is Above 100");
}*/





            //---------TERNARY OPERATOR--------//


/*let age = 19;  //you are allowed//

let result = age >= 18 ? "You're Allowed"  : "You're not Allowed"

console.log(result);*/



/*let age = 17;  //you are not allowed

let result = age >= 18 ? "You're Allowed"  : "You're not Allowed"

console.log(result);*/
 






                          //------------------CLASS 03-------------//






// function greet(message = "hello world"){
    
//     return message;
    
// }

// let result = greet("hello hamzah");
// console.log(result);

// let greet = () => ["hello world"];

// let result = greet();
// console.log(result);







                               //---------------CLASS 04-------------//





// let age = 18

// if(true){
//     let age =17;
//     console.log(age);
// }
// console.log(age);









                            ///--------------INQUIRER-------------///


        // let examSheet = {
        //     name: "mirza",
        //     rollNmumber: 1234,
        //     subject: "computer" }
        
        // // console.log(examSheet);
        // console.log(examSheet.name,examSheet.rollNmumber)


                                ///--------------MODULES-------------///
            

// import inquirer from "inquirer";


// let answer = await inquirer.prompt(
    
//     {
//         name: "q1",
//         message: "what is your name?",
//         type: "input"
//      },
//      {
//         name: "q2",
//         message: "what is your gender?",
//         type: "list",
//         choices: ["male", "female"]
//      }
// )


// console.log(`hello, i am ${answer.q1} and my Gender is ${answer.q2}`);



        



                                  //---------------CLASS 05-----------------//






     ////////----------------OBJECTS-------------/////


       // Data Types And values //

// // let user1 : {
// //     name: string;
// //     age: number;       //-----data type---//
// //     role: string;
// // };

// type User =  { 
//        name: string;
//        age: number;      
//        role: string;   
//        children? :{ 
//         name: string;         //-------- put ? for optional---------//
//         age: number;
//        };
// };
// let user1: User = {
//     name: "Ghazanfar",
//     age:23,              //-----value------//
//     role: "father",
//     children:{
//         name:"Hunain",
//         age:5,
//     }
// };
// // let user2: User = {
// //     name: "Ali",
// //     age:25,              //-----value------//
// //     role: "father",  
// //      children:{
// //         name:"Hassan",
// //         age:6,
// //     }
// // };
// console.log(user1.children?.age);
// // console.log(user2.children);











          //----------Type Literal--------//

          // '|' Union //

        //   let trafficlight: "Red" = "Red";    // colon : ky baad type literal ha, Red ky ilaawa koi or colour ni likh skty//
        //   let trafficlight: "Red" = "Yellow";    // Error //
        //   let age:18 = 20;


        // let trafficlight: "Red"|"Yellow"|"Green" = "Red"
        // let age:string|number = 'fourteen'





        // type Student = {
        //     name: string;
        //     rollNumber: number;
        // };
        // type Teacher = {
        //     name: string
        //     exp: number
        // };

        // let student1: Student = {
        // name :"Ammar",
        // rollNumber: 1234
        // };


        // let teacher1: Teacher = {
        // name: "Hamzah",
        // exp: 10
        // };
        //                // '&' Intersection  , With the help of intersection we can add,join both data types //
        // let both1: Student & Teacher = {
        // name: "Zaid",
        // exp: 25,
        // rollNumber:4321,
        // }; 

        // let drinks: "tea"|"coffee"|"lassi"|"water"










                             //----------------CLASS 06-------------------//







                             ///////------ ARRAYS -----------/////


                     //  0        1        2        3         4      5       //  
// let fruits:string[] = ['mango','orange','kiwi', 'grapes', 'apple', 'banana']


// fruits.pop()

// console.log(fruits)  //pop is used for remove element from last

// fruits.push('pineapple')

// console.log(fruits)     // push is used for add element in last


// let f1 = fruits.pop()    //if you want to know what is pop returning then you put varable'f1'

// fruits.pop()



// let f2 = fruits.push() //if you want to know what is push returning then u put this variable 'f2'

// console.log(fruits)



// console.log(fruits.length)   //if u want to check length of list
 


// fruits.shift()   //shift is used for remove first element of list  while pop is used for remove element from last

// console.log(fruits)


// fruits.unshift("peach")  //unshift is used for add first element in list while push is used for add last element in list

// console.log(fruits[3])   // it first adds peach in first of list that's why it prints 'kiwi' 
// while before adding peach kiwi is on 2 number but after add peach kiwi is on 3 number //


// fruits.unshift()

// console.log(fruits[3]);  // it prints the element that is present on number 3 'grapes'


//fruits.slice   // slice is used for copy array

// let copiedFruits = fruits.slice(1,4)  //  [ 'orange', 'kiwi', 'grapes' ]

// console.log(copiedFruits)



// fruits.splice(1,4)   // 1st and 4th number of element is include
                     // splice is used to remove elements from list which u want to remove

// console.log(fruits)  // [ 'mango', 'banana' ]

/* fruits.splice(2,0, "guava") */   /* [
    'mango',  'orange',
    'guava',  'kiwi',
    'grapes', 'apple',
    'banana'
  ] */

// console.log(fruits) 


// fruits.splice(1,2,'strawberry')    // it removes 1 and 2 and replace to their place

// console.log(fruits)  // [ 'mango', 'strawberry', 'grapes', 'apple', 'banana' ]





// *--------------------------------------------------------------------------------------*//


            //-----------------TUPLE---------------//

// you tell to tuple about limit

// let fruits: [string,number] = ["Hamzah", 22]




                 //       0         1         2        3         4

                 //We want to remove orange and apple

// let fruits:string[] = ['mango', 'orange', 'kiwi', 'grapes', 'apple']
// fruits.splice(1,1)&&fruits.splice(3,1)

// console.log(fruits)   // [ 'mango', 'kiwi', 'grapes' ]   


        //----------2nd method-------------//

//  //       0         1         2        3         4
//  let fruits = ['mango', 'orange', 'kiwi', 'grapes', 'apple']
//  fruits.splice(1,1)
//  fruits.pop()
 
//  console.log(fruits)   // [ 'mango', 'kiwi', 'grapes' ]
                 


// we want to remove orange and replace at their place 'strwaberry,banana.

//       0         1         2        3         4
// 








                          //--------------CLASS 07------------//





                                       ////--------------- ENUM --------------///

// enum color {
//     Red,     //0
//     Green,   //1
//     Yellow,  //2
// }

// console.log(color["Yellow"])     //1st method for use of enum '[]'
// console.log(color.Yellow)      //2nd method 
// console.log(color[2])  //Yellow        //3rd method
// let trafficLight: color = color.Yellow
// console.log(trafficLight)


// enum color {
//     Red = 2,     //0      //if you want to set index number then write this 'red = 2', it will increase next color number to '3'
//     Green,   //1
//     Yellow,  //2
// } 

// enum login{
//     Google,
//     Facebook,
//     Apple,
// }


// enum color {
//     Red,
//     Green = 2,
//     Yellow,

// }
// let trafficLight:color= color.Red;

// if (trafficLight == color.Red)
    
//     console.log("Stop!!!!")








                             //----------------CLASS 08------------------//



                        

    // for (let i = 0; i <= 3; i++) {
//   console.log("Sorry!!!!");
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(i)
//     }
//     console.log()
// }
// let Fruits=["Apple","Mango","Banana"]
// // console.log(Fruits[2])
// for(let i=0;i<Fruits.length;i++){
//     console.log(Fruits[i])    
// }

// let i=1;
// while(i<=5){
//     console.log(i)
//     i++
// }
// let age:any








                            //----------------CLASS 09----------------//





                                   ///---------------- TOFIXED------------///        

              //  .TOFIXED is used for add digits after decimal 


// let price = 18;
// console.log(price.toFixed(5))    //18.0000

// let age : unknown;


// age = 18;

// (age as number).toFixed(2)   //Method 1
// let newAge= age as number    //Method 2
// (<number>age ).toFixed(2)     //Method 3


// console.log((age as number).toFixed(2))




                 ///-------------Rest Parameters---------///


// function sum(...rest:number[]){

//     let total:number=0

//     for(let i=0;i<rest.length;i++){
//         total += rest[i]
//     }

//     console.log(total)

//     // console.log(rest)


// }

// sum(10,20,30)








// function sum (arg1:number  ,arg2:number) :number
// function sum (arg1:string  ,arg2:string) :string
// function sum (arg1:number  ,arg2:string) :string
// function sum (arg1:any  ,arg2:any) :any{
//     return arg1 + arg2
// }
// sum(1,1)

                           









                         //------------------CLASS 10-----------------//





// let a ="haMzah";

// let b = a.toLowerCase()    //hamzah

// console.log(b)

// let a ="hamzah";

// let b = a.toUpperCase      //HAMZAH

// console.log(b)


// let a = "hamzah";

// let b = a[0].toUpperCase() + a.slice(1)      //Hamzah

// console.log(b)

                   //Narrowing



// let a:  string | number;

// a=10.52;        

// let b = a.toFixed(3)

// console.log(b)          //10.520


                 // Tell the types of data


// let num1 = 18;

// console.log(typeof num1 == "boolean")   //false


// let num1 = 18;

// console.log(typeof num1)   //number


// let num1 = "hamzah";

// console.log(typeof num1)   //string



                //Generates the random number


// let random= Math.random()

// console.log(`My random number is ${random}`)


// let a= random > 0.6 ? "Hamzah" : 16

// console.log(a)       // if answer is less than 0.6 then print Hamzah otherwise print 16





// let random= Math.random()

// console.log(`My random number is ${random}`)


// let a= random > 0.6 ? "Hamzah" : 16


// if(typeof a === "string"){

// console.log("Narrowing to string")

// }
// else{
//     typeof a=== "number"
//     console.log('Narrowing to number')
// }



// let age:null | number = null;

// let salary:null | number = null;

// console.log(age)

                          /////-------------Type Areas----------------//////
// interface address{
//     city:string;
//     state:string;

// }
// interface  User{

//     name:string;
//     age:number;
//     address: address
// }

// let User1: User = {
// name:"hamzah",
// age : 23,
// address:{
//     city: "karachi",
//     state: "pakistan",
// }
// }

// console.log(User1)



// interface Deal1{
//     food:string

// };

// interface Deal2{
//     food:string
//     drink:string
// };

// let muddassirOrder: Deal1= {
//     food:"Burger",

// };
  
// let muhammadOrder: Deal2={
//     food: "Biryani",
//     drink: "sting"
// }
// let muddassirTable: Deal1 = muhammadOrder;

// console.log(muhammadOrder)

// let muhammadTable: Deal2 = muddassirOrder;

// console.log(muddassirOrder)









                           //------------------CLASS 11-------------------//







// console.log("First")

// setTimeout(() => {
//     console.log("Second")
    
// }, 3000);

// console.log("Third")

// type Fn = () => void;


// function orderPizza ( preparePizzaCb: Fn)
// {
//     setTimeout(() => {
//        console.log("Order Placed")
//        preparePizzaCb()
//     }, 2000); 
//     }

// function preparePizza(){
//         setTimeout(() => {
//             console.log("Prepared Pizza")
//         }, 5000);
//      }
//     orderPizza( preparePizza );



// function checkMarks(){
//     return new Promise((resolve, reject) => {
//         let marks = 89;
//     setTimeout(() => {
    
//         if(marks>= 90){
//                resolve("Partyyy!!");
//         }
//         else{
//                reject("No Partyyy!!")
//         }

//      }, 5000);

//     });
// }
     
// checkMarks().then(()=>{
//     console.log("Partyyy!!")
// }).catch((err)=>{
//     console.log(err)
// })


// await checkMarks()













                     //------------------CLASS 12-------------------//








               //--------------------OOP-----------------///



//  class House {
//     ownerName : string;
//     address: string;
//     // readonly address : string;    // If you dont want to change address out of class
//     // readonly is used for which object you dont want to change
//     // numberOfDoors: number=2;
    
//     constructor(name: string,ads :string,) {
//         this.ownerName = name;
//         this.address = ads;
//         }

//      bell(){
//      console.log(this.address,"Ding Dong");   // we use "this.address" for print bell wuth address"
//      }

//  }      
 
// //  h1.address = D321;   //there is eror cuz of readonly
// // console.log(h1.address);

//  let h1 = new House("Hamzah", "A123");  //Hamzah
//  let h2 = new House("Umar", "B123");  // Umar
//  let h3 = new House("Noor", "C123");   //Noor

// //  console.log(h1["address"])     //Method 1
// //  console.log(h3)        //Method 2

// h1.bell()  //A123 Ding Dong
// h2.bell()  //B123 Ding Dong
// h3.bell()  //C123 Ding Dong                   







                             //----------------CLASS 13(LAST CLASS)--------------//





               //------------INHERITANCE--------------//




// class Animal {
//     name : string;
//     constructor(aniName :string){
//         this.name = aniName;
//     }

//     eat(){
//         console.log("Eating");
//     }
//     }

//         class Cat extends Animal {
//             eyeColor: string;

//             constructor(name:string, color:string){
//                 super(name)

//                 this.eyeColor = color
//             }

//       meow(){
//       console.log("Meow Meow!");
//    }

// }

// let c1 = new Cat("Tun Tun!","blue");
// console.log(c1.name)




// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log("general sound!");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("meow meow");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("tommy");
//   }
// }

// let d1 = new Dog("tommy");
// d1.makeSound();

// let c1 = new Cat("Tun Tun");
// c1.makeSound();




// class Parent {
//   public parentName: string = "Osama";
//   private secret: string = "xyz";
//   protected cardPinCode: number = 1234;
//   getSecret() {
//     this.secret
//   }
// }

// class Children extends Parent {
//   name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   getInfo(){
//     this.cardPinCode
//   }
// }

// let c1 = new Children("Ali");





               ///-------------INTERFACE---------------///





// interface IDraw {
//     draw:() => void;
//     color: () => void
// }


// class Circle implements IDraw{
// draw() {
//     console.log("Drawing Circle")
// }
// color(){
//     console.log("Red")
// }
// }

// class Triangle implements IDraw{
// draw() {
//     console.log("Drawing Triangle")
// }
// color(){
//     console.log("Yellow")
// }
// }




                            


