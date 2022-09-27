const calculadoraTotal = () => {
  let op = prompt(
    "Seleccione el número que quiere realizar \n 1 - para sumar \n 2 - para restar \n 3 - para multiplica \n 4 - para dividir"
  );

  if (op === "1") {
    let num1 = prompt("ingrese primer valor");
    let num2 = prompt("ingrse segundo valor");
    let suma = parseFloat(num1) + parseFloat(num2);
    let resul = "La suma es" + suma;
    alert("El resultado es " + resul);
  } else if (op === "2") {
    let num1 = prompt("ingrese primer valor");
    let num2 = prompt("ingrse segundo valor");
    let resta = parseInt(num1) - parseInt(num2);
    let resul = "La resta es" + resta;
    alert("El resultado es " + resul);
  } else if (op === "3") {
    let num1 = prompt("ingrese primer valor");
    let num2 = prompt("ingrse segundo valor");
    let multiplica = parseInt(num1) * parseInt(num2);
    let resul = "La multi es" + multiplica;
    alert("El resultado es " + resul);
  } else {
    if (op === "4") {
      let num1 = prompt("ingrese primer valor");
      let num2 = prompt("ingrse segundo valor");
      if (num2 != 0) {
        let division = parseFloat(num1) / parseFloat(num2);
        let resul = "La división es" + division;
        alert("El resultado es " + resul);
      } else {
        alert("no se divide en 0");
      }
    } else {
      alert("ingrese un valor de 1 a 4");
    }
  }
  {
  }
  {
  }
};
