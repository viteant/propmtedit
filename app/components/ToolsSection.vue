<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useToolCarousel } from '~/composables/useToolCarousel'
import ToolsCarousel from '~/components/ToolsCarousel.vue'

const sectionRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const chipsRef = ref<HTMLElement | null>(null)
const carouselWrapRef = ref<HTMLElement | null>(null)
const carouselRef = ref<HTMLElement | null>(null)

const {
  categories,
  activeCategory,
  filteredTools,
  selectCategory,
  scrollCarousel,
} = useToolCarousel({
  carouselRef,
})

const categoryIcons = {
  image: 'lucide:image',
  video: 'lucide:video',
  voice: 'lucide:mic-2',
} as const

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value || !contentRef.value) return

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    gsap.fromTo(
        contentRef.value,
        {
          y: 130,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 82%',
            end: 'top 38%',
            scrub: 1,
          },
        },
    )

    gsap.fromTo(
        titleRef.value,
        {
          y: 70,
          opacity: 0,
          rotate: -1.5,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 74%',
            end: 'top 48%',
            scrub: 1,
          },
        },
    )

    gsap.fromTo(
        textRef.value,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 68%',
            end: 'top 42%',
            scrub: 1,
          },
        },
    )

    gsap.fromTo(
        chipsRef.value?.children ?? [],
        {
          y: 34,
          opacity: 0,
          rotate: -4,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 64%',
            end: 'top 38%',
            scrub: 1,
          },
        },
    )

    gsap.fromTo(
        carouselWrapRef.value,
        {
          y: 100,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 58%',
            end: 'top 24%',
            scrub: 1.15,
          },
        },
    )

    gsap.to(bgRef.value, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    mm.add('(min-width: 1024px)', () => {
      gsap.to('[data-tools-arc]', {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('[data-tools-sweep]', {
        xPercent: -10,
        yPercent: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('[data-tools-panel]', {
        y: -22,
        rotate: 4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    mm.add('(max-width: 1023px)', () => {
      gsap.to('[data-tools-sweep]', {
        xPercent: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    return () => {
      mm.revert()
    }
  }, sectionRef.value)

  onBeforeUnmount(() => {
    ctx.revert()
  })
})
</script>

<template>
  <section
      id="tools"
      ref="sectionRef"
      class="relative isolate z-30 min-h-screen min-w-full w-full overflow-hidden bg-canvas-lab px-4 pb-24 pt-24 text-paper sm:px-6 lg:mt-[280svh] lg:px-10 lg:pb-28 lg:pt-28"
  >
    <div
        ref="bgRef"
        class="pointer-events-none absolute inset-0 -z-30 opacity-[0.12]
      [background-image:linear-gradient(var(--fx-grid-paper)_1px,transparent_1px),linear-gradient(90deg,var(--fx-grid-paper)_1px,transparent_1px)]
      [background-size:54px_54px]"
    />

    <div
        class="pointer-events-none absolute inset-y-0 left-0 -z-20 w-10 bg-[repeating-linear-gradient(180deg,var(--color-accent)_0_22px,var(--color-ink)_22px_44px)]"
    />

    <div
        class="pointer-events-none absolute right-[3%] top-[6%] -z-20 text-[clamp(5rem,18vw,13rem)] font-black uppercase leading-none tracking-[-0.12em] text-paper/[0.04]"
    >
      lab
    </div>

    <div
        class="pointer-events-none absolute left-[14%] top-[18%] -z-20 h-[20rem] w-[20rem] rounded-full border border-paper/8"
    />

    <div
        class="pointer-events-none absolute left-[18%] top-[22%] -z-20 h-[12rem] w-[12rem] rounded-full border border-dashed border-secondary/18"
    />

    <div
        data-tools-arc
        class="pointer-events-none absolute left-[8%] top-[14%] -z-20 h-[18rem] w-[18rem] rounded-full border border-paper/8 sm:h-[24rem] sm:w-[24rem]"
    />

    <div
        data-tools-sweep
        class="pointer-events-none absolute right-[-8%] top-[24%] -z-20 h-[14rem] w-[70vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-secondary/15 to-transparent blur-[80px]"
    />

    <div
        data-tools-panel
        class="pointer-events-none absolute bottom-[10%] left-[18%] -z-10 hidden h-[14rem] w-[20rem] rotate-[10deg] rounded-[2rem] border border-paper/8 bg-paper/[0.025] lg:block"
    />

    <div
        class="pointer-events-none absolute bottom-[8%] right-[10%] -z-10 hidden h-6 w-[18rem] bg-[repeating-linear-gradient(90deg,var(--color-paper)_0_18px,transparent_18px_36px)] opacity-25 lg:block"
    />

    <div
        class="pointer-events-none absolute -left-60 top-20 -z-20 h-[34rem] w-[34rem] rounded-full bg-secondary/20 blur-[140px]"
    />

    <div
        class="pointer-events-none absolute -right-60 bottom-0 -z-20 h-[40rem] w-[40rem] rounded-full bg-primary/25 blur-[150px]"
    />

    <div
        ref="contentRef"
        class="mx-auto flex min-h-[calc(100vh-12rem)] max-w-[1500px] flex-col justify-center"
    >
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <h2
              ref="titleRef"
              class="max-w-2xl text-[clamp(2.4rem,4vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]"
          >
            Choose your creative tool.
          </h2>

          <p
              ref="textRef"
              class="mt-5 max-w-xl text-base leading-7 text-paper/62 md:text-lg"
          >
            Pick the type of asset you want to create and explore workflows powered by the best AI models in one place.
          </p>
        </div>

        <div
            ref="chipsRef"
            class="flex gap-3 overflow-x-auto pb-2 lg:justify-end"
        >
          <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              class="group inline-flex shrink-0 items-center gap-3 rounded-xl border px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition"
              :class="activeCategory === category.id
              ? 'border-accent bg-accent text-ink shadow-[7px_7px_0_var(--color-primary)]'
              : 'border-primary/80 bg-canvas-lab/70 text-paper/70 hover:border-secondary hover:text-paper'"
              @click="selectCategory(category.id)"
          >
            <span
                class="grid size-6 place-items-center rounded-md border"
                :class="activeCategory === category.id
                ? 'border-ink/25'
                : 'border-paper/25'"
            >
              <NuxtIcon
                  :name="categoryIcons[category.id]"
                  class="text-base"
              />
            </span>

            {{ category.label }}
          </button>
        </div>
      </div>

      <div
          ref="carouselWrapRef"
          class="mt-14 lg:mt-20"
      >
        <ToolsCarousel
            v-model:carousel-ref="carouselRef"
            :tools="filteredTools"
            @prev="scrollCarousel('prev')"
            @next="scrollCarousel('next')"
        />
      </div>
    </div>
  </section>
</template>
