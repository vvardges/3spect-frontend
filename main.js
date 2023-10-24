function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth) {
    gsap.to(".bar", {
        scrollTrigger: {
            trigger: triggerElement,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            onEnter: () => {
                gsap.to('.bar', {
                  width: onEnterWidth,
                  duration: 3,
                  ease: 'slow',
                });
            },
            onLeaveBack: () => {
                gsap.to('.bar', {
                  width: onLeaveBackWidth,
                  duration: 3,
                  ease: 'slow',
                });
            }
        }
    });
}

animateBar("#hero", "25%", "0%");
animateBar("#part1", "50%", "25%");
animateBar("#part2", "75%", "50%");
animateBar("#part3", "100%", "75%");



// keyboard text effect
const keys = document.querySelectorAll(".key");

function pressRandomKey() {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    randomKey.style.animation = "pressDown 0.2s ease-in-out";

    randomKey.onanimationend = () => {
        randomKey.style.animation = "";
        setTimeout(pressRandomKey, 100 + Math.random() * 300);
    };
}

pressRandomKey();
