let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let title = document.querySelector('.title');
let time = document.querySelector('.time');
let items = document.querySelectorAll('.item');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
});

let arr = [];
for (let i = 1; i < 26; i++) {
	arr.push(i);
}
let old = [];
for (let i = 1; i < 26; i++) {
	old.push(i);
}
let newArr = [];
let i = arr.length;
let j = 0;
let timer;
start.addEventListener('click', startGame);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', function () {
	location.reload();
})

function startGame() {
	start.style.display = 'none';
	stop.style.display = 'block';
	changeText();
	getNumbers();
	sendNumbers();
	timer = setInterval(startTimer, 1000);
}

function changeText() {
	title.innerHTML = 'До конца игры осталось:';
}

function getNumbers() {
	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		newArr.push(arr[j]);
		arr.splice(j, 1);
	}

	for (let i = 0; i < 25; i++) {
		items[i].innerHTML = newArr[i];
	}
}

function sendNumbers() {
	for (let j = 0; j < 25; j++) {
		items[j].addEventListener('click', function () {

			if (this.innerHTML == old[0]) {
				this.style.backgroundColor = '#2C21B1';
				old.splice(this, 1);
				console.log(old);
			}
		});
	}
}

function startTimer() {
	if (typeof old[0] === 'undefined') {
		clearInterval(timer);
		title.innerHTML = 'Поздравляю) Вы выиграли!';
	}
	let num = Number(time.innerHTML);
	if (num != 0) {
		time.innerHTML = num - 1;
	} else {
		stopTimer();
	}
}

function stopTimer() {
	clearInterval(timer);
	title.innerHTML = 'Вы проиграли! Мне кажется вы способны на большее';
	for (let i = 0; i < 25; i++) {
		items[i].style.backgroundColor = '#b40b27';
	};
	stop.style.display = 'none';
	reset.style.display = 'block';
}
