// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
let clients =[];

  for (let i =0; i < array.length; i++) {
    let names =[];
    for (let x in array[i].name) {
      names.push(array[i].name[x].toLowerCase());
    }
    for (let n = 0; n < names.length; n++) {
      if (names[n] == letter) {
       names[n] = true;
      }
     if (names[n] == true) {
      clients.push(array[i].name);
     }
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
