import type { Ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface UseBeforeAfterOptions {
    sectionRef: Ref<HTMLElement | null>
}

export const useBeforeAfter = ({ sectionRef }: UseBeforeAfterOptions) => {
    let ctx: gsap.Context | null = null

    const init = () => {
        const section = sectionRef.value

        if (!section) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            mm.add('(min-width: 1024px)', () => {
                gsap.set('[data-title-bad]', {
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set('[data-title-good]', {
                    autoAlpha: 0,
                    y: 40,
                    rotate: 1.5,
                    scale: 0.96,
                })

                gsap.set('[data-good-scene]', {
                    autoAlpha: 0,
                    x: 180,
                    scale: 0.96,
                })

                gsap.set('[data-good-card]', {
                    autoAlpha: 0,
                    x: 70,
                    scale: 0.96,
                })

                gsap.set('[data-good-visual]', {
                    autoAlpha: 0,
                    x: 130,
                    rotate: 2,
                    scale: 0.96,
                })

                gsap.set('[data-bad-scene]', {
                    autoAlpha: 1,
                    x: 0,
                    scale: 1,
                })

                gsap.set('[data-bad-card]', {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set('[data-bad-visual]', {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    rotate: -0.5,
                    scale: 1,
                    transformOrigin: '50% 50%',
                })

                gsap.set('[data-good-chip]', {
                    autoAlpha: 0,
                    y: 14,
                })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: '+=4200',
                        scrub: 0.85,
                        pin: true,
                        pinSpacing: false,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                })

                tl.to(
                    '[data-title-bad]',
                    {
                        autoAlpha: 0,
                        y: -52,
                        x: -50,
                        rotate: -2.5,
                        scale: 0.94,
                        duration: 0.34,
                        ease: 'power3.inOut',
                    },
                    0.16,
                )

                tl.to(
                    '[data-title-good]',
                    {
                        autoAlpha: 1,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        duration: 0.44,
                        ease: 'power4.out',
                    },
                    0.36,
                )

                tl.to(
                    '[data-bad-card]',
                    {
                        autoAlpha: 0,
                        x: -120,
                        y: 22,
                        rotate: -5,
                        scale: 0.94,
                        duration: 0.38,
                        ease: 'power3.inOut',
                    },
                    0.18,
                )

                tl.to(
                    '[data-bad-visual]',
                    {
                        autoAlpha: 0,
                        x: -260,
                        y: -42,
                        rotate: -13,
                        scale: 0.9,
                        duration: 0.58,
                        ease: 'power4.inOut',
                    },
                    0.2,
                )

                tl.to(
                    '[data-bad-scene]',
                    {
                        autoAlpha: 0,
                        x: -80,
                        duration: 0.22,
                        ease: 'power2.out',
                    },
                    0.55,
                )

                tl.to(
                    '[data-good-scene]',
                    {
                        autoAlpha: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power4.out',
                    },
                    0.44,
                )

                tl.to(
                    '[data-good-visual]',
                    {
                        autoAlpha: 1,
                        x: 0,
                        rotate: 0,
                        scale: 1,
                        duration: 0.58,
                        ease: 'power4.out',
                    },
                    0.48,
                )

                tl.to(
                    '[data-good-card]',
                    {
                        autoAlpha: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power4.out',
                    },
                    0.56,
                )

                tl.to(
                    '[data-good-chip]',
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.06,
                        duration: 0.24,
                        ease: 'power3.out',
                    },
                    0.7,
                )

                tl.to(
                    {},
                    {
                        duration: 0.8,
                    },
                )

                return () => {
                    tl.kill()
                }
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.set('[data-title-bad]', {
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set('[data-title-good]', {
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set('[data-good-scene]', {
                    autoAlpha: 1,
                    x: 0,
                    scale: 1,
                })

                gsap.set('[data-good-card]', {
                    autoAlpha: 1,
                    x: 0,
                    scale: 1,
                })

                gsap.set('[data-good-visual]', {
                    autoAlpha: 1,
                    x: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set('[data-good-chip]', {
                    autoAlpha: 1,
                    y: 0,
                })

                gsap.from('[data-mobile-reveal]', {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                    },
                    autoAlpha: 0,
                    y: 28,
                    stagger: 0.1,
                    duration: 0.65,
                    ease: 'power3.out',
                })
            })

            return () => {
                mm.revert()
            }
        }, section)
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