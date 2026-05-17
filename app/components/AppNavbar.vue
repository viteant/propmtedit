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
      >
        <img
            src="/images/logo.png"
            alt="PromptEdit"
            class="h-7 w-auto md:h-8"
        >
      </NuxtLink>

      <div
          class="hidden items-center gap-6 text-[0.68rem] font-black uppercase tracking-[0.18em] text-paper/55 lg:flex"
      >
        <NuxtLink
            to="#tools"
            class="transition hover:text-paper"
        >
          Tools
        </NuxtLink>

        <NuxtLink
            to="#models"
            class="transition hover:text-paper"
        >
          AI Models
        </NuxtLink>

        <NuxtLink
            to="#credits"
            class="transition hover:text-paper"
        >
          Credits
        </NuxtLink>

        <NuxtLink
            to="#pricing"
            class="transition hover:text-paper"
        >
          Pricing
        </NuxtLink>
      </div>

      <NuxtLink
          to="#start"
          class="hidden items-center gap-2 rounded-lg border border-secondary/35 bg-primary/90 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-paper shadow-[0_10px_32px_var(--fx-glow-primary-soft)] transition hover:-translate-y-0.5 hover:bg-primary md:inline-flex"
      >
        Start
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </nav>
  </header>
</template>