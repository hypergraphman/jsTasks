const _header = "header_ia";
const _headerConverse = "header_converse_ia";
const _heart = "heart_ia";
const _heartConverse = "heart_converse_ia";
const _inner = "inner_ia";
const _innerActive = "inner_active_ia";
const _show = 'show';

let showItem = function(item)
{
	item.childNodes[1].className = _headerConverse;
	item.childNodes[1].childNodes[3].className = _heartConverse;
	item.childNodes[3].className = _innerActive;
	item.setAttribute('id', _show);
};

let hideItem = function(item)
{
	item.childNodes[1].className = _header;
	item.childNodes[1].childNodes[3].className = _heart;
	item.childNodes[3].className = _inner;
	item.removeAttribute('id');
};

// для того чтобы это заработало был добавлен атрибут id = 'show' в item_accordion
document.addEventListener('click', function (event) {
	let showItemAccordion = document.getElementById(_show),
		// !!!---> тут я не понял как иначе получить доступ к текущему элементу
		// мне этот способ не нравится, можно ли как-то иначе?
		currentItemAccordion = event.path[event.path.length-9];

	if (showItemAccordion) hideItem(showItemAccordion);

	if (currentItemAccordion) showItem(currentItemAccordion);
});

// реализация для перебора всех элементов
// let acc=document.getElementsByClassName("item_accordion");

// for (let i = 0; i < acc.length; i++) {
// 	acc[i].onclick = function() {
// 		// скрывать/открывать несколько элементов сразу
// 		// Если this открыт, то закрываем его, иначе открываем
// 		this.childNodes[1].className === _header ? showItem(this) : hideItem(this);
//
// 		// открывает this
// 		// showItem(this);
//
// 		// закрывает все остальные элементы кроме this
// 		for (let j = 0; j < acc.length; j++)
// 			if (this !== acc[j]) hideItem(acc[j]);
// 	}
// }