function Hom(){
    gsap.set(".slidesm", {scale:5})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    },
})

tl
.to(".video",{
    '--clip': "0%",
    ease: Power2,
}, 'a')
.to(".slidesm", {
    scale: 1,
    ease: Power2,
},'a')
.to(".lft", {
    xPercent: -10,
    stagger: .02,
    ease: Power4,
},'b')
.to(".rgt", {
    xPercent: 10,
    stagger: .02,
    ease: Power4,
},'b')
}

gsap.to(".slides",{
    ScrollTrigger: {
        trigger:".real",
        markers: true,
        start: "top top", 
        end: "buttom bottom ",
        scrub: 2,
    },
    xPercent: -200,
    ease: power4,
})

Hom();