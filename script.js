gsap.registerPlugin(ScrollTrigger);
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
    trigger:".ws",
    start:"top bottom",
    end:"bottom bottom",
    scrub:1,
    onUpdate:(self)=>{
        const galleryWrapper=document.querySelector(".gallery-wrapper");
        const sideCols=document.querySelectorAll(".col:not(.main)");
        const mainImg=document.querySelector(".img.main img");
        // console.log(self.progress)

        const scale=1+self.progress*2.65;
        const yTranslate=self.progress*300;
        const mainImgScale=2-self.progress*0.9;

        galleryWrapper.style.transform=`translate(-50%,-50%) scale(${scale})`;
        sideCols.forEach((col)=>{
            col.style.transform=`translateY(${yTranslate}px)`
        })
        mainImg.style.transform=`scale(${mainImgScale})`
    }
})