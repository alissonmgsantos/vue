<template>
   <div>
     <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">{{ title }}</a>
  <a :href="description">{{ description }}</a>
</nav>
</div>
</template>

<script>
export default {
    props: ['title', 'description']
 
};
</script>

<style scoped>
</style>
