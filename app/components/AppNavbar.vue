<script setup lang="ts">
import { useSectionNavigation } from '~/composables/useSectionNavigation'

const mobileMenuOpen = ref(false)
const { scrollToSection } = useSectionNavigation()

const navItems = [
  { label: 'Start', href: '#start' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Tools', href: '#tools' },
  { label: 'Plugins', href: '#plugins' },
  { label: 'Stack', href: '#creator-stack' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleNavClick = (href: string) => {
  scrollToSection(href)
  closeMobileMenu()
}
</script>

<template>
  <header
      class="fixed inset-x-0 top-0 z-[100] border-b border-paper/10 bg-canvas/72 backdrop-blur-2xl"
  >
    <nav
        class="mx-auto flex h-14 w-[calc(100%-24px)] max-w-7xl items-center justify-between"
    >
      <NuxtLink
          to="/"
          class="flex items-center"
          aria-label="Go to homepage"
          @click="closeMobileMenu"
      >
        <img
            src="/images/logo.png"
            alt="PromptEdit"
            class="h-7 w-auto md:h-8"
        >
      </NuxtLink>

      <div
          class="hidden items-center gap-5 text-[0.68rem] font-black uppercase tracking-[0.18em] text-paper/55 xl:flex"
      >
        <button
            v-for="item in navItems.slice(1)"
            :key="item.href"
            type="button"
            class="transition hover:text-paper"
            @click="handleNavClick(item.href)"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="flex items-center gap-3">
        <button
            type="button"
            class="hidden items-center gap-2 rounded-lg border border-secondary/35 bg-primary/90 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-paper shadow-[0_10px_32px_var(--fx-glow-primary-soft)] transition hover:-translate-y-0.5 hover:bg-primary md:inline-flex"
            @click="handleNavClick('#pricing')"
        >
          Start
          <span aria-hidden="true">↗</span>
        </button>

        <button
            type="button"
            class="grid size-10 place-items-center rounded-lg border border-paper/12 bg-paper/5 text-paper transition hover:bg-paper/10 xl:hidden"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            aria-label="Toggle navigation menu"
            @click="toggleMobileMenu"
        >
          <span class="relative block h-4 w-4">
            <span
                class="absolute left-0 top-0.5 h-0.5 w-4 bg-current transition"
                :class="mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''"
            />
            <span
                class="absolute left-0 top-[7px] h-0.5 w-4 bg-current transition"
                :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
                class="absolute left-0 top-[13px] h-0.5 w-4 bg-current transition"
                :class="mobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </nav>

    <transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="mobileMenuOpen"
          class="border-t border-paper/10 bg-canvas/96 px-3 pb-4 pt-3 xl:hidden"
      >
        <div class="grid gap-2">
          <button
              v-for="item in navItems"
              :key="item.href"
              type="button"
              class="rounded-xl border border-paper/10 bg-paper/[0.03] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-paper/78 transition hover:border-secondary hover:text-paper"
              @click="handleNavClick(item.href)"
          >
            {{ item.label }}
          </button>

          <button
              type="button"
              class="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-accent bg-accent px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-ink shadow-[5px_5px_0_var(--color-primary)]"
              @click="handleNavClick('#pricing')"
          >
            Start creating
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
