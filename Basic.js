// Trim

                // let str= "   Sarwar    "
                // let newTrim=str.trim();
                // console.log(newTrim.length);
                
    
//to Upper Case

                // console.log(str.toUpperCase());

//to lower case
    
                // console.log(str.toLowerCase());

//Slice
                // it will use to remove element from array .slice(2,4) it means first element is indicate starting of removed elemet and second element indicate till that element will remove
    
                //  let arr=["mango","apple","banana","pineapple"]
                // console.log(arr.slice(1,3));
                // let bbw=arr.substring(1,3)
                // console.log(bbw);

// Splice

                // let arr1=["sonu","monu","titu","pillu"]
                // console.log(arr1.splice(1,3))

//concat
                    // let str="sarwar"
                    // let arr="alam"

                    // console.log(str.concat(" " +arr))
                    // console.log(str+ " "+arr);

//Math.floor give lower inter value (1.6=>1 ,1.9=>1)
//Math.random gives you randow value in decimal also
                //     let sum=Math.floor(Math.random()*10 )
                //     console.log(sum);
// conditional statement                
                    // let x=9
                    // if (x==10) {
                    //     console.log("true");
                    // }
                    // else{
                    //     console.log("false");
                    // }

//Ternary Operator
                    // var x=6;
                    // var y=(x>15)? "cold drink" :"juice"
                    // console.log(y);

//Switch Case
     
                    // var x=3;

                    // switch (x) {
                    //     case 1:
                    //        console.log("hajrat"); 
                    //         break;
                    //     case 2:
                    //     console.log("sarwar");    
                    //         break;    
                    //     case 3:
                    //     console.log("alam");    
                    //         break;
                    //     default:
                    //     console.log("this is default value");
                    //         break;
                    // }
    
//Sort Array
                    //let arr=["sonu","monu","titu","pillu"]
                        // console.log(arr);
                        // console.log(arr.sort());
                    // correct Method                    
                        //let arr=[1,4,8,4,1,5,7,5,3,57,9]
                        //  let brr=arr.sort()
                        //     console.log(brr);
                        //     arr.sort((a,b)=>{
                        //         return a-b;
                        //     })
                        //     console.log(arr);
// push method in array ==> push method will use to add element in last of array
                        // console.log(arr);
                        // arr.push("sarwar")
                        // console.log(arr);
// pop method in array will remove elemet in last and also return deleted element
                 
                        //   let pop1=arr.pop();
                        //   console.log(arr); 
                        // console.log(pop1); // pop returing deleted elemet also

// Shift & unshift
                        //unshift is use to add many element in starting of array
                        // arr.unshift("banana", "sarwar")
                        // console.log(arr);
// shift is use to remove elemet from starting
                        // arr.shift("sarwar")
                        // console.log(arr);

// Replace
                        // let str="this is sarwar"
                        // var replaced= str.replace("sarwar","repalace from sarwar")
                        // console.log(replaced);


// CharAt
    
                        // let arr="sarwar"
                        // let neww=arr.charAt(2);
                        // console.log(neww);
           
// IndexOf      // first occurance of substring                
                        // var str= "this is a q q string"
                        // var position=str.indexOf("q")
                        // console.log(position);
                        // last occurance of substring 
                        // var occ=str.lastIndexOf("q")
                        // console.log(occ);               
// fill method

                        // let arr=[1,4,5,7,8,5] 
                        // let brr=arr.fill(0,2,4) // (value which will changed, starting of index, end)
                        // console.log(brr);       
 // Splice method use to delete and insert element in array
                        // let arr=[2,3,4,6,7,8,9]
                        // let brr=arr.splice(1,3) // starting of index, till delete index
                        // console.log(brr); // 3,4,6 is available other deleted
                

// Loop 

        // for loop

                        // let i=0;
                        // for(i=1;i<=10;i++){
                        //     console.log(i);
                        // }

    

                         let frnd=["sarwar","srwr","alam","md"];
        // for each loop

                        // frnd.forEach(function (str) {
                        // console.log(str);
                                //})
                        //or
                                // frnd.forEach(str=>console.log(str))
                        //or
                                // const sarwar=[
                        //     {name:"sarwar", age:"27", gender:"male"},
                        //     {name:"alam", age:"28", gender:"female"},
                        //     {name:"Md", age:"29", gender:"male"},
                        //     {name:"srwr", age:"30", gender:"male"}
                        // ]
                        // sarwar.forEach(function (str){
                        //     console.log(str.name);
                        // })
                        // sarwar.forEach(str=>console.log(str.name))
        // for off       
                        for (str of frnd){
                        console.log(str);
                             }

        // for in loop   ==> for in loop mostly used in object

                        for(let index in frnd){
                            console.log(frnd[index]);
                        }
         
        // while loop
                        // let i=0;
                        // while (i<10) {
                        //     console.log(i);
                        //     i++;
                        // }
        // Do while loop  run atleast one
                        // let i=0;
                        // do{
                        //     console.log(i);
                        //     i++;
                        // }      
                        // while(i<5)             

