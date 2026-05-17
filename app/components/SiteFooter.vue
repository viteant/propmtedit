<script setup lang="ts">
import { useSectionNavigation } from '~/composables/useSectionNavigation'

const { scrollToSection } = useSectionNavigation()

const navItems = [
  { label: 'Workflow', href: '#workflow' },
  { label: 'Tools', href: '#tools' },
  { label: 'Plugins', href: '#plugins' },
  { label: 'Creator Stack', href: '#creator-stack' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const legalItems = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Support', href: 'mailto:support@contentcreator.com' },
]

const stackItems = [
  'AI Tools',
  'Templates',
  'Plugins',
  'Video Assets',
  'Sound Effects',
]

const handleNavClick = (href: string) => {
  scrollToSection(href)
}
</script>

<template>
  <footer
      data-site-footer
      class="relative z-40 -mt-[1px] flex min-h-screen min-w-full w-full items-center overflow-hidden bg-accent px-4 py-16 text-ink shadow-[0_-40px_120px_var(--fx-shadow-ink-panel)] sm:px-6 lg:sticky lg:bottom-0 lg:rounded-t-[2rem] lg:px-10 lg:py-20"
  >
    <div
        class="pointer-events-none absolute inset-0 opacity-[0.16]
      [background-image:linear-gradient(var(--fx-grid-ink)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-ink)_1px,transparent_1px)]
      [background-size:44px_44px]"
    />

    <div
        class="pointer-events-none absolute -left-32 top-20 h-[32rem] w-[32rem] rounded-full bg-ink/10 blur-[120px]"
    />

    <div
        class="pointer-events-none absolute -right-40 bottom-[-10rem] h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[150px]"
    />

    <div class="relative z-10 mx-auto w-full max-w-[1380px]">
      <div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.28em] text-ink/55">
            PromptEdit.com
          </p>

          <h2 class="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,8rem)] font-black uppercase leading-[0.76] tracking-[-0.09em]">
            One stack.
            <br>
            Less chaos.
          </h2>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
                v-for="item in stackItems"
                :key="item"
                class="rounded-none border border-ink/30 bg-ink/5 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-ink/70"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div class="grid gap-8 sm:grid-cols-2">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.24em] text-ink/50">
              Explore
            </p>

            <div class="mt-4 grid gap-3">
              <button
                  v-for="item in navItems"
                  :key="item.label"
                  type="button"
                  class="w-fit text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:translate-x-1"
                  @click="handleNavClick(item.href)"
              >
                {{ item.label }}
              </button>
            </div>
          </div>

          <div>
            <p class="text-xs font-black uppercase tracking-[0.24em] text-ink/50">
              Help
            </p>

            <div class="mt-4 grid gap-3">
              <a
                  v-for="item in legalItems"
                  :key="item.label"
                  :href="item.href"
                  class="w-fit text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:translate-x-1"
              >
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col justify-between gap-5 border-t border-ink/20 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-ink/58 md:flex-row md:items-center">
        <p>
          © 2026 PromptEdit.com. Built for creators.
        </p>

        <p>
          AI tools · Templates · Plugins · Assets
        </p>
      </div>
    </div>
  </footer>
</template>
