<script setup lang="ts">
import { usePricingSection } from '~/composables/usePricingSection'

const sectionRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

const {
  plans,
  paymentMethods,
  init,
  destroy,
} = usePricingSection({
  sectionRef,
  bgRef,
  introRef,
  cardsRef,
  footerRef,
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
      id="pricing"
      ref="sectionRef"
      class="relative isolate min-w-full w-full overflow-hidden bg-canvas-pricing px-4 pb-20 pt-14 text-paper sm:px-6 lg:px-10 lg:pb-24 lg:pt-18"
  >
    <div
        class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-8 bg-[repeating-linear-gradient(90deg,var(--color-accent)_0_18px,var(--color-ink)_18px_36px)] opacity-70"
    />

    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute left-[6%] top-[10%] -z-20 text-[clamp(4rem,16vw,12rem)] font-black uppercase leading-none tracking-[-0.12em] text-paper/[0.04]"
    >
      39
    </div>

    <div
        class="pointer-events-none absolute right-[5%] top-[16%] -z-20 hidden h-[18rem] w-[12rem] rotate-[8deg] border border-paper/10 bg-paper/[0.02] lg:block"
    />

    <div
        class="pointer-events-none absolute left-[12%] bottom-[10%] -z-20 hidden h-8 w-[24rem] bg-[repeating-linear-gradient(90deg,var(--color-paper)_0_10px,transparent_10px_20px)] opacity-20 lg:block"
    />

    <div
        data-pricing-orbit
        class="pointer-events-none absolute left-1/2 top-[18%] -z-20 hidden h-[18rem] w-[18rem] -translate-x-1/2 rounded-full border border-paper/8 lg:block"
    />

    <div
        data-pricing-orbit-inner
        class="pointer-events-none absolute left-1/2 top-[18%] -z-20 hidden h-[11rem] w-[11rem] -translate-x-1/2 rounded-full border border-dashed border-accent/18 lg:block"
    />

    <div
        data-pricing-sweep
        class="pointer-events-none absolute left-[-20%] top-[34%] -z-10 h-[12rem] w-[70vw] rotate-[8deg] bg-gradient-to-r from-transparent via-paper/[0.035] to-transparent blur-3xl"
    />

    <div
        class="pointer-events-none absolute -left-44 top-0 -z-20 h-[30rem] w-[30rem] rounded-full bg-secondary/14 blur-[150px]"
    />

    <div
        class="pointer-events-none absolute -right-44 bottom-[-12rem] -z-20 h-[34rem] w-[34rem] rounded-full bg-primary/22 blur-[160px]"
    />

    <div class="mx-auto max-w-[1360px]">
      <div
          ref="introRef"
          class="mb-9 grid gap-5 lg:mb-10 lg:grid-cols-[0.75fr_1fr] lg:items-end"
      >
        <div>
          <p
              class="inline-flex w-fit items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-accent"
          >
            <NuxtIcon name="lucide:badge-percent" class="text-base" />
            Student discount
          </p>

          <h2
              class="mt-5 max-w-2xl text-[clamp(2.1rem,4.1vw,4.3rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]"
          >
            Unlock the full
            <span class="text-accent">creator stack.</span>
          </h2>
        </div>

        <p class="max-w-2xl text-sm leading-6 text-paper/62 md:text-base md:leading-7 lg:ml-auto lg:text-right">
          Choose a one-time credit pack or a monthly creator boost. Both give you access to the tools, plugins, assets, and creative workflows shown above.
        </p>
      </div>

      <div
          ref="cardsRef"
          class="grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        <article
            v-for="plan in plans"
            :key="plan.id"
            class="group relative flex min-h-[470px] flex-col overflow-hidden rounded-[1.55rem] border bg-surface-pricing/90 p-5 shadow-[8px_8px_0_var(--fx-glow-primary-heavy)] backdrop-blur-xl transition hover:-translate-y-1 sm:p-6 lg:p-7"
            :class="plan.featured
            ? 'border-accent/85 hover:shadow-[9px_9px_0_var(--color-accent)]'
            : 'border-secondary/85 hover:shadow-[9px_9px_0_var(--color-secondary)]'"
        >
          <div
              class="pointer-events-none absolute inset-0 opacity-70"
              :class="plan.featured
              ? 'bg-[radial-gradient(circle_at_85%_0%,var(--fx-glow-accent),transparent_42%)]'
              : 'bg-[radial-gradient(circle_at_85%_0%,var(--fx-glow-secondary),transparent_42%)]'"
          />

          <div
              class="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-3xl"
              :class="plan.featured ? 'bg-accent/12' : 'bg-secondary/16'"
          />

          <div class="relative z-10 flex h-full flex-col">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p
                    class="inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]"
                    :class="plan.featured
                    ? 'border-accent/60 bg-accent/10 text-accent'
                    : 'border-secondary/60 bg-secondary/10 text-secondary'"
                >
                  {{ plan.eyebrow }}
                </p>

                <h3 class="mt-4 text-[clamp(1.6rem,2.4vw,2.45rem)] font-black uppercase leading-[0.9] tracking-[-0.065em]">
                  {{ plan.title }}
                </h3>
              </div>

              <div
                  v-if="plan.featured"
                  class="rounded-lg border border-ink/15 bg-accent px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-ink shadow-[4px_4px_0_var(--color-primary)]"
              >
                Best value
              </div>
            </div>

            <div
                class="mt-5 rounded-2xl border p-5"
                :class="plan.featured
                ? 'border-accent/35 bg-accent/10'
                : 'border-secondary/35 bg-secondary/10'"
            >
              <div class="flex flex-wrap items-end gap-x-3 gap-y-1">
                <span class="text-[clamp(3.3rem,5.6vw,5.2rem)] font-black leading-none tracking-[-0.09em]">
                  {{ plan.price }}
                </span>

                <span class="pb-3 text-[11px] font-black uppercase tracking-[0.18em] text-paper/45">
                  {{ plan.period }}
                </span>
              </div>

              <p
                  class="mt-4 inline-flex rounded-lg px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em]"
                  :class="plan.featured
                  ? 'bg-accent text-ink shadow-[4px_4px_0_var(--color-primary)]'
                  : 'bg-secondary text-ink shadow-[4px_4px_0_var(--color-accent)]'"
              >
                {{ plan.value }}
              </p>
            </div>

            <p class="mt-5 min-h-[2.75rem] text-sm leading-6 text-paper/60 md:text-base md:leading-7">
              {{ plan.description }}
            </p>

            <div class="mt-5 grid gap-2 sm:grid-cols-2">
              <div
                  v-for="feature in plan.features"
                  :key="feature.id"
                  class="flex items-center gap-2 rounded-xl border border-paper/10 bg-paper/[0.035] px-3 py-2.5"
              >
                <span
                    class="grid size-6 shrink-0 place-items-center rounded-md border"
                    :class="plan.featured
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-secondary/50 bg-secondary/10 text-secondary'"
                >
                  <NuxtIcon name="lucide:check" class="text-xs" />
                </span>

                <span class="text-xs font-semibold leading-4 text-paper/72">
                  {{ feature.text }}
                </span>
              </div>
            </div>

            <button
                type="button"
                class="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-xl border px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition hover:-translate-y-1"
                :class="plan.featured
                ? 'border-accent bg-accent text-ink shadow-[5px_5px_0_var(--color-primary)] hover:shadow-[7px_7px_0_var(--color-secondary)]'
                : 'border-secondary bg-secondary text-ink shadow-[5px_5px_0_var(--color-accent)] hover:shadow-[7px_7px_0_var(--color-primary)]'"
            >
              {{ plan.cta }}
              <NuxtIcon name="lucide:arrow-up-right" class="text-base" />
            </button>
          </div>
        </article>
      </div>

      <div
          ref="footerRef"
          class="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-paper/10 bg-paper/[0.035] p-4 text-center backdrop-blur-xl md:flex-row md:text-left lg:mt-10"
      >
        <div>
          <p class="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Secure checkout
          </p>

          <p class="mt-2 text-sm leading-6 text-paper/52">
            Pay once or monthly. Monthly can be cancelled anytime.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-2 md:justify-end">
          <span
              v-for="method in paymentMethods"
              :key="method"
              class="rounded-lg border border-paper/10 bg-surface-pricing px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-paper/62"
          >
            {{ method }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
