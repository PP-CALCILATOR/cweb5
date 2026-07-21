// ==========================================
// GSAP
// ==========================================

gsap.registerPlugin(ScrollTrigger);



// ==========================================
// LENIS
// ==========================================

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true,

    smoothTouch: false,

    wheelMultiplier: 1

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{

    lenis.raf(time * 1000);

});

gsap.ticker.lagSmoothing(0);



// ==========================================
// HERO INTRO
// ==========================================

const intro = gsap.timeline({

    defaults:{

        ease:"power3.out"

    }

});

intro

.from(".hero-tag",{

    opacity:0,

    y:35,

    duration:.8

})

.from(".hero-title",{

    opacity:0,

    y:45,

    duration:1

},"-=0.4")

.from(".hero-description",{

    opacity:0,

    y:35,

    duration:.8

},"-=0.6")

.from(".bags",{

    opacity:0,

    y:120,

    scale:.92,

    duration:1.5,

    ease:"power4.out"

},"-=0.8");



// ==========================================
// FLOATING BAGS
// ==========================================

gsap.to(".bags",{

    y:-12,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut",

    duration:3

});



// ==========================================
// HEADER BACKGROUND
// ==========================================

ScrollTrigger.create({

    start:20,

    onUpdate:()=>{

        if(window.scrollY>20){

            gsap.to(".header",{

                background:"rgba(245,242,236,.75)",

                backdropFilter:"blur(16px)",

                duration:.3

            });

        }

        else{

            gsap.to(".header",{

                background:"transparent",

                backdropFilter:"blur(0px)",

                duration:.3

            });

        }

    }

});



// ==========================================
// HAMBURGER
// ==========================================

const menu=document.querySelector(".menu");

menu.addEventListener("click",()=>{

    menu.classList.toggle("active");

});



// ==========================================
// SCROLL INDICATOR
// ==========================================

gsap.to(".wheel",{

    y:12,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut",

    duration:1

});

// ==========================================
// HERO PARALLAX
// ==========================================

// Background moves slowly
gsap.to(".hero-background",{

    y:-60,

    scale:1.08,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:1

    }

});



// Bags move faster than background
gsap.to(".hero-bags",{

    y:-170,

    scale:1.12,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:1

    }

});



// Hero text fades away
gsap.to(".hero-content",{

    opacity:0,

    y:-80,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"45% top",

        scrub:true

    }

});



// Scroll indicator fades
gsap.to(".scroll-indicator",{

    opacity:0,

    y:20,

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"20% top",

        scrub:true

    }

});



// Slight background brightness
gsap.to(".background",{

    filter:"brightness(1.08)",

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});



// Stop floating while scrolling
ScrollTrigger.create({

    trigger:".hero",

    start:"top top",

    end:"bottom top",

    onEnter:()=>{

        gsap.globalTimeline.pause();

    },

    onLeaveBack:()=>{

        gsap.globalTimeline.resume();

    }

});



// Refresh after page load
window.addEventListener("load",()=>{

    ScrollTrigger.refresh();

});

// ==========================================
// PAUSE FLOATING DURING SCROLL
// ==========================================

let scrollTimer;

window.addEventListener("scroll",()=>{

    floatAnimation.pause();

    clearTimeout(scrollTimer);

    scrollTimer=setTimeout(()=>{

        floatAnimation.resume();

    },180);

});



// ==========================================
// HERO TILT (DESKTOP ONLY)
// ==========================================

const hero=document.querySelector(".hero");

const bags=document.querySelector(".bags");

if(window.innerWidth>768){

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*14;

const y=(e.clientY/window.innerHeight-.5)*10;

gsap.to(bags,{

rotationY:x,

rotationX:-y,

transformPerspective:1000,

transformOrigin:"center bottom",

duration:.8,

ease:"power3.out"

});

});

hero.addEventListener("mouseleave",()=>{

gsap.to(bags,{

rotationX:0,

rotationY:0,

duration:1,

ease:"power3.out"

});

});

}



// ==========================================
// HEADER LOGO FADE
// ==========================================

gsap.from(".logo",{

opacity:0,

x:-30,

duration:1,

delay:.2,

ease:"power3.out"

});



gsap.from(".menu",{

opacity:0,

x:30,

duration:1,

delay:.2,

ease:"power3.out"

});



// ==========================================
// PARALLAX LIGHT
// ==========================================

gsap.to(".hero-background",{

backgroundPosition:"50% 60%",

ease:"none",

scrollTrigger:{

trigger:".hero",

start:"top top",

end:"bottom top",

scrub:1

}

});



// ==========================================
// MATERIAL SECTION REVEAL
// ==========================================

gsap.from(".materials",{

opacity:0,

y:120,

duration:1.2,

ease:"power3.out",

scrollTrigger:{

trigger:".materials",

start:"top 80%"

}

});



// ==========================================
// HANDLE SECTION REVEAL
// ==========================================

gsap.from(".handles",{

opacity:0,

y:120,

duration:1.2,

ease:"power3.out",

scrollTrigger:{

trigger:".handles",

start:"top 80%"

}

});



// ==========================================
// WINDOW RESIZE
// ==========================================

window.addEventListener("resize",()=>{

ScrollTrigger.refresh();

});



// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener("load",()=>{

window.scrollTo(0,0);

ScrollTrigger.refresh();

});
