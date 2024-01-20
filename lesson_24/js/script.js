// Строгий режим
"use strict"
// Задача №1
// Що потрапить в консоль?
let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar)
}
// Виведеться 1 тому що ++someVar інкремент

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
let item = `Пункт №`
for (let i = 1; i < 11; ++i) {
	console.log(`${item} ${i}`)
}

// Задача №3
// Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
	// 20 <= 10 false
	// 30 / 2 < 5 false
	// 10 <= "10" true
	// 20 === "20" false
	// false || false && true || false;
	// false || false || false
	// Нічого не виведеться
}

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

function calcDivide(a = 2, b = 1) {
	const result = a / b
	if (isNaN(result)) {
		console.log(`Привіт`)
	} else {
		console.log(`Результат ділення: ${result}.`)
	}
	// isNaN(result) ? console.log(`Введіть правильні дані.`) : console.log(`Результат ділення: ${result}.`)
}
calcDivide(10, -5)
calcDivide(1170, `3`)
calcDivide(247, 125)
calcDivide(-10, -20)
calcDivide()
calcDivide(30)

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let someNumbers = [120, 10, 55, 3.333, 11]
someNumbers.forEach(item => {
	console.log(item)
})
if (someNumbers.includes(10)) {
	console.log(10)
} else {
	console.log(`Масив не має числа 10.`)
}
