

var optionsCategory = {
		//Selecciona Categoria:["Selecciona activo"],
	//	acciones : ["seleccione una opcion","amazon","facebook","twitter","instagram"],
/*		cryptomonedas : ["seleccione una opcion","bitcoin","dash","monero"],
		monedas : ["seleccione una opcion","bolivar","dolar","euro","libra"],
		piedras : ["seleccione una opcion","oro","diamante","bronce"],
		petroleos : ["seleccione una opcion","petroleo2020","pe","m"]
*/
		acciones : ["amazon","facebook","twitter","instagram"],
		cryptomonedas : ["bitcoin","dash","monero"],
		monedas : ["bolivar","dolar","euro","libra"],
		piedras : ["oro","diamante","bronce"],
		petroleos : ["petroleo2020","pe","m"]
}

var optionsActives = {
		//Selecciona activo:["Selecciona valor"],
		bolivar : ["logoBolivar","f"],
		dolar : ["logoDolar","f"],
		euro : ["logoEuro","f"],
		libra : ["logoLibra","f3"]
		//cryptomonedas : ["petroleo","","m"]
	}

$(function(){

	/*cuando cambia la categoría de la transaccion, se agrega el activo*/
	var addActive = function(){
		var selected = $('#typeTransa').val();
		$('#active').empty();
		optionsCategory[selected].forEach(function(element,index){
			$('#active').append('<option value="'+element+'">'+element+'</option>');
		});
	}
	$('#typeTransa').change(addActive);
	addActive();
	
	let act = document.getElementsByTagName('active')
	$('#active').on('change',function(e){
		console.log("gattrgae.innerHtml ")
	
	/*	act.addEventListenner('change',function(e){
			console.log(".innerHtml ")	
		})*/
		
		/*cuando cambia el valor del activo de la transaccion, se agrega el logo y el input del activo*/
		var addValorActive = function(){
			var selectedActive = $('#active').val();
			$('#value-active').empty();
			optionsActives[selectedActive].forEach(function(elem,ind){
				$('#value-active').append('<option value="'+elem+'">' +elem+ '</option>' );
			});
		}
		$('#active').change(addValorActive);
		addValorActive();
	});

/*	var addValorActive = function(){
		var active_select = $('#active').val();
		$('#value-active').empty();
		optionsActives[active_select].forEach(function(element,index){
			$('#value-active').append('<option value="'+element+'">'+element+'</option>');
		});
	}
	//$('#active ').change(addValorActive);
/*	$('#typeTransa').change(addValorActive);
	addValorActive();
*/
	//'<div> <button>' +element+ '</button> </div>' + 
});


















/*

Un poco de AJAX
Vamos a complicar el ejemplo, sólo un poco, haciendo que los valores del segundo 
combo nos los de el servidor en vez de tenerlos como variable de javascript. 
Partimos de que tenemos una página en el servidor (puede ser un .php, un .jsp o 
cualquier otro lenguaje) a la que podemos llamar para obtener las opciones del segundo 
combo en función del primer combo. Puede ser algo como pagina.php?selected=color
 o pagina.php?selected=country. Esta llamada debe devolvernos un array json bien formado, 
 es decir, debe devolver ["red","green","blue"] o ["Spain","Germany","France"] según el 
 valor del parámetro selected que se le pase.

El código html es exactamente el mismo que antes.

El código javascript puede ser como este



La carga de jQuery es igual que antes.

De la misma forma que antes, cuando jQuery nos indique que la página se ha cargado 
totalmente, definimos la función fillSecondary(), le decimos a jQuery que llame a esta 
función cuando cambie el contenido del primer combo y llamamos a la función para rellenar
 el segundo combo con unos valores iniciales.

Dentor del fillSecondary() es todo igual excepto la forma de obtener las opciones del 
segundo combo. Usamos $.getJSON() que es una llamada AJAX de jQuery que nos permite obtener
 datos en formato json del servidor. Esta función getJSON() admite tres paraámetros:

La url de la que queremos obtener los datos, en nuestro caso 
"pagina.jsp?selected="+selected que se traducirá a pagina.jsp?selected=color 
o pagina.jsp?selected=country según lo que haya seleccionado en el primer combo.

Datos que queramos pasar a esta url. Ponemos null, aunque podríamos poner la url 
como "pagina.jsp" sin parámetro y hacer que los datos fueran {selected:selected}, 
es decir, un atributo de nombre selected cuyo valor sería el contenido de la variable
 selected.
La función a la que nos llamarán cuando el servidor responda. A esta función se la
 llamará pasandole data como parámetro. En data estará el array de opciones para el
  segundo combo, si el servidor devuelve bien ["red","green","blue"], bien 
  ["Spain","Germany","France"], es decir, un array bien formado en JSON.
Así que teneiendo en data el array de elementos para el segundo combo, sólo nos 
queda, igual que antes, recorrer el array con un forEach() para ir añadiendo los elementos.
*/