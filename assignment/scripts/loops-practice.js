console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

for(let i=0; i < 6; i++){
  console.log( ' count from 0 to 5: ', i);
}

// ANSWER: For this one, we had to change 'i<4' to 'i<6' because there are six numbers in our array.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for(let i=3; i<6; i++){
  console.log( 'count from 3 to 5: ', i);
}

// ANSWER: I changed 'i' to be equal to 3 since we are only look from 3 to 5. Since 'i<6' is already set, it is expected to go go until 5.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i < 11; i++){
  //console.log(i);
    if( i%2 == 0){
      console.log( 'Number is even: ', i)
    }
}

// ANSWER: I changed the 'i' to equal 2 because we are only counting even numbers from 2.
// I also changed the condition to 'i<11' because we are only measuring until 10.
// I added an if statment of 'if( i%2 == 0)" to target all the even numbers. % is the remaider symbol.

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

let numbers= [0, 1, 2, 3, 4, 5];

/*for(let i = numbers.length-1; i>=0; i--){
  console.log();
} /*

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
