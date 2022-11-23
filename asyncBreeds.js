// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {

  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.

    functionToRunWhenThingsAreDone(data);

    // console.log("data is" ,data);


  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// const printBreed = breed => {
//   console.log('Return Value: ', breed);
// }
// we try to get the return value
//  breedDetailsFromFile('safire', printBreed);
// => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;