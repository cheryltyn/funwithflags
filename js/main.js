/*----- constants -----*/
const countries = {
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "Aland Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos Islands",
    "CD": "Congo",
    "CF": "Central African Republic",
    "CG": "Republic of the Congo",
    "CH": "Switzerland",
    "CI": "Cote d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Curacao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "EU": "Europe",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB-ENG": "England",
    "GB-SCT": "Scotland",
    "GB-WLS": "Wales",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PS": "Palestine",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VG": "Virgin Islands",
    "VI": "Virgin Islands",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna Islands",
    "WS": "Samoa",
    "XK": "Kosovo",
    "YE": "Yemen",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
const countriesLowercased = Object.keys(countries).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = countries[key].toLowerCase();
    return newObj;
}, {});


/*----- state variables  -----*/
let score = 0
let countryList = []
let questionNumber = 0 
let imageElement
let selectedCountry 
let tries = 0
let userSelectedNumber 
let wordDisplay = [];

let form = document.getElementById('myForm')
let feedback = document.getElementById("feedback")
let answer = document.getElementById('answer')
let hold = document.getElementById('hold')

let skipButton = document.getElementById('skip')
let restartButton = document.getElementById('restart')
let restartButton2 = document.getElementById('restart2')
let radios = document.querySelectorAll('input[type=radio]')

let gameStartScreen = document.getElementById("gameStartScreen")
let gameStart = document.getElementById("gameStart")
let gameEnd = document.getElementById('gameEnd') 
/*----- functions  -----*/
function homeScreen() {
    // display home screen and hides the game and end screen, ensure buttons are unchecked.
    gameStartScreen.hidden = false
    gameStart.hidden = true
    gameEnd.hidden = true
    radios.forEach(radio => radio.checked = false)
}


function restart() {
    // start and restart the game, by resetting scores and text. Is init() a better name? 
    score = 0
    countryList = []
    for (country in countries) {
        countryList.push(country.toLowerCase()); 
    }
    tries = 0
    questionNumber = 0 
    answer.innerText = ''
    updateFlag()
    updateScore()
    generateAnswerDisplay(selectedCountry)
    skipButton.disabled = false 
    for (let element of form.elements) {
        element.disabled = false
      }

}

function generateAnswerDisplay(word) {
    // generate the hangman style underscores for each word 
    let wordArray = word.split("");
    hold.innerHTML = ""
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === " ") {
            let content = document.createTextNode(" ")
            hold.appendChild(content)
        } else {
            let content = document.createTextNode("_")
            hold.appendChild(content)
        }
    }
}

function checkAnswerDisplay(userInput, selectedCountry) {
    // check answer when the user input, to replace the placeholder with letters 
    let countryAnswer = selectedCountry.split(""); 
    let user = userInput.split("")
    let placeholder = hold.innerText.split("")
    for (let i = 0; i < countryAnswer.length; i++) {
        if (user.includes(countryAnswer[i])) {
            placeholder[i] = countryAnswer[i];
        }
    }
    hold.innerHTML = placeholder.join("")
    /* 
    if (selectedCountry === hold.innerHTML) {
        score += 1
        nextQuestion()
        gameEndCheck()
    }
    */ 
}

function updateScore() {
    // update score and question number after each question. 
    scoreText = document.getElementById("score")
    scoreText.innerHTML = `Score: ${score}`
    questionText = document.getElementById("question_number")
    questionText.innerHTML = `Question: ${questionNumber}/${userSelectedNumber}`
}


function updateFlag() {
    // update the flag after each question 
    const random = Math.floor(Math.random() * countryList.length);
    selectedCountry = countriesLowercased[countryList[random]]
    if (imageElement) {
        imageElement.src = `./svg/${countryList[random]}.svg`;
    } 
    countryList.splice(random,1)
}

function nextQuestion() {
    // goes to the next question by updating score, flag, hangman and text. 
    feedback.innerHTML = "Fill in your answer here:"
    questionNumber += 1
    tries = 0
    updateScore()
    updateFlag() 
    generateAnswerDisplay(selectedCountry)
    document.querySelector('input[name="guess"]').value  = ''
}

function gameEndCheck() {
    // check if the game has ended, and if so hide the gameplay screen and show game end screen 
    if (questionNumber == userSelectedNumber) {
        skipButton.disabled = true 
        for (let element of form.elements) {
            element.disabled = true
          }
        gameEnd.hidden=false 
        gameStart.hidden = true
        gameStartScreen.hidden = true
        if (score >= 0.8*userSelectedNumber) {
            document.querySelector('#gameEnd > h1').innerHTML= `Congrats! Try Again?`
        } else {
            document.querySelector('#gameEnd > h1').innerHTML= `Try Again?`
        }
        document.querySelector('#gameEnd > h2').innerHTML= `Your score is ${score}/${questionNumber}`
        }
}


/*----- event listeners  -----*/
/*----- game start screen  -----*/
radios.forEach(function(radio) {
    // listens for when the radio buttons have been clicked 
    radio.addEventListener('change', function() {
      if (this.checked) {
          userSelectedNumber = this.value
          document.getElementById("gameStartScreen").hidden=true
          document.getElementById("gameStart").hidden=false
          radios.checked = false
          restart()
      }
    });
  });

/*----- gameplay  -----*/ 
document.addEventListener('DOMContentLoaded', function() {
    // start game play and listens for inputs 
    document.getElementById("imageid").style.display = "block"
    imageElement = document.getElementById("imageid");

    form.addEventListener('submit', function(event) {
        let userInput = document.querySelector('input[name="guess"]').value;
        event.preventDefault()
        if (userInput.toLowerCase().trim() === selectedCountry) {
            feedback.innerHTML = "Correct"
            gameEndCheck() 
            score += 1
            nextQuestion()
            answer.innerText = ''
        } else if (userInput.toLowerCase().trim() === '') {
            tries += 1 
            document.querySelector('input[name="guess"]').value  = ''
            feedback.innerHTML = "Please enter a guess";
            answer.innerText = ''
        }
        else {
            tries += 1 
            feedback.innerHTML = `Try again. You have tried ${tries} times.`
            document.querySelector('input[name="guess"]').value  = ''
            answer.innerText = ''
            checkAnswerDisplay(userInput.toLowerCase().trim(), selectedCountry)
        } 
    })
});
/*----- skip button -----*/
// listen for when the user skips a game 
skipButton.addEventListener('click', function() {
    answer.innerText = `The answer was ${selectedCountry}.`
    nextQuestion() 
    gameEndCheck() 
}) 
/*----- restart button -----*/
// listen for when the user restarts a game 
restartButton2.addEventListener('click', function() {
    homeScreen()
    restart();
});

restartButton.addEventListener('click', function() {
    homeScreen(); 
    restart();
});

