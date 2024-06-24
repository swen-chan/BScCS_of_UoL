//author: Swen Chan(Siwei, Chen)

//The soundex algorithm can transfer a word into its sound.
function Soundex(word) {
    let soundex_code = word[0];
    const mapping = { 'BFPV': '1', 'CGJKQSXZ': '2', 'DT': '3', 'L': '4', 'MN': '5', 'R': '6' };

    for (const [chars, digit] of Object.entries(mapping)) {
        for (const char of chars) {
            word = word.replace(new RegExp(char, 'g'), digit);
        }
    }

    word = word.slice(1);
    word = REMOVE_CONSECUTIVE_DUPLICATES(word);
    soundex_code += word.padEnd(3, '0').slice(0, 3);

    return soundex_code;
}

//remove the consecutive duplicates inside the sounds of each words
function REMOVE_CONSECUTIVE_DUPLICATES(word) {
    const result = [word[0]];
    for (let i = 1; i < word.length; i++) {
        if (word[i] !== word[i - 1]) {
            result.push(word[i]);
        }
    }
    return result.join('');
}

//The Trie construtive function.
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfRhyme = false;
        this.words = [];
    }
}

//The Assistant which can get input parameter and output corresponding rhymes.
class RhymingPoetryAssistant {
    constructor() {
        this.root = new TrieNode();
    }

    //Insert a word and its sound into the Trie
    insertWord(soundex_code, word) {
        let node = this.root;

        for (let char of soundex_code) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfRhyme = true;
        node.words.push(word);
    }

    //Search the given doundex_code among the Trie
    searchRhymes(soundex_code) {
        let node = this.root;

        for (let char of soundex_code) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }

        return node.words;
    }
}


// Define the URL of the wordlist, it's given by the document
const wordlistUrl = 'https://introcs.cs.princeton.edu/java/data/wordlist.txt';

// Fetch the wordlist using the Fetch API
fetch(wordlistUrl)
  .then(response => response.text())
  .then(data => {
    // Process the wordlist data as needed
    const wordArray = data.split('\n');

    const poetryAssistant = new RhymingPoetryAssistant();
    for (const word of wordArray) {
        // console.log('word:' + word);
        soundex_word = Soundex(word);
        poetryAssistant.insertWord(soundex_word, word);
    }

  //get the input word and implement poetryAssistant algorithm to process with it.
  const userInput = 'poetry';
  const inputSoundex = Soundex(userInput);
  const words = poetryAssistant.searchRhymes(inputSoundex);

  //delete the original input word
  words = words.filter(fruit => fruit !== userInput);

  //output the rhyms
  console.log("Rhymes:", words);

  })

  // Handle errors
  .catch(error => {
    console.error('Error fetching wordlist:', error);
  });



