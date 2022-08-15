window.addEventListener("DOMContentLoaded", () => {
  main();
});

const main = () => {
  const renderSphereInit = () => {
    const slices = 15;
    const angle = 360 / slices;
    const canvas = document.getElementById("hero-sphere");
    for (let i = 0; i < slices - 1; i++) {
      const slice = document.createElement("div");
      slice.style.transform = "rotateY(" + angle * i + "deg)";
      canvas.appendChild(slice);
    }
  };

  const gsapInit = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".header", {
      opacity: 0,
      ease: "sine.out",
      duration: 2,
    })

    gsap.to("#hr-reveal", {
      width: "100%",
      ease: "sine.out",
      duration: 2,
      stagger: 0.5,
    });

    gsap.to(".hero-text-block", {
      width: "105%",
      ease: "circ.out",
      duration: 1,
      yoyo: true,
      repeat: 1,
    });

    gsap.to(".hero-text", {
      opacity: 1,
      delay: 1,
    });

    gsap.from("#text-reveal-02", {
      opacity: 0,
      y: 100,
      rotationX: "45deg",
      rotationY: "-45deg",
      skewY: -10,
      skewX: 20,
      ease: "circ.out",
      duration: 1,
      stagger: 0.2,
    });

    const hrRevealsScroll = gsap.utils.toArray("#hr-scroll-reveal");
    const blockRevealsScroll01 = gsap.utils.toArray("#block-reveal-scroll-01");
    const textRevealsScroll01 = gsap.utils.toArray("#text-reveal-scroll-01");
    const textRevealsScroll02 = gsap.utils.toArray("#text-reveal-scroll-02");
    const scaleRevealsScroll = gsap.utils.toArray("#scale-scroll-reveal");

    hrRevealsScroll.forEach((hr) => {
      gsap.to(hr, {
        width: "100%",
        ease: "sine.out",
        duration: 2,
        scrollTrigger: {
          trigger: hr,
          start: "bottom bottom",
        },
      });
    });

    blockRevealsScroll01.forEach((block) => {
      gsap.to(block, {
        width: "100%",
        ease: "circ.out",
        duration: 1,
        yoyo: true,
        repeat: 1,
        scrollTrigger: {
          trigger: block,
          start: "bottom bottom",
        },
      });
    });

    textRevealsScroll01.forEach((text) => {
      gsap.to(text, {
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: text,
          start: "bottom bottom",
        },
      });
    });

    textRevealsScroll02.forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 100,
        rotationX: "45deg",
        rotationY: "-45deg",
        skewY: -10,
        skewX: 20,
        ease: "circ.out",
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "bottom bottom",
        },
      });
    });

    scaleRevealsScroll.forEach((item) => {
      gsap.to(item, {
        scale: 1,
        duration: 1,
        ease: 'circ.out',
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
        },
      });
    });
  };

  const circleTypeInit = () => {
    new CircleType(document.getElementById('contact-email'))
  }

  const mobileMenuInit = () => {
    const menuButton = document.getElementById('header-mobile-open');
    const closeButtons = Array.from(document.getElementsByClassName('header-mobile-link'));
    menuButton.onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '0vh',
        ease: "circ.out",
        duration: 1
      })
    }
    closeButtons[0].onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '100vh',
        ease: "circ.out",
        duration: 1
      })
    }
    closeButtons[1].onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '100vh',
        ease: "circ.out",
        duration: 1
      })
    }
    closeButtons[2].onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '100vh',
        ease: "circ.out",
        duration: 1
      })
    }
    closeButtons[3].onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '100vh',
        ease: "circ.out",
        duration: 1
      })
    }
    closeButtons[4].onclick = () => {
      gsap.to('.header-mobile-menu', {
        y: '100vh',
        ease: "circ.out",
        duration: 1
      })
    }
  }

  (() => {
    renderSphereInit();
    gsapInit();
    circleTypeInit();
    mobileMenuInit();
  })();
};
