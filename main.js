document.querySelector("#app").style.background =
  "radial-gradient(50% 50% at 50% 50%, #FFCCD9 0%, #FF3D6C 100%)"
//document.querySelector(".salah h1").style.transform = "translate(-400%, 0)"

document.querySelectorAll("button").forEach((button, index) => {
  console.log(index)
  button.addEventListener("click", (e) => {
    if (index === 0) {
      gsap.to("#app", {
        duration: 1.5,
        background:
          "radial-gradient(50% 50% at 50% 50%, #FFCCD9 0%, #FF3D6C 100%)",
        ease: "elastic.out(1,0.85)",
      })
      gsap.to(".titre", {
        opacity: 0,
        x: `${-200}%`,
        duration: 1,
        ease: "power1.out",
        // delay: 1,
      })
      gsap.to(".debruyne h1", {
        x: `${0}%`,
        duration: 1.8,
        ease: "power1.out",
        opacity: 1,
        // delay: 1,
      })
      //images
      gsap.to("img", {
        rotation: 90,
        x: `${50}%`,
        y: `${50}%`,
        opacity: 0,
        duration: 1,
      })

      gsap.to(".player-img .debruyne", {
        rotation: 0,
        x: `${-50}%`,
        y: `${0}%`,
        opacity: 1,
        duration: 1.8,
      })
    }
    if (index === 1) {
      // background
      gsap.to("#app", {
        duration: 1.5,
        background:
          "radial-gradient(50% 50% at 50% 50%, #1eCCD9 0%, #1e40af 100%)",
        ease: "elastic.out(1,0.85)",
      })

      // title
      gsap.to(".titre", {
        opacity: 0,
        x: `${-200}%`,
        duration: 1,
        ease: "power1.out",
      })

      gsap.to(".salah h1", {
        x: `${200}%`,
        opacity: 1,
        duration: 1.8,
      })
      //images
      gsap.to("img", {
        rotation: 90,
        x: `${50}%`,
        y: `${50}%`,
        opacity: 0,
        duration: 1,
      })

      gsap.to(".player-img .salah", {
        rotation: 0,
        x: `${-50}%`,
        y: `${-50}%`,
        opacity: 1,
        duration: 1.8,
      })
    }

    if (index === 2) {
      gsap.to("#app", {
        duration: 1.5,
        background:
          "radial-gradient(50% 50% at 50% 50%, #FCF767 0%, #facc15 100%)",
        ease: "elastic.out(1,0.85)",
      })

      gsap.to(".titre", {
        opacity: 0,
        x: `${-200}%`,
        duration: 1,
        ease: "power1.out",
      })

      gsap.to(".lewandowski h1", {
        x: `${200}%`,
        duration: 1.8,
        opacity: 1,
      })

      //images
      gsap.to("img", {
        rotation: 90,
        x: `${50}%`,
        y: `${50}%`,
        opacity: 0,
        duration: 1,
      })

      gsap.to(".player-img .lewandowski", {
        rotation: 0,
        x: `${-50}%`,
        y: `${-50}%`,
        opacity: 1,
        duration: 1.8,
      })
    }
  })
})
