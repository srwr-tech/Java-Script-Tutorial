// Hoisting

                        // sum(3,5);   
                        // function sum(a,b){
                        //      add=a+b;
                        //     console.log(add);
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

                        // function multiplyBy(factor) {
                        //     return function (num) {
                        //     return num * factor;
                        //     };
                        // }
                        
                        // // Create a function that multiplies by 5
                        // const multiplyBy5 = multiplyBy(5);  
                        // console.log(multiplyBy5(6));
                        

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


                        function prom(complete) {
                            return new Promise(function(resolve, reject) {
                            console.log("fetching data, Pls wait");
                            setTimeout(() => {
                                if (complete) {
                                resolve("i am successful");
                                } else {
                                reject("I am failed");
                                }
                            }, 3000)
                            });
                        }
                        
                        async function fetchData() {
                            try {
                            const result = await prom(true);
                            console.log(result);
                            }
                           catch (error) {
                            console.log(error);
                            }
                        }
                        
                        fetchData();

                        //second method
                        async function fetchProducts() {
                            try {
                                const response = await fetch('https://fakestoreapi.com/products');
                                if (!response.ok) {
                                    throw new Error('Failed to fetch data');
                                }
                                return await response.json();
                            } catch (error) {
                                console.error('Error fetching data:', error);
                                throw error;
                            }
                        }
                        
                        // Fetch data and handle errors
                        async function fetchData() {
                            try {
                                console.log("Fetching data, please wait...");
                                const products = await fetchProducts();
                                console.log('Fetched products:', products);
                                console.log('Data fetched successfully');
                                return products;
                            } catch (error) {
                                console.error('Error fetching data:', error);
                                throw error;
                            }
                        }
                        
                        // Call fetchData function to fetch products from the API
                        fetchData();
                        
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
  

               

 // setTimeout() and setTime Interval
         
                        // function sarwar(name,roll_no){
                        //         console.log("hello " + name +" "+roll_no);}
                        //         time_out=setTimeout(sarwar,5000, "alam", "5");
                        //         console.log(time_out);                               // it will provide setTime out Id
                        // interval_Id= setInterval(sarwar,3000,"Sarwar","5");          // print same o/p contineously
                        // clearInterval(interval_Id)                                   // when you want to clear interval means stop interval time

        // Memoization

                        // let sum=0;
                        // const clac=(n)=>{
                        //     for(let i=0;i<=n;i++){
                        //         sum+=i;}
                        //         return sum;}
                        // const memoize =(fun)=>{
                        //     let cache={};
                        //     return function (...args){
                        //         let n=args[0];
                        //         if (n in cache){
                        //             console.log("cache");
                        //             return cache[n];}
                        //         else {
                        //             console.log("calculating first time");
                        //             let result=fun(n);
                        //             cache[n]=result
                        //             return result;    
                        //             }}}
                        //     console.time();
                        //     const efficient=memoize(clac);
                        //     console.log(efficient(5));
                        //     console.timeEnd();

                        //     console.time();
                        //     console.log(efficient(5));
                        //     console.timeEnd();

        //Debouncing
                        // <body>
                        //     <input type="text" onkeyUp="betterfunction ()" />
                        
                        // </body>
                        // let counter=0;
                        // const getdata=()=>{
                        //    console.log("fetching data "+ counter++);
                        // }
                        // function debounce(fn,delay){
                        //    let timer;
                        //    return function (){
                        //        if(timer) clearTimeout(timer);
                        //       timer= setTimeout(()=>{
                        //                fn();
                        //            },delay)
                        //        }}    
                        //    const betterfunction=debounce(getdata,500); 


        //Throatling
        // <body>
        //                 <input type="text" onchange="betterfunction"/>
        //                 <button id="myid" onclick="newfun()">Click me</button>

        //<script>

                        // function mythroat(fn, delay) {
                        //     return function () {
                        //         document.getElementById("myid").disabled = true;
                        //         setTimeout(() => {
                        //             fn();
                        //         }, delay);
                        //     };
                        // }
                        // const newfun=mythroat(()=>{
                        //     document.getElementById("myid").disabled=false
                        //     console.log("user Clicked");
                        // },3000);

        // </script>
        // </body>


// Event Bubbling
                        // <title>Document</title>
                        // <style>
                        //     body{
                        //         background-color: aqua;
                        //         padding: 100px;
                        //     }
                        //     #myDiv{
                        //         padding: 50px ;
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