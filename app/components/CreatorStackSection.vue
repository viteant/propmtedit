<script setup lang="ts">
import { useCreatorStack } from '~/composables/useCreatorStack'

const sectionRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const copyRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const isClient = ref(false)

const {
  stackItems,
  stats,
  getWistiaEmbedUrl,
  init,
  destroy,
} = useCreatorStack({
  sectionRef,
  bgRef,
  introRef,
  titleRef,
  copyRef,
  cardsRef,
  statsRef,
})

onMounted(() => {
  isClient.value = true
  init()
})

onBeforeUnmount(() => {
  destroy()
})
</script>

<template>
  <section
      id="creator-stack"
      ref="sectionRef"
      class="relative isolate min-w-full w-full overflow-hidden bg-canvas-stack px-4 py-20 text-paper sm:px-6 lg:px-10 lg:py-24"
  >
    <div
        class="pointer-events-none absolute right-0 top-0 -z-10 h-full w-10 bg-[repeating-linear-gradient(180deg,var(--color-primary)_0_22px,transparent_22px_44px)] opacity-55"
    />

    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute left-[5%] top-[7%] -z-20 text-[clamp(4rem,15vw,11rem)] font-black uppercase leading-none tracking-[-0.12em] text-accent/[0.05]"
    >
      stack
    </div>

    <div
        class="pointer-events-none absolute left-[6%] top-[22%] -z-20 hidden h-[22rem] w-[14rem] rotate-[-8deg] border border-paper/8 bg-paper/[0.02] lg:block"
    />

    <div
        class="pointer-events-none absolute right-[14%] bottom-[12%] -z-20 hidden h-[14rem] w-[24rem] rotate-[8deg] border border-dashed border-accent/18 lg:block"
    />

    <div
        data-creator-beam
        class="pointer-events-none absolute left-[8%] top-[16%] -z-20 h-[26rem] w-[18rem] rounded-full bg-secondary/10 blur-[120px] sm:h-[32rem] sm:w-[24rem] lg:left-[14%] lg:top-[10%]"
    />

    <div
        data-creator-panel
        class="pointer-events-none absolute right-[-12%] top-[18%] -z-20 hidden h-[22rem] w-[32rem] rotate-[14deg] rounded-[3rem] border border-paper/8 bg-paper/[0.03] backdrop-blur-md lg:block"
    />

    <div
        data-creator-line
        class="pointer-events-none absolute bottom-[14%] left-[6%] -z-10 h-px w-[55vw] bg-gradient-to-r from-transparent via-accent/45 to-transparent"
    />

    <div
        class="pointer-events-none absolute -left-52 top-20 -z-20 h-[34rem] w-[34rem] rounded-full bg-secondary/16 blur-[150px]"
    />

    <div
        class="pointer-events-none absolute -right-52 bottom-[-10rem] -z-20 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[160px]"
    />

    <div class="mx-auto max-w-[1540px]">
      <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div
            ref="introRef"
            class="lg:sticky lg:top-28"
        >
          <p
              class="inline-flex items-center gap-2 rounded-none border border-primary bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-paper shadow-[5px_5px_0_var(--color-secondary)]"
          >
            All-in-one creative studio
          </p>

          <h2
              ref="titleRef"
              class="mt-8 max-w-4xl text-[clamp(3.2rem,7vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]"
          >
            Everything
            <br>
            <span class="text-primary">you need</span>
            <br>
            to create
            <span class="text-accent">without limits.</span>
          </h2>

          <p
              ref="copyRef"
              class="mt-7 max-w-xl text-base leading-7 text-paper/62 md:text-lg"
          >
            Premium video assets for creators: LUTs, sound effects, custom text, overlays, and backgrounds bundled into one cinematic toolkit.
          </p>

          <div
              ref="statsRef"
              class="mt-8 grid gap-3 border-l border-accent/70 pl-5 sm:grid-cols-2"
          >
            <div
                v-for="stat in stats"
                :key="stat.id"
                class="flex items-center gap-3 rounded-xl border border-paper/10 bg-paper/[0.035] px-4 py-3 backdrop-blur-xl"
            >
              <span class="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/45 bg-accent/10 text-accent">
                <NuxtIcon :name="stat.icon" class="text-lg" />
              </span>

              <span>
                <strong class="block text-lg font-black leading-none tracking-[-0.04em]">
                  {{ stat.value }}
                </strong>

                <span class="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-paper/45">
                  {{ stat.label }}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div
            ref="cardsRef"
            class="flex flex-col gap-5"
        >
          <button
              v-for="item in stackItems"
              :key="item.id"
              type="button"
              class="group relative overflow-hidden rounded-[1.4rem] border bg-surface-stack text-left shadow-[0_28px_80px_var(--fx-shadow-ink-card)] transition hover:-translate-y-1"
              :class="item.accent === 'lime'
              ? 'border-accent/75 hover:shadow-[8px_8px_0_var(--color-accent)]'
              : 'border-secondary/75 hover:shadow-[8px_8px_0_var(--color-secondary)]'"
          >
            <div class="relative aspect-[45/13] w-full overflow-hidden">
              <ClientOnly>
                <iframe
                    v-if="isClient"
                    :src="getWistiaEmbedUrl(item.wistiaId)"
                    :title="item.title"
                    class="pointer-events-none absolute inset-0 h-full w-full scale-[1.02]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                />

                <template #fallback>
                  <div class="absolute inset-0 bg-canvas-stack" />
                </template>
              </ClientOnly>

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas-stack/72 via-canvas-stack/28 to-canvas-stack/8 transition duration-500 sm:from-canvas-stack/45 sm:via-canvas-stack/12 sm:to-transparent sm:group-hover:from-canvas-stack/92 sm:group-hover:via-canvas-stack/48 sm:group-hover:to-canvas-stack/12" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas-stack/82 via-transparent to-canvas-stack/12 transition duration-500 sm:from-canvas-stack/42 sm:group-hover:from-canvas-stack/88" />

              <div class="pointer-events-none absolute inset-x-0 bottom-0 p-3 opacity-100 transition duration-500 sm:translate-y-5 sm:p-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 lg:p-5">
                <div class="grid gap-2 sm:gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p
                        class="mb-1 text-[0.46rem] font-black uppercase tracking-[0.18em] sm:text-[0.58rem] sm:tracking-[0.22em]"
                        :class="item.accent === 'lime'
                        ? 'text-accent'
                        : 'text-secondary'"
                    >
                      {{ item.eyebrow }}
                    </p>

                    <h3 class="text-[clamp(0.95rem,6vw,1.4rem)] font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-[clamp(1.35rem,3vw,2.6rem)] sm:tracking-[-0.075em]">
                      {{ item.title }}
                    </h3>

                    <p class="mt-1 hidden max-w-xl text-[0.72rem] leading-4 text-paper/68 md:line-clamp-1 md:block md:text-[0.82rem] md:leading-5 lg:max-w-2xl lg:text-sm">
                      {{ item.description }}
                    </p>
                  </div>

                  <span
                      class="inline-flex w-fit rounded-none border px-2 py-1 text-[0.46rem] font-black uppercase tracking-[0.12em] sm:px-3 sm:py-2 sm:text-[0.58rem] sm:tracking-[0.16em] lg:px-4 lg:py-2.5 lg:text-[0.66rem]"
                      :class="item.accent === 'lime'
                      ? 'border-accent/55 bg-accent/10 text-accent'
                      : 'border-secondary/55 bg-secondary/10 text-secondary'"
                  >
                    {{ item.metric }}
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
