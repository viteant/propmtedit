import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface UseFinalCTAOptions {
    sectionRef: Ref<HTMLElement | null>
    titleRef: Ref<HTMLElement | null>
    copyRef: Ref<HTMLElement | null>
    actionsRef: Ref<HTMLElement | null>
    orbitRef: Ref<HTMLElement | null>
}

export const useFinalCTA = ({
                                sectionRef,
                                titleRef,
                                copyRef,
                                actionsRef,
                                orbitRef,
                            }: UseFinalCTAOptions) => {
    let ctx: gsap.Context | null = null

    const init = () => {
        if (!sectionRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            mm.add('(min-width: 1024px)', () => {
                const pinTrigger = ScrollTrigger.create({
                    trigger: sectionRef.value,
                    start: 'top top+=56',
                    end: '+=100%',
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                })

                return () => {
                    pinTrigger.kill()
                }
            })

            gsap.fromTo(
                titleRef.value,
                {
                    y: 70,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 78%',
                        end: 'top 46%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                copyRef.value,
                {
                    y: 36,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 70%',
                        end: 'top 44%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                actionsRef.value?.children ?? [],
                {
                    y: 34,
                    opacity: 0,
                    scale: 0.94,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.08,
                    ease: 'back.out(1.8)',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 62%',
                        end: 'top 34%',
                        scrub: 1,
                    },
                },
            )

            gsap.to(orbitRef.value, {
                rotate: 360,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
            })

            mm.add('(min-width: 1024px)', () => {
                gsap.to('[data-cta-grid]', {
                    xPercent: -3,
                    yPercent: -5,
                    duration: 10,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-cta-beam]', {
                    xPercent: 12,
                    yPercent: -10,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-cta-panel]', {
                    y: -30,
                    rotate: 6,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-cta-beam]', {
                    xPercent: 8,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            return () => {
                mm.revert()
            }
        }, sectionRef.value)
    }

    const destroy = () => {
        ctx?.revert()
        ctx = null
    }

    return {
        init,
        destroy,
    }
}
