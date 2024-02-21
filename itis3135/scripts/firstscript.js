function displayDateTime() {
    document.getElementById('date').innerHTML = new Date();
}

function greeting(){
    document.getElementById('greeting').innerHTML = "Hello, " + document.getElementById('name').value + "!" + "  Conticello Corporation is glad to here that you are " + document.getElementById('emotion').value + " today!";
}

function calculatePolygon() {
    const favoriteNumber = document.getElementById('number');
    const inputNumber = parseFloat(favoriteNumber.value);
    if (!isNaN(inputNumber)) {
        const positiveNumber = Math.abs(inputNumber);
        const roundedNumber = Math.round(positiveNumber);
    let polygonName;
        if (roundedNumber === 1) {
            polygonName = 'henagon';
        } else if (roundedNumber === 2) {
            polygonName = 'digon';
        } else if (roundedNumber === 3) {
            polygonName = 'triangle';
        } else if (roundedNumber === 4) {
            polygonName = 'tetragon';
        } else if (roundedNumber === 5) {
            polygonName = 'pentagon';
        } else if (roundedNumber === 6) {
            polygonName = 'hexagon';
        } else if (roundedNumber === 7) {
            polygonName = 'heptagon';
        } else if (roundedNumber === 8) {
            polygonName = 'octagon';
        } else if (roundedNumber === 9) {
            polygonName = 'nonagon';
        } else if (roundedNumber === 10) {
            polygonName = 'decagon';
        } else {
            polygonName = 'nothingon because it wasn\'t a number between 1-10!';
        }
        alert(`Your favorite number ${roundedNumber} is a ${polygonName}`);
    } else {
        alert('Please enter a valid number.');
    }
}
function summonCoffeeFairy() {
    document.getElementById("output").innerHTML = "A coffee fairy flutters in and leaves a steaming mug on your desk!";
}

function performMathOperation() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    if (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2)) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        const operation = prompt("Do you want to multiply(1), divide(2), add(3), or subtract(4) these numbers? Enter the operation:");
        let result;
        switch (operation.toLowerCase()) {
            case "1":
                result = num1 * num2;
                break;
            case "2":
                result = num1 / num2;
                break;
            case "3":
                result = num1 + num2;
                break;
            case "4":
                result = num1 - num2;
                break;
            default:
                alert("Invalid operation. Please try again.");
                return;
        }
        alert(`The result is: ${result}`);
    } else {
        alert("Please enter valid numbers.");
    }
}

function calculateStaplersMood() {
    const moods = ["happy", "grumpy", "sleepy", "energetic"];
    const mood = moods[Math.floor(Math.random() * moods.length)];
    document.getElementById("output").innerHTML = `The stapler feels ${mood} today.`;
}

function generateRandomMeetingTopic() {
    const topics = ["the aerodynamics of paper planes", "the existential crisis of photocopiers", "telepathic communication for remote teams"];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById("output").innerHTML = `Next meeting's topic: ${topic}`;
}

function inventAHoliday() {
    const holidays = ["National Talk Like a Printer Day", "Bring Your Plant to Work Day", "International Spreadsheet Appreciation Day"];
    const holiday = holidays[Math.floor(Math.random() * holidays.length)];
    document.getElementById("output").innerHTML = `Today we celebrate ${holiday}!`;
}
