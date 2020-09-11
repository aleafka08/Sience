$( document ).ready(function() {
    var arreglo =["perfume.Jpeg","perfume1.jfif","perfume2.jfif"]
    var contenedorProductos = $("#contenedorProductos")
    for(var i = 0; i< arreglo.length; i++){
      contenedorProductos.append("<div col-md><img src='./imagenes/"+arreglo[i]+"' style='width: 90px; height: 90px; margin: 15px'> </div>")
    }

})
