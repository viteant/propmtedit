<script setup lang="ts">
import { useBeforeAfter } from '~/composables/useBeforeAfter'

const sectionRef = ref<HTMLElement | null>(null)

const { init, destroy } = useBeforeAfter({
  sectionRef,
})

onMounted(init)
onBeforeUnmount(destroy)
</script>

<template>
  <section
      ref="sectionRef"
      class="relative isolate overflow-hidden bg-canvas text-paper pt-5"
  >
    <div
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.13]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute left-[-18rem] bottom-[-18rem] -z-20 h-[46rem] w-[46rem] rounded-full bg-secondary/20 blur-[150px]"
    />

    <div
        class="pointer-events-none absolute right-[-16rem] top-[5rem] -z-20 h-[48rem] w-[48rem] rounded-full bg-primary/30 blur-[165px]"
    />

    <div
        class="pointer-events-none absolute bottom-[-18rem] right-[16%] -z-20 h-[38rem] w-[38rem] rounded-full bg-accent/10 blur-[150px]"
    />

    <div class="hidden min-h-svh lg:block">
      <div class="mx-auto flex h-svh max-w-[1500px] flex-col px-10 py-10">
        <header class="relative z-30">
          <div class="relative h-[6.2rem] overflow-visible">
            <h2
                data-title-bad
                class="absolute left-0 top-0 whitespace-nowrap text-[clamp(3.2rem,5vw,6.2rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]"
            >
              From tool overload
            </h2>

            <h2
                data-title-good
                class="absolute left-0 top-0 whitespace-nowrap text-[clamp(3.2rem,5vw,6.2rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]"
            >
              To one bucket.
            </h2>
          </div>
        </header>

        <div class="relative z-20 flex flex-1 items-center">
          <div
              data-bad-scene
              class="absolute inset-x-0 grid grid-cols-[0.36fr_0.64fr] items-center gap-10"
          >
            <div class="flex justify-center">
              <article
                  data-bad-card
                  class="w-full max-w-[300px] rounded-[1.25rem] border-2 border-secondary bg-paper p-5 text-ink shadow-[8px_8px_0_var(--color-secondary)]"
              >
                <div class="mb-5 flex items-center justify-between gap-4">
                  <span
                      class="rounded-full border border-ink/15 bg-ink px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.18em] text-paper"
                  >
                    Problem
                  </span>

                  <div
                      class="grid size-10 place-items-center rounded-xl bg-danger text-2xl font-black text-paper shadow-[inset_0_-6px_12px_var(--fx-shadow-ink-soft)]"
                  >
                    ×
                  </div>
                </div>

                <h3 class="text-[2.45rem] font-black leading-none tracking-[-0.07em]">
                  Bad
                </h3>

                <p class="mt-2 text-lg font-black leading-none tracking-[-0.04em]">
                  Prompt<span class="text-secondary">Edit</span>
                </p>

                <div
                    class="mt-6 space-y-3 border-t border-ink/10 pt-5 text-[0.95rem] font-medium leading-tight tracking-[-0.035em]"
                >
                  <p>Individual subscriptions</p>
                  <p>Too many AI tools</p>
                  <p>Overwhelming & expensive</p>
                </div>
              </article>
            </div>

            <div class="flex justify-center">
              <div
                  data-bad-visual
                  class="relative w-full max-w-[880px]"
              >
                <img
                    src="/images/badtools.png"
                    alt="Multiple AI tools with separate subscriptions"
                    class="h-auto w-full select-none object-contain drop-shadow-[0_45px_100px_var(--fx-shadow-ink-card)]"
                    draggable="false"
                >
              </div>
            </div>
          </div>

          <div
              data-good-scene
              class="absolute inset-x-0 grid grid-cols-[0.64fr_0.36fr] items-center gap-10"
          >
            <div class="flex justify-center">
              <div
                  data-good-visual
                  class="relative w-full max-w-[880px]"
              >
                <img
                    src="/images/goodbucket.png"
                    alt="All AI tools organized inside one bucket"
                    class="h-auto w-full select-none object-contain drop-shadow-[0_45px_100px_var(--fx-shadow-ink-card)]"
                    draggable="false"
                >
              </div>
            </div>

            <div class="flex justify-center">
              <article
                  data-good-card
                  class="invisible w-full max-w-[300px] rounded-[1.25rem] border-2 border-secondary bg-paper p-5 text-ink opacity-0 shadow-[8px_8px_0_var(--color-secondary)]"
              >
                <div class="mb-5 flex items-center justify-between gap-4">
                  <span
                      class="rounded-full border border-ink/15 bg-accent px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.18em] text-ink"
                  >
                    Solution
                  </span>

                  <div
                      class="grid size-10 place-items-center rounded-xl bg-success text-2xl font-black text-paper shadow-[inset_0_-6px_12px_var(--fx-shadow-ink-soft)]"
                  >
                    ✓
                  </div>
                </div>

                <h3 class="text-[2.45rem] font-black leading-none tracking-[-0.07em]">
                  Good
                </h3>

                <p class="mt-2 text-lg font-black leading-none tracking-[-0.04em]">
                  Prompt<span class="text-secondary">Edit</span>
                </p>

                <div
                    class="mt-6 space-y-3 border-t border-ink/10 pt-5 text-[0.95rem] font-medium leading-tight tracking-[-0.035em]"
                >
                  <p>Everything in one place</p>
                  <p>Pay per use</p>
                  <p>No subscriptions required</p>
                </div>

                <div class="mt-5 grid gap-2">
                  <div
                      data-good-chip
                      class="rounded-xl border border-ink/10 bg-ink px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.15em] text-paper"
                  >
                    No monthly stack
                  </div>

                  <div
                      data-good-chip
                      class="rounded-xl border border-ink/10 bg-secondary px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.15em] text-ink"
                  >
                    Credit based
                  </div>

                  <div
                      data-good-chip
                      class="rounded-xl border border-ink/10 bg-accent px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.15em] text-ink"
                  >
                    Cleaner workflow
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto grid w-[calc(100%-28px)] max-w-3xl gap-8 py-14 lg:hidden">
      <div data-mobile-reveal>
        <p
            class="mb-4 inline-flex rounded-full border border-secondary/60 bg-secondary/10 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-secondary"
        >
          Workflow
        </p>

        <div class="grid gap-2">
          <h2
              class="text-[clamp(2.5rem,12vw,4.2rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]"
          >
            From tool overload
          </h2>

          <h2
              class="text-[clamp(2.5rem,12vw,4.2rem)] font-black uppercase leading-[0.84] tracking-[-0.075em] text-secondary"
          >
            To one bucket.
          </h2>
        </div>
      </div>

      <article
          data-mobile-reveal
          class="rounded-[1.25rem] border-2 border-secondary bg-paper p-5 text-ink shadow-[7px_7px_0_var(--color-secondary)]"
      >
        <div class="mb-5 flex items-center justify-between gap-4">
          <span
              class="rounded-full bg-ink px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-paper"
          >
            Problem
          </span>

          <div class="grid size-10 place-items-center rounded-xl bg-danger text-2xl font-black text-paper">
            ×
          </div>
        </div>

        <h3 class="text-4xl font-black leading-none tracking-[-0.07em]">
          Bad
        </h3>

        <p class="mt-2 text-xl font-black">
          Prompt<span class="text-secondary">Edit</span>
        </p>

        <div class="mt-6 space-y-2 border-t border-ink/10 pt-4 text-lg tracking-[-0.04em]">
          <p>Individual subscriptions</p>
          <p>Too many AI tools</p>
          <p>Expensive workflow</p>
        </div>
      </article>

      <div
          data-mobile-reveal
          class="rounded-[1.5rem] border border-secondary/35 bg-surface/70 p-3 shadow-[0_34px_90px_var(--fx-shadow-ink-strong)]"
      >
        <img
            src="/images/badtools.png"
            alt="Multiple AI tools with separate subscriptions"
            class="w-full object-contain"
            draggable="false"
        >
      </div>

      <div
          data-mobile-reveal
          class="rounded-[1.5rem] border border-secondary/35 bg-surface/70 p-3 shadow-[0_34px_90px_var(--fx-shadow-ink-strong)]"
      >
        <img
            src="/images/goodbucket.png"
            alt="All AI tools organized inside one bucket"
            class="w-full object-contain"
            draggable="false"
        >
      </div>

      <article
          data-mobile-reveal
          class="rounded-[1.25rem] border-2 border-secondary bg-paper p-5 text-ink shadow-[7px_7px_0_var(--color-secondary)]"
      >
        <div class="mb-5 flex items-center justify-between gap-4">
          <span
              class="rounded-full bg-accent px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-ink"
          >
            Solution
          </span>

          <div class="grid size-10 place-items-center rounded-xl bg-success text-2xl font-black text-paper">
            ✓
          </div>
        </div>

        <h3 class="text-4xl font-black leading-none tracking-[-0.07em]">
          Good
        </h3>

        <p class="mt-2 text-xl font-black">
          Prompt<span class="text-secondary">Edit</span>
        </p>

        <div class="mt-6 space-y-2 border-t border-ink/10 pt-4 text-lg tracking-[-0.04em]">
          <p>Everything in one place</p>
          <p>Pay per use</p>
          <p>No subscriptions required</p>
        </div>
      </article>
    </div>
  </section>
</template>