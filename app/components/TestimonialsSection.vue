<script setup lang="ts">
import { useTestimonialsSection } from '~/composables/useTestimonialsSection'

const sectionRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const testimonialsRef = ref<HTMLElement | null>(null)
const fitRef = ref<HTMLElement | null>(null)
const guaranteeRef = ref<HTMLElement | null>(null)
const sealRef = ref<HTMLElement | null>(null)

const {
  testimonials,
  fitPoints,
  init,
  destroy,
} = useTestimonialsSection({
  sectionRef,
  bgRef,
  introRef,
  testimonialsRef,
  fitRef,
  guaranteeRef,
  sealRef,
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
      id="testimonials"
      ref="sectionRef"
      class="relative isolate overflow-hidden bg-canvas px-4 py-20 text-paper sm:px-6 lg:px-10 lg:py-28"
  >
    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        data-testimonials-aurora
        class="pointer-events-none absolute left-[-14%] top-[12%] -z-20 h-[18rem] w-[78vw] rotate-[-8deg] bg-gradient-to-r from-secondary/0 via-secondary/18 to-accent/0 blur-[90px] sm:h-[24rem]"
    />

    <div
        data-testimonials-spot
        class="pointer-events-none absolute right-[8%] top-[8%] -z-20 h-[18rem] w-[18rem] rounded-full border border-paper/8 bg-paper/[0.02] blur-[2px]"
    />

    <div
        data-testimonials-line
        class="pointer-events-none absolute bottom-[18%] right-[-5%] -z-10 h-px w-[42vw] bg-gradient-to-r from-transparent via-paper/35 to-transparent"
    />

    <div
        class="pointer-events-none absolute -left-44 top-20 -z-20 h-[34rem] w-[34rem] rounded-full bg-secondary/15 blur-[150px]"
    />

    <div
        class="pointer-events-none absolute -right-44 bottom-[-12rem] -z-20 h-[38rem] w-[38rem] rounded-full bg-primary/24 blur-[160px]"
    />

    <div class="mx-auto max-w-[1400px]">
      <div
          ref="introRef"
          class="mx-auto max-w-5xl text-center"
      >
        <p
            class="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-accent"
        >
          <NuxtIcon name="lucide:message-square-heart" class="text-base" />
          Creator proof
        </p>

        <h2
            class="mx-auto mt-5 max-w-5xl text-[clamp(2.2rem,5vw,5.4rem)] font-black uppercase leading-[0.88] tracking-[-0.08em]"
        >
          Real creators.
          <span class="text-primary">Real saved time.</span>
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-sm leading-6 text-paper/62 md:text-base md:leading-7">
          The whole point of the creator stack is simple: less searching, less rebuilding, more finished content.
        </p>
      </div>

      <div
          ref="testimonialsRef"
          class="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3"
      >
        <article
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="group relative overflow-hidden rounded-[1.5rem] border bg-surface/90 p-5 shadow-[7px_7px_0_var(--fx-glow-primary-bold)] backdrop-blur-xl transition hover:-translate-y-1 sm:p-6"
            :class="testimonial.accent === 'lime'
            ? 'border-accent/70 hover:shadow-[8px_8px_0_var(--color-accent)]'
            : 'border-secondary/70 hover:shadow-[8px_8px_0_var(--color-secondary)]'"
        >
          <div
              class="pointer-events-none absolute inset-0 opacity-70"
              :class="testimonial.accent === 'lime'
              ? 'bg-[radial-gradient(circle_at_80%_0%,var(--fx-glow-accent-soft),transparent_42%)]'
              : 'bg-[radial-gradient(circle_at_80%_0%,var(--fx-glow-secondary-soft),transparent_42%)]'"
          />

          <div class="relative z-10">
            <div class="flex items-center justify-between gap-4">
              <div
                  class="relative size-16 overflow-hidden rounded-2xl border bg-canvas shadow-[4px_4px_0_var(--fx-glow-primary-bold)]"
                  :class="testimonial.accent === 'lime'
    ? 'border-accent/70'
    : 'border-secondary/70'"
              >
                <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    loading="lazy"
                >

                <div
                    class="pointer-events-none absolute inset-0 mix-blend-screen opacity-25"
                    :class="testimonial.accent === 'lime'
      ? 'bg-accent'
      : 'bg-secondary'"
                />
              </div>

              <NuxtIcon
                  name="lucide:quote"
                  class="text-4xl opacity-45"
                  :class="testimonial.accent === 'lime'
                  ? 'text-accent'
                  : 'text-secondary'"
              />
            </div>

            <p class="mt-7 min-h-[10rem] text-[clamp(1.25rem,2vw,1.8rem)] font-black leading-[1.08] tracking-[-0.05em] text-paper">
              “{{ testimonial.quote }}”
            </p>

            <div class="mt-7 border-t border-paper/10 pt-4">
              <p class="text-sm font-black uppercase tracking-[0.16em] text-paper">
                {{ testimonial.name }}
              </p>

              <p class="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-paper/42">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div
            ref="fitRef"
            class="relative overflow-hidden rounded-[1.6rem] border border-secondary/55 bg-paper/[0.035] p-5 shadow-[8px_8px_0_var(--fx-glow-secondary-bold)] backdrop-blur-xl sm:p-6 lg:p-7"
        >
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,var(--fx-glow-secondary),transparent_45%)]" />

          <div class="relative z-10">
            <p class="text-xs font-black uppercase tracking-[0.24em] text-secondary">
              A subscription is for you if
            </p>

            <h3 class="mt-4 text-[clamp(1.8rem,3.4vw,3.8rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]">
              You want more output.
              <span class="text-accent">Less friction.</span>
            </h3>

            <div class="mt-7 grid gap-3">
              <div
                  v-for="point in fitPoints"
                  :key="point.id"
                  class="flex gap-3 rounded-xl border border-paper/10 bg-canvas/60 px-4 py-3"
              >
                <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border border-accent/45 bg-accent/10 text-accent">
                  <NuxtIcon name="lucide:check" class="text-xs" />
                </span>

                <p class="text-sm leading-6 text-paper/68">
                  {{ point.text }}
                </p>
              </div>
            </div>

            <div class="mt-7 rounded-2xl border border-accent/45 bg-accent/10 p-5">
              <p class="text-center text-[clamp(1.5rem,3vw,3rem)] font-black uppercase italic leading-[0.95] tracking-[-0.05em] text-paper">
                Unlimited downloads
                <br>
                <span class="text-accent">& unlimited usage</span>
              </p>
            </div>
          </div>
        </div>

        <div
            ref="guaranteeRef"
            class="relative overflow-hidden rounded-[1.6rem] border border-accent/70 bg-surface/90 p-5 shadow-[8px_8px_0_var(--color-accent)] backdrop-blur-xl sm:p-6 lg:p-7"
        >
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--fx-glow-accent),transparent_45%)]" />

          <div class="relative z-10 grid gap-7 md:grid-cols-[0.38fr_0.62fr] md:items-center">
            <div class="flex justify-center">
              <div
                  ref="sealRef"
                  class="relative grid size-44 place-items-center rounded-full border-2 border-accent bg-canvas shadow-[0_0_55px_var(--fx-glow-accent-strong)] sm:size-52"
              >
                <div class="absolute inset-3 rounded-full border border-accent/35" />
                <div class="absolute inset-7 rounded-full border border-dashed border-accent/50" />

                <div class="text-center">
                  <p class="text-5xl font-black leading-none tracking-[-0.08em] text-accent">
                    100%
                  </p>

                  <p class="mt-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-paper">
                    Satisfaction
                  </p>

                  <p class="mt-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-secondary">
                    Guarantee
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p class="text-xs font-black uppercase tracking-[0.24em] text-accent">
                Risk-free access
              </p>

              <h3 class="mt-4 text-[clamp(1.8rem,3.4vw,3.8rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]">
                Backed by a 30-day
                <span class="text-accent">money-back guarantee.</span>
              </h3>

              <p class="mt-5 text-sm leading-6 text-paper/62 md:text-base md:leading-7">
                Cancel anytime. Within 30 days of purchase, you can get a full refund on unused credits. No catch, no weird billing maze, no ritual sacrifice to unsubscribe.
              </p>

              <p class="mt-4 text-xs leading-5 text-paper/38">
                Once AI credits are spent, they are non-refundable.
              </p>

              <button
                  type="button"
                  class="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-accent bg-accent px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-[6px_6px_0_var(--color-primary)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-secondary)] sm:w-auto"
              >
                Get started today
                <NuxtIcon name="lucide:arrow-up-right" class="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
