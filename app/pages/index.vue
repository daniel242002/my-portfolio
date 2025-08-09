<template>
  <div>
    <section id="home" class="scroll-mt-24">
      <HomeSection />
    </section>
    <section id="about" class="scroll-mt-24">
      <AboutSection />
    </section>
    <section id="skills" class="scroll-mt-24">
      <SkillsSection />
    </section>
    <section id="projects" class="scroll-mt-24">
      <ProjectsSection />
    </section>
    <section id="cv" class="scroll-mt-24">
      <CvSection />
    </section>
    <section id="contact" class="scroll-mt-24">
      <ContactSection />
    </section>
  </div>
</template>

<script setup>
import HomeSection from "@/components/Sections/HomeSection.vue";
import AboutSection from "@/components/Sections/AboutSection.vue";
import SkillsSection from "@/components/Sections/SkillsSection.vue";
import ProjectsSection from "@/components/Sections/ProjectsSection.vue";
import CvSection from "@/components/Sections/CvSection.vue";
import ContactSection from "@/components/Sections/ContactSection.vue";
</script>
