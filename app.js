const numberStr = prompt('Please input your number: ')

const number = Number(numberStr)

const result1 = double(number)

const result2 = dec2bin(number)

result = result1 + '<br>' + result2

writeOutput(result)

function writeOutput(result) {
    const h3Element = document.getElementById('output')
    h3Element.innerHTML = result
}

const h3Element = document.getElementById('output')

h3Element.innerHTML = result

function double(number) {
    return number * 2
}

functin dec2bin(dec){
    // the >>> rightshift to 0 remove the sign
    // thus it can handle negative number
    // this entire hw is going to be on the test 
    return (dec >>> 0).toString(2);
}