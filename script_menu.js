var icon_oppen = document.getElementById('icon-oppen');
var icon_exit = document.getElementById("icon-exit");
var ul = document.getElementById('menu-ul')

icon_oppen.addEventListener('click', ()=>
    {
        ul.style.display = 'block'
        icon_oppen.style.display = 'none'
        icon_exit.style.display = 'block'
    }
)

icon_exit.addEventListener('click', ()=>
    {
        icon_exit.style.display = 'none'
        ul.style.display = 'none'
        icon_oppen.style.display = 'block'
    }
)