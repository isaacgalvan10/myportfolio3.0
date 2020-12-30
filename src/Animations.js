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
        duration: .5
      }, '>-.5')

      /* Scroll Triggers */

      gsap.fromTo('#project-section .project-1', {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#project-section',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('#project-section .project-2', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-1',
          start: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('#project-section .project-3', {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-2',
          start: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('#project-section .project-4', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-3',
          start: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('#project-section .project-5', {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-4',
          start: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('#project-section .project-6', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-5',
          start: 'bottom 70%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('.contact-animation', {
        y: -80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
          trigger: '#project-section',
          start: 'bottom 75%'
        }
      })

      gsap.fromTo('footer', {
        y: -80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
          trigger: '#contact-section',
          start: 'top 70%'
        }
      })
  })
  return (null);
}

export default Animations;