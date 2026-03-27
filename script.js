const btnOpen = document.querySelector('.js-open');
const btnClose = document.querySelector('.js-close');

const navMobileOpen = document.querySelector('.nav-mobile-open');
const navMobileClose = document.querySelector('.nav-mobile-close');

// Hàm khi nhấn nút 3 gạch
function handleOpenNav() {
    navMobileOpen.classList.add('hide');    // Ẩn thanh chứa nút 3 gạch
    navMobileClose.classList.add('show');   // Hiện thanh chứa menu và nút X
}

// Hàm khi nhấn nút X
function handleCloseNav() {
    navMobileOpen.classList.remove('hide'); // Hiện lại thanh chứa nút 3 gạch
    navMobileClose.classList.remove('show'); // Ẩn thanh chứa menu đi
}

// Lắng nghe sự kiện click
btnOpen.addEventListener('click', handleOpenNav);
btnClose.addEventListener('click', handleCloseNav);