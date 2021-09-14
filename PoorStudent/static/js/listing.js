
function quantitySubmit()
{
	if (document.activeElement.id == 'quantity');
	{
		name_field = document.activeElement.parentElement.querySelector('#name');
		name_field.focus();
	}
}

function closeModal()
{
}

function deleteItem()
{
	if (document.activeElement.className == 'btn-close');
	{
		let item = document.activeElement.parentElement.parentElement;
		let list = item.parentElement;
		let item_index = parseInt(item.id.slice(5));
		console.log(item_index);
		console.log(list);

		if (list.childElementCount != 1)
		{
			item.remove();

			for (let i = item_index; i < list.childElementCount; i++) {
				query = "#item-" + (i + 1);
				console.log(query);
				list.querySelector(query).id = "item-" + i;
			}
		}
	}
}

function createItem ()
{
	let list = document.querySelector('.list-group.list-group-flush.bbb');
	let extra_html = document.querySelector('#extra');

	extra_html.innerHTML = document.querySelector('#my-data').content;
	let item_html = extra_html.querySelector("#template");
	list.appendChild(item_html);
		
	let quantity = item_html.querySelector('#quantity');
	let name_field = item_html.querySelector('#name');
	let close_btn = item_html.querySelector('.btn-close');

	// Making close button next to an item delete the item
	close_btn.addEventListener('click', deleteItem);

	// Making focus on name after quantity was entered
	quantity.addEventListener('keypress', function (e) { if (e.key === 'Enter') { quantitySubmit(); } });

	// Making a new item on entering item's name
	name_field.addEventListener('keypress', function (e) { if (e.key === 'Enter' && name_field.value !== "") { createItem(); } });

	// Indexing item properly in the list
	item_html.id = "item-" + (list.childElementCount - 1);
	quantity.focus();
}

function listen ()
{
	createItem();
	document.addEventListener('shown.bs.modal', function () {
		let list = document.querySelector('.list-group.list-group-flush.bbb');
		to_focus = list.querySelector('#item-' + (list.childElementCount - 1));

		if (to_focus.querySelector('#quantity').value === "") {
			to_focus.querySelector('#quantity').focus();
		}
		else if (to_focus.querySelector('#name').value === "") {
			to_focus.querySelector('#name').focus();
		}
	});
}

document.addEventListener('DOMContentLoaded', listen)