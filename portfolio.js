const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    
    menuLinks.forEach(l => l.classList.remove("active"));

    this.classList.add("active");

    document.getElementById("hams").checked = false;
  });
});

