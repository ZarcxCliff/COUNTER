let count = 0;

function increment() {
    count++;
    let counter = count;
    console.log(counter);
    document.getElementById("count").
        innerText = counter;
    
}
// increment()
function save() {
    let constr = count + "   -  ";
    
    document.getElementById("save").
        textContent += constr;
}


// let message = `we have loggged`;
// console.log(message)
