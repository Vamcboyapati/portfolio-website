const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    
    menuLinks.forEach(l => l.classList.remove("active"));

    this.classList.add("active");

    document.getElementById("hams").checked = false;
  });
});


function adddiv(event) {
  const parent = event.currentTarget;
  const caret = parent.querySelector("i");
  const subSkill = parent.querySelector(".sub-skill");

  caret.classList.toggle("rotate");

  if (subSkill.innerHTML === "") {
    if (parent.textContent.includes("Programming Languages")) {
      subSkill.innerHTML = `<ul><li>Python</li><li>Java</li><li>JavaScript</li></ul>`;
    } else if (parent.textContent.includes("Database")) {
      subSkill.innerHTML = `<ul><li>MySQL</li><li>MongoDB</li></ul>`;
    } else if (parent.textContent.includes("Web Technologies")) {
      subSkill.innerHTML = `<ul><li>HTML</li><li>CSS</li></ul>`;
    } else if (parent.textContent.includes("Version Control and Tools")) {
      subSkill.innerHTML = `<ul><li>Git</li><li>GitHub</li><li>Docker</li></ul>`;
    }else if(parent.textContent.includes("Cloud Technologies")){
      subSkill.innerHTML=`<ul><li>AWS</li></ul>`
    }else if(parent.textContent.includes("concepts")){
      subSkill.innerHTML=`<ul><li>Object-Oriented-Programming</li><li>DSA</li></ul>`
    }
  } else {
    subSkill.innerHTML = "";
  }
}
