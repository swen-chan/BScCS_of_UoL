function GenerateRhythm(candidateWords) {
    let priorityList = [];
    for (let i = 0; i < rhymingWords.length; i++) {
        const candidateWord = candidateWords[i];
        const frequencyScore = calculateWordFrequency(candidateWord);
        priorityList.push({ 'word': rhymingWord, 'priority': frequencyScore });
    }

    priorityList.sort((a, b) => b['priority'] - a['priority']);

    return priorityList.slice(0,5);
}


