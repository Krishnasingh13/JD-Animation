function circleAnim() {
    var circle = document.querySelector('#circle');

    window.addEventListener('mousemove', function (details) {
        let xValue = details.clientX;
        let yValue = details.clientY;

        setTimeout(function () {
            circle.style.top = `${yValue}px`;
            circle.style.left = `${xValue}px`;
        }, 50);
    });
}

function Anim() {
    var svgelem = document.querySelector('svg');
    var tl = gsap.timeline();
    var btn = document.querySelector('#btn');

    btn.addEventListener('click', function () {
        tl.reverse();
        setTimeout(() => {
            svgelem.classList.add('animate');
        }, 5500);
    });

    tl
        .from('#wrapper', {
            duration: 2,
            scale: .7,
            ease: 'Expo.easeInOut',
            opacity: 0
        })
        .from('#whitestrip', {
            duration: 2,
            width: 0,
            ease: 'Expo.easeInOut',
        }, '-=1')
        .from('#lineelem', {
            duration: 1,
            opacity: 0,
            ease: 'Expo.easeInOut',
        }, '-=1')
        .from('#lineelem #line', {
            duration: 1,
            width: 0,
            opacity: 0,
            ease: 'Expo.easeInOut',
        }, '-=.5')
        .from('#black', {
            duration: 1.5,
            x: 50,
            opacity: 0,
            ease: 'Expo.easeInOut',
        })
        .from('#black p', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'Expo.easeInOut',
        })
        .from('#sideelem', {
            duration: 1,
            x: 30,
            opacity: 0,
            ease: 'Expo.easeInOut',
        });
}

circleAnim()
Anim()