function clearList()
{
	let items = document.querySelectorAll(".list-group-item");
	for (let i = 0; i < items.length; i++)
	{
		items[i].remove();
	}
}

function deleteItem()
{
	if (document.activeElement.className == 'btn-close');
	{
		let item = document.activeElement.parentElement.parentElement;
		let list = item.parentElement;
		let item_index = parseInt(item.id.slice(5));
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

function changeCathegory(dropdown_option)
{
	dropdown_button = dropdown_option.parentElement.parentElement.parentElement.querySelector('.btn.btn-secondary.dropdown-toggle');
	dropdown_button.value = dropdown_option.innerHTML;

	dropdown_options = dropdown_option.parentElement.parentElement.querySelectorAll('.dropdown-item');

	for (let i = 0; i < dropdown_options.length; i++)
	{
		dropdown_options[i].className = 'dropdown-item';
	}
	dropdown_option.className += " active";
}

function createItem() {
	let list = document.querySelector('.list-group.list-group-flush.bbb');
	let extra_html = document.querySelector('#extra');

	extra_html.innerHTML = document.querySelector('#my-data').content;
	let item_html = extra_html.querySelector("#template");
	list.appendChild(item_html);

	let quantity = item_html.querySelector('#quantity');
	let name_field = item_html.querySelector('#name');
	let close_btn = item_html.querySelector('.btn-close');
	let cathegory_bar = item_html.querySelector('#cathegory');

	quantity.id = 'quantity-' + (list.childElementCount - 1);
	name_field.id = 'name-' + (list.childElementCount - 1);
	cathegory_bar.id = 'cathegory-' + (list.childElementCount - 1);



	dropdown_btts = cathegory_bar.parentElement.querySelectorAll('.dropdown-item');
	for (let i = 0; i < dropdown_btts.length; i++)
	{
		dropdown_btts[i].addEventListener('click', function (e) { changeCathegory(this); });
	}

	// Making close button next to an item delete the item
	close_btn.addEventListener('click', deleteItem);

	// Making focus on name after quantity was entered
	quantity.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (document.activeElement.id === quantity.id)
			{
				let name_fi = document.activeElement.parentElement.querySelector('#name-' + quantity.id.slice(9));
				name_fi.focus();
			}
		}
	});

	// Making a new item on entering item's name
	name_field.addEventListener('keypress', function (e) {
		if (e.key === 'Enter')
		{
			e.preventDefault();
			if (name_field.value !== "" && document.activeElement.id === name_field.id)
			{
				createItem();
			}
		}
	});

	// Indexing item properly in the list
	item_html.id = "item-" + (list.childElementCount - 1);

	$.get("/getitemcount/" + list.childElementCount);
	quantity.focus();
}

function listen ()
{
	document.addEventListener('show.bs.modal', createItem);
	document.addEventListener('hidden.bs.modal', clearList);
	document.addEventListener('shown.bs.modal', function () {
		let list = document.querySelector('.list-group.list-group-flush.bbb');
		to_focus = list.querySelector('#item-' + (list.childElementCount - 1));

		if (to_focus.querySelector('#quantity-' + (list.childElementCount - 1)).value === "") {
			to_focus.querySelector('#quantity-' + (list.childElementCount - 1)).focus();
		}
		else if (to_focus.querySelector('#name-' + (list.childElementCount - 1)).value === "") {
			to_focus.querySelector('#name-' + (list.childElementCount - 1)).focus();
		}
	});
}

document.addEventListener('DOMContentLoaded', listen);
