document.addEventListener('DOMContentLoaded', function () {
    
    let adminLI = document.getElementById("admin");
    let aboutLI = document.getElementById("about");

    adminLI.addEventListener(onmouseover, function(event) {
        document.getElementById(dropdownMenus[i].id).style.display = "block";
        
    });

    aboutLI.addEventListener(onmouseover, function(event) {
        document.getElementById(dropdownMenus[i].id).style.display = "block";
        
    });

    adminLI.addEventListener(onmouseout, function(event) {
        document.getElementById(dropdownMenus[i].id).style.display = "none";
    });

    aboutLI.addEventListener(onmouseout, function(event) {
        document.getElementById(dropdownMenus[i].id).style.display = "none";
    });
});

