////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// QUESTION 1 //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 1. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// example:
///createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // will return "(123) 456-7890"

// Solution - Option A (uses strings)
function createPhoneNumber(numbersArray) {
  let n = numbersArray;
  return "(" + n[0] + n[1] + n[2] + ") " + n[3] + n[4] + n[5] + "-" + n[6] + n[7] + n[8] + n[9];
}

// Solution - Option B (uses a template literal)
// function createPhoneNumber(numbersArray) {
//   let n = numbersArray;
//   return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
// }

// Solution - Option C (for loop + replace method)
// function createPhoneNumber(numbersArray) {
//   let format = "(xxx) xxx-xxxx";

//   for (let i = 0; i < numbersArray.length; i++) {
//     format = format.replace("x", numbersArray[i]);
//   }
//   return format;
// }

// Solution - Option D (regular expression, a.k.a. regex)
// function createPhoneNumber(numbersArray) {
//   return numbersArray.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// }

////  Notes on How Solution - Option D works
//// .join("") converts an array to a string

//// /(\d{3})(\d{3})(\d{4})/ is the full regular expression (regex)
//// / starts the regular expression
//// (\d{3}) groups together the first 3 digits into group 1
//// (\d{3})(\d{3}) groups together the first 3 digits into group 1 & digits 4, 5, & 6 into group 2
//// (\d{4}) groups the last 4 digits into group 3
//// group 1 is now represented as $1, group 2 is $2, and group 3 is $3

//// .replace()'s first argument is replaced with the second argument
//// /(\d{3})(\d{3})(\d{4})/ is the first argument
//// "($1) $2-$3") is the second argument

const answer1 = document.querySelector("#answer1");
answer1.textContent = createPhoneNumber([5, 5, 5, 1, 2, 3, 4, 4, 4, 4]);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// QUESTION 2 //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 2. Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.  // hint: replace and split methods or regex

// For example:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.hawaii.gov") == "hawaii"
// domainName("https://www.learn.org") == "learn"

// Solution A (uses replace method and split method)
function domainName(url) {
  let removeHTTPS = url.replace("https://", ""); // replaces https:// to nothing
  let removeHTTP = removeHTTPS.replace("http://", ""); // replaces http:// to nothing
  let removeWWW = removeHTTP.replace("www.", ""); // replaces www. to nothing
  let splitTheRest = removeWWW.split("."); // .split divides a string into an array of substrings
  let domainNameAnswer = splitTheRest[0]; // the domainName is now splitTheRest[0]  // .gov, .com, .org, etc. would be splitTheRest[1]
  return domainNameAnswer;
}

// Solution B (uses regex and split method)
function domainName(url) {
  let removeFirstHalf = url.replace(/(https?:\/\/)?(www\.)?/, "");
  // the opening and closing / tells us we're using regex
  // (https?:\/\/) is grouped together with parenthesis
  // (www\.) is grouped together with parenthesis
  // With (https?:\/\/)? and (www\.)? the question mark at the end of group says "if this exists"
  // since a front slack / and a period . both have special features to them,
  // the \/ or \. cancels the special features to says we literally want a forward slash / or period .

  let splitTheRest = removeFirstHalf.split(".");
  let domainNameAnswer = splitTheRest[0];
  return domainNameAnswer;
}

const answer2 = document.querySelector("#answer2");
answer2.textContent = [
  domainName("www.google.com"),
  domainName("http://www.adventure.org"),
  domainName("https://www.apple.com"),
  domainName("https://www.nps.gov/parks"),
];
