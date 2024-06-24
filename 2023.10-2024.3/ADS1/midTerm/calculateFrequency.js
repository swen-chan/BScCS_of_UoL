//download the data of word frequency
this.preload = function() {
    var self = this;
    this.data = loadTable(
      './WordFrequency.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });

};

function calculateWordFrequency(word) {
    // Assuming a word frequency dataset is available
    var wordDataset = this.data.getColumn(word);
    var wordFrequencyDataset = this.data.getColumn('freq')
    if (wordDataset.hasOwnProperty(word)) {
        return wordFrequencyDataset.getRow(word);
    } else {
        return 0;
    }
}
