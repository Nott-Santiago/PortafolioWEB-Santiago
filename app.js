addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

    const secciones = document.querySelectorAll('.seccion')
    const menuItems = document.querySelectorAll('.menu_item')

    const funcionObserver = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const itemActual = Array.from(menuItems).find(item => item.CDATA_SECTION_NODE.url == entry.target.id)
                itemActual.classList.add('active')
            }
        });
    }

    const observer = new IntersectionObserver(funcionObserver,{
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })
    secciones.forEach(secccion => observer(secccion))
})