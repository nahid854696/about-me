// var typed= new typed(".text",{
//     strings:["Front-end developer","Full stack developer","Web-developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// })
document.addEventListener("DOMContentLoaded", function() {
    const options = {
        strings: ["Front-end developer", "Full stack developer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    };

    const typed = new Typed(".text", options);
});
