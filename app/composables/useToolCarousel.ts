import type { Ref } from 'vue'

export type ToolCategory = 'image' | 'video' | 'voice'

export interface ToolItem {
    id: string
    title: string
    category: ToolCategory
    wistiaUrl: string
    thumbnail: string
    label: string
}

interface UseToolCarouselOptions {
    carouselRef: Ref<HTMLElement | null>
}

export const useToolCarousel = ({ carouselRef }: UseToolCarouselOptions) => {
    const activeCategory = ref<ToolCategory>('image')

    const categories: Array<{
        id: ToolCategory
        label: string
    }> = [
        { id: 'image', label: 'Image' },
        { id: 'video', label: 'Video' },
        { id: 'voice', label: 'Voice' },
    ]

    const tools: ToolItem[] = [
        {
            id: 'ai-clones',
            title: 'AI Clones',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=6ugrp949dp',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/03a0dffe1ce7befb12190779e46c532de8d0ce6f.jpg?image_crop_resized=960x540',
        },
        {
            id: 'social-media-posts',
            title: 'Social Media Posts',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=5bzldtmz36',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/07899d9f389dcd488a18f1ad25a0324795d02d78.jpg?image_crop_resized=960x540',
        },
        {
            id: 'graphic-design',
            title: 'Graphic Design',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=kvqvjrid9z',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/862cd638153572251fee0dced4671398bb7cfa6c.jpg?image_crop_resized=960x540',
        },
        {
            id: 'image-editing',
            title: 'Image Editing',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=72zakh7jbf',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/3338a0066c6741c886085cca3d318687129987ed.jpg?image_crop_resized=960x540',
        },
        {
            id: 'youtube-thumbnails',
            title: 'YouTube Thumbnails',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=yrq89m8ns0',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/718230370e46300dc4ca1c8c2c3ab7f753782edf.jpg?image_crop_resized=960x540',
        },
        {
            id: 'online-ads',
            title: 'Online Ads',
            category: 'image',
            label: 'Image Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=cypx73wu36',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/4a12d5370b0e698ddc2f5c786bd5d98cf4da17b4.jpg?image_crop_resized=960x540',
        },
        {
            id: 'clone-videos',
            title: 'Clone Videos',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=v39qn2mla0',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/71faa554636db18800845e20e4d6ac0334615598.jpg?image_crop_resized=960x540',
        },
        {
            id: 'visual-effects',
            title: 'Visual Effects',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=qx4qain2eg',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/4698dda4ea29cd6d1f1274e009b084d7845b11bb.jpg?image_crop_resized=960x540',
        },
        {
            id: 'cinematic-films',
            title: 'Cinematic Films',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=3rllmh5doc',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/ddbfeddbec8f3c0dc6f60e80d1e5a099cb0e51c6.jpg?image_crop_resized=960x540',
        },
        {
            id: 'video-ads',
            title: 'Video Ads',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=1muopqfwh6',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/b110ed999fcfb57b1c1bd9818daf1e9b4226b02f.jpg?image_crop_resized=960x540',
        },
        {
            id: 'reels-tiktoks',
            title: 'Reels & TikToks',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=fq2zoz36cz',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/cd1090f3a99b05c6f01a40f9118245b97cb387df.jpg?image_crop_resized=960x540',
        },
        {
            id: 'youtube-videos',
            title: 'YouTube Videos',
            category: 'video',
            label: 'Video Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=8nri26so0p',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/6092ac0dd155b243cf4f00848cb25c8cf142bd75.jpg?image_crop_resized=960x540',
        },
        {
            id: 'ai-voiceovers',
            title: 'AI Voiceovers',
            category: 'voice',
            label: 'Voice Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=rsh692c710',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/f67dbd9c93c0e6fe6558167fc9e50a93.jpg?image_crop_resized=960x540',
        },
        {
            id: 'ai-voice-clone',
            title: 'AI Voice Clone',
            category: 'voice',
            label: 'Voice Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=rusyskd1ox',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/4541f5cc8e6c9e6156b454d272cd4264.jpg?image_crop_resized=960x540',
        },
        {
            id: 'voice-swaps',
            title: 'Voice Swaps',
            category: 'voice',
            label: 'Voice Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=x6w5dao4h0',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/05b35e11964d9e59a30c48d00257b965.jpg?image_crop_resized=960x536',
        },
        {
            id: 'sound-effects',
            title: 'AI Sound Effects',
            category: 'voice',
            label: 'Voice Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=0yhtigj9mg',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/7d3087ee8effee2a51be8d803f7c25f1.jpg?image_crop_resized=960x540',
        },
        {
            id: 'music-generation',
            title: 'AI Music Generation',
            category: 'voice',
            label: 'Voice Tool',
            wistiaUrl: 'https://www.contentcreator.com/prompt-edit?wvideo=81m386dh7h',
            thumbnail: 'https://embed-ssl.wistia.com/deliveries/6228a93e2476bc163caba1eeb3c0dd99.jpg?image_crop_resized=960x540',
        },
    ]

    const filteredTools = computed(() => {
        return tools.filter((tool) => tool.category === activeCategory.value)
    })

    const selectCategory = (category: ToolCategory) => {
        activeCategory.value = category
        carouselRef.value?.scrollTo({ left: 0, behavior: 'smooth' })
    }

    const getScrollAmount = (carousel: HTMLElement) => {
        const firstCard = carousel.querySelector<HTMLElement>('[data-carousel-card]')

        if (!firstCard) {
            return carousel.clientWidth
        }

        const styles = window.getComputedStyle(carousel)
        const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0

        return firstCard.offsetWidth + gap
    }

    const scrollCarousel = (direction: 'prev' | 'next') => {
        const carousel = carouselRef.value

        if (!carousel) return

        const amount = getScrollAmount(carousel)

        carousel.scrollBy({
            left: direction === 'next' ? amount : -amount,
            behavior: 'smooth',
        })
    }

    return {
        categories,
        activeCategory,
        filteredTools,
        selectCategory,
        scrollCarousel,
    }
}