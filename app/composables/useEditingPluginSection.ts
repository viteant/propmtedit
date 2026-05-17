import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface EditingPluginApp {
    id: string
    name: string
    type: 'premiere' | 'davinci'
}

export interface EditingPluginFeature {
    id: string
    icon: string
    title: string
    description: string
}

interface UseEditingPluginSectionOptions {
    sectionRef: Ref<HTMLElement | null>
    badgeRef: Ref<HTMLElement | null>
    titleRef: Ref<HTMLElement | null>
    textRef: Ref<HTMLElement | null>
    appsRef: Ref<HTMLElement | null>
    videoRef: Ref<HTMLElement | null>
    featuresRef: Ref<HTMLElement | null>
    bgRef: Ref<HTMLElement | null>
}

export const useEditingPluginSection = ({
                                            sectionRef,
                                            badgeRef,
                                            titleRef,
                                            textRef,
                                            appsRef,
                                            videoRef,
                                            featuresRef,
                                            bgRef,
                                        }: UseEditingPluginSectionOptions) => {
    let ctx: gsap.Context | null = null

    const wistiaId = '821b33oy7g'

    const videoUrl = computed(() => {
        const params = new URLSearchParams({
            background: 'true',
            autoPlay: 'true',
            muted: 'true',
            loop: 'true',
            playsinline: 'true',
            seo: 'false',
            videoFoam: 'true',
            playbar: 'false',
            controlsVisibleOnLoad: 'false',
            fullscreenButton: 'false',
            smallPlayButton: 'false',
            volumeControl: 'false',
        })

        return `https://fast.wistia.net/embed/iframe/${wistiaId}?${params.toString()}`
    })

    const apps: EditingPluginApp[] = [
        {
            id: 'premiere-pro',
            name: 'Premiere Pro',
            type: 'premiere',
        },
        {
            id: 'davinci-resolve',
            name: 'DaVinci Resolve',
            type: 'davinci',
        },
    ]

    const features: EditingPluginFeature[] = [
        {
            id: 'inside-editor',
            icon: 'lucide:plug-zap',
            title: 'Inside your editor',
            description: 'Generate without opening extra tabs or browser windows.',
        },
        {
            id: 'voiceovers',
            icon: 'lucide:mic-2',
            title: 'AI voiceovers',
            description: 'Create voices and audio assets directly in your workflow.',
        },
        {
            id: 'video-assets',
            icon: 'lucide:film',
            title: 'Video-ready assets',
            description: 'Generate clips, motion graphics, and useful creative pieces fast.',
        },
        {
            id: 'fast-apply',
            icon: 'lucide:mouse-pointer-click',
            title: 'Fast apply',
            description: 'Add results into your project without breaking your flow.',
        },
    ]

    const init = () => {
        if (!sectionRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

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
                gsap.fromTo(
                    badgeRef.value,
                    {
                        y: 24,
                        opacity: 0,
                        rotate: -2,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 82%',
                            end: 'top 62%',
                            scrub: 1,
                        },
                    },
                )

                gsap.fromTo(
                    titleRef.value,
                    {
                        y: 64,
                        opacity: 0,
                        scale: 0.97,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 78%',
                            end: 'top 48%',
                            scrub: 1,
                        },
                    },
                )

                gsap.fromTo(
                    textRef.value,
                    {
                        y: 34,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 72%',
                            end: 'top 48%',
                            scrub: 1,
                        },
                    },
                )

                gsap.fromTo(
                    appsRef.value?.children ?? [],
                    {
                        y: 26,
                        opacity: 0,
                        scale: 0.94,
                        rotate: -2,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        stagger: 0.08,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 68%',
                            end: 'top 42%',
                            scrub: 1,
                        },
                    },
                )

                gsap.fromTo(
                    videoRef.value,
                    {
                        y: 90,
                        opacity: 0,
                        scale: 0.94,
                        rotateX: 6,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 60%',
                            end: 'top 22%',
                            scrub: 1.15,
                        },
                    },
                )

                gsap.fromTo(
                    featuresRef.value?.children ?? [],
                    {
                        y: 54,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        stagger: 0.08,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 52%',
                            end: 'top 18%',
                            scrub: 1.05,
                        },
                    },
                )

                gsap.to('[data-plugin-scan]', {
                    yPercent: 18,
                    opacity: 0.9,
                    duration: 7,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-plugin-rail]', {
                    yPercent: -10,
                    opacity: 0.75,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-plugin-window]', {
                    y: -24,
                    rotate: 8,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.fromTo(
                    [badgeRef.value, titleRef.value, textRef.value],
                    {
                        opacity: 0,
                        y: 16,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 82%',
                            once: true,
                        },
                    },
                )

                gsap.fromTo(
                    appsRef.value?.children ?? [],
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.35,
                        stagger: 0.06,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 74%',
                            once: true,
                        },
                    },
                )

                gsap.fromTo(
                    videoRef.value,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.45,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 70%',
                            once: true,
                        },
                    },
                )

                gsap.fromTo(
                    featuresRef.value?.children ?? [],
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.35,
                        stagger: 0.06,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.value,
                            start: 'top 64%',
                            once: true,
                        },
                    },
                )
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-plugin-scan]', {
                    yPercent: 10,
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
        apps,
        features,
        videoUrl,
        init,
        destroy,
    }
}
