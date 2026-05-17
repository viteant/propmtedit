<script setup lang="ts">
import { useFinalCTA } from '~/composables/useFinalCTA'

const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const copyRef = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const orbitRef = ref<HTMLElement | null>(null)

const { init, destroy } = useFinalCTA({
  sectionRef,
  titleRef,
  copyRef,
  actionsRef,
  orbitRef,
})

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  destroy()
})
</script>

<template>
  <section
      ref="sectionRef"
      class="relative z-10 flex min-h-[calc(100svh-3.5rem)] w-full items-center overflow-hidden bg-canvas px-4 py-20 text-paper sm:px-6 lg:px-10"
  >
    <div
        data-cta-grid
        class="pointer-events-none absolute inset-0 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        data-cta-beam
        class="pointer-events-none absolute left-[6%] top-[20%] h-[18rem] w-[78vw] rotate-[-8deg] bg-gradient-to-r from-transparent via-secondary/14 to-transparent blur-[80px] sm:h-[24rem]"
    />

    <div
        data-cta-panel
        class="pointer-events-none absolute right-[4%] top-[14%] hidden h-[20rem] w-[24rem] rotate-[12deg] rounded-[2.5rem] border border-paper/8 bg-paper/[0.025] lg:block"
    />

    <div
        class="pointer-events-none absolute -left-52 top-0 h-[34rem] w-[34rem] rounded-full bg-secondary/15 blur-[150px]"
    />

    <div
        class="pointer-events-none absolute -right-52 bottom-[-12rem] h-[40rem] w-[40rem] rounded-full bg-primary/30 blur-[160px]"
    />

    <div
        ref="orbitRef"
        class="pointer-events-none absolute right-[8%] top-[18%] hidden size-56 rounded-full border border-dashed border-accent/30 lg:block"
    />

    <div class="relative z-10 mx-auto w-full max-w-[1380px]">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p
              class="inline-flex items-center gap-2 rounded-none border border-primary bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-paper shadow-[5px_5px_0_var(--color-secondary)]"
          >
            Create without limits
          </p>

          <h2
              ref="titleRef"
              class="mt-7 max-w-5xl text-[clamp(3rem,7vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]"
          >
            Ready to stop
            <span class="text-primary">collecting tools</span>
            and start creating?
          </h2>
        </div>

        <div>
          <p
              ref="copyRef"
              class="max-w-xl text-base leading-7 text-paper/64 md:text-lg"
          >
            Join the creator stack built for AI generation, editing plugins, templates, video assets, and faster creative workflows.
          </p>

          <div
              ref="actionsRef"
              class="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
                type="button"
                class="inline-flex items-center justify-center gap-3 rounded-none border border-accent bg-accent px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-ink shadow-[7px_7px_0_var(--color-primary)] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-secondary)]"
            >
              Start creating
              <NuxtIcon name="lucide:arrow-up-right" class="text-lg" />
            </button>

            <a
                href="#pricing"
                class="inline-flex items-center justify-center gap-3 rounded-none border border-paper/18 bg-paper/[0.035] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-paper backdrop-blur-xl transition hover:border-secondary hover:text-secondary"
            >
              View pricing
              <NuxtIcon name="lucide:badge-dollar-sign" class="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
