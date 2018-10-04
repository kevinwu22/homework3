const Start = prompt('Please enter your start number:')
const End = prompt('Please enter your end number:')
const Step = prompt('Please enter your step number:')

const startNumber = Number(Start);
const endNumber = Number(End);
const stepNumber = Number(Step);

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