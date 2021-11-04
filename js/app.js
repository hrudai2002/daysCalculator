// Variables 
const dateOfBirth = document.getElementById('dob');
const presentDate = document.querySelector('.presentDate')
const calculate  = document.querySelector('.submit');
const loader = document.querySelector('.loader');
const result = document.querySelector('#results');
const inputResult = document.querySelector('.numberOfDays');




calculate.addEventListener('click', function(e) {
        const date1 = dateOfBirth.value;
        const date2 = presentDate.value;
        if(date1 === '' || date2 === '') {
             if(date1 === '' && date2 === '') {
                 alert('Input fields cannot be empty');
             }
             else if(date1 === '') {
                 alert('Date of Birth cannot be empty');
             }
             else {
                 alert('Present Date cannot be empty');
             }
        }
        else {
            result.style.display = 'none';

            loader.style.display = 'block';
            
            setTimeout(Result, 2000);
        }
        
        
        e.preventDefault();
});


function Result() {

    loader.style.display = 'none';
    result.style.display = 'block';
  
  
    const date1 = new Date(dateOfBirth.value);
    const date2 = new Date(presentDate.value);
    

    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days);
    
    if(isNaN(Difference_In_Days)) {
        alert('Enter the input in correct format MM/DD/YYYY');
        loader.style.display = 'none';
        result.style.display = 'none';
    }
    else {
        inputResult.value = Difference_In_Days;
    }
    

}


