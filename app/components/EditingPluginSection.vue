<script setup lang="ts">
import { useEditingPluginSection } from '~/composables/useEditingPluginSection'

const sectionRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const appsRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLElement | null>(null)
const featuresRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)

const {
  apps,
  features,
  videoUrl,
  init,
  destroy,
} = useEditingPluginSection({
  sectionRef,
  badgeRef,
  titleRef,
  textRef,
  appsRef,
  videoRef,
  featuresRef,
  bgRef,
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
      id="plugins"
      ref="sectionRef"
      class="relative isolate min-w-full w-full overflow-hidden bg-canvas-system px-4 py-20 text-paper sm:px-6 lg:px-10 lg:py-24"
  >
    <div
        class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
    />

    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute left-[4%] top-[8%] -z-20 text-[clamp(4.5rem,14vw,10rem)] font-black uppercase leading-none tracking-[-0.12em] text-paper/[0.04]"
    >
      ui
    </div>

    <div
        class="pointer-events-none absolute right-[5%] top-[14%] -z-20 hidden h-[18rem] w-[18rem] border border-dashed border-secondary/18 lg:block"
    />

    <div
        class="pointer-events-none absolute left-[8%] bottom-[14%] -z-20 hidden h-[10rem] w-[16rem] rotate-[-10deg] border border-accent/20 bg-accent/[0.03] lg:block"
    />

    <div
        data-plugin-scan
        class="pointer-events-none absolute inset-x-0 top-[18%] -z-20 h-[10rem] bg-gradient-to-b from-secondary/0 via-secondary/12 to-secondary/0 blur-[52px]"
    />

    <div
        data-plugin-rail
        class="pointer-events-none absolute left-1/2 top-[28%] -z-10 h-[26rem] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/45 to-transparent lg:h-[34rem]"
    />

    <div
        data-plugin-window
        class="pointer-events-none absolute right-[6%] top-[16%] -z-20 hidden h-[14rem] w-[14rem] rounded-[2rem] border border-paper/8 bg-paper/[0.02] lg:block"
    />

    <div
        class="pointer-events-none absolute left-1/2 top-0 -z-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-secondary/12 blur-[130px]"
    />

    <div
        class="pointer-events-none absolute bottom-[-10rem] right-[-8rem] -z-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px]"
    />

    <div class="mx-auto max-w-[1400px]">
      <div class="mx-auto max-w-4xl text-center">
        <p
            ref="badgeRef"
            class="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-accent"
        >
          <NuxtIcon name="lucide:plug-zap" class="text-base" />
          AI Editing Plugins
        </p>

        <h2
            ref="titleRef"
            class="mx-auto mt-5 max-w-4xl text-[clamp(2rem,4vw,4.3rem)] font-black uppercase leading-[0.92] tracking-[-0.07em]"
        >
          Edit
          <span class="text-accent">inside</span>
          your timeline.
        </h2>

        <p
            ref="textRef"
            class="mx-auto mt-4 max-w-2xl text-sm leading-6 text-paper/62 md:text-base md:leading-7"
        >
          PromptEdit plugins work directly inside your editing software, so you can generate assets and keep moving without breaking your creative flow.
        </p>

        <div
            ref="appsRef"
            class="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div
              v-for="app in apps"
              :key="app.id"
              class="group flex items-center gap-4 rounded-2xl border border-primary/70 bg-paper/[0.035] px-4 py-3 shadow-[6px_6px_0_var(--fx-glow-primary-bold)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-secondary hover:shadow-[7px_7px_0_var(--color-secondary)]"
          >
            <div
                v-if="app.type === 'premiere'"
                class="relative grid size-14 place-items-center overflow-hidden rounded-[18px] border border-primary-soft/20 bg-[radial-gradient(circle_at_30%_20%,var(--fx-glow-primary-tint),transparent_45%),linear-gradient(180deg,var(--color-primary-deep)_0%,var(--color-primary-deeper)_100%)] shadow-[inset_0_0_30px_var(--fx-glow-paper-soft),0_0_28px_var(--fx-glow-primary-soft-alt)]"
            >
              <div class="absolute inset-[3px] rounded-[14px] border border-paper/10" />
              <span class="relative text-[2rem] font-black tracking-[-0.08em] text-primary-tint">
                Pr
              </span>
            </div>

            <div
                v-else
                class="relative grid size-14 place-items-center overflow-hidden rounded-full border border-paper/15 bg-[radial-gradient(circle_at_30%_20%,var(--fx-glow-paper),transparent_38%),linear-gradient(180deg,var(--color-panel-alt)_0%,var(--color-panel)_100%)] shadow-[inset_0_0_22px_var(--fx-glow-paper-soft),0_0_28px_var(--fx-glow-secondary-soft)]"
            >
              <div class="absolute inset-0 rounded-full ring-2 ring-paper/10" />
              <div class="relative h-9 w-9">
                <span class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-info shadow-[0_0_16px_var(--fx-glow-info)]" />
                <span class="absolute bottom-0 left-0 h-4 w-4 rounded-full bg-accent-soft shadow-[0_0_16px_var(--fx-glow-accent-soft-alt)]" />
                <span class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-warning shadow-[0_0_16px_var(--fx-glow-warning)]" />
              </div>
            </div>

            <div class="text-left">
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-paper/38">
                Plugin for
              </p>

              <p class="mt-1 text-sm font-black uppercase tracking-[0.08em] text-paper">
                {{ app.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[0.9fr_1.5fr_0.9fr] lg:items-center">
        <div
            ref="featuresRef"
            class="order-2 grid gap-4 lg:order-1"
        >
          <article
              v-for="feature in features.slice(0, 2)"
              :key="feature.id"
              class="rounded-2xl border border-primary/60 bg-paper/[0.035] p-4 shadow-[5px_5px_0_var(--fx-glow-primary)] backdrop-blur-xl"
          >
            <div class="mb-3 grid size-11 place-items-center rounded-xl border border-accent/45 bg-accent/10 text-accent">
              <NuxtIcon :name="feature.icon" class="text-[22px]" />
            </div>

            <h3 class="text-lg font-black leading-tight tracking-[-0.04em]">
              {{ feature.title }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-paper/58">
              {{ feature.description }}
            </p>
          </article>
        </div>

        <div
            ref="videoRef"
            class="order-1 perspective-[1200px] lg:order-2"
        >
          <div
              class="relative overflow-hidden rounded-[1.6rem] border border-secondary/80 bg-surface shadow-[9px_9px_0_var(--color-primary)]"
          >
            <div class="flex items-center justify-between border-b border-paper/10 bg-canvas-system/90 px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-accent" />
                <span class="size-2 rounded-full bg-secondary" />
                <span class="size-2 rounded-full bg-paper/35" />
              </div>

              <p class="text-[0.62rem] font-black uppercase tracking-[0.24em] text-paper/42">
                Editing Plugin
              </p>
            </div>

            <div class="relative aspect-video bg-ink">
              <iframe
                  :src="videoUrl"
                  title="Editing plugin"
                  class="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
              />
            </div>

            <div class="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-paper/10" />
          </div>
        </div>

        <div class="order-3 grid gap-4">
          <article
              v-for="feature in features.slice(2)"
              :key="feature.id"
              class="rounded-2xl border border-primary/60 bg-paper/[0.035] p-4 shadow-[5px_5px_0_var(--fx-glow-primary)] backdrop-blur-xl"
          >
            <div class="mb-3 grid size-11 place-items-center rounded-xl border border-accent/45 bg-accent/10 text-accent">
              <NuxtIcon :name="feature.icon" class="text-[22px]" />
            </div>

            <h3 class="text-lg font-black leading-tight tracking-[-0.04em]">
              {{ feature.title }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-paper/58">
              {{ feature.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
