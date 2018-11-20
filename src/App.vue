<template>
   <div>
     <div algin="center">
       <p>{{ title }}</p>
     </div>
       <ul>
       <li v-for="language of languages" :key="language">{{ language.name }}</li>
     </ul>
   </div>
 
</template>

<script>
export default {
  data() {
    return {
      title: "Learning Vue.js",
      languages: [
        {
          name: "C"
        },
        {
          name: "JAVA"
        },
        {
          name: "PHP"
        },
        {
          name: "C#"
        }
      ]
    };
  }
};
</script>

<style>
</style>
