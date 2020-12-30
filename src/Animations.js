import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const Animations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline();

    timeline
      .fromTo('.titles', {
        y: -100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        delay: .5,
        duration: .8
      })
      .fromTo('#about-section .about-animation', {
        opacity: 0
      }, {
        opacity: 1,
        duration: .8
      })
      .fromTo('#project-section h2', {
        y: -100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: .7
      })

      /* Scroll Triggers */

      gsap.fromTo('#project-section .project-left', {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#project-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          markers: true
        }
      })
  })
  return (null);
}

export default Animations;