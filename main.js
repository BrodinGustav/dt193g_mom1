document.addEventListener('DOMContentLoaded', () => {
    // Hitta burgarikonen och menyn
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarMenu');
  
    // Lyssna på klick för att visa/dölja menyn
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });