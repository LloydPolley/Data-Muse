import outputResults  from './output';

const url = 'https://api.datamuse.com/words?';
const queryParams = 'topics=';

const inputField = document.querySelector('#userInput');
const submit = document.querySelector('#submit');
const outputInput = document.querySelector('#output');


const ajaxWork = () => {
    const word = inputField.value;
    const endUrl = url + queryParams + word;

    //AJAX call
    const xhr = new XMLHttpRequest();
    xhr.response = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            this.outputResults(xhr.response);
        }
    };
    xhr.open('GET', endUrl);
    xhr.send();

};

const outputResults = (res) => {
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

const doWork = (event) => {
    event.preventDefault();
    ajaxWork();
};



submit.addEventListener('click', doWork);