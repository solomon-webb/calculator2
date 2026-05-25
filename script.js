let display = document.getElementById('display');
let justCalculated = false

function  press(value) {
       if(justCalculated) {
               display.value = " ";
              justCalculated = false;
        
       }
       display.value += value
}
function calculate() {
       try{
              let expression = display.value
              expression  =  expression.replace(/➗/g, '/');
              expression  =  expression.replace(/✖️/g, '*');
              expression  =  expression.replace(/➖/g, '-');
              expression  =  expression.replace(/➕/g, '+');
              justCalculated = true;
              display.value = eval(expression);
       }
        catch(err) {
              display.value = "syntax error"
       }
}
function Clear() {
       justCalculated = true
       display.value = " ";
       
}
function  del() {
       if(!justCalculated) {
              display.value = display.value.slice(0,-1)
       }
}
function light() {
       document.body.classList.add('LightMode')
} 
function dark() {
        document.body.classList.remove('LightMode')
}