let books=[
  {
    name:"Attack on Titan",
    image:"./imgs/cover1.jpg",
  },
  {
    name:"Demon Slayer",
    image:"./imgs/cover2.jpg",
  },
  {
    name:"One Piece",
    image:"./imgs/cover3.jpg",
  },
  {
    name:"Naruto",
    image:"./imgs/cover4.jpg",
  },
  {
    name:"Jujutsu Kaisen",
    image:"./imgs/cover5.jpg",
  },
  {
    name:"Death Note",
    image:"./imgs/cover6.jpg",
  },
  {
    name:"Tokyo Ghoul",
    image:"./imgs/cover7.jpg",
  },
  {
    name:"Hunter x Hunter",
    image:"./imgs/cover8.jpg",
  }

]
  
let inner=document.querySelector(".inner");
function addBooks(book){
  inner.innerHTML+=
  `
    <div class="card">
            <img src="${book.image}" alt="" >
            <h3 class="book-name">${book.name}</h3>

            <div class=" controllers d-flex justify-content-between align-items-center">
            <input type="range" min="0" max="100" value="50" class="custom-range">
            <div class="love-icon">
              <i class="fa-regular fa-heart"></i></div>
            </div>
            <!-- Button trigger modal -->
        <button
          type="button"
          id="btn-add"
          class="btn  btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Add
        </button>
        
        <!-- Modal -->
        <div
          class="modal fade"
          id="modalId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              
              <div class="modal-body">
                <div class="container-fluid">Add to Your Library?</div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn no "
                  data-bs-dismiss="modal"
                >
                No
                </button>
                <button type="button" class="btn yes">Yes</button>
              </div>
            </div>
          </div>
        </div>
        
        <script>
          var modalId = document.getElementById('modalId');
        
          modalId.addEventListener('show.bs.modal', function (event) {
              // Button that triggered the modal
              let button = event.relatedTarget;
              // Extract info from data-bs-* attributes
              let recipient = button.getAttribute('data-bs-whatever');
        
            // Use above variables to manipulate the DOM
          });
        </script>
        
          </div>
  `
}
books.forEach(addBooks)


const navLinks = document.querySelectorAll(".nav-link");
let activeLink = document.querySelector(".nav-link.active");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    activeLink.classList.remove("active");
  });
  link.addEventListener("mouseleave", () => {
    activeLink.classList.add("active");
  });
});

const ranges = document.querySelectorAll(".custom-range");  
function increaseRange(range){
  range.addEventListener("input", (e)=> {
    const value = (range.value / range.max) * 100;
    range.style.background = `linear-gradient(to right, var(--main-color) ${value}%, #ddd ${value}%)`;
  });
}
ranges.forEach(increaseRange);

const loveIcons = document.querySelectorAll(".love-icon");  
loveIcons.forEach((loveIcon) => {
  loveIcon.addEventListener("click", () => {
    loveIcon.innerHTML = `
      <i class="fa-solid fa-heart"></i>
    `;
    loveIcon.style.color = `var(--main-color)`;
  });
});

const btn=document.querySelector(".btn-to-top")
function goUp(){
  scroll({
    top:0,
    behavior:"smooth",
  })
}
btn.addEventListener("click",goUp)
window.addEventListener("scroll",(e)=>{
  if(scrollY==0){
    btn.style.display="none"
  }
  else{
    btn.style.display="block"
  }
})