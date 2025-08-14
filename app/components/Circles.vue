<template>
  <div>
    <div v-for="circle in circles" :key="circle.class" :class="circle.class"></div>
  </div>
</template>

<script setup> 
const circles = [
    {
        class: 'absolute -z-10 w-40 h-40 bg-slate-400/50 dark:bg-[#1a2439] opacity-40 rounded-full top-20 left-10'
    },
    {
        class: 'absolute -z-10 w-32 h-32 bg-slate-400/50 dark:bg-[#1a2439] opacity-30 rounded-full top-[754px] right-20'
    },
    {
        class: 'absolute -z-10 w-24 h-24 bg-slate-400/50 dark:bg-[#1a2439] opacity-20 rounded-full bottom-12 md:bottom-32 left-2/4'
    },
    {
        class: 'absolute -z-10 w-16 h-16 bg-slate-400/50 dark:bg-[#1a2439] opacity-30 rounded-full top-[1500px] right-10'
    },
    {
        class: 'absolute -z-10 w-52 h-52 bg-slate-400/50 dark:bg-[#1a2439] opacity-15 rounded-full top-[1200px] left-1/3'
    },
    {
        class: 'absolute -z-10 w-18 sm:w-28 h-18 sm:h-28 bg-slate-400/50 dark:bg-[#1a2439] opacity-25 rounded-full top-[200px] right-[15%]'
    },
    {
        class: 'absolute -z-10 w-20 h-20 bg-slate-400/50 dark:bg-[#1a2439] opacity-30 rounded-full top-[550px] left-[5%] md:top-[500px] md:left-[20%]'
    },
    {
        class: 'absolute -z-10 w-36 h-36 bg-slate-400/50 dark:bg-[#1a2439] opacity-20 rounded-full top-[850px] right-[40%]'
    },
    {
        class: 'absolute -z-10 w-14 h-14 bg-slate-400/50 dark:bg-[#1a2439] opacity-35 rounded-full top-[1200px] left-[10%]'
    },
    {
        class: 'absolute -z-10 w-40 h-40 bg-slate-400/50 dark:bg-[#1a2439] opacity-25 rounded-full top-[1600px] right-[25%]'
    },
    {
        class: 'absolute -z-10 w-18 h-18 bg-slate-400/50 dark:bg-[#1a2439] opacity-20 rounded-full top-[1900px] left-[35%]'
    },
    {
        class: 'absolute -z-10 w-44 h-44 bg-slate-400/50 dark:bg-[#1a2439] opacity-30 rounded-full top-[2100px] right-[10%]'
    },
    {
        class: 'absolute -z-10 w-22 h-22 bg-slate-400/50 dark:bg-[#1a2439] opacity-25 rounded-full top-[2300px] left-[50%]'
    },
    {
        class: 'absolute -z-10 w-38 h-38 bg-slate-400/50 dark:bg-[#1a2439] opacity-20 rounded-full top-[2500px] right-[35%]'
    },
    {
        class: 'absolute -z-10 w-16 h-16 bg-slate-400/50 dark:bg-[#1a2439] opacity-30 rounded-full top-[2700px] left-[5%]'
    },
    {
        class: 'absolute -z-10 w-24 h-24 bg-slate-400/50 dark:bg-[#1a2439] opacity-20 rounded-full top-[2900px] right-[30%]'
    }
]
</script>
