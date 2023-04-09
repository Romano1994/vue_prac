<template >
    <div >
        <img :src="roomDtl.image" class="room-img" @click="send()">
        <h4>{{ roomDtl.title }}</h4>
        <p>{{ roomDtl.price }}</p>
    </div>
</template>
<script>
export default {
    name : 'RoomCard',
    props: {
        roomDtl : Object,
        clickedRoom : Number,
    },
    methods: {
       send(){
        this.$emit('openPopup', this.roomDtl.id )
       } 
    }
}
</script>
<style lang="">
    
</style>