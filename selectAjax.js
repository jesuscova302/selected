
/*
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>*/
$(function(){
	var fillSecondary = function(){
		var selected = $('#primary').val();
		$('#secondary').empty();
		$.getJSON("pagina.jsp?selected="+selected,null,function(data){
	 	   data.forEach(function(element,index){
		      $('#secondary').append('<option value="'+element+'">'+element+'</option>');
		   });
		});
	}
	$('#primary').change(fillSecondary);
	fillSecondary();
	

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