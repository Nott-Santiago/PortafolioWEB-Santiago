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
        threshold: 0.8
    })

    secciones.forEach(seccion => observer.observe(seccion))

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
                
          });
        });
      });
  
      menuItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            
    });
  });
})