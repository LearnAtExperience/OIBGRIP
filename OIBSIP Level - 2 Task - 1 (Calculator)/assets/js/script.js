// Getting input box 
let input = document.getElementById('input-holder');
// Getting all the butttons
let ac = document.getElementById('btn-calc-1');
let del = document.getElementById('btn-calc-2');
let div = document.getElementById('btn-calc-3');
let seven = document.getElementById('btn-calc-4');
let eight = document.getElementById('btn-calc-5');
let nine = document.getElementById('btn-calc-6');
let mul = document.getElementById('btn-calc-7');
let four = document.getElementById('btn-calc-8');
let five = document.getElementById('btn-calc-9');
let six = document.getElementById('btn-calc-10');
let add = document.getElementById('btn-calc-11');
let one = document.getElementById('btn-calc-12');
let two = document.getElementById('btn-calc-13');
let three = document.getElementById('btn-calc-14');
let sub = document.getElementById('btn-calc-15');
let zero = document.getElementById('btn-calc-16');
let point = document.getElementById('btn-calc-17');
let final = document.getElementById('btn-calc-18');


ac.onclick = () => {
  input.value = "";
}

del.onclick = () => {
  input.value = input.value.slice(0, -1);
}

div.onclick = () => {
  input.value += '/';
}

seven.onclick = () => {
  input.value += '7';
}

eight.onclick = () => {
  input.value += '8';
}

nine.onclick = () => {
  input.value += '9';
}

mul.onclick = () => {
  input.value += '*';
}

four.onclick = () => {
  input.value += '4';
}

five.onclick = () => {
  input.value += '5';
}

six.onclick = () => {
  input.value += '6';
}

add.onclick = () => {
  input.value += '+';
}

one.onclick = () => {
  input.value += '1';
}

two.onclick = () => {
  input.value += '2';
}

three.onclick = () => {
  input.value += '3';
}

sub.onclick = () => {
  input.value += '-';
}

zero.onclick = () => {
  input.value += '0';
}

point.onclick = () => {
  input.value += '.';
}

final.onclick = () => {
  if (input.value != '') {
    try {
      input.value = eval(input.value);
    } catch (err) {
      window.alert('Invalid Input');
      input.value = "";
    }

  } else {
    window.alert("Enter values to evaluate");
    input.value = "";
  }
}