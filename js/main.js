
// 2 - Seleccionar esa lista de nodos y detectar el click en todos los elementos
// 3 - Cuando un elemento es clickeado , se ejecuta una funcion que realiza varias cosas:
//  - Selecciona al elemento que ya tiene la clase active (por defecto, primero la tendrá Inicio)
//  - Le quita a ese elmento la clase
//  - Se la agrega al elemento que fue clickeado

const menuItems = document.querySelectorAll('menu-item');  // 1 - Seleccionar todos los items del menu
menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });    
});
