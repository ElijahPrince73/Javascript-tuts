$("#square").draggable();

$("#resizable").resizable();

$("#target").droppable({
	drop: function (ui, event) {
		$("#target").css("background-color" , "black");
	}
});

$("#accordian").accordion();

$("ul").sortable();