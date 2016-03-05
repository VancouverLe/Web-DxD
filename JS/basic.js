var a = 1;
//a is a integer
var b = 0.5;
//b is a float
var c ="webdxd";
//c is a string
console.log("this is my first js file");
console.log(a);
console.log(b);
console.log(c);
var d = "1";
console.log(d);
var arr = [1,'learn',3,5];
console.log(arr);
console.log(arr[0]);
console.log("i " + arr[1]);
var myQuote ="i learn";
console.log(myQuote);
a =8;
a = a+b;
//add a(1)to b(.5) and put the result to a 
 console.log(a);
 var bool = true;
 bool = !true;
 var istrue= !bool;
 console.log(!bool);
 arr =[istrue, a, b, c];
 console.log(arr);
 a =11; 
b=2;
 b= a%b;
 console.log(b);
 var book1 = {
 	title: "harry potter", 
    price: 29,
    description: "a boy who knows magic",
    section: ["section1", "section2"]
}
 	 console.log(book1);
 	 console.log(book1.title);
 	 console.log("title:" + book1.title);
 	 console.log("price:     " +book1.price);
 book1.price = book1.price + 1;

 book1.price += 2;
 //increment  by a number
 book1.price ++;
 //increment by 1
 var book2 = {
 	title: "lord of ring", 
    price: 80,
    description: "a boy who have ring"
}
var bookStore=[book1, book2]
console.log(bookStore);
console.log(bookStore[0].section[0]);












