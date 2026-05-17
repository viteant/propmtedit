import type {Ref} from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface UseHeroAnimationOptions {
    heroRef: Ref<HTMLElement | null>
    videoScrollRef: Ref<HTMLElement | null>
    videoCardRef: Ref<HTMLElement | null>
}

export const useHeroAnimation = ({
                                               heroRef,
                                               videoScrollRef,
                                               videoCardRef,
                                           }: UseHeroAnimationOptions) => {
    let ctx: gsap.Context | null = null

    const isDesktopHero = () => window.matchMedia('(min-width: 1024px)').matches

    const enterVideo = () => {
        if (!videoCardRef.value || !isDesktopHero()) return

        gsap.to(videoCardRef.value, {
            rotate: 0,
            scale: 1.025,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: 'auto',
        })
    }

    const leaveVideo = () => {
        if (!videoCardRef.value || !isDesktopHero()) return

        gsap.to(videoCardRef.value, {
            rotate: -4,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            overwrite: 'auto',
        })
    }

    const initAnimation = () => {
        if (!heroRef.value || !videoScrollRef.value || !videoCardRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            gsap.from('.pe-kicker, .pe-title-line, .pe-copy, .pe-actions, .pe-tags', {
                opacity: 0,
                y: 36,
                stagger: 0.08,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.to('.pe-blue-plane', {
                scrollTrigger: {
                    trigger: heroRef.value,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                yPercent: 20,
                rotate: -7,
                ease: 'none',
            })

            gsap.to('.pe-lime-plane', {
                scrollTrigger: {
                    trigger: heroRef.value,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                yPercent: -24,
                xPercent: -12,
                rotate: 8,
                ease: 'none',
            })

            mm.add('(min-width: 1024px)', () => {
                gsap.from(videoScrollRef.value, {
                    opacity: 0,
                    x: 80,
                    scale: 0.92,
                    duration: 1,
                    ease: 'power4.out',
                })

                gsap.to(videoScrollRef.value, {
                    scrollTrigger: {
                        trigger: heroRef.value,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                    x: 180,
                    y: 170,
                    rotate: 13,
                    scale: 0.82,
                    transformOrigin: '100% 100%',
                    ease: 'none',
                })

                gsap.to('.pe-scanline', {
                    xPercent: 16,
                    yPercent: -12,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('.pe-glass-panel', {
                    y: -26,
                    rotate: -7,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                return () => {
                    gsap.set(videoScrollRef.value, { clearProps: 'transform' })
                    gsap.set(videoCardRef.value, { clearProps: 'transform' })
                }
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.from(videoScrollRef.value, {
                    opacity: 0,
                    y: 36,
                    scale: 0.98,
                    duration: 0.9,
                    ease: 'power3.out',
                })

                gsap.set(videoScrollRef.value, {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                })

                gsap.set(videoCardRef.value, {
                    rotate: 0,
                    scale: 1,
                })

                gsap.to('.pe-scanline', {
                    xPercent: 8,
                    yPercent: -6,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            return () => {
                mm.revert()
            }
        }, heroRef.value)
    }

    const destroyAnimation = () => {
        ctx?.revert()
        ctx = null
    }

    return {
        enterVideo,
        leaveVideo,
        initAnimation,
        destroyAnimation,
    }
}
