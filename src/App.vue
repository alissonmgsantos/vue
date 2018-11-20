<template>
   <div>
     <div algin="center">
       <p>{{ title }}</p>
     </div>
       <ul>
       <li v-for="user in users"  :key="user.id">{{ user.name }}</li>
     </ul>
   </div>
 
</template>

<script>
export default {
  data() {
    return {
      title: "Learning Vue.js",
      users: []
    };
  },

  created(){
    let promise = this.$http.get('https://jsonplaceholder.typicode.com/users');
        promise
              .then(res => res.json())
              .then(users => this.users = users, err => console.log(err));
  }
};
</script>

<style>
</style>
