function confirmar(nombre, direccion, telefono, producto){
  var nombrejs = $('#Nombre').val()
  var direccionjs = $('#Direccion').val()
  var productojs = $('#Producto').val()
  var telefonojs = $('#Telefono').val()
    
  if(nombrejs.length == 0  || direccionjs.length == 0 || productojs.length == 0 || telefonojs.length == 0 ){
    swal({
      title: "Todos los campos son obligatorios",
      icon: "error",
      buttons: true,
      dangerMode: true
    })
  }else{
    swal({
      title: nombrejs + ", ¿Estás seguro de enviar a la dirección "+direccionjs+" los productos "+productojs+"?",
      text: "Una vez confirmado se enviará ",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("COMPRA EXITOSA !", {
          icon: "success",
        });
      } else {
        swal("regresa pronto");
      }
    });
  }

}

$( document ).ready(function() {
  $('.carousel').carousel({
    interval: 2000
  })

})
