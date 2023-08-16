document.getElementById('deposit-btn').addEventListener('click', function () {

  

   const userInputFieldValue = getInputValueFromField('deposit-field');

   const previousElementText = getElementTextById('deposit-text-value')
   
   const previousBalance = getElementTextById('balance-text-value')

   if (isNaN(userInputFieldValue)) {

    alert('please provide positive value')
    return;
    
   }else if(userInputFieldValue < 0){

    alert('only positive value are allow')
    return;

   }
 
   const totalDipositValue = userInputFieldValue + previousElementText;
   const totalBalance = userInputFieldValue + previousBalance;



   setElemetTextById('deposit-text-value', totalDipositValue);
   setElemetTextById('balance-text-value', totalBalance);
    
})

document.getElementById('deposit-field').addEventListener('keyup', function (event) {

   if (event.key === 'Enter') {

      const userInputFieldValue = getInputValueFromField('deposit-field');

      const previousElementText = getElementTextById('deposit-text-value')
      
      const previousBalance = getElementTextById('balance-text-value')

      if (isNaN(userInputFieldValue)) {

         alert('please provide positive value')
         return;
         
        }else if(userInputFieldValue < 0){
     
         alert('only positive value are allow')
         return;
     
        }

        const totalDipositValue = userInputFieldValue + previousElementText;
        const totalBalance = userInputFieldValue + previousBalance;
     
     
     
        setElemetTextById('deposit-text-value', totalDipositValue);
        setElemetTextById('balance-text-value', totalBalance);
      
   }
   
})