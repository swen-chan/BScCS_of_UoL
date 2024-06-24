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

    return {word, soundex_code};
}

function REMOVE_CONSECUTIVE_DUPLICATES(word) {
    const result = [word[0]];
    for (let i = 1; i < word.length; i++) {
        if (word[i] !== word[i - 1]) {
            result.push(word[i]);
        }
    }
    return result.join('');
}
