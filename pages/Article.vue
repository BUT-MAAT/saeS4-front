<template>
  <article>
    <div class="article-header-container">
      <div class="article-header-content">
        <div class="article-header-top">
          <div class="article-breadcrumb">
            <Breadcrumb :path="data.pathv" />
          </div>
          <div class="article-datetime">
            <DateTime :date="data.date" />
          </div>
        </div>

        <div class="article-header-bot">
          <div class="article-header-tags-title">
            <div class="article-tags">
              <Tag v-for="tag in data.tags" :key="tag">{{ tag }}</Tag>
            </div>
            <div class="article-title">
              <ArticleTitle>{{data.title}}</ArticleTitle>
            </div>
          </div>
        </div>
      </div>
      <HeroWave />
    </div>

    <div class="article-body">
      <span v-html="data.content"> </span>
    </div>
  </article>
</template>

<script setup lang="ts">

import é     from "../components/Hero/HeroWave.vue";
import ArticleTitle from "../components/Article/Title.vue";
import Tag          from "../components/Article/Tag.vue";
import Breadcrumb   from "../components/Article/Breadcrumb.vue";
import DateTime from "../components/Article/DateTime.Vue";
import Vue from 'vue';


const data = {
  title: 'test Title trop swag',
  slug: 'testSlug',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date:'2023-01-27T15:12:05.932Z',
  pathv: 'test/oe/oklm',
  tags: ["test1","test2","test3"],
}
const dataVue = new Vue({
  data: data,
});
</script>

<style scoped>
.article-header-container {
  position: relative;
  background-image: url("../images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(95vh - var(--navBar-height) - var(--topBar-height));
  overflow: auto;
}

.article-header-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    78deg,
    rgba(66, 51, 51, 0.6) -14%,
    rgba(88, 71, 71, 0.3) 86%
  );
  z-index: 10;
}

.article-header-content {
  position: relative;
  z-index: 20;
  height: 80%;
  color: var(--white);
}

.article-header-top {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
}

.article-header-bot {
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}

.article-header-tags-title .article-title {
  margin-top: 20px;
}

.article-tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.article-body {
  width: 80%;
  margin: 50px auto auto;
  font-size: 24px;
}

.article-body ::v-deep p {
  margin-bottom: 50px;
  text-align: justify;
}

@media screen and (max-height: 750px) {
  .article-header-container {
    height: min(100vh, 100%);
    padding: 4rem 0;
  }

  .article-tags {
    margin: 2rem;
  }
}

@media screen and (max-height: 850px) {
  .article-title {
    width: 100%;
  }

}

@media screen and (max-width: 800px) {
  .article-header-top {
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
  }

  .article-breadcrumb,
  .article-datetime {
    width: max-content;
    margin: auto;
    height: 40px;
  }
}
</style>
