<template>
  <!-- <div class="start" :class="{end : isPopupOpen}">
    <PopUp :roomDtl='roomDtl' :clickedRoom='clickedRoom' :isPopupOpen = 'isPopupOpen' @closePopup=" isPopupOpen = false"/>
  </div> -->
  <transition name="fade">
    <PopUp :roomDtl='roomDtl' :clickedRoom='clickedRoom' :isPopupOpen = 'isPopupOpen' @closePopup=" isPopupOpen = false"/>
  </transition>

  <div class="menu">
    <a v-for="a in menus" :key="a">{{ a }}</a>
  </div>

  <Discount v-if="showDiscount" :discountRate="discountRate"/> 

  <button @click="priceSortLow()">가격 낮은순</button>
  <button @click="sortBack()">되돌리기</button>
  <button @click="priceSortHigh">가격 높은순</button>
  <button @click="nameSort()">이름 순</button>

  <div v-for="(a, i) in roomDtl" :key="i">
    <RoomCard :roomDtl="roomDtl[i]" :clickedRoom="clickedRoom" @openPopup="isPopupOpen = true; clickedRoom = $event"/>
  </div> 

</template>

<script>
import roomDtl from './assets/post.js'
import Discount from './DiscountBanner.vue'
import PopUp from './PopUp.vue'
import RoomCard from './RoomCard.vue'

export default {
  name: 'App',
  data(){
    return {
      clickedRoom : 0,
      roomDtlOriginal : roomDtl,
      roomDtl : [...roomDtl],
      isPopupOpen : false,
      report : [0, 0, 0],
      products : ['역삼동 원룸', '천호동 원룸' ,'마포구 원룸'],
      menus : ["Home", "Shop", "About"],
      showDiscount : true,
      discountRate : 30,
    }
  },
  components: {
    Discount,
    PopUp,
    RoomCard,
  },
  methods : {
    priceSortLow() {
      this.roomDtl.sort( function(a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.roomDtl = [...this.roomDtlOriginal];
    },
    priceSortHigh() {
      this.roomDtl.sort(function(a,b){
        return b.price - a.price
      });
    },
    nameSort() {
      this.roomDtl.sort(function(a,b){
        return a.title < b.title ? -1 : a.title < b.title ? 1 : 0;
      });
      // var roomNames;
      // for(let i of this.roomDtl){
      //   roomNames[i] = this.roomDtl[i].title;
      // }
      // roomNames.sort();
    }
  },
  mounted(){
    var interval = setInterval(() => {
      this.discountRate = this.discountRate - 1;
      if(this.discountRate == 0){
        clearInterval(interval)
      }
    }, 1000);
  },
}
</script>

<style>
body{
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu{
    background-color: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
.room-img{
  width: 300px;
  margin-top: 40px;
}
.discount{
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.start{
  opacity: 0;
  transition: all 0.5s;
}
.end{
  opacity: 1;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to{
  opacity: 1;
}
</style>
