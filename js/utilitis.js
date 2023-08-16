function getInputValueFromField(inputFieldId) {


    const getInputFieldById = document.getElementById(inputFieldId);
    const getIputFieldValueString = getInputFieldById.value;
    getInputFieldById.value = ''
    const getInputFieldValue = parseFloat(getIputFieldValueString);
    return getInputFieldValue;

    
}

function getElementTextById(element) {

    const getElemetText = document.getElementById(element);
    const elementText = getElemetText.innerText;
    const newElementText = parseFloat(elementText);
    return newElementText;    
}


function setElemetTextById(elementId, value) {

    const previousValue = document.getElementById(elementId);
    previousValue.innerText = value;


    
}