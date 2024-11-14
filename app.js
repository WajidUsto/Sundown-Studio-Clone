// LocoMotive Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Cursor
    // let main = document.querySelector("#main")
    // let cursor = document.querySelector("#cursor")
    // main.addEventListener("mousemove",function (dets) {
    //     gsap.to(cursor,{
    //         x: dets.x,
    //         y: dets.y,
    //         ease:"back.out",
    //         duration:0.8,
    //     })
    // })
// Cursor


// Loader
let loader = document.querySelector("#loader")

setInterval(()=>{
    loader.style.top = "-100%"
},4000)


// BlackBox Text Change through  JS


const design = document.querySelector("#head1")
const project = document.querySelector("#head2")
const executive = document.querySelector("#head3")
const para = document.querySelector("#para")
const image = document.querySelector("#page-4-img")


design.addEventListener("click",()=>{
    para.textContent= "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    let img = design.getAttribute("data-img")
    image.setAttribute("src",`${img}`)
    project.style.right = "0vw"
    design.style.right = "2vw"
    design.style.color = "#EFEAE3"
    executive.style.right = "0vw"
    project.style.color = "#504A45"
    executive.style.color = "#504A45"
    
})
project.addEventListener("click",()=>{
    para.textContent= "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    let img = project.getAttribute("data-img")
    image.setAttribute("src",`${img}`)
    design.style.right = "0vw"
    project.style.right = "2vw"
    project.style.color = "#EFEAE3"
    executive.style.right = "0vw"
    design.style.color = "#504A45"
    executive.style.color = "#504A45"
    
})
executive.addEventListener("click",()=>{
    para.textContent= "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    let img = executive.getAttribute("data-img")
    image.setAttribute("src",`${img}`)
    project.style.right = "0vw"
    executive.style.right = "2vw"
    executive.style.color = "#EFEAE3"
    design.style.right = "0vw"
    design.style.color = "#504A45"
    project.style.color = "#504A45"
})



// Swipper JS

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
        // slidesPerView: 1,
    });