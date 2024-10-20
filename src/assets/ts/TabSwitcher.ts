document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll<HTMLAnchorElement>('#menu-container ul li a');
  const sections = document.querySelectorAll<HTMLElement>('.content-sections .content');

  const updateActiveTab = () => {
    menuItems.forEach(item => {
      if (item.classList.contains('bg-black') || item.classList.contains('dark:bg-white')) {
        // Remover todas las clases activas
        menuItems.forEach(el => el.classList.remove('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black'));

        // Aplicar las clases correctas según el modo actual
        if (document.documentElement.classList.contains('dark')) {
          item.classList.add('dark:bg-white', 'dark:text-black');
        } else {
          item.classList.add('bg-black', 'text-white');
        }
      }
    });
  };

  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      // Obtener el target del enlace clicado
      const target = this.getAttribute('section-target') as string;

      // Remover clases activas de todos los tabs
      menuItems.forEach(el => {
        el.classList.remove('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
        el.classList.add('text-gray-500', 'dark:text-gray-400'); // Restaurar las clases por defecto
      });

      // Aplicar clases activas según el modo (claro/oscuro)
      if (document.documentElement.classList.contains('dark')) {
        this.classList.add('dark:bg-white', 'dark:text-black');
      } else {
        this.classList.add('bg-black', 'text-white');
      }

      // Mostrar la sección correspondiente
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

  // Observar los cambios en el modo claro/oscuro
  const observer = new MutationObserver(updateActiveTab);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});
