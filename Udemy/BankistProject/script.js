const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function(movements){
  containerMovements.innerHTML= '';
  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}🪙</div>
        </div>
    `;


    containerMovements.insertAdjacentHTML('afterbegin',html);
    // beforebegin => Before the element itself
    // afterbegin => Just inside the element, before its first child
    // beforeend => Just Inside the element, after its last child
    // afterend => after the element itself
  });
};
displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);
// TO add this to the container(to movements element) of the page we use  'insertAdjacentHTML

// textContent returns the texts itself while innerHTML returns everything, including the HTML.


const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc,curr) => acc += curr, 0);
  //above
  labelBalance.textContent = `${balance}🪙`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function(movements) {
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}🪙`;


  const outgoings = movements
  .filter(mov => mov < 0)
  .reduce((acc, mov)=> acc+ mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}🪙`;


// for each of the deposits we receive 1.2 % interest
const interest = movements
.filter(mov => mov > 0)
.map(deposit => deposit * 1.2/100)
// bank only pays interest if that interest is at least one Euro
.filter((int,i,arr)=> {
  console.log(arr);
  return int >= 1;
})
.reduce((acc, int) => acc + int,0);
labelSumInterest.textContent = `${interest}🪙`;
};
calcDisplaySummary(account1.movements);






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
