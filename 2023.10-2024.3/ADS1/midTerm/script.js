
function setup(){

}

function draw(){

}

//download the data of database of english words
loaded = false;

this.preload = function() {
  var self = this;
  this.data = loadTable(
    './DataBaseOfWords.csv', 'csv', 'header',
    // Callback function to set the value
    // this.loaded to true.
    function(table) {
      self.loaded = true;
    });

};

function generateRhythms(){
   // Get the user input and implement Soundex function on it
    const userInput = document.getElementById('wordInput').value;

    if (userInput !== null) {
        const inputValue = userInput.value;
        console.log('User entered:', inputValue);
    // Now you can use inputValue without causing the error.
    } else {
    console.error('Element with ID "wordInput" not found in the DOM.');
    }
    generateRhythm(userInput); 
}


function generateRhythm(Input) {

    const InputSoundex = Soundex(Input);
    console.log("inputsoundex:" + InputSoundex);
    
    console.log(data);
    //name the data of DataBase Of Words
    const dataTable = data;

    // Apply the SOUNDEX function to each element and store the results in a new array
    const wordsSoundexArray = dataTable.map(element => Soundex(element));

    // test the result array
    console.log('wordsSoundexArray:' + wordsSoundexArray);

    const matchingWords = wordsSoundexArray.filter(element => element.soudex_code === InputSoundex);
      
    // Return the array of matching elements
    return matchingWords;
}




