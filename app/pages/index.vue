<template>
  <div>
    <section id="home" class="scroll-mt-24" aria-labelledby="home">
      <HomeSection />
    </section>
    <section id="about" class="scroll-mt-24" aria-labelledby="about">
      <AboutSection />
    </section>
    <section id="projects" class="scroll-mt-12" aria-labelledby="projects">
      <ProjectsSection />
    </section>
    <section id="contact" class="scroll-mt-12" aria-labelledby="contact">
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
