const dataLowecase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowecase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "*!@#$%^&*?;,.€-=_";
let password = "";
const rangeValue = document.getElementById("password-length");
const Output = document.getElementById("password-output");


function generatedPass(){
    let data = [];

    if(lowercase.checked) data.push(...dataLowecase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);
    
    if (data.length === 0 ) {
        alert("Please select word");
        return
    }

    for ( i = 0; i < rangeValue.value; i++) {
       password += data[Math.floor(Math.random() * data.length)];        
    };

    Output.value = password;
    Output.select();
    document.execCommand("copy");

    GenerateButton.textContent = "copied";

    setTimeout(() => {
        GenerateButton.textContent = "Generated password";
    }, 2000);
}

GenerateButton.addEventListener('click',generatedPass)