let incre = document.getElementById("count");
 let tot= document.getElementById("total")   
let sav = document.getElementById("save");
let count = 0;

function increment() {
    count++;
    incre.innerText = count;
}

function save() {
    let register = count + " - ";
    let total = count ;
    sav.textContent += register;
    tot.textContent = total;
    incre.textContent = 0;
    count = 0;

}
