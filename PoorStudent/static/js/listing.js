
function quantitySubmit(me, name_field)
{
	console.log(document.activeElement)
	if (me === document.activeElement)
		name_field.focus();
}

function itemEntered (item)
{
	var list = document.querySelector('.list-group.list-group-flush.bbb');
	var cln = item.cloneNode(true);
	quantity = cln.querySelector('#quantity');
	name_field = cln.querySelector('#name');

	console.log(quantity);
	console.log(name);

	list.appendChild(cln);
	quantity.value = null;
	quantity.addEventListener('keypress', function (e) { if (e.key === 'Enter') { quantitySubmit(quantity, name_field); } });
	name_field.value = null;
	name_field.addEventListener('keypress', function (e) { if (e.key === 'Enter') { itemEntered(list.querySelector('#item-0')); } });
	name_field.focus();
	cln.id = "item-" + (list.childElementCount - 1);
}

function listen()
{
	var item = document.querySelector('#item-0').querySelector('.input-group');
	var close_btn = item.querySelector('.btn-close');
	var quantity = item.querySelector('#quantity');
	var name = item.querySelector('#name');
	var cathegory = item.querySelector('#cathegory');

	quantity.addEventListener('keypress', function (e) { if (e.key === 'Enter') { quantitySubmit(quantity, name); } });
	name.addEventListener('keypress', function (e) { if (e.key === 'Enter') { itemEntered(document.querySelector('#item-0')); } });
	//document.querySelector('.modal.fade.show').addEventListener('submit', modal);
}
document.addEventListener('DOMContentLoaded', listen)