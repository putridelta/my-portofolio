console.log("JavaScript berhasil terhubung!");



const skills = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition && !skill.classList.contains('filled')) {
      const targetWidth = skill.dataset.width; 
      if (targetWidth) {
        skill.classList.add('filled');
        skill.style.width = targetWidth;
      }
    }
  });
});

// Collapse
// var coll = document.getElementsByClassName("button-coll");
// var i ;
// for (i =0; i < coll.length; i++){
//   coll[i].addEventListener("click", function(){
//     this.classList.toggle("active");
//     var content = document.querySelector(".sidebar");
//     if(content.style.display === "block"){
//       content.style.display ="none";
//     }else{
//       content.style.display="block";
//     }
//     });
//   }

const openBtn = document.querySelector(".button-coll");
const closeBtn = document.querySelector(".button-close");
const sidebar = document.querySelector(".sidebar");
const menuSidebar = document.querySelectorAll(".sub-menu-sidebar a");

if (openBtn && sidebar) {
  openBtn.addEventListener("click", () => {
    sidebar.style.display = "block";
  });
}

if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
}
menuSidebar.forEach((item) => {
  item.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});


