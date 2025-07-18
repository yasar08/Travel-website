window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".home .home-box nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  
  
  



const countersEL = document.querySelectorAll('.numbers');
countersEL.forEach((counters)=> {
    counters.textContent = 0;

    increamentCounters();

    function increamentCounters() {
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increament = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increament);

        if(currentNum < dataCeil) {
            counters.textContent = currentNum;
            setTimeout(increamentCounters, 70);
        } else{
            counters.textContent = dataCeil;
        }
    }
});






  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.getElementById("sidebar");

  menuButton.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.remove("show");
  });

  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  });





  
  const popup = document.getElementById("formPopup");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Show login or signup form
  function showForm(type) {
    popup.style.display = "flex";
    loginForm.style.display = type === "login" ? "flex" : "none";
    signupForm.style.display = type === "signup" ? "flex" : "none";
  }

  // Close form popup
  function closeForm() {
    popup.style.display = "none";
  }

  // Link triggers
  document.querySelector(".signup-login a[href='#']").addEventListener("click", (e) => {
    e.preventDefault();
    showForm("signup");
  });

  document.querySelectorAll(".signup-login a")[1].addEventListener("click", (e) => {
    e.preventDefault();
    showForm("login");
  });

