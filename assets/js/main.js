const inputNum = document.getElementById('num')
let outputArray = ['L', 'p']
const output = document.getElementById('output')


const btn = () => {
    let inputValue = Number(inputNum.value)
    output.innerHTML = ''
    let outputOs = ''

    for (let i = 0; i < inputValue; i++) {
        outputOs += 'o'
    }
    outputArray.splice(1, 0, outputOs)
    output.innerHTML = outputArray.join('')
}
