<template>
  <div class="p-8 space-y-6">
    <h2 class="text-4xl text-center md:text-5xl font-bold mb-8">Proyectos</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(project, index) in projects" :key="project.index">
        <UCard>
          <template #header>
            <h3 class="text-2xl font-bold">{{ project.name }}</h3>
          </template>
          <div>
            
          </div>
          <p>{{ project.description }}</p>

          <template #footer>
            <UButton :disabled="!project.available" class="mt-4 cursor-pointer" :color="project.available ? 'success' : 'neutral'" block
              >Ver proyecto</UButton
            >
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "Sport Partners",
    description:
      "Una plataforma para aprender sobre tu deporte favorito, buscar eventos y motivarte con contenido multimedia.",
    url: "https://example.com/project1",
    img: "@/images/projects/sport-partners.png",
    available: true,
  },
  {
    name: "Sistema Saas",
    description:
      "Sistema de gestión para multiples empresas. Administrar clientes, empleados, facturación y mucho más.",
    url: "https://example.com/project2",
    img: "@/images/projects/saas.png",
    available: false,
  },
  {
    name: "Tienda de pastelería",
    description:
      "Una tienda de pastelería con carrito de compras, pasarela de pago y panel de administración.",
    url: "https://example.com/project3",
    img: "@/images/projects/pasteleria.png",
    available: false,
  },
];
</script>