// Array Destructuring

                        //let var1=["mango", "banana" ,"apple","juice","coconut"]
                        // let [myvar1,myvar2]=var1
                        // console.log(myvar1);
                        // console.log(myvar2);

                        // let [mynew1, ,mynew2]=var1  // if you want to store 3rd element in mynew2, it mean to skip second element, just need to use space between two veriable
                        // console.log(mynew1);
                        // console.log(mynew2);

        // To create new array from other array
        // 1st method using slice method
                        
                        // let newarr=var1.slice(1,4)
                        // console.log(newarr);
        
// Spread operator

                        // let [myvar1,myvar2,...newArray]=var1
                        // console.log(myvar1);
                        // console.log(myvar2);
                        // console.log(newArray);

// Object destructuring

                        // let person={
                        //     name:"sarwar",
                        //     age:"26",
                        //     gender:"Male"
                        // }
                        // console.log(person.name);
                        // console.log(person.age);
                        // console.log(person.gender);

                        // person.mood="ok"
                        // console.log(person.mood);
    
// function

                        // function sum (num){
                        //     if (num<10) {
                        //         return true;
                        //     }
                        //     return false
                        // }
                        // console.log(sum(11))

// Rest Parameter
    
                            // function sum (...sum1){
                            //     console.log(sum1);
                            // }
                            // sum(1,2,3,5,6,7) // you can add as mamy as value
            // function sum(...total){
            // let result=0
            // for(let i=0;i<total.length;i++){
            // result+=total[i];}
            // console.log(result);
            // }            
            // sum(2,8)

       
                

// Map function  
         //map function is use to transform an array by creating new array.

                // const arr=[3,5,3,2,5] 
                // function double(number){
                //     return number*2;
                // }      
                // const output=arr.map(double);
                // console.log(output) ;
            
            //or
                // const sarwar=[
                //     {name:"sarwar", age:"27", gender:"male"},
                //     {name:"alam", age:"28", gender:"female"},
                //     {name:"Md", age:"29", gender:"male"},
                //     {name:"srwr", age:"30", gender:"male"}
                // ]     
                // const username=sarwar.map((str)=>{
                // return str.name;})
                // console.log(username); 
// filter
        // it create a new array by removing element that not belongs to.


                // const arr=[3,5,3,2,5] 
                // function double(number){
                //     return number>4;  // only change return condition and .filter
                // }      
                // const output=arr.filter(double);
                // console.log(output) ;

// Reduce 
        // it takes all element in an array and reduce them into a single value

                // const arr=[3,5,3,2,5]
                // const output=arr.reduce(function (acc,curr){
                //  acc=acc*curr;
                //  return acc;},0)
                // console.log(output);

//  delete Unique or duplicate value

                    // let arr=[1,2,3,4,2,2,5,6,8]
                    // let brr= new Set(arr)
                    // console.log(brr);

         

// function currying using bind method
         
                    // let sum=function (x,y){
                    //     console.log(x*y);
                    // }
                    // let sum1=sum.bind(this,2)
                    // sum1(3);

// This Keyword
         
                //  const sarwar={
                //         name:"Sarwar",
                //         age:"34",
                //         gender:"male",
                //         sum:function (){
                                
                //                 console.log(this);
                //         }
                // }
                // sarwar.sum();

// Shadowing
                //  var a=100;
                //  {var a=10}
                //  console.log(a);       

// Deep copy
         
                // let details ={
                //         name:"Sarwar",
                //         age:"27",
                //         branch:"Ec"
                // }
                // var details_deep_Copy ={
                //         name:details.name,
                //         age:details.age,
                //         branch:details.branch
                // }

// Shallow copy
        
                // var emp_details={name:"sarwar",
                //                 age:"26",
                //                 branch:"EC"}
                // var emp_details_shallowcopy=emp_details;                

// IIFE
                    // (function(){
                    //     var name="sarwar"
                    //     console.log("my name is " + name);
                    // })()
        
         