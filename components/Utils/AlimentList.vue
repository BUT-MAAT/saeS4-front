<template>
  <div :style="{ background: backColor }" :class="{ 'overflow': overflow}" class="AlimentContainer">

    <h3 v-if="this.text.length !== 0">{{ this.text }}</h3>
    <ul :class="{ 'overflow': overflow}" v-if="aliments.length !== 0" ref='AlimentList'  @scroll="handleScroll">
      <li :style="{ background: listColor }" v-for="(result,index) in aliments" :key="index" @mouseleave="handleMouseLeave(index)" @mouseover="handleMouseOver(index)">
        {{ result }}
      </li>
    </ul>
    <h3 class="no-data" v-else>Aucune donnée disponible pour le moment</h3>
  </div>
</template>

<script>
export default {
  name: "Aliment",
  props: {
    aliments: {
      type: Array,
      required: true
    },
    overflow: {
      type: Boolean,
      default:true
    },
    text:{
      type: String,
      default: ''
    },
    id: {
      type: String,
      default:''
    },
    backColor: {
      type: String,
      default:'#3c6555'
    },
    hoverColor: {
      type: String,
      default:'#7ca16a'
    },
    listColor: {
      type: String,
      default:'#203b1b'
    },
  },
  methods: {
    handleScroll : function (event){
      // event.target.scrollTop = 0
      this.$emit("scrollAliment",event.target.scrollTop)
    },
    setScroll: function (scroll){
      let element = this.$refs.AlimentList
      element.scrollTop = scroll
    },
    handleMouseOver: function(index){
      this.$emit("AlimentOver",index)
      this.setAsHover(index,true)
    },
    setAsHover: function(index,isHover){
      if(isHover){
        this.$refs.AlimentList.children.item(index).style.backgroundColor = this.hoverColor
        return
      }
      this.$refs.AlimentList.children.item(index).style.backgroundColor = this.listColor
    },
    handleMouseLeave(index){
      this.$emit("AlimentLeave",index)
      this.setAsHover(index,false)
    }
  }
}
</script>

<style scoped>
.AlimentContainer{
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  width: 90vw;
}
.AlimentContainer.overflow{
  width: 40%;
}
.AlimentContainer h3{
  padding: 10px 0 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items:center ;
  color: #ffffff;
  font-size: calc(0.8vw + 0.8vh);

}
ul.overflow{
  overflow-x: hidden;
  overflow-y: auto;
  height: 30vh;
}

ul{
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;

}
.no-data{
  height: 30vh;
  justify-content: center;
  color: #ffffff;
}
li {
  list-style-type: none;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 25%;
  align-items: center;
  padding: 10px 0px 10px 0px;
  font-size: calc(0.8vw + 0.8vh);
  color: #ffffff;
  position: relative;
}


ul:not(.overflow) li{
  padding: 10px 0 10px 0;
}
@media only screen and (max-width: 1000px) {
  /* Styles for mobile devices */
  .AlimentContainer {
    width: 80vw;
  }
  .AlimentContainer.overflow{
    width: 60%;
  }
}
</style>
