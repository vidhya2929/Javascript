
'strict'
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];


const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML= '';

const movs = sort ? movements.slice().sort((a,b) => a - b) : movements // here slice method is used to make a copy of the array.


  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov.toFixed(2)}🪙</div>
        </div>
    `;


    containerMovements.insertAdjacentHTML('afterbegin',html);
    // beforebegin => Before the element itself
    // afterbegin => Just inside the element, before its first child
    // beforeend => Just Inside the element, after its last child
    // afterend => after the element itself
  });
};
// displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);
// TO add this to the container(to movements element) of the page we use  'insertAdjacentHTML

// textContent returns the texts itself while innerHTML returns everything, including the HTML.


const calcDisplayBalance = function(acc){
  const balance = acc.movements.reduce((acc,curr) => acc += curr, 0);
  acc.balance = balance;
  //above
  labelBalance.textContent = `${acc.balance.toFixed(2)}🪙`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}🪙`;


  const outgoings = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov)=> acc+ mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings.toFixed(2))}🪙`;


// for each of the deposits we receive 1.2 % interest
const interest = acc.movements
.filter(mov => mov > 0)
.map(deposit => (deposit * acc.interestRate) /100)
// bank only pays interest if that interest is at least one Euro
.filter((int,i,arr)=> {
  console.log(arr);
  return int >= 1;
})
.reduce((acc, int) => acc + int,0);
labelSumInterest.textContent = `${interest.toFixed(2)}🪙`;
};
// calcDisplaySummary(account1.movements);


//# Username for each accounts
const user = 'Steven Thomas Williams';  //here username will be stw
// const username = user.toLowerCase().split(' ').map(function(value){
//   return value[0];
// }).join('') //toLowerCase() returns a string , split() works on all the string, split() converts the string into an array, so we can perform map function which works on an array. join an empty string to get stw.
const createUsername = function (accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(value => /*actually the return is happening here*/value[0])
    .join('');
});
}
// const username = user

// return username;

createUsername(accounts);
// console.log(username);

const updateUI = function(acc){
  // Display movements
    displayMovements(acc.movements);
    // Display balance 
    calcDisplayBalance(acc);
    // Display Summary
    calcDisplaySummary(acc);
}

// Event Handler
let currentAccount;



btnLogin.addEventListener('click', function(e){
  // prevent from from submitting   (reason => this is a button in the form element. In HTML when we click submit the default behavior is page reload)
  e.preventDefault();    
  // console.log('LOGIN');

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);          //Find method will return undefines if no account could be found for this username.
  console.log(currentAccount);

  if(currentAccount?.pin === +(inputLoginPin.value)){
    console.log("Loggined Successfully")  // ?.(Optional Chaining) if it exists 

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1;
    
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; //because assignment operator works from right to left
    inputLoginPin.blur();  // to make the field loses it focus

    // Update UI
    updateUI(currentAccount)
  }
});
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = +(inputTransferAmount.value);  //+ instead of number
  const receiverAcc = accounts.find(acc =>acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username)
  {
    // DOing the transfer
    // console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});
// some()
// only grant loans if there is atleast one deposit with atleast 10 % of the requested loan amount.
btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add movement
    currentAccount.movements.push(amount);

  // Update UI
  updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// findIndex() => closing an account
btnClose.addEventListener('click', function(e){
  e.preventDefault()
  inputCloseUsername.value = inputTransferTo.value = '';
  if(inputCloseUsername.value === currentAccount.username && +(inputClosePin.value) === currentAccount.pin) // + insteaf of Number
  {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
});





// In form clicking one field is same as clicking enter



// The New finndLast and finceLastIndex Methods
// last withdrawal
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// flat
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Chaining of methods
const balanceOverall = accounts.map(acc=> acc.movements).flat().reduce((acc,mov)=> acc+ mov,0);
console.log(balanceOverall);




// Find
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

labelBalance.addEventListener('click', function (){
[...document.querySelectorAll('.movements__row')].
forEach(function(row, i){
  if(i % 2 === 0) row.style.backgroundColor = 'orangered';
});
})


labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value '), el => Number(el.textContent.replace('🪙', ''))
);
  console.log(movementsUI);



  // Array can be also made by
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  //  then use map method seperately
})

