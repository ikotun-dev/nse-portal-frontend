<template>

    <TopHeader/>
    <BaseHeader/>
    <LoginForm/>
     
  </template>
  
  <script>
  import TopHeader from './TopHeader.vue';
  import BaseHeader from './BaseHeader.vue';
  import LoginForm from './LoginForm.vue';
  
  export default {
    name: 'HomePage',
    components: {
      TopHeader,
      BaseHeader,
      LoginForm
    }
  }
  </script>
  