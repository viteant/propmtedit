import type { Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface FAQItem {
    id: string
    question: string
    answer: string[]
}

interface UseFAQSectionOptions {
    sectionRef: Ref<HTMLElement | null>
    bgRef: Ref<HTMLElement | null>
    introRef: Ref<HTMLElement | null>
    listRef: Ref<HTMLElement | null>
}

export const useFAQSection = ({
                                  sectionRef,
                                  bgRef,
                                  introRef,
                                  listRef,
                              }: UseFAQSectionOptions) => {
    let ctx: gsap.Context | null = null

    const activeFAQ = ref<string>('what-is-promptedit')

    const faqs: FAQItem[] = [
        {
            id: 'what-is-promptedit',
            question: 'What is PromptEdit.com?',
            answer: [
                'PromptEdit is like a grocery store for AI tools. You can access your favorite AI tools in one place without subscribing to each one individually.',
                'You use credits to pay for what you create. No subscription is required for pay-per-use access.',
                'When new AI tools become useful for creators, PromptEdit can add them so you can use them from the same interface.',
            ],
        },
        {
            id: 'commercial-use',
            question: 'Can I use what I create for social media or commercial videos?',
            answer: [
                'Yes. Everything you create or download during your active membership is cleared for commercial projects.',
                'There is no extra commercial licensing fee.',
            ],
        },
        {
            id: 'quality',
            question: 'Is there a quality difference between AI tools on PromptEdit and the original tools?',
            answer: [
                'No. PromptEdit gives you access to the same tools on a pay-per-use basis instead of forcing you into separate subscriptions.',
            ],
        },
        {
            id: 'templates',
            question: 'What is Content Creator Templates?',
            answer: [
                'Content Creator Templates is a library of 100,000+ royalty-free video editing templates and creative assets.',
                'With a PromptEdit subscription, you get unlimited access to the Content Creator Templates Library.',
                'The library includes color grading presets, title and text templates, visual effects, presets, project templates, animations, sound effects, motion backgrounds, and more.',
            ],
        },
        {
            id: 'downloads',
            question: 'Do any limits apply to downloads?',
            answer: [
                'No limits apply to downloads during your active subscription.',
                'The subscription is for one individual user. Account sharing, robots, scraping, and automated downloading are not allowed.',
            ],
        },
        {
            id: 'platforms',
            question: 'Will the templates work in my editing platform?',
            answer: [
                'Yes. The templates are compatible with major video editing platforms.',
                'Some custom templates are made for specific editing platforms, but the broader library is designed to work across different workflows.',
            ],
        },
        {
            id: 'cancel',
            question: 'Can I cancel anytime?',
            answer: [
                'Yes. There are no long-term contracts.',
                'You can cancel directly through the site or contact support if you need help.',
            ],
        },
        {
            id: 'after-cancel',
            question: 'What happens to templates I downloaded if I cancel?',
            answer: [
                'Videos created during your active membership stay cleared for life.',
                'After cancellation, you can no longer use the video templates for future projects.',
            ],
        },
    ]

    const toggleFAQ = (id: string) => {
        activeFAQ.value = activeFAQ.value === id ? '' : id
    }

    const init = () => {
        if (!sectionRef.value) return

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            gsap.fromTo(
                introRef.value,
                {
                    y: 48,
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
                listRef.value?.children ?? [],
                {
                    y: 60,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.055,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.value,
                        start: 'top 72%',
                        end: 'top 24%',
                        scrub: 1.05,
                    },
                },
            )

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
                gsap.to('[data-faq-ribbon]', {
                    xPercent: 16,
                    yPercent: -10,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })

                gsap.to('[data-faq-glow]', {
                    y: 22,
                    scale: 1.06,
                    duration: 6,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            })

            mm.add('(max-width: 1023px)', () => {
                gsap.to('[data-faq-ribbon]', {
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
        faqs,
        activeFAQ,
        toggleFAQ,
        init,
        destroy,
    }
}
