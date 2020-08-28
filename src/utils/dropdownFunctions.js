export const closeDropdownsOnClick = (e) => {
   if (e.target.closest('.filters-bar')) return

   const $dropdowns = document.querySelectorAll('details[open]');
   if (!$dropdowns) return
   $dropdowns.forEach((dropdown) => {
      dropdown.removeAttribute('open');
   });
}

export const resizeDropdown = () => {
   const $container = document.querySelector('.container')
   const $dropdown = document.querySelector('.filter--dropdown[open] > div')

   if (!$dropdown) return

   const $dropdownRect = $dropdown.getBoundingClientRect()
   const $containerRect = $container.getBoundingClientRect()

   if ($dropdownRect.left <= $containerRect.left) {
      $dropdown.style.left = '0px'
      $dropdown.style.transform = 'translateX(0px)'
   } else if ($dropdownRect.right >= $containerRect.right) {
      $dropdown.style.left = 'auto'
      $dropdown.style.right = '0px'
      $dropdown.style.transform = 'translateX(0px)'
   }
}

export const closeAllDropdowns = () => {
   document.body.addEventListener('toggle', function (event) {
      resizeDropdown()
      if (!event.target.open) return;

      const $dropdowns = document.querySelectorAll('details[open]');
      if (!$dropdowns) return
      $dropdowns.forEach((dropdown) => {
         if (dropdown === event.target) return;
         dropdown.removeAttribute('open');
      });

   }, true);
}