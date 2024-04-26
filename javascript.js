function opentab(tabName){
 
    const  tab=document.querySelectorAll('.about-text');
   
    tab.forEach(tab => tab.style.display = 'none');
  
    // Show the selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
    


}
  document.getElementById("navbarButton").addEventListener("click", function() {
    document.getElementById("navbarCollapse").classList.toggle("show");
  });
