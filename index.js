document.getElementById('toggleBtn').addEventListener('click', function() {


let sidebar = document.getElementById('sidebar');
let mainContent = document.querySelector('.main-content');

if(sidebar.style.left === '-250px') {
    sidebar.style.left = '0';
    mainContent.style.marginLeft = '250px';
}else {
    sidebar.style.left= ' -250px';
    mainContent.style.marginLeft = '0';
}



});