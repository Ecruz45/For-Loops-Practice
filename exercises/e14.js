
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let incorrectBalance = [];
  for (let i = 0; i < array.length; i++) {
    let depositsSum = 0;
    let accountDeposits = array[i].deposits;
    let withdrawalSum = 0;
    let accountWithdrawals = array[i].withdrawals;
    
    if (array[i].deposits) {
      for (let j =0; j < accountDeposits.length; j++) {
        depositsSum += array[i].deposits[j];
      }
    }
    if (array[i].withdrawals) {
      for (let w = 0; w < accountWithdrawals.length; w++) {
        withdrawalSum += array[i].withdrawals[w];
      }
    }
    let totalBalance = depositsSum - withdrawalSum;
    if (array[i].balance !== totalBalance) {
      incorrectBalance.push(array[i]);
    }
  }
  return incorrectBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
