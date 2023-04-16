<template>
  <div v-for="(a, i) in Contents" :key="i">
    <h5 @click="$router.push('/detail/'+i)">
      {{ Contents[i].title }}
    </h5>
    <p>{{ Contents[i].date }}</p>
  </div>
</template>
<script>
export default {
  name: "contentsList",
  props: {
    Contents: Array,
  },
  methods: {},
};
</script>
<style lang=""></style>
