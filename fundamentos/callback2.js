// Promises
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout (function() {
     // did something
     resolve('First data');
   }, 1000);
  });
const do0therThingPromise  = new Promise((resolve, reject) => {
    throw new Error('Somenthing wrong');
    setTimeout (function() {
     // did something
     resolve('Second data');
   }, 1000);
  });
doSomethingPromise()
 .then(data => {console.log(data);
    return do0therThingPromise();
})
then(data2 => console.log(data2))
  .catch(err => {console.log('Ops', err)});
  // Pending
  // Fulfilled
  // Rejected
  // callbacks
  function doSomething(callback) {
    setTimeout (function() {
     // did something
     callback('First data');
   }, 1000);
}
function do0therThing(callback) {
    setTimeout (function() {
       //did other thing
       callback('Second data');
    }, 1000);
function doAll() {
    try {
      doSomething(function(data) {
         var processedData = data.split('');
         try {
            do0therThing(function(data2) {
                var processedData2 = data2.split('');
                try {
                  setTimeout(function() {
                    console.log(processedData, processedData2);
                 }, 1000);
                 } catch (err) {
                 // handle error
                }
              });
              }catch (err) {
              }
              // handle erro
            });
            }catch (err) {
            //handle error
        } 
     }
    }