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
