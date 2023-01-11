console.log('hi from the dev console');

let width = document.getElementById('width');
let depth = document.getElementById('depthValue');
let length = document.getElementById('length');
let totalShowMeter = document.getElementById('resultMeter');
let totalShowYard = document.getElementById('resultYard');


document.getElementById('calcBtn').addEventListener("click", function (event) {
    event.preventDefault();
    let res = document.getElementById('res');
    let w = width.value;
    let d = depth.value;
    let l = length.value;
    let total = (w * d * l);
    let totalShort = total.toFixed(2);
    let yards = (total * 1.30795);
    let yardsShort = yards.toFixed(2);
 
    if ((total <= 0)) {
        res.innerHTML = `
        <p class="text-center" id="resError">Please enter all measurements and select a depth to proceed</p>
    `
        return ;
    }

    res.innerHTML = `
                <div id="resultContainerMeter">
                    <p class="totals">Total cubic meters:</p>
                    <div id="resultMeter">
                        <h5 class="totalText">${totalShort}m3</h5>
                    </div>
                </div>
    
                <div id="resultContainerYard">
                    <p class="totals">Total cubic yards:</p>
                    <div id="resultYard">
                    <h5 class="totalText">${yardsShort}Cy</h5>
                    </div>
                </div>
       
    `

});