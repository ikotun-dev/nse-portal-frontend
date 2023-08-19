<template>

  <TopHeader/>
  <BaseHeader/>
  <LoginForm/>
  
</template>

<script>
import TopHeader from './components/TopHeader.vue';
import BaseHeader from './components/BaseHeader.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    BaseHeader,
    LoginForm
  }
}
</script>
