import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface TestimonialItem {
    id: string
    quote: string
    name: string
    role: string
    initials: string
    image: string
    accent: 'blue' | 'lime'
}

export interface FitPoint {
    id: string
    text: string
}

interface UseTestimonialsSectionOptions {
    sectionRef: Ref<HTMLElement | null>
    bgRef: Ref<HTMLElement | null>
    introRef: Ref<HTMLElement | null>
    testimonialsRef: Ref<HTMLElement | null>
    fitRef: Ref<HTMLElement | null>
    guaranteeRef: Ref<HTMLElement | null>
    sealRef: Ref<HTMLElement | null>
}

export const useTestimonialsSection = ({
                                           sectionRef,
                                           bgRef,
                                           introRef,
                                           testimonialsRef,
                                           fitRef,
                                           guaranteeRef,
                                           sealRef,
                                       }: UseTestimonialsSectionOptions) => {
    let ctx: gsap.Context | null = null

    const testimonials: TestimonialItem[] = [
        {
            id: 'hilda-schlueter',
            quote: 'My daughter and I got more editing work done today in 3 hours than we normally do in 3 days.',
            name: 'Hilda Schlueter',
            role: 'Online course creator',
            initials: 'HS',
            image: '/images/testimonials/01.png',
            accent: 'lime',
        },
        {
            id: 'matt-lilley',
            quote: 'My videos would not look half as good if it was not for the Content Creator Templates Library.',
            name: 'Matt Lilley',
            role: 'ContentCreator.com student',
            initials: 'MI',
            image: '/images/testimonials/02.jpg',
            accent: 'blue',
        },
        {
            id: 'brady-hales',
            quote: 'The Content Creator Templates Library is a fantastic resource. I do not need any other digital asset subscriptions.',
            name: 'Brady Hales',
            role: 'ContentCreator.com student',
            initials: 'BH',
            image: '/images/testimonials/03.png',
            accent: 'lime',
        },
    ]

    const fitPoints: FitPoint[] = [
        {
            id: 'ai-tools',
            text: 'You want AI tools, templates, plugins, and assets in one place.',
        },
        {
            id: 'save-time',
            text: 'You want to create faster without hunting for packs across the internet.',
        },
        {
            id: 'professional-look',
            text: 'You want cinematic videos without building every asset from scratch.',
        },
        {
            id: 'unlimited',
            text: 'You care about unlimited downloads and flexible usage.',
        },
    ]

    const init = () => {
        if (!sectionRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            gsap.fromTo(
                introRef.value,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 82%',
                        end: 'top 56%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                testimonialsRef.value?.children ?? [],
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.94,
                    rotate: (index) => (index === 1 ? 1.5 : -1.5),
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    stagger: 0.1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 70%',
                        end: 'top 28%',
                        scrub: 1.1,
                    },
                },
            )

            gsap.fromTo(
                fitRef.value,
                {
                    x: -70,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 45%',
                        end: 'top 16%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                guaranteeRef.value,
                {
                    x: 80,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 45%',
                        end: 'top 16%',
                        scrub: 1,
                    },
                },
            )

            gsap.to(sealRef.value, {
                rotate: 360,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
            })

            gsap.to(bgRef.value, {
                yPercent: -7,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            mm.add('(min-width: 1024px)', () => {
                gsap.to('[data-testimonials-aurora]', {
                    xPercent: 10,
                    yPercent: -8,
                    rotate: -4,
                    duration: 9,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-testimonials-spot]', {
                    y: 28,
                    scale: 1.05,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-testimonials-line]', {
                    xPercent: -12,
                    opacity: 0.45,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-testimonials-aurora]', {
                    xPercent: 6,
                    duration: 7,
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
        testimonials,
        fitPoints,
        init,
        destroy,
    }
}
