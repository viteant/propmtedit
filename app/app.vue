<script setup lang="ts">
import SiteHero from '~/components/SiteHero.vue'
import AppNavbar from '~/components/AppNavbar.vue'
import BeforeAfterSection from '~/components/BeforeAfterSection.vue'
import ToolsSection from '~/components/ToolsSection.vue'
import CreatorStackSection from "~/components/CreatorStackSection.vue";
import TestimonialsSection from "~/components/TestimonialsSection.vue";
import FAQSection from "~/components/FAQSection.vue";
import FinalCTASection from "~/components/FinalCTASection.vue";
import SiteFooter from "~/components/SiteFooter.vue";

const siteName = 'PromptEdit'
const siteUrl = 'https://promptedit.com'
const title = 'All-in-one AI creative studio for images, video, audio, templates, and plugins'
const description = 'PromptEdit gives creators one place to generate images, videos, audio, templates, and editing assets with top AI tools using credits instead of juggling multiple subscriptions.'
const ogImage = `${siteUrl}/images/logo.png`

onMounted(() => {
  console.info(
    'Developed by: Vicente Chiriguaya https://vicentechiriguaya.com',
  )
})

useHead({
  title,
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: siteName,
            description,
            inLanguage: 'en',
          },
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/images/logo.png`,
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${siteUrl}/#software`,
            name: siteName,
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web',
            offers: [
              {
                '@type': 'Offer',
                price: '98',
                priceCurrency: 'USD',
                description: 'One-time credit pack',
              },
              {
                '@type': 'Offer',
                price: '39',
                priceCurrency: 'USD',
                description: 'Monthly creator plan',
              },
            ],
            description,
            url: siteUrl,
            publisher: {
              '@id': `${siteUrl}/#organization`,
            },
          },
          {
            '@type': 'FAQPage',
            '@id': `${siteUrl}/#faq`,
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is PromptEdit.com?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PromptEdit is an all-in-one marketplace for AI creative tools where creators can access multiple AI tools in one place and pay with credits instead of separate subscriptions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use what I create for commercial videos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Assets and creations made during an active membership are cleared for commercial projects.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I cancel anytime?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. There are no long-term contracts and users can cancel directly through the site.',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogSiteName: siteName,
  ogUrl: siteUrl,
  ogImage,
  ogImageAlt: 'PromptEdit logo',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
})
</script>

<template>
  <main class="min-h-screen min-w-full overflow-x-hidden bg-canvas">
    <AppNavbar/>
    <SiteHero/>
    <BeforeAfterSection/>
    <ToolsSection/>
    <EditingPluginSection/>
    <CreatorStackSection />
    <PricingSection/>
    <TestimonialsSection/>
    <FAQSection />
    <FinalCTASection />
    <SiteFooter />
  </main>
</template>
