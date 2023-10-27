        // !!!!!!!!!!!! assigment 38-42 !!!!!!!!!!!!

// //?Q1 answer        

// function power(a, b) {
//     if (b === 0) {
//        return 1;
//     } else if (b > 0) {
//        return a * power(a, b - 1);
//     } else {
//        return 1 / power(a, -b);
//     }
//    }

   
// //?Q2 answer       

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return "its a leap  year"   
//     }
//      else if(year % 4 !== 0){ 
//         return "its not a leap year"
//     }
// }
// let leapyear = parseInt(prompt("Enter a Year"))
// isLeapYear(leapyear)
//  console.log(isLeapYear(leapyear))


// //?Q3 answer

// function is_triangle(a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0) {
//         return false;
//     }
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return false;
//     }
//     return true;
// }
// function area_of_triangle(a, b, c) {
//     if (!is_triangle(a, b, c)) {
//         return "The provided lengths cannot form a triangle.";
//     }

//     const S = (a + b + c) / 2;
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }

// console.log(area_of_triangle(3, 4, 5)); 
// console.log(area_of_triangle(6, 8, 10)); 


// //?Q4 answer

// function mainFunction() {
//     const marksReceived = [90, 85, 80];

//     const average = averageOfMarks(marksReceived);
//     const percentage = percentageOfMarks(marksReceived);

//     console.log("The average of marks received is: " + average);
//     console.log("The percentage of marks received is: " + percentage + "%");
// }

// function averageOfMarks(marks) {
//     const sum = marks.reduce((previous, current) => current += previous);
//     return sum / marks.length;
// }

// function percentageOfMarks(marks) {
//     const average = averageOfMarks(marks);
//     return (average / 100) * 100;
// }

// mainFunction();


// //?Q5 answer

// function customIndexOf(string, char) {
//     let charCount = 0;
//     for (let i = 0; i < string.length; i++) {
//        if (string[i] === char) {
//          return i;
//        }
//     }
//     return -1;
//    }
   
//    console.log(customIndexOf("Hello World", "H")); 
//    console.log(customIndexOf("Hello World", "e")); 
//    console.log(customIndexOf("Hello World", "o")); 
//    console.log(customIndexOf("Hello World", "Z"));

// //?Q6 answer

// function removeVowels(sentence) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     return sentence.split('').filter(char => !vowels.includes(char)).join('');
// }

// console.log(removeVowels("Hello World"));


// //?Q7 answer


// function countVowelOccurrences(line) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let i = 0; i < line.length - 1; i++) {
//         const char1 = line[i];
//         const char2 = line[i + 1];

//         if (vowels.includes(char1) && vowels.includes(char2)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowelOccurrences("Pleases read this application and give me gratuity"));



// //?Q8 answer


// function convertToMeters(distance) {
//     return distance * 1000;
// }

// function convertToFeet(distance) {
//     return distance * 3280.84;
// }

// function convertToInches(distance) {
//     return distance * 39370.08;
// }

// function convertToCentimeters(distance) {
//     return distance * 100000;
// }

// const distance = parseInt(prompt("enter ur distance"));
// main(distance)
// function main() {
    
//     console.log(`In meters: ${convertToMeters(distance)}`);
//     console.log(`In feet: ${convertToFeet(distance)}`);
//     console.log(`In inches: ${convertToInches(distance)}`);
//     console.log(`In centimeters: ${convertToCentimeters(distance)}`);
// }



// //?Q9 answer


// function calculateOvertimePay(hoursWorked) {
//     const normalPayHours = 40;
//     const overtimePayRate = 12.00;

//     if (hoursWorked <= normalPayHours) {
//         return 0;
//     }

//     const overtimeHours = hoursWorked - normalPayHours;
//     const overtimePay = overtimeHours * overtimePayRate;

//     return overtimePay;
// }

// let hoursWorked = 45;
// let overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime pay for ${hoursWorked} hours: ${overtimePay} Rs.`);


// //?Q10 answer


// function calculateCurrencyNotes(withdrawalAmount) {
//     let notesOf100 = 0;
//     let notesOf50 = 0;
//     let notesOf10 = 0;

//     notesOf100 = Math.floor(withdrawalAmount / 100);
//     withdrawalAmount -= notesOf100 * 100;

//     notesOf50 = Math.floor(withdrawalAmount / 50);
//     withdrawalAmount -= notesOf50 * 50;

//     notesOf10 = Math.floor(withdrawalAmount / 10);
//     withdrawalAmount -= notesOf10 * 10;

//     return {notesOf100, notesOf50, notesOf10};
// }

// let withdrawalAmount = parseInt(prompt("enter your amount"));

// let currencyNotes = calculateCurrencyNotes(withdrawalAmount);
// console.log(`Total number of notes: ${currencyNotes.notesOf100} x 100, ${currencyNotes.notesOf50} x 50, ${currencyNotes.notesOf10} x 10`);


