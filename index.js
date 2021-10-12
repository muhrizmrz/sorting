$(function(){
$('#search').focus();
var peaple =   [{name : 'Muhriz',num: 286,place:'Kottila'},
				{name:'Nasif',num: 284,place:'Pariyaram'},
				{name:'Thwaha',num: 289,place:'Veliyambra'},
				{name:'Swabah',num: 237,place:'Puravoor'},
				{name:'Midlaj Kp',num: 230,place:'Keezhoor'},
				{name:'Afsal',num: 246,place:'Mattannur'},
				{name:'Twayyib',num: 247,place:'Kattampally'},
				{name:'Midlaj p',num: 249,place:'Mattannur'},
				{name:'Abdul Basith',num: 258,place:'Chembilode'},
				{name:'Sahal Cp',num: 260,place:'Chittaripparamba'},
				{name:'Irshad',num: 263,place:'Chembilode'},
				{name:'Asif',num: 264,place:'Varam'},
				{name:'Thanveer Vajid',num: 267,place:'Mayyil'},
				{name:'Ashhar',num: 269,place:'Noonheri'},
				{name:'Sifar',num: 275,place:'Pedena'},
				{name:'Shamlan',num: 274,place:'Pedena'},
				{name:'Swalahudheen',num: 277,place:'Veliyambra'},
				{name:'Naseef',num: 281,place:'Chavassery'},
				{name:'Ashraf',num: 334,place:'Panniyur'}];
///// CREATE NEW ARRAY RESULTS
var results = [];
var $search_form = $('#search_form');
for (var i = 0; i < peaple.length; i++) {
	var all= '<tr class="text-center"><td>'+peaple[i].name + '</td><td>'+ peaple[i].num + '</td><td>'+ peaple[i].place + '</td></tr>';
	$('#tabled').append(all);
}
var cache = [];

console.log(cache);
$search_form.on('submit',function(e) {
	e.preventDefault();
	$('#tabled tr').remove();
	$('#result').remove();
	var $not = '<tr><td colspan="3" class="text-center h6 not hide">NOT FOUND</td></tr>';
	$('#tabled').append($not);
	var $search = $('#search').val().trim().toLowerCase();
	var $search_var = $('#search').val().length;
	//alert(peaple[1].name.substring(0,$search_var));
	peaple.forEach(function(person) {
		var person_num = person.num;
		if (person.num == $search || person.name.trim().toLowerCase().substring(0,$search_var) == $search.trim().toLowerCase().substring(0,$search_var)) {
			var $rows = '<tr class="text-center"><td>'+person.name + '</td><td>'+person.num + '</td><td>'+ person.place + '</td></tr>';
			$('#tabled').append($rows);
		} else {
		}
	});
	var row_length = $('#tabled tr').length - 1;
	if (row_length == 0) {
		$('#no-found').remove();
		$('#data-table').hide();
		$('#data-table').before('<h5 class="text-center" id="no-found">NO DATA FOUND</h5>');

	} else {
		$('#data-table').show();
		$('#data-table').before('<h5 class="text-primary text-center" id="result">' + row_length + ' results for "' +$search+'"</h5>');
		$('#no-found').remove();
	}
	$('#search').val('');
	sortable();
})

reple("wmbmuhwmbriz iswmb kotwmbtila");
//makeRows();
//appendRows();
//update();
});
function reple(text){
	text = text.replace(/wmb/g," ");
	//text = text.replace(/a/g,' 1 ').replace(/b/g,' 2 ').replace(/c/g,' 3 ').replace(/l/g,' 12 ').replace(/r/g,' 18 ').replace(/x/g,' 23 ').replace(/z/g,' 25 ').replace(/d/g,' 4 ').replace(/o/g,' 15 ').replace(/t/g,' 20 ');
	console.log(text);
}
/*function makeRows() {
		

		peaple.forEach(function(person) {
			var $row = $('<tr></tr>');
			$row.append($('<td></td>').text(person.name));
			$row.append($('<td></td>').text(person.num));
			rows.push({
				person: person,
				$element: $row
			});
		});
		rows.forEach(function(row) {
			$('#tabled').append(row.$element);
		})
	}
	function appendRows() {
			
	}
	function update() {
			rows.forEach(function(row) {
				var $search = $('#search').val();
				if (row.person.num == $search) {
					row.$element.show();
				} else {
					row.$element.hide();
				}
			})
	}*/