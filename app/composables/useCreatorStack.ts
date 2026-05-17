import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface CreatorStackItem {
    id: string
    title: string
    eyebrow: string
    description: string
    metric: string
    wistiaId: string
    accent: 'blue' | 'lime'
}

interface UseCreatorStackOptions {
    sectionRef: Ref<HTMLElement | null>
    bgRef: Ref<HTMLElement | null>
    introRef: Ref<HTMLElement | null>
    titleRef: Ref<HTMLElement | null>
    copyRef: Ref<HTMLElement | null>
    cardsRef: Ref<HTMLElement | null>
    statsRef: Ref<HTMLElement | null>
}

export const useCreatorStack = ({
                                    sectionRef,
                                    bgRef,
                                    introRef,
                                    titleRef,
                                    copyRef,
                                    cardsRef,
                                    statsRef,
                                }: UseCreatorStackOptions) => {
    let ctx: gsap.Context | null = null

    const stackItems: CreatorStackItem[] = [
        {
            id: 'luts',
            title: 'LUTs',
            eyebrow: 'Color grading presets',
            description: 'Give your footage a cinematic look in seconds.',
            metric: '4,000+ LUTs',
            wistiaId: 't21vfpbv9s',
            accent: 'lime',
        },
        {
            id: 'sound-effects',
            title: 'Sound Effects',
            eyebrow: 'Cinematic SFX library',
            description: 'Production-ready audio for edits, ads, reels, and stories.',
            metric: '60,000+ SFX',
            wistiaId: 'ucv3bj2w6o',
            accent: 'blue',
        },
        {
            id: 'custom-text',
            title: 'Custom Text',
            eyebrow: 'Titles, lower thirds & more',
            description: 'Animated text assets built for fast editing workflows.',
            metric: '10,000+ templates',
            wistiaId: 'lgoc5cbukb',
            accent: 'lime',
        },
        {
            id: 'overlays',
            title: 'Overlays',
            eyebrow: 'Film overlays & FX',
            description: 'Add atmosphere, light leaks, texture, and cinematic depth.',
            metric: '2,000+ overlays',
            wistiaId: '0ktyx14pqx',
            accent: 'blue',
        },
        {
            id: 'backgrounds',
            title: 'Backgrounds',
            eyebrow: 'Stock video & textures',
            description: 'Fill scenes, intros, promos, and edits with ready-to-use visuals.',
            metric: '50,000+ assets',
            wistiaId: 'jjyedmmpr9',
            accent: 'lime',
        },
    ]

    const stats = [
        {
            id: 'assets',
            icon: 'lucide:library',
            value: '120K+',
            label: 'Premium assets',
        },
        {
            id: 'weekly',
            icon: 'lucide:sparkles',
            value: '50+',
            label: 'New assets weekly',
        },
        {
            id: 'downloads',
            icon: 'lucide:download',
            value: 'Unlimited',
            label: 'Downloads',
        },
        {
            id: 'toolkit',
            icon: 'lucide:boxes',
            value: 'All-in-one',
            label: 'Creator toolkit',
        },
    ]

    const getWistiaEmbedUrl = (wistiaId: string) => {
        const params = new URLSearchParams({
            autoPlay: 'true',
            muted: 'true',
            loop: 'true',
            playbar: 'false',
            controlsVisibleOnLoad: 'false',
            fullscreenButton: 'false',
            smallPlayButton: 'false',
            volumeControl: 'false',
        })

        return `https://fast.wistia.net/embed/iframe/${wistiaId}?${params.toString()}`
    }

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
                        end: 'top 58%',
                        scrub: 1,
                    },
                },
            )

            gsap.to(titleRef.value, {
                xPercent: -8,
                opacity: 0.84,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 40%',
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

            gsap.to(copyRef.value, {
                x: -30,
                opacity: 0.5,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 45%',
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

            gsap.fromTo(
                cardsRef.value?.children ?? [],
                {
                    x: 90,
                    y: 30,
                    opacity: 0,
                    scale: 0.97,
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.08,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 68%',
                        end: 'top 18%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                statsRef.value?.children ?? [],
                {
                    y: 24,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 55%',
                        end: 'top 20%',
                        scrub: 1,
                    },
                },
            )

            gsap.to(bgRef.value, {
                yPercent: -8,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            mm.add('(min-width: 1024px)', () => {
                gsap.to('[data-creator-beam]', {
                    xPercent: 12,
                    yPercent: -10,
                    scale: 1.08,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-creator-panel]', {
                    y: -36,
                    rotate: 8,
                    duration: 10,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-creator-line]', {
                    xPercent: 8,
                    opacity: 0.35,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-creator-beam]', {
                    xPercent: 6,
                    yPercent: -5,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-creator-line]', {
                    xPercent: 4,
                    opacity: 0.3,
                    duration: 5,
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
        stackItems,
        stats,
        getWistiaEmbedUrl,
        init,
        destroy,
    }
}
