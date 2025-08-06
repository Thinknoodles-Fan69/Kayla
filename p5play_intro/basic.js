function setup() {
  // write your codes here

  // --- Exercise: Area of Triangle ---
  // write your codes here

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here

  // --- Exercise: Age category classification ---
  // write your codes here

  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here

  // --- Exercise: Array operations (groceries) ---
  // write your codes here

  // let a = 5;
  // let b = 10;
  // let sum = a + b;
  // let product = a * b;
  
  // console.log(sum);
  // console.log(product);

  // fill(0, 255, 255);
  // textSize(14);
  // text("The sum of a and b is " + sum, 50, 50);
  // text("The product of a and b is " + product, 50, 100);

  // let base = 10;
  // let height = 5;
  // let area = base * height * 0.5
  // console.log(area);
  // text(" The area of the triangle is " + area, 50, 50)








  // for (let i = 10; i <= 20; i++) {
  //   console.log(i);
  // }

  // for (let i = 20; i >= 1; i--) {
  //   console.log(i);
  // }

  // for (let i = 3; i <= 46; i=i+3) {
  //   console.log(i);
  // }


  new Canvas(800, 400);
  background(250); 
//   let sum = 0;
//   for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
//   text(i, 20 + i*20, 50);
//   sum += i;
//  }
//  console.log(sum);
//  text("The sum of the first ten even number is: " + sum, 50, 100)

  // let age = 0;

  // if (age <= 9) {
  //   console.log("You are a lower primary student");
  // } else if (age <= 12) {
  //   console.log("You are a upper primary student");
  // } else {
  //   console.log("You are a secondary school student");
  // }



  // let count = 19
  // while ( count >= 1) {
  //   console.log(count)
  //   text(count, 50 + (19-count)*20, 50)
  //   count -= 2
  // }


  let names = ["Joel", "Oliver", "Kayven", "Ethan"];
  console.log(names[2]);
  names[2] = "Kv";
  console.log(names[2]);
  names.push("Alan");
  console.log(names[4]);
  names.unshift("Bruce");
  console.log(names[0]);
  names.splice(2, 0, "Chris");
  console.log(names[2]);
  names.pop();
  console.log(names[4]);





} 