// Hoisting

                        // sum(3,5);   
                        // function sum(a,b){
                        //      sum=a+b;
                        //     console.log(sum);
                        // }
    
// Clouser
                        // const outer_fun=(a)=>{
                        //     let b=10;
                        // const inner_fun=()=>{
                        //     let sum=a+b;
                        //     console.log("the sum of a & b is : " + sum);
                        // }    
                        // inner_fun();
                        // }
                        //  outer_fun(8);

                        // function hello(x) {
                        //     const a = "varA";
                        //     const b = "varB";
                        //     return function () {
                        //         console.log(a, b, x);
                        //     }
                        // }
                        // const ans = hello("arg");
                        // ans();

 // Higher order function

                        // const x=()=>
                        // console.log("Hello, I am first order");
                        // const y=(returnx)=> returnx();
                        // y(x);   

// Call Back function
    
                        // function fun1 (name){
                        //     console.log("Hello " + name);}
                        // function fun2 (call_back){
                        //     let name=prompt("Your name");
                        //     call_back (name);
                        // }    
                        // fun2(fun1)
                        
                            //or
                        //     function fun1 (){
                        //     console.log("Hello ")}
                        // function fun2 (call_back){
                        //     console.log("hi call back function");
                        //     call_back ();
                        // }    
                        // fun2(fun1)

// Promises

                        // function prom (complete){
                        // return new Promise(function(resolve, reject){
                        //     console.log("fetching data, Pls wait");
                        //     setTimeout(()=>{
                        //         if(complete){
                        //         resolve("i am sucessful");
                        //     }else{
                        //     reject("I am failed");}},3000)});}

                        // let onfulfillment=(result)=>{
                        //     console.log(result);}
                            
                        // let onRejection=(error)=>{
                        //     console.log(error);}
                        // prom(true).then(onfulfillment).catch (onRejection);  


// Async & Await

                        




// API
                        //     fetch ("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
                        //     .then((response)=>response.json())
                        //     .then((data)=>{console.log(data);
                        //     for(var x in data){
                        //         document.write(`${data[x].name}- <br> <br> ${data[x].city} <br>`);}})
                        //    .catch(()=>document.write("can not fetch data")); 
            
//API in table
          
                        // <!DOCTYPE html>
                        // <html lang="en">
                        // <head>
                        //     <meta charset="UTF-8">
                        //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        //     <title>Document</title>
                            
                        // </head>
                        // <body>
                        //     <div class="container">
                        //         <table class="table" border="1">
                        //             <thead>
                        //             <tr>
                        //                 <th>ID</th>
                        //                 <th>Employee Name</th>
                        //                 <th>Salary</th> 
                        //             </tr>
                        //             </thead>
                        //             <tbody id="data">
                                
                        //             </tbody>
                        //         </table>
                        //         </div>
                        //         <script>
                        //         fetch("http://dummy.restapiexample.com/api/v1/employees").then(
                        //     res => {
                        //     res.json().then(
                        //         data => {
                        //         console.log(data.data);
                        //         if (data.data.length > 0) {
                        
                        //             var temp = "";
                        //             data.data.forEach((itemData) => {
                        //             temp += "<tr>";
                        //             temp += "<td>" + itemData.id + "</td>";
                        //             temp += "<td>" + itemData.employee_name + "</td>";
                        //             temp += "<td>" + itemData.employee_salary + "</td></tr>";
                        //             });
                        //             document.getElementById('data').innerHTML = temp;
                        //         }
                        //         }
                        //     )
                        //     }
                        // )
                        //         </script>
                        // </body>
                        // </html>

// Make a table and fill it using prompt
                          
                        // <table id="myTable" border="1">
                        // <tr>
                        // <td>Row1 cell1</td>
                        // <td>Row1 cell2</td>
                        // </tr>
                        // <tr>
                        // <td>Row2 cell1</td>
                        // <td>Row2 cell2</td>
                        // </tr>
                        // <tr>
                        // <td>Row3 cell1</td>
                        // <td>Row3 cell2</td>
                        // </tr>
                        // </table>
                        // <form>
                        // <input type="button" value="Change content">
                        // </form>

                        // <script>
                            
                        // let button = document.querySelector('input');
                        // button.addEventListener('click', changeCell);

                        // function changeCell() {
                        // let row = window.prompt('enter row: ') - 1 ;
                        // let column = window.prompt('enter column: ') - 1;
                        // let newValue = window.prompt('enter new value');
                        // document.querySelectorAll('tr')[row].children[column].textContent = newValue;
                        // }
                        // </script>
  


