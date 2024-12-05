function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomChar() {
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[]-_=+\\|;:'"<>,.?/~ `
    let index = Math.floor(Math.random() * chars.length)
    return chars[index]
}

async function bruteForceString() {
    let target = prompt("What would you like to brute-force?")
    let result = ""
    for (const letter of target) {
        while (true) {
            let i = getRandomChar()
            document.getElementById("string").innerHTML = result + i
            if (i === letter) {
                result += i;
                break;
            }
            await sleep(1);
        }
    }
}

function clearContent() {
    document.getElementById("string").innerHTML = "";
}
