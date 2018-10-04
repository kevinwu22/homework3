const Start = prompt('Please enter your start number:')
const End = prompt('Please enter your end number:')
const Step = prompt('Please enter your step number:')

var startNumber = Number(Start);
var endNumber = Number(End);
var stepNumber = Number(Step);

if (Number.isInteger(startNumber) && startNumber !== 0)
{
    startNumber = startNumber;
}
else
{
    document.getElementById("error").innerHTML = prompt('Error, you have entered an invalid start number');
}

if (Number.isInteger(endNumber) && endNumber !== 0)
{
    endNumber = endNumber;
}
else 
{
    document.getElementById("error").innerHTML = prompt('Error you have entered an invalid end number');
}

if (Number.isInteger(stepNumber) && stepNumber !== 0)
{
    stepNumber = stepNumber;
}
else
{
    document.getElementById("error").innerHTML = prompt('Error you have entered an invalid step number');
}

generateArray = [];
binaryArray = [];

function genArray (startNumber, endNumber, stepNumber)
{
    if (stepNumber > 0)
    {
        for(let i= startNumber; i <= endNumber; i = i + stepNumber)
        {
        generateArray.push(i)
        binaryArray.push(dec2bin(i))
        }
        return generateArray;       
    }
else
{
    for(let i = startNumber; i >= endNumber; i = i + stepNumber)
    {
        generateArray.push(i)
        binaryArray.push(dec2bin(i))
    }
    return generateArray;
}
}

function sumArray (generateArray)
{
    const sumArray = generateArray.reduce((total, amount) => total + amount)
    return sumArray;
}

function dec2bin(dec)
{
    return (dec >>> 0).string(2);
}

if (document.getElementById("error").innerHTML != error)
{
    document.getElementById("array").innerHTML = "The generated array is" + generateArray;
    document.getElementById("sum").innerHTML = "The sum is" + sumArray;
    document.getElementById("binary").innerHTML = "The binary of absolute element values are" + binaryArray;
}
