export const useSectionNavigation = () => {
    const getDocumentTop = (element: HTMLElement) => {
        let top = 0
        let current: HTMLElement | null = element

        while (current) {
            top += current.offsetTop
            current = current.offsetParent as HTMLElement | null
        }

        return top
    }

    const scrollToSection = (target: string) => {
        if (!import.meta.client) return

        const hash = target.startsWith('#') ? target : `#${target}`
        const id = hash.slice(1)
        const element = document.getElementById(id)

        if (!element) return

        const offset = 80
        const defaultShift = Number(element.getAttribute('data-nav-shift') || '0')
        const desktopShift = Number(element.getAttribute('data-nav-shift-lg') || defaultShift)
        const shift = window.matchMedia('(min-width: 1024px)').matches ? desktopShift : defaultShift
        const top = getDocumentTop(element) - offset + shift

        window.history.replaceState(null, '', hash)
        window.scrollTo({
            top,
            behavior: 'smooth',
        })
    }

    return {
        scrollToSection,
    }
}
