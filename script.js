console.log("hello my calculator")



let display = document.getElementById('display');
let buttons = Array.from( document.getElementsByClassName("button") );

console.log(buttons)

buttons.map( button => {
    button.addEventListener('click', (e) => {
        // console.log('clicked')
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText) testing 

        switch(e.target.innerText){
            case 'C' :
                display.innerText = ""
                break
            case "←" :
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                }
                break
            case '=':
                try{
                    display.innerText = eval(display.innerText)  //  the javascript eval exicutes any innerhtml inside display 
                                                                //so this is a major seqerity flaw try to use other methods to make a calculator in real user applications
                }
                catch{
                    display.innerText = "Syntax Error"
                }
                break
            default:
                display.innerText += e.target.innerText
        }
    });
})