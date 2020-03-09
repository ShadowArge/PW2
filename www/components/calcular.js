// This is a JavaScript file
$(document).on("click","#calcular", function(){

var val1 = $("#n1").val();
var val2 = $("#n2").val();

var calcular = parseFloat(val1) + parseFloat(val2);

$("#resultado").val(calcular);

});
