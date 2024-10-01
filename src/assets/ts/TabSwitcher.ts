document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll<HTMLAnchorElement>('#menu-container ul li a');
    const sections = document.querySelectorAll<HTMLElement>('.content-sections .content');

    console.log(menuItems)
  
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
        // Obtener el target del enlace clicado
        const target = this.getAttribute('section-target') as string;
  
        menuItems.forEach(el => el.classList.remove('bg-black', 'text-white'));
        
        this.classList.add('bg-black', 'text-white');
  
        sections.forEach(section => {
          section.classList.add('hidden');
          section.classList.remove('block');
        });
  
        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.classList.remove('hidden');
          targetSection.classList.add('block');
        }
      });
    });
  });