<template>
  <article>
    <Hero>
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
              <Title>{{data.title}}</Title>
          </div>
<!--          <ShortDescription>{{ data.description }}</ShortDescription>-->
        </div>
      </div>
    </Hero>

    <div class="article-body">
      <span v-html="data.content"> </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import Vue from 'vue';

/** TODO:
 * Parse the date
 */
const data = {
  title: 'Article title',
  description: 'Short description of this article',
  slug: 'this-article',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date: '2023-01-27T15:12:05.932Z',
  pathv: 'Home/.../title article',
  tags: ["tag1","tag2","tag3"],
}
const dataVue = new Vue({
  data: data,
});
</script>

<style scoped>
.article-body {
  margin-bottom: 100px;
}

.article-header-content {
  width: 100%;
  position: relative;
  z-index: 20;
  height: 80%;
  color: var(--white);
}

.article-header-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
}

.article-header-bot {
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}

.article-header-tags-title {
  margin-top: 20px;
}

.article-tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.article-body {
  width: 80%;
  margin: 100px auto;
  font-size: 24px;
}

.article-body ::v-deep p {
  margin-bottom: 50px;
  text-align: justify;
}

@media screen and (max-height: 750px) {
  .article-tags {
    margin: 2rem;
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
