class Articulo
    {
        constructor(item, descripcion, precioUnitario, stock)
            {
                this.item = item
                this.descripcion = descripcion
                this.precioUnitario = precioUnitario
                this.stock = stock
                this.fecha= new Date()
           }
    }

class Venta
     {
        constructor(item, cantidad)
        {
            this.item = item
            this.cantidad = cantidad
        }
     }

const agregarItem = () =>
    {
        const item = prompt("Menú Vendedor. Opción Agregar. Ingresa el item.").toUpperCase();
        const descripcion = prompt("Menú Vendedor. Opción Agregar. Ingresa la descripción.").toUpperCase(); 
        const precioUnitario = parseFloat(prompt("Menú Vendedor. Opción Agregar. Ingresa el precio unitario.")); 
        const stock = parseInt(prompt("Menú Vendedor. Opción Agregar. Ingresa el stock."));
        articulos.push(new Articulo(item, descripcion, precioUnitario, stock));
    }

/*
En la constante buscarItem cargo una función anónima tipo flecha que recibe como parámetro el nombre de un item o artículo, lo busca en el array articulos y devuelve el índice de su posición o -1 si no lo encuentra en el array. Utilizo tal función tanto para borrarItem() como para modificarItem()
*/

const buscarItem = (item) =>
    {
        const index = articulos.findIndex((articulo)=> articulo.item == item);
        return index;
    }

const borrarItem = (index) =>
    {
        if (index != -1)
            {
                articulos.splice(index, 1);
                alert("Item borrado.");
            }
        else    
            {
                alert("Item no encontrado.");
            }
     }

const modificarItem = (index) => 
     {
        if (index != -1)
            {
                const item = prompt("Menú Vendedor. Opción Modificar. Ingresa el item correcto.").toUpperCase();
                const descripcion = prompt("Menú Vendedor. Opción Modificar. Ingresa la descripción correcta.").toUpperCase(); 
                const precioUnitario = parseFloat(prompt("Menú Vendedor. Opción Modificar. Ingresa el precio unitario correcto.")); 
                const stock = parseInt(prompt("Menú Vendedor. Opción Modificar. Ingresa el stock correcto."));
                articulos[index] = new Articulo(item, descripcion, precioUnitario, stock);
            }
    }

const articulos = [];
const ventas = [];
let continuar = true;
let seguir = true;
let opcion ='';

while (continuar === true)
    {        
        opcion = prompt("Menú. Vendedor: (A)gregar, (B)orrar, (M)odificar. Cliente: (C)omprar. (S)alir").toLowerCase();
        switch(opcion)
            {
                case 'a':         
                    agregarItem();
                    console.log(articulos);
                    console.log('De opción Agregar vuelve al Menú.');
                    break;
                case "b":
                    const recibeItemABorrar = prompt('Menú Vendedor. Opción Borrar. Ingresa el item.').toUpperCase();
                    borrarItem(buscarItem(recibeItemABorrar));
                    console.log(articulos);
                    console.log('De opción Borrar vuelve al Menú.');
                    break;
                case 'm':
                    const recibeItemAModificar = prompt('Menú Vendedor. Opción Modificar. Ingresa el item a modificar.').toUpperCase();
                    modificarItem(buscarItem(recibeItemAModificar));
                    console.log(articulos);
                    console.log('De opción Borrar vuelve al Menú.');
                    break;
                case 'c':
                    while(seguir === true)
                        {
                            const recibeItemAComprar = prompt('Menú Cliente. Opción Comprar. Ingresa el item.').toUpperCase();
                            const item = buscarItem(recibeItemAComprar);                    
                            if(item != -1)
                                    {
                                        alert('Si hay stock del item buscado.');
                                        const cantidad = parseInt(prompt("Ingresa la cantidad."));
                                        ventas.push(new Venta(recibeItemAComprar, cantidad));
                                        const existenteMenosComprado = articulos[item].stock - cantidad;
                                        articulos[item].stock = existenteMenosComprado;
                                    }
                                else
                                    {
                                        alert("No hay stock del item buscado.");
                                    }
                            seguir = confirm("¿Seguir comprando?");        
                        }
                    break;
                case 's':
                    console.log(articulos);
                    console.log(ventas);
                    alert("Menú. Opción Salir.");
                    continuar = false;
                    break;
            }
    }

