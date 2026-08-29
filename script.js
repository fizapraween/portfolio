
// Smooth reveal animation on scroll

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });


},{
    threshold:0.2
});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// Button click scroll

const exploreBtn = document.querySelector("button");

if(exploreBtn){

    exploreBtn.addEventListener("click",()=>{

        document
        .querySelector("#projects")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}





// Navbar active effect

const navLinks = document.querySelectorAll("nav ul li a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.forEach(item=>{

            item.style.color="#f5d0fe";

        });


        link.style.color="#f9a8d4";


    });


});