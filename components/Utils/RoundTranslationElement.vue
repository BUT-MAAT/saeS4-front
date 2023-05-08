<template>
  <div ref='card' @mousemove="handleHover" @mouseleave="resetStyle" :style="{ backgroundColor: backColor }"  class="round text flex-align-column">
      <div :style="{ color: textColor }" class="text-content normalText flex-align-column">{{text[0]}}</div>
      <div :style="{ color: highlightTextColor }" class="text-content highlight flex-align-column">{{highltightedText}}</div>
      <div :style="{ color: textColor }" class="text-content normalText flex-align-column">{{text[1]}}</div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    backColor: {
      type: String,
      default: "#C43B3BFF", //TODO regex for back-color
    },
    textColor: {
      type: String,
      default: "#ffffff", //TODO regex for back-color
    },
    highlightTextColor: {
      type: String,
      default: "#335abe", //TODO regex for back-color
    },
    text:{
      type:Array, //TODO voir si on peut limiter la longueur
    },
    highltightedText:{
      type:String,
    }
  },
  data(){
    const TRESHOLD  = 23;
    return{
      THRESHOLD: TRESHOLD,
    }
  },
  methods:{
    handleHover: function (e){
      this.$refs.card.classList.remove("soft-transition")
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;

      const rotateX = (this.THRESHOLD / 2 - horizontal * this.THRESHOLD).toFixed(2);
      const rotateY = (vertical * this.THRESHOLD - this.THRESHOLD / 2).toFixed(2);
      this.$refs.card.style.transform =
        `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
      },
    resetStyle: function(e){
      this.$refs.card.classList.add("soft-transition")
      this.$refs.card.style.transform =
        `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

    }
  }

}
</script>

<style scoped>
.round{
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  transform-style: preserve-3d;

}


.soft-transition{
  transition: transform 1s ease;
}
 .text-content {
   font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  width: 80%;
  font-size: calc(1.5vw);
  text-align: center;
  height: auto;
}
.text .highlight{
  font-size: calc(1.8vw);
  font-weight: bold;
}
.flex-align-column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
@media only screen and (max-width: 900px) {

}
</style>
