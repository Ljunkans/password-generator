const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 12;

function generatePasswords() {
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomPasswordOne = Math.floor( Math.random() * characters.length )
        let randomPasswordTwo = Math.floor( Math.random() * characters.length )
        firstPassword += characters[randomPasswordOne]
        secondPassword += characters[randomPasswordTwo]
    }
    let passwordOneEl = document.getElementById("password-one")
    let passwordTwoEl = document.getElementById("password-two")
    passwordOneEl.textContent = firstPassword
    passwordTwoEl.textContent = secondPassword
}

function copyPassword(elementId) {
    const passwordText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            const toast = document.getElementById("toast");
            toast.className = "toast show";
            setTimeout(() => {
                toast.className = "toast";
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy password:', err);
        });
}


