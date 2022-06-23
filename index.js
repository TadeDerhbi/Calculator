let result; 
const first_value = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( +, -, * or / ): ');

const second_value = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = first_value + second_value;
        alert(`${first_value} + ${second_value} = ${result}`);
        break;

   case '-':
         result = first_value - second_value;
        alert(`${first_value} - ${second_value} = ${result}`);
        break;
    
     case '*':
         result = first_value * second_value;
        alert(`${first_value} * ${second_value} = ${result}`);
        break;

  case '/':
         result = first_value / second_value;
        alert(`${first_value} / ${second_value} = ${result}`);
        break;

    default:
        alert('Invalid operator');
        break;
}