const _header = "header_ia";
const _headerConverse = "header_converse_ia";
const _heart = "heart_ia";
const _heartConverse = "heart_converse_ia";
const _inner = "inner_ia";
const _innerActive = "inner_active_ia";

var acc=document.getElementsByClassName("item_accordion");

showItem = function(item)
{
	item.childNodes[1].className = _headerConverse;
	item.childNodes[1].childNodes[3].className = _heartConverse;
	item.childNodes[3].className = _innerActive;
};

hideItem = function(item)
{
	item.childNodes[1].className = _header;
	item.childNodes[1].childNodes[3].className = _heart;
	item.childNodes[3].className = _inner;
};

for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
		// скрывать/открывать несколько элементов сразу
		// Если this открыт, то закрываем его, иначе открываем
		this.childNodes[1].className === _header ? showItem(this) : hideItem(this);

		// открывает this
		// showItem(this);
		
		// закрывает все остальные элементы кроме this 
		for (var j = 0; j < acc.length; j++)
			if (this !== acc[j]) hideItem(acc[j]);
	}
}