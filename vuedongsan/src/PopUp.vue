<template >
 <div class="black-bg" v-if="isPopupOpen" >
    <div class="white-bg">
      <img :src="roomDtl[clickedRoom].image" alt="" class="room-img">
      <h4>{{ roomDtl[clickedRoom].title }}</h4>
      <p>{{ roomDtl[clickedRoom].content }}</p>
      <!-- <input @change="month = $event.target.value"> -->
      <input v-model.lazy="month">
      <p>{{month}} 개월 선택함 : {{ roomDtl[clickedRoom].price * month }}</p>
      <button @click="close()">닫기</button>
    </div>
  </div>
</template>
<script>

export default {
    name : 'PopUp',
    data() {
      return{
        month: 1,
      }
    },
    watch : {
      month(value, before){
        var numExp = /^[0-9]*$/;
        if(value >= 13) {
          alert('12개월 까지만 입력하셈;;');
          this.month = before;
        } else if(!numExp.test(value)) {
          alert('숫자만 입력하셈;;');
          this.month = before;
        } else if (value == 2){
          alert('2달은 안함 ㅈㅅ')
          this.month = before;
        }
      }
    },
    props: {
        roomDtl : Array,
        clickedRoom : Number,
        isPopupOpen : Boolean,
    },
    methods: {
      close() {
        this.$emit('closePopup')
      }
    }
}
</script>
<style>
    
</style>