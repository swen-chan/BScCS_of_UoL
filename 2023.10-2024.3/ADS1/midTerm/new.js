class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.rhymes = [];
    }
}

class RhymeTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insertWord(word, rhyme) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        node.rhymes.push(rhyme);
    }

    searchRhymes(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return [];
            }
            node = node.children[char];
        }
        return node.rhymes;
    }
}

// Example usage:
const rhymeTrie = new RhymeTrie();
rhymeTrie.insertWord("cat", "acrobat");
rhymeTrie.insertWord("cat", "bureaucrat");
rhymeTrie.insertWord("cat", "laundromat");
rhymeTrie.insertWord("cat", "thermostat");

const rhymesForCat = rhymeTrie.searchRhymes("cat");
console.log(rhymesForCat);
