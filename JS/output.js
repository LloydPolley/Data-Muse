function outputResults(res){
    let converted = JSON.parse(res);
    console.log(converted)

    let listOfItems = [];
    for (var i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 99);
        console.log(random);
        listOfItems.push(`<li>${converted[random].word}</li>`);
    }
    var removeComma = listOfItems.join(' ');
    outputInput.innerHTML = removeComma;
}

export default outputResults;