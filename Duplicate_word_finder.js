const sentence = "code learn build code practice learn";

const words = sentence.toLowerCase().split(" ");
const duplicates = [];

words.forEach((word, index) => {
    if (words.indexOf(word) !== index && !duplicates.includes(word)) {
        duplicates.push(word);
    }
});

console.log("Duplicate words:", duplicates);
