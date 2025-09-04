const jones = {
  firstName: "Jones",
  lastName: "jonas",
  birthYear: 2003,
  job: 'teacher',
  friends: ['moto', 'ramesh','ganesh','xn'],
  hasDriversLicense: true,
  getSummay: function(){
    return `${jones.firstName} is a ${2025- this.birthYear}-year old ${jones.job} and he has  ${this.hasDriversLicense ? 'a':'no'} drivers license.`
  }
} 
console.log(jones.getSummay());
// 