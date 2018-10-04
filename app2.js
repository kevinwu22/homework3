const Start = prompt('Please enter your start number:')
const End = prompt('Please enter your end number:')
const Step = prompt('Please enter your step number:')
const Error = prompt('Error, try a different number')

const startNumber = Number(Start);
const endNumber = Number(End);
const stepNumber = Number(Step);

if (Number.isInteger(startNumber) && startNumber != 0)
{
    startNumber = startNumber;
}
else
{
    let Result = ("Error, try a different start number");
}

if (Number.isInteger(endNumber) && endNumber != 0)
{
    endNumber = endNumber;
}
else 
{
    let Result = ("Error, try a different end number");
}

if (Number.isInteger(stepNumber) && stepNumber != 0)
{
    stepNumber = stepNumber;
}
else
{
    let Result = ("Error, try a different step number");
}