const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout (function() {
     // did something
      resolve('First data');
   }, 1000);
  });
const do0therThingPromise = () =>
  new Promise((resolve, reject) => {
    throw new Error('Oops')
    setTimeout (function() {
      // did something
      resolve('Second data');
   }, 1000);
   });
Promise.all([doSomethingPromise(), do0therThingPromise ()]). then(data => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
}).catch(err => {
console.log(err)
});