<script setup lang="ts">
import {useHeroAnimation} from "~/composables/useHeroAnimation";

const heroRef = ref<HTMLElement | null>(null)
const videoScrollRef = ref<HTMLElement | null>(null)
const videoCardRef = ref<HTMLElement | null>(null)

const {
  enterVideo,
  leaveVideo,
  initAnimation,
  destroyAnimation,
} = useHeroAnimation({
  heroRef,
  videoScrollRef,
  videoCardRef,
})

onMounted(initAnimation)
onBeforeUnmount(destroyAnimation)
</script>

<template>
  <section
      ref="heroRef"
      class="relative isolate min-h-[calc(100svh-5rem)] overflow-clip bg-canvas text-paper"
  >
    <div
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.16]
      bg-[linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      bg-size-[48px_48px]
      mask-[linear-gradient(to_bottom,var(--color-ink),transparent_92%)]"
    />

    <div
        class="pe-scanline pointer-events-none absolute left-[-10%] top-[20%] -z-20 h-[16rem] w-[72vw] rotate-[-8deg] bg-gradient-to-r from-transparent via-paper/[0.045] to-transparent blur-[70px]"
    />

    <div
        class="pe-glass-panel pointer-events-none absolute bottom-[12%] left-[12%] -z-10 hidden h-[12rem] w-[18rem] rotate-[-12deg] rounded-[2rem] border border-paper/8 bg-paper/[0.025] lg:block"
    />

    <div
        class="pe-blue-plane pointer-events-none absolute right-[-18%] top-[-16%] -z-20 h-[125vh] w-[68vw] rotate-[8deg] bg-primary shadow-[0_0_140px_var(--fx-glow-primary-hero)] md:right-[-10%] md:w-[50vw]"
    />

    <div
        class="pe-lime-plane pointer-events-none absolute bottom-[-8%] right-[-12%] -z-10 h-[34vh] w-[72vw] rotate-[-4deg] bg-accent opacity-90 mix-blend-screen [clip-path:polygon(12%_0,100%_14%,84%_100%,0_88%)] md:right-[2%] md:w-[30vw]"
    />

    <div
        class="mx-auto grid min-h-[calc(100svh-5rem)] w-[calc(100%-28px)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-16"
    >
      <div class="max-w-2xl">
        <p class="pe-kicker mb-5 inline-flex bg-primary px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-paper">
          All-in-one AI creative studio
        </p>

        <h1 class="text-[clamp(3.6rem,16vw,6.8rem)] font-black uppercase leading-[0.8] tracking-[-0.08em] lg:text-[clamp(5.5rem,8vw,9rem)]">
          <span class="pe-title-line block">Create</span>
          <span class="pe-title-line block text-primary">without</span>
          <span class="pe-title-line block text-accent">tool</span>
          <span class="pe-title-line block">chaos.</span>
        </h1>

        <p class="pe-copy mt-7 max-w-xl text-base leading-7 text-paper/72 md:text-xl md:leading-9">
          Generate images, videos, audio, templates and creative assets with top AI models from one place.
          Use credits, create faster, and stop managing a circus of subscriptions.
        </p>

        <div class="pe-actions mt-8 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
              to="#start"
              class="inline-flex min-h-14 items-center justify-center gap-4 bg-accent px-6 text-sm font-black uppercase tracking-wide text-canvas shadow-[8px_8px_0_var(--color-primary)] transition hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-primary)]"
          >
            Start creating
            <span>↗</span>
          </NuxtLink>

          <NuxtLink
              to="#demo"
              class="inline-flex min-h-14 items-center justify-center border border-paper/25 bg-paper/5 px-6 text-sm font-black uppercase tracking-wide text-paper backdrop-blur-xl transition hover:bg-paper/10"
          >
            Watch demo
          </NuxtLink>
        </div>

        <div class="pe-tags mt-8 flex flex-wrap gap-2">
          <span
              v-for="tag in ['Images', 'Videos', 'Audio', 'Templates', 'Plugins']"
              :key="tag"
              class="border border-paper/15 bg-paper/5 px-3 py-2 text-xs uppercase tracking-widest text-paper/65 backdrop-blur-xl"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div
          class="relative grid min-h-[320px] place-items-center [perspective:1200px] sm:min-h-[430px] lg:min-h-[620px]">
        <div
            ref="videoScrollRef"
            class="relative w-full max-w-[920px] origin-bottom-right will-change-transform"
        >
          <div
              ref="videoCardRef"
              class="w-full rotate-[-4deg] rounded-[1.6rem] border border-paper/20 bg-paper/10 p-3 shadow-[0_38px_110px_var(--fx-shadow-ink-hero),0_0_80px_var(--fx-glow-primary-strong)] backdrop-blur-2xl will-change-transform md:rounded-[2rem] md:p-4"
              @mouseenter="enterVideo"
              @mouseleave="leaveVideo"
          >
            <div
                class="mb-3 flex items-center justify-between gap-4 px-1 text-[0.65rem] uppercase tracking-[0.16em] text-paper/65 md:text-xs">
              <span>PromptEdit demo</span>
              <strong class="text-accent">AI creation workflow</strong>
            </div>

            <div
                class="aspect-video overflow-hidden rounded-[1.1rem] border border-paper/15 bg-ink md:rounded-[1.5rem]">
              <iframe
                  src="https://fast.wistia.net/embed/iframe/eu37od3pav?seo=false&videoFoam=true"
                  title="Ai tool vs marketplace"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  class="h-full w-full border-0"
                  @pointerenter="enterVideo"
                  @focus="enterVideo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
