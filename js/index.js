console.log('start frontend200tb canvas');


/*****************
Константы
*****************/
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");


/*****************
Переменные
*****************/
context.strokeStyle = "#020c29";

/*****************
Фигуры
*****************/
/* Окружность 
arc(x, y, radius, startAngle, endAngle, anticlockwise)*/
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI*2, false);
context.closePath();
context.stroke();



/* Треугольник 
moveTo(x, y)
lineTo(x, y)
*/
context.beginPath();
context.moveTo(600, 50);
context.lineTo(700, 50);
context.lineTo(650, 150);
context.lineTo(600, 50);
context.stroke();

/* Квадрат 
rect(x, y, width, height)*/
context.beginPath();
context.rect(50, 450, 100, 90);
context.closePath();
context.stroke();

/* Прямоугольник 
rect(x, y, width, height)
*/
context.beginPath();
context.rect(550, 450, 200, 90);
context.closePath();
context.stroke();



/*****************
Функции
*****************/



/*****************
События
*****************/

console.log('end frontend200tb canvas');
