 const Figure1 = parseInt(prompt('Enter First Figure'));
const operator = prompt('select operator +,-, /,* etc....');
const Figure2 = parseInt(prompt('Enter second Figure'));

let result;


if(isNaN(Figure1) || isNaN(Figure2))
  alert('Invalid Format');
 
  else if(operator === '+')
  { result = (Figure1 + Figure2);
 }
 else if(operator === '-')
    { result = Figure1 - Figure2;
 }else if (operator === '/')
     {result = Figure1 / Figure2;
 }else if
    (operator === '*')
         { result = Figure1 * Figure2;
 }
alert(Figure1 + operator + Figure2 +' = ' + result) 






