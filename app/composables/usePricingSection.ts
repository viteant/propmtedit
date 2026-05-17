import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface PricingPlanFeature {
    id: string
    text: string
}

export interface PricingPlan {
    id: string
    eyebrow: string
    title: string
    price: string
    period: string
    value: string
    description: string
    cta: string
    accent: 'blue' | 'lime'
    featured?: boolean
    features: PricingPlanFeature[]
}

interface UsePricingSectionOptions {
    sectionRef: Ref<HTMLElement | null>
    bgRef: Ref<HTMLElement | null>
    introRef: Ref<HTMLElement | null>
    cardsRef: Ref<HTMLElement | null>
    footerRef: Ref<HTMLElement | null>
}

export const usePricingSection = ({
                                      sectionRef,
                                      bgRef,
                                      introRef,
                                      cardsRef,
                                      footerRef,
                                  }: UsePricingSectionOptions) => {
    let ctx: gsap.Context | null = null

    const plans: PricingPlan[] = [
        {
            id: 'credits',
            eyebrow: 'One-time pack',
            title: 'Credit pack',
            price: '$98',
            period: 'one payment',
            value: '$110 AI credits',
            description: 'Best for creators who want access to the toolkit without a monthly commitment.',
            cta: 'Claim credit deal',
            accent: 'blue',
            features: [
                { id: 'no-subscription', text: 'No subscription required' },
                { id: 'all-tools', text: 'Use across PromptEdit tools' },
                { id: 'topup', text: 'Top up anytime' },
                { id: 'student-discount', text: 'Student discount applied' },
            ],
        },
        {
            id: 'monthly',
            eyebrow: 'Creator boost',
            title: 'Monthly plan',
            price: '$39',
            period: 'per month',
            value: '$49 AI credits monthly',
            description: 'Best for creators using PromptEdit regularly for assets, tools, plugins, and AI workflows.',
            cta: 'Claim monthly deal',
            accent: 'lime',
            featured: true,
            features: [
                { id: 'monthly-credits', text: 'Monthly credit boost' },
                { id: 'discount', text: '10% off extra credits' },
                { id: 'faster', text: 'Faster generation speeds' },
                { id: 'multiple', text: 'Run multiple generations' },
            ],
        },
    ]

    const paymentMethods = [
        'Apple Pay',
        'Visa',
        'Amex',
        'Mastercard',
        'PayPal',
        'Google Pay',
    ]

    const init = () => {
        if (!sectionRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            gsap.fromTo(
                introRef.value,
                {
                    y: 34,
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 86%',
                        end: 'top 62%',
                        scrub: 1,
                    },
                },
            )

            gsap.fromTo(
                cardsRef.value?.children ?? [],
                {
                    y: 70,
                    opacity: 0,
                    scale: 0.95,
                    rotate: (index) => (index === 0 ? -1.2 : 1.2),
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
                        start: 'top 76%',
                        end: 'top 34%',
                        scrub: 1.05,
                    },
                },
            )

            gsap.fromTo(
                footerRef.value,
                {
                    y: 24,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 46%',
                        end: 'top 22%',
                        scrub: 1,
                    },
                },
            )

            gsap.to(bgRef.value, {
                yPercent: -6,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            mm.add('(min-width: 1024px)', () => {
                gsap.to('[data-pricing-orbit]', {
                    rotate: 360,
                    duration: 24,
                    repeat: -1,
                    ease: 'none',
                })

                gsap.to('[data-pricing-orbit-inner]', {
                    rotate: -360,
                    duration: 18,
                    repeat: -1,
                    ease: 'none',
                })

                gsap.to('[data-pricing-sweep]', {
                    xPercent: 22,
                    yPercent: -12,
                    duration: 9,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-pricing-sweep]', {
                    xPercent: 10,
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
        }, sectionRef.value)
    }

    const destroy = () => {
        ctx?.revert()
        ctx = null
    }

    return {
        plans,
        paymentMethods,
        init,
        destroy,
    }
}