// call,bind & Apply
                        // let name1={
                        //     first_name:"Sarwar",
                        //     last_name:"alam"
                        // }
                        // let printobj=function(age,city){
                        //     console.log(this.first_name + " "+ this.last_name,age,city);
                        // }
                        // let name2={
                        //     first_name:"Md Sarwar",
                        //     last_name:"Ali"
                        // }


        // Call         Call method used to borrow a function from other object and use the data of other object  
                          
                            //printobj.call(name1,"27","mumbai");
                    

        // Apply
                        // It is same as call method oly difference is instead of passing argument indivisually in call method
                        // in apply method we pass these argunment in array list;

                            //   printobj.apply(name1,["27","mumbai"])
        // Bind     
                        // Bind method does not directly invoked method but gives you a copy of the exactly same    method which can be invoked later.
                        

                        // let mybind=printobj.bind(name2,"mumbai","25");
                        // mybind(); // need to call function in bind                    

 // setTimeout() and setTime Interval
         
                        // function sarwar(name,roll_no){
                        //         console.log("hello " + name +" "+roll_no);}
                        //         time_out=setTimeout(sarwar,5000, "alam", "5");
                        //         console.log(time_out); // it will provide setTime out Id
                        // interval_Id= setInterval(sarwar,3000,"Sarwar","5"); // print same o/p contineously
                        // clearInterval(interval_Id) // when you want to clear interval means stop interval time


// Event Bubbling
                        // <title>Document</title>
                        // <style>
                        //     body{
                        //         background-color: aqua;
                        //         padding: 100px;
                        //     }
                        //     #myDiv{
                        //         padding: 50px;
                        //         background-color: blue;
                        //     }
                        // </style>
                        // </head>
                        // <body>
                        // <div id="myDiv">
                        // <button id="btn">Click me</button> </div>
                        // <script>
                        //     let d=document.getElementById("myDiv");
                        //     let b=document.getElementById("btn");
                        //     b.addEventListener('click',btnclicked,true);
                        //     d.addEventListener('click',divclicked,true);
                        //     document.body.addEventListener('click',bodyclicked);
                        //     function btnclicked(){
                        //         console.log("button clicked: ")
                        //         event.stopPropagation()
                        //     }

                        //     function divclicked(){
                        //         console.log("div clicked: ")
                        //     }

                        //     function bodyclicked(){
                        //         console.log("body clicked: ")
                        //     }


// Iterator

                        // function fruit_Iterator(value){
                        //     let next_Index=0;
                        //     return{
                        //         next:function(){
                        //             if(next_Index<value.length){
                        //                 return{
                        //                     values:value[next_Index++],
                        //                     done:false }}
                        //                 else{return{done:true}}}}}
                        // const myArray=["Apple","grapes","Banana"];
                        // console.log("My Array is : ",myArray);

                        // // Use Iterator
                        // const fruits=fruit_Iterator(myArray);
                        // console.log(fruits.next());
                        // console.log(fruits.next);


                   
// Iterators

                        // function fruitsIterator(values) {
                        //     let nextIndex = 0;
                        //     // we will return an object
                        //     return {
                        //         next: function () {
                        //             if (nextIndex < values.length) {
                        //                 // We will return below object
                        //                 return {
                        //                     value: values[nextIndex++],
                        //                     done: false
                        //                 }
                        //             }
                        //             else {
                        //                 // We will return below object with only done
                        //                 return {
                        //                     done: true
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }


                        // const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
                        // console.log("My array is ", myArray)

                        // // Using the iterator
                        // const fruits = fruitsIterator(myArray);
                        // console.log(fruits.next().value)
                        // console.log(fruits.next().value)
                        // console.log(fruits.next().value)
                        // console.log(fruits.next().value)
                        // console.log(fruits.next().value)


// Generator        Iterator and generator is not clear
                        // function numberGen(){
                        //     let i=0;
                        //     yield 1;
                        //     yield 2;
                        //     while(true){
                        //         yield i++;}}
                        //     const gen=numberGen();
                        //     console.log(gen.next().value);
                        //     console.log(gen.next().value);                        