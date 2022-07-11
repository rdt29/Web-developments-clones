function run() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
run();
// cursor

gsap.to("#cur", {
    repeat: -1,
    duration: 8,
    rotate: 360,
});
gsap.to("#overlay img", {
    repeat: -1,
    duration: 7,
    rotate: 360,
});

gsap.to("#overlay", {
    duration:2,
    
    delay: 3,
    y:"-100%"
});



gsap.to(".n22",{

    x:500,
    // y:300,
    scale:2,
    duration:5,
    delay: 7,
})






document.querySelector("#main").addEventListener("mousemove", function (dets) {
    document.querySelector("#cur").style.left = `${dets.x}px`;
    document.querySelector("#cur").style.top = `${dets.y}px`;

    //   console.log(dets.target.x);
});


// ----------------.n22----------------------

var all = document   .querySelector(".n22").addEventListener("mouseenter", function (dets) {  
              var c1 = document.querySelector("#middle img ");c1.setAttribute(
            "src", "https://visuals.brybry.co/img/vis-snaps/opt/01.jpg"
        );
        document.querySelector("#page1").style.color = "yellow";
        document.querySelector("#page1").style.backgroundColor = "rgb(31,30,36)";
    });
var all = document.querySelector(".n22") .addEventListener("mouseleave", function (dets) {
        var c1 = document.querySelector("#middle img ");
        c1.setAttribute(
            "src","https://visuals.brybry.co/img/vis-snaps/opt/04.jpg"
        );
        document.querySelector("#page1").style.color = "white";
        document.querySelector("#page1").style.backgroundColor = "rgb(120, 161, 156)";
    });

// --------.left--------------------


document.querySelector(".left").addEventListener("mouseenter", function (dets) {
    var c1 = document.querySelector("#middle img ");
    c1.setAttribute(
        "src", "https://visuals.brybry.co/img/visuals/pieces/02.png");
    document.querySelector("#page1").style.color = "#FABAD9";
    document.querySelector("#page1").style.backgroundColor = "rgb(121,61,43)";
});

document.querySelector(".left").addEventListener("mouseleave", function (dets) {
    var c1 = document.querySelector("#middle img ");
    c1.setAttribute(
        "src",
        "https://visuals.brybry.co/img/vis-snaps/opt/08.jpg"
    );
    document.querySelector("#page1").style.color = "black";
    document.querySelector("#page1").style.backgroundColor = "rgb(255, 240, 40)";
});


// ------------------.rtop-------------------------

document.querySelector(".rtop ").addEventListener("mouseenter", function (dets) {
    var c1 = document.querySelector("#middle img ");
    c1.setAttribute(
        "src", "https://visuals.brybry.co/img/vis-snaps/opt/05.png");
    document.querySelector("#page1").style.color = "#395474";
    document.querySelector("#page1").style.backgroundColor = "#76BACB";
});

document.querySelector(".rtop").addEventListener("mouseleave", function (dets) {
    var c1 = document.querySelector("#middle img ");
    c1.setAttribute(
        "src",
        "https://visuals.brybry.co/img/vis-snaps/opt/02.jpg"
    );
    document.querySelector("#page1").style.color = "#F9E8E3";
    document.querySelector("#page1").style.backgroundColor = "#FD9879";
});
