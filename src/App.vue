<template>
  <div>
    <NavBarComponent />
    <BannerIntroSection />
    <AboutMeSection />
    <JobsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
  import NavBarComponent from './components/NavBar.vue'
  import BannerIntroSection from './components/BannerIntroSection.vue'
  import AboutMeSection from './components/AboutMeComponent.vue'
  import ContactSection from './components/ContactComponent.vue'
  import JobsSection from './components/JobsComponent.vue'
  import FooterSection from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    BannerIntroSection,
    JobsSection,
    NavBarComponent,
    AboutMeSection,
    ContactSection,
    FooterSection
  }
}
</script>
