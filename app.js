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
        entries.forEach(entrty => {
            if (entrty.isIntersecting){
                const itemActual = Array.from(menuItems).find(item => item.dataset.url == entrty.target.id)
                itemActual.classList.add('active')
                for(const item of menuItems){
                    if(item != itemActual){
                        item.classList.remove('active')
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(funcionObserver,{
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    })

    secciones.forEach(seccion => observer.observe(seccion))
    
    menuItems.forEach(item => {
        item.addEventListener('click', ent => {
            ent.preventDefault();
            const targetSectionId = item.dataset.url;
            const targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({ 
                behavior: 'smooth'
            });
    });
  });

})