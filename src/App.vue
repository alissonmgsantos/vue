<template>
   <div>
 <my-header :title="title" :description="description"></my-header>
     <div class="container-fluid">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">website</th>
      <th scope="col">Company</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.website }}</td>
      <td>{{ user.company.name }}</td>
      <td>{{ user.address.city }}</td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
import HeaderVue from "./components/shared/Header.vue";

export default {
  components: {
    "my-header": HeaderVue
  },
  data() {
    return {
      title: "Learning Vue.js",
      description: "https://jsonplaceholder.typicode.com/users",
      users: []
    };
  },

  created() {
    let promise = this.$http.get("https://jsonplaceholder.typicode.com/users");
    promise
      .then(res => res.json())
      .then(users => (this.users = users), err => console.log(err));
  }
};
</script>

<style>
</style>
