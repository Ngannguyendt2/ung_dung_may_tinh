function add() {
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let add=num1+num2;
    alert('add= '+add);
}
function sub() {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let sub=num1-num2;
    alert('sub= '+sub);
}
function mul() {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let mul=num1*num2;
    alert('mul= '+mul);
}
function div() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let div = num1 / num2;
    alert('div= ' + div);
}