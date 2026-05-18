<script setup lang="ts">
import type { ToolItem } from '~/composables/useToolCarousel'

defineProps<{
  tools: ToolItem[]
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()

const carouselRef = defineModel<HTMLElement | null>('carouselRef')

const activeVoiceTool = ref<ToolItem | null>(null)
const isClient = ref(false)
const animationThumbs = ref<Record<string, string>>({})

const toolIcons = {
  image: 'lucide:image',
  video: 'lucide:video',
  voice: 'lucide:mic-2',
} as const

const getWistiaId = (url: string) => {
  return url.match(/wvideo=([^&]+)/)?.[1] ?? ''
}

const getWistiaEmbedUrl = (tool: ToolItem) => {
  const wistiaId = getWistiaId(tool.wistiaUrl)

  const params = new URLSearchParams({
    background: tool.category === 'voice' ? 'false' : 'true',
    autoPlay: 'true',
    muted: tool.category === 'voice' ? 'false' : 'true',
    loop: tool.category === 'voice' ? 'false' : 'true',
    playsinline: 'true',
    seo: 'false',
    videoFoam: 'true',
    playbar: tool.category === 'voice' ? 'true' : 'false',
    controlsVisibleOnLoad: tool.category === 'voice' ? 'true' : 'false',
    fullscreenButton: 'true',
    smallPlayButton: 'false',
    volumeControl: tool.category === 'voice' ? 'true' : 'false',
  })

  return `https://fast.wistia.net/embed/iframe/${wistiaId}?${params.toString()}`
}

const hasAnimation = (tool: ToolItem) => {
  return Boolean(tool.animation)
}

const shouldShowEmbed = (tool: ToolItem) => {
  return tool.category !== 'voice' && !hasAnimation(tool)
}

const getToolThumbnail = (tool: ToolItem) => {
  return animationThumbs.value[tool.id] || tool.thumbnail
}

const captureAnimationThumbnail = (tool: ToolItem, event: Event) => {
  if (!import.meta.client || animationThumbs.value[tool.id]) return

  const video = event.currentTarget as HTMLVideoElement | null

  if (!video || video.readyState < 2) return

  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth || 960
  canvas.height = video.videoHeight || 540

  const context = canvas.getContext('2d')

  if (!context) return

  try {
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    animationThumbs.value = {
      ...animationThumbs.value,
      [tool.id]: canvas.toDataURL('image/jpeg', 0.82),
    }
  } catch {
    // Ignore thumbnail extraction issues and keep the configured fallback image.
  }
}

const openVoicePopup = (tool: ToolItem) => {
  if (tool.category !== 'voice') return

  activeVoiceTool.value = tool
}

const closeVoicePopup = () => {
  activeVoiceTool.value = null
}

const handleToolClick = (tool: ToolItem) => {
  if (tool.category === 'voice') {
    openVoicePopup(tool)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeVoicePopup()
  }
}

watch(activeVoiceTool, (tool) => {
  if (typeof document === 'undefined') return

  document.body.style.overflow = tool ? 'hidden' : ''
})

onMounted(() => {
  isClient.value = true
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)

  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="relative">
    <button
        type="button"
        aria-label="Previous tools"
        class="absolute left-0 top-1/2 z-20 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-secondary/70 bg-canvas/90 text-paper shadow-[0_0_45px_var(--fx-glow-secondary-strong)] backdrop-blur-xl transition hover:bg-primary lg:grid"
        @click="emit('prev')"
    >
      <NuxtIcon name="lucide:chevron-left" class="text-3xl" />
    </button>

    <div
        ref="carouselRef"
        class="flex snap-x gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <button
          v-for="tool in tools"
          :key="tool.id"
          type="button"
          data-carousel-card
          class="group relative aspect-video shrink-0 snap-start overflow-hidden rounded-[1.45rem] border border-primary/85 bg-surface text-left shadow-[0_30px_90px_var(--fx-shadow-ink-panel)] transition hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_var(--color-secondary)]
        w-full
        md:w-[calc((100%-1.25rem)/2)]
        xl:w-[calc((100%-3.75rem)/4)]"
          @click="handleToolClick(tool)"
      >
        <ClientOnly v-if="hasAnimation(tool)">
          <video
              v-if="isClient"
              :poster="getToolThumbnail(tool)"
              class="absolute inset-0 h-full w-full object-cover"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              @loadeddata="captureAnimationThumbnail(tool, $event)"
          >
            <source :src="tool.animation" type="video/webm">
          </video>

          <template #fallback>
            <img
                :src="getToolThumbnail(tool)"
                :alt="tool.title"
                class="absolute inset-0 h-full w-full object-cover"
                draggable="false"
            >
          </template>
        </ClientOnly>

        <ClientOnly v-else-if="shouldShowEmbed(tool)">
          <iframe
              v-if="isClient"
              :src="getWistiaEmbedUrl(tool)"
              :title="tool.title"
              class="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
          />

          <template #fallback>
            <img
                :src="getToolThumbnail(tool)"
                :alt="tool.title"
                class="absolute inset-0 h-full w-full object-cover"
                draggable="false"
            >
          </template>
        </ClientOnly>

        <img
            v-if="!shouldShowEmbed(tool) && !hasAnimation(tool)"
            :src="getToolThumbnail(tool)"
            :alt="tool.title"
            class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            draggable="false"
        >

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent" />

        <div
            class="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-canvas/72 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-paper shadow-[4px_4px_0_var(--fx-glow-secondary-heavy)] backdrop-blur-xl"
        >
          <span class="grid size-6 place-items-center rounded-md border border-accent/60 text-accent">
            <NuxtIcon :name="toolIcons[tool.category]" class="text-base" />
          </span>

          {{ tool.label }}
        </div>

        <div
            v-if="tool.category === 'voice'"
            class="pointer-events-none absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-paper/30 bg-ink/42 text-paper backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-primary/80"
        >
          <NuxtIcon name="lucide:play" class="text-2xl" />
        </div>

        <div class="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
          <div class="flex items-end justify-between gap-4">
            <h3 class="text-[clamp(1.25rem,1.6vw,1.75rem)] font-black leading-none tracking-[-0.055em] text-paper">
              {{ tool.title }}
            </h3>

            <NuxtIcon
                :name="tool.category === 'voice' ? 'lucide:play-circle' : 'lucide:sparkles'"
                class="text-3xl text-accent transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </button>
    </div>

    <button
        type="button"
        aria-label="Next tools"
        class="absolute right-0 top-1/2 z-20 hidden size-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-secondary/70 bg-canvas/90 text-paper shadow-[0_0_45px_var(--fx-glow-secondary-strong)] backdrop-blur-xl transition hover:bg-primary lg:grid"
        @click="emit('next')"
    >
      <NuxtIcon name="lucide:chevron-right" class="text-3xl" />
    </button>

    <Teleport to="body">
      <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div
            v-if="activeVoiceTool"
            class="fixed inset-0 z-[200] grid place-items-center bg-canvas/85 px-4 py-8 backdrop-blur-xl"
            @click.self="closeVoicePopup"
        >
          <Transition
              appear
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="translate-y-10 scale-95 opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="translate-y-0 scale-100 opacity-100"
              leave-to-class="translate-y-8 scale-95 opacity-0"
          >
            <div
                class="relative w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-secondary/80 bg-canvas shadow-[12px_12px_0_var(--color-primary)]"
            >
              <div class="flex items-center justify-between gap-4 border-b border-paper/10 px-5 py-4">
                <div>
                  <p class="text-xs font-black uppercase tracking-[0.22em] text-accent">
                    Voice preview
                  </p>

                  <h3 class="mt-1 text-2xl font-black tracking-[-0.04em] text-paper">
                    {{ activeVoiceTool.title }}
                  </h3>
                </div>

                <button
                    type="button"
                    aria-label="Close voice preview"
                    class="grid size-11 shrink-0 place-items-center rounded-xl border border-paper/15 bg-paper/5 text-paper transition hover:border-accent hover:bg-accent hover:text-ink"
                    @click="closeVoicePopup"
                >
                  <NuxtIcon name="lucide:x" class="text-2xl" />
                </button>
              </div>

              <div class="relative aspect-video bg-ink">
                <iframe
                    :src="getWistiaEmbedUrl(activeVoiceTool)"
                    :title="activeVoiceTool.title"
                    class="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                />
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
