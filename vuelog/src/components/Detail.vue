<template>
    <div>
        <h2>{{ Contents[$route.params.id].title }}</h2>
        <h5>{{ Contents[$route.params.id].content }}</h5>
    </div>
</template>
<script>
export default {
    name : 'ContentDetail',
    data() {
        return {
        }
    },
    props: {
        Contents : Array,
    }
}
</script>
<style lang="">
    
</style>