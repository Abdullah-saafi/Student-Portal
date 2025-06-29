const menuBtn = document.getElementById('nav-icon');
const sideBar = document.getElementById('side-bar');
const closingBtn = document.getElementById('close-icon');
const dashboard = document.getElementById('dashboard')
menuBtn.addEventListener('click',()=>{
    if (sideBar.style.display === 'none') {
        sideBar.style.display = 'block';
        dashboard.style.display='none'
        menuBtn.style.display='none';

        
    }else{
        sideBar.style.display = 'none';
        menuBtn.style.display='block';
        dashboard.style.display='block';


    }

});
closingBtn.addEventListener('click',()=>{
        sideBar.style.display = 'none';
        menuBtn.style.display='block';
        dashboard.style.display='block';
})