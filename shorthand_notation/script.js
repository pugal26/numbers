function convertValue() {
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');
    const numberPattern = /^[0-9]*\.?[0-9]+/;
    const numberMatch = inputValue.match(numberPattern);
    let number = 0;
    let multiplier = 1;

    if (numberMatch) {
        number = parseFloat(numberMatch[0]);
    }

    const shorthand = inputValue.slice(-1).toUpperCase();

    switch (shorthand) {
        case 'K':
            multiplier = 1000;
            break;
        case 'M':
            multiplier = 1000000;
            break;
        case 'L':
            multiplier = 100000;
            break;
        case 'B':
            multiplier = 1000000000;
            break;
        default:
            multiplier = 1;
    }

    const fullNumber = number * multiplier;
    const formattedNumber = formatIndianNumber(fullNumber);
    resultElement.textContent = `Full Number: ${formattedNumber}`;
}

function formatIndianNumber(number) {
    let numStr = number.toString();
    let lastThree = numStr.slice(-3);
    let otherNumbers = numStr.slice(0, -3);

    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }

    const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return result;
}
