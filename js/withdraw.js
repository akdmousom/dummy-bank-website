document.getElementById('withdraw-btn').addEventListener('click', function () {

   
    const withdrawAmmountField = getInputValueFromField('withdraw-field');

    const withdrawAmmoutText = getElementTextById('withdraw-text-value');

    const totalAmmoutTextValue = getElementTextById('balance-text-value');

    if (withdrawAmmountField > totalAmmoutTextValue) {
        alert('pelease check your ammount')
        return;
        
    }else if (isNaN(withdrawAmmountField)) {
        alert('Please Provdie Positive Value Only')
        return;
        
    }else if (withdrawAmmountField < 0) {
        alert('only positive ammount allow')
        return;
        
    }
    const totalWithdrawvalue = withdrawAmmountField + withdrawAmmoutText;
    setElemetTextById('withdraw-text-value', totalWithdrawvalue);

 

    const deductAmmoutFromBalance = totalAmmoutTextValue - withdrawAmmountField; 
    setElemetTextById('balance-text-value', deductAmmoutFromBalance);


    
    
})


document.getElementById('withdraw-field').addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {

        const withdrawAmmountField = getInputValueFromField('withdraw-field');

    const withdrawAmmoutText = getElementTextById('withdraw-text-value');

    const totalAmmoutTextValue = getElementTextById('balance-text-value');

    if (withdrawAmmountField > totalAmmoutTextValue) {
        alert('pelease check your ammount')
        return;
        
    }else if (isNaN(withdrawAmmountField)) {
        alert('Please Provdie Positive Value Only')
        return;
        
    }else if (withdrawAmmountField < 0) {
        alert('only positive ammount allow')
        return;
        
    }
    const totalWithdrawvalue = withdrawAmmountField + withdrawAmmoutText;
    setElemetTextById('withdraw-text-value', totalWithdrawvalue);

 

    const deductAmmoutFromBalance = totalAmmoutTextValue - withdrawAmmountField; 
    setElemetTextById('balance-text-value', deductAmmoutFromBalance);
        
    }
    
})