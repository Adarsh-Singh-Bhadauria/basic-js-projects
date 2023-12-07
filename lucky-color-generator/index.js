const zodiac = document.getElementById("zodiac")

const generateColor = () => {
    switch(zodiac.value){
        case "aries":
            document.body.style.backgroundColor = "yellow";
            break;
        case "taurus":
            document.body.style.backgroundColor = "green";
            break;
        case "gemini":
            document.body.style.backgroundColor = "blue";
            break;
        case "cancer":
            document.body.style.backgroundColor = "red";
            break;
        case "leo":
            document.body.style.backgroundColor = "orange";
            break;
        case "virgo":
            document.body.style.backgroundColor = "purple";
            break;
        case "libra":
            document.body.style.backgroundColor = "violet";
            break;
        case "scorpio":
            document.body.style.backgroundColor = "#9fd9fc";
            break;
        case "sagittarius":
            document.body.style.backgroundColor = "#03fc6f";
            break;
        case "capricorn":
            document.body.style.backgroundColor = "#994ead";
            break;
        case "aquarius":
            document.body.style.backgroundColor = "#eb8d57";
            break;
        case "pisces":
            document.body.style.backgroundColor = "#579eeb";
            break;

        default:
            document.body.style.backgroundColor = "#fff";
            break;
    }
}