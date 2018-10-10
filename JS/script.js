
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_cns=';

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
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response);
        }
    };
    xhr.open('GET', endUrl);
    xhr.send();

    console.log('Complete');
};

const doWork = (event) => {
    event.preventDefault();
    ajaxWork();
};



submit.addEventListener('click', doWork);