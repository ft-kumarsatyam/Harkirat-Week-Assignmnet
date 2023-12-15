// // const fs = require('fs');

// // // Function to read the contents of a file and print it to the console
// // function readFile(filename) {
// //   fs.readFile(filename, 'utf-8', (err, data) => {
// //     if (err) {
// //       console.error('Error file:', err);
// //     } else {
// //       console.log('File info:', data);
// //     }
// //   });
// // }

// // // File to be read
// // const filename = 'a.txt';

// // // Read the file and print its contents
// // readFile(filename);

// // // Simulate an expensive operation (e.g., a loop) below the file read
// // const start = Date.now();

// // // Expensive operation: Simulating a time-consuming loop
// // for (let i = 0; i < 1000000000; i++) {
// //   // This loop will take some time to execute
// // }

// // const end = Date.now();

// // console.log('Expensive operation took:', end - start, 'milliseconds');



// //-------------------------------------------------------------------------------


// // let count = 0;

// // function increment(){
// //   count++;
// //   console.log("Counter is", count);
// // }

// // function decrement(){
// //   count--;
// //   console.log("Counter is", count);
// // }

// // increment ();
// // increment ();
// // increment ();
// // increment ();



// //------------------------------------------------------------------------------------



// // const fs = require('fs');

// // const contentToWrite = ("Pehle Bhi main tujhse mila! (Animal- Song by Vishal Mishra");

// // // Specify the file path
// // const fileName = 'a.txt';

// // // Write to the file
// // fs.writeFile(fileName, contentToWrite, 'utf-8', (err) => {
// //   if (err) {
// //     console.error('Error writing to file:', err);
// //   } else {
// //     console.log('File has been written successfully.');
// //   }
// //   console.log();
// // });





// //------------------------------------------------------------------------------------




// // const fs = require('fs');

// // // Function to clean extra spaces in a string
// // function cleanSpaces(input) {
// //   // Replace multiple spaces with a single space using a regular expression
// //   return input.replace(/\s+/g, " ").trim();
// // }

// // // Function to read a file, clean extra spaces, and write it back to the same file
// // function cleanFile(fileName) {
// //   fs.readFile(fileName, 'utf-8', (err, data) => {
// //     if (err) {
// //       console.error('Error reading the file:', err);
// //     } else {
// //       // Clean extra spaces in the content
// //       const cleanedContent = cleanSpaces(data);

// //       // Write the cleaned content back to the same file
// //       fs.writeFile(fileName, cleanedContent, 'utf-8', (err) => {
// //         if (err) {
// //           console.error('Error writing to file:', err);
// //         } else {
// //           console.log('File has been cleaned and written successfully.');
// //         }
// //       });
// //     }
// //   });
// // }

// // // Specify the file path
// // const fileName = 'a.txt';

// // // Clean the file
// // cleanFile(fileName);




// //------------------------------------------------------------------------------------





// const fs = require('fs');

// function cleanSpaces(input){
//   return input.replace(/\s+/g, " ").trim();
// }

// function cleanFile(fileName){
//   fs.readFile(fileName, 'utf-8', (err,data) =>{
//     if (err){
//       console.error("There is some error in reading:", err);
//     }
//   else{

//     const cleanedContent = cleanSpaces(data);

//     fs.writeFile(fileName, cleanedContent, 'utf-8', (err)=>{
//       if(err){
//         console.error("There is some error:", err);
//       }
//     else{
//       console.log("The File is cleaned successfully:",fileName);
//          }
//       });
//     }
//   });
// }

// const fileName = "b.txt";
// cleanFile(fileName);





// //------------------------------------------------------------------------------------




