<script setup lang="ts">
import { useFAQSection } from '~/composables/useFAQSection'

const sectionRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

const {
  faqs,
  activeFAQ,
  toggleFAQ,
  init,
  destroy,
} = useFAQSection({
  sectionRef,
  bgRef,
  introRef,
  listRef,
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
      id="faq"
      ref="sectionRef"
      class="relative isolate min-w-full w-full overflow-hidden bg-canvas-doc px-4 py-16 text-paper sm:px-6 lg:px-10 lg:py-20"
  >
    <div
        class="pointer-events-none absolute left-0 top-0 -z-10 h-full w-8 bg-[repeating-linear-gradient(180deg,var(--color-paper)_0_14px,transparent_14px_28px)] opacity-25"
    />

    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.08]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute right-[5%] top-[8%] -z-20 text-[clamp(4rem,16vw,10rem)] font-black uppercase leading-none tracking-[-0.12em] text-paper/[0.04]"
    >
      faq
    </div>

    <div
        class="pointer-events-none absolute left-[10%] top-[14%] -z-20 hidden h-[18rem] w-[11rem] rotate-[-6deg] border border-paper/10 bg-paper/[0.02] lg:block"
    />

    <div
        data-faq-ribbon
        class="pointer-events-none absolute left-[-10%] top-[22%] -z-20 h-[12rem] w-[70vw] rotate-[-10deg] bg-gradient-to-r from-transparent via-paper/[0.035] to-transparent blur-[80px]"
    />

    <div
        data-faq-glow
        class="pointer-events-none absolute right-[12%] top-[16%] -z-20 h-[12rem] w-[12rem] rounded-full border border-accent/12 bg-accent/6 blur-[12px] sm:h-[16rem] sm:w-[16rem]"
    />

    <div
        class="pointer-events-none absolute -right-40 top-10 -z-20 h-[28rem] w-[28rem] rounded-full bg-primary/16 blur-[150px]"
    />

    <div class="mx-auto max-w-[1180px]">
      <div
          ref="introRef"
          class="mb-8 grid gap-4 border-b border-paper/10 pb-6 lg:grid-cols-[0.65fr_1fr] lg:items-end"
      >
        <div>
          <p
              class="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-accent"
          >
            <NuxtIcon name="lucide:circle-help" class="text-sm" />
            FAQ
          </p>

          <h2
              class="mt-4 max-w-2xl text-[clamp(2rem,3.6vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]"
          >
            Quick answers.
          </h2>
        </div>

        <p class="max-w-2xl text-sm leading-6 text-paper/52 lg:ml-auto lg:text-right">
          Clear answers about credits, templates, downloads, licensing, cancellation, and compatibility.
        </p>
      </div>

      <div
          ref="listRef"
          class="divide-y divide-paper/10 rounded-[1.25rem] border border-paper/10 bg-paper/[0.025] backdrop-blur-xl"
      >
        <article
            v-for="faq in faqs"
            :key="faq.id"
            class="transition-colors duration-300 hover:bg-paper/[0.025]"
        >
          <button
              type="button"
              class="flex w-full items-center justify-between gap-5 px-4 py-4 text-left sm:px-5 lg:px-6"
              @click="toggleFAQ(faq.id)"
          >
            <span class="text-sm font-black uppercase leading-tight tracking-[0.02em] text-paper md:text-base">
              {{ faq.question }}
            </span>

            <span
                class="grid size-8 shrink-0 place-items-center rounded-lg border border-secondary/35 bg-surface-doc text-secondary transition duration-300 ease-out"
                :class="activeFAQ === faq.id ? 'rotate-45 border-accent/60 text-accent' : 'rotate-0'"
            >
              <NuxtIcon name="lucide:plus" class="text-lg" />
            </span>
          </button>

          <div
              class="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              :class="activeFAQ === faq.id
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="min-h-0 overflow-hidden">
              <div class="px-4 pb-5 sm:px-5 lg:px-6">
                <div class="max-w-4xl border-l border-accent/45 pl-4">
                  <p
                      v-for="paragraph in faq.answer"
                      :key="paragraph"
                      class="text-sm leading-6 text-paper/58 md:text-[0.95rem] md:leading-7 [&+&]:mt-3"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
