let ricks=0;
let largura = window.innerWidth;

function ig() {
    
    if(ricks!=0){
        window.alert("agora que voce começou a clicar no meu nome, contunua né... ");}else{

    if(largura<=1000){
       document.location.href = "https://www.instagram.com/rapburad/";}
    }
    
    }

function clarin() {
    document.getElementsByClassName("ig")[0].style.backgroundColor = "rgb(222,222,222)";
}

function escurin() {
    document.getElementsByClassName("ig")[0].style.backgroundColor = "rgb(124, 121, 122)";
}


function rick(){
ricks++
document.querySelector("#rick > h1").innerText = `Raphael Burad ${ricks}`;
if(ricks==17){
    window.alert('rickrollado kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
   setTimeout(()=>{document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";},1*500) 
}
}
//as particulas
    




function particlesPC() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 10
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": true
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 17.041996348143652,
          "size_min": 17.041996348143652,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 110.14460148062693,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 0.6409640098708463
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  /* ---- stats.js config ---- */

  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
function particlesMB() {
  particlesJS("particles-js", {
"particles": {
  "number": {
    "value": 100,
    "density": {
      "enable": true,
      "value_area": 1815.125519875625
    }
  },
  "color": {
    "value": "#aba8a7"
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#ffffff"
    },
    "polygon": {
      "nb_sides": 12
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 1,
    "random": false,
    "anim": {
      "enable": false,
      "speed": 1,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 4,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 250,
      "size_min": 0.1,
      "sync": false
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 128.19280197416927,
    "color": "#aba8a7",
    "opacity": 0.7,
    "width": 2.4036150370156735
  },
  "move": {
    "enable": true,
    "speed": 1.6024100246771158,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 2884.3380444188083,
      "rotateY": 2964.458545652664
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "repulse"
    },
    "onclick": {
      "enable": true,
      "mode": "push"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 400,
      "size": 40,
      "duration": 2,
      "opacity": 8,
      "speed": 3
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
});


  /* ---- stats.js config ---- */

  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}


if (largura <= 1000) {
  particlesMB();
} else {
  particlesPC();
}
