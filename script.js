var tl = gsap.timeline()

tl.from("#nav-part1,#nav-part2,#nav-part3",{
   y: -100,
   duration: 0.6,
   delay: 0.3,
   stagger:1
})

tl.from("h1",{
   opacity: 0,
   duration: 0.7,
   delay:0.4,
   stagger: 1,
   y: 120
})

tl.from(".img-left",{
   opacity:0,
   duration:0.6,
   x: 200

})

tl.from("#img-left-2",{
   duration: 0.6,
   delay:0.5,  
   
   opacity:0
})

tl.to("#img-left-2",{
   x: 870,
   y:300,
   rotate: 360,
   opacity:1,
})