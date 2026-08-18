// Particle animation
document.addEventListener("DOMContentLoaded", function () {

    if (typeof particlesJS === "undefined") {
        console.log("Particle.js is not loaded.");
        return;
    }

    particlesJS("particles-js", {

        particles: {

            // Number of particles
            number: {
                value: 65,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            // Particle color
            color: {
                value: "#55d6c2"
            },

            shape: {
                type: "circle"
            },

            // Particle opacity
            opacity: {
                value: 0.75,
                random: true
            },

            // Particle size
            size: {
                value: 3,
                random: true
            },

            // Connecting lines
            line_linked: {
                enable: true,
                distance: 180,
                color: "#55d6c2",
                opacity: 0.65,
                width: 1.5
            },

            // Particle movement
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true
            }
        },

        // Mouse interaction
        interactivity: {

            detect_on: "canvas",

            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {

                grab: {
                    distance: 250,
                    line_linked: {
                        opacity: 1
                    }
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    });

});

