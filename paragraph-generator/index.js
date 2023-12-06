const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text ="";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<n; i++){
        let randomNum = (Math.random()*25).toFixed(0);
        text += letters[randomNum];
    }
    return text;
}

const generatePara = () => {
    let numOfWords = Number(input.value);
    const para = document.createElement("p");

    let data = "";
    for(let i=0; i<numOfWords; i++){
        let randomNum = (Math.random()*15).toFixed(0);
        data += generateWord(randomNum);
        data += " ";
    }
    para.innerText = data;
    container.append(para);
};