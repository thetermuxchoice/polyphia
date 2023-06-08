const pageTabs = document.querySelectorAll('#page-tabs li a');

pageTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        let page = this.getAttribute('href');  
        document.querySelector(page).style.display = "block";
        document.querySelectorAll('.page').forEach(p => {
            if(p !== document.querySelector(page)) {
            p.style.display = "none"; 
            } 
        });  
    })
})