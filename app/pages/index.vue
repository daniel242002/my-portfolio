<template>
  <div>
    <section id="home" class="scroll-mt-24">
      <HomeSection />
    </section>
    <section id="about" class="scroll-mt-24">
      <AboutSection />
    </section>
    <section id="projects" class="scroll-mt-12">
      <ProjectsSection />
    </section>
    <section id="contact" class="scroll-mt-12">
      <ContactSection />
    </section>
    <CvSection />
  </div>
</template>

<script setup>
import HomeSection from "@/components/Sections/HomeSection.vue";
import AboutSection from "@/components/Sections/AboutSection.vue";
import ProjectsSection from "@/components/Sections/ProjectsSection.vue";
import CvSection from "@/components/Sections/CvSection.vue";
import ContactSection from "@/components/Sections/ContactSection.vue";
</script>
