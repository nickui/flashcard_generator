// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var ClozeCard = function(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
    this.brokenClozeSearch = function() {
        var search = fullText.match(this.cloze);
        if (search === null) {
            console.log('Whoopsie, something went wrong.');
        };
        brokenClozeSearch();
    }

}

var firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

var brokenCloze = new ClozeCard('Didn\'t work bro!', 'Doh!');

console.log("\nCloze: "+ firstPresidentCloze.cloze);
console.log("\nPartial: "+ firstPresidentCloze.partial);
console.log("\nfullText: "+ firstPresidentCloze.fullText);
console.log("\nBrokenCloze: "+ brokenCloze.partial);

module.exports = ClozeCard;
