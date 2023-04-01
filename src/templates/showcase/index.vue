<template  >
  <Banner />
  <div class="px-8 mt-20 dark:bg-slate-900">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-8" >
      <CaseItem v-for="c in caseList" v-bind="c" />
    </ul>
  </div>
</template>
<script setup lang="ts">
import Banner from "./components/Banner.vue";
import CaseItem from "./components/CaseItem.vue";
import videoSrcList from './videos'
interface CaseItem {
  imgsrc: string;
  title: string;
  desc: string;
  video: string;
  link: string;
}


let  caseList  = videoSrcList.map((v,i) => {
  let title =  v.slice(43).split('.')[0]
  return {
    title ,
    desc: title,
    imgsrc: `src/assets/img/case/p${i+1}.png`,
    video: v,
    link: '#',
  } as CaseItem;
})
  
  // [
  // {
  //   title: "OpenAI / ChatGPT",
  //   desc: "Marketing website & chat interface",
  //   imgsrc: "src/assets/img/case/openai.png",
  //   video: "src/assets/video/openai.mp4",
  //   link: "",
  // },
  // {
  //   title: "Lemon Squeezy",
  //   desc: "SaaS application",
  //   imgsrc: "src/assets/img/case/lemon.png",
  //   video: "src/assets/video/lemon.mp4",
  //   link: "",
  // },
  // {
  //   title: "Shopify",
  //   desc: "Ecommerce platform website",
  //   imgsrc: "src/assets/img/case/shopify.png",
  //   video: "src/assets/video/shopify.mp4",
  //   link: "",
  // },
  // {
  //   title: "OpenAI / ChatGPT",
  //   desc: "Marketing website & chat interface",
  //   imgsrc: "src/assets/img/case/openai.png",
  //   video: "src/assets/video/openai.mp4",
  //   link: "",
  // },
  // {
  //   title: "Lemon Squeezy",
  //   desc: "SaaS application",
  //   imgsrc: "src/assets/img/case/lemon.png",
  //   video: "src/assets/video/lemon.mp4",
  //   link: "",
  // },
  // {
  //   title: "Shopify",
  //   desc: "Ecommerce platform website",
  //   imgsrc: "src/assets/img/case/shopify.png",
  //   video: "src/assets/video/shopify.mp4",
  //   link: "",
  // },
  // {
  //   title: "OpenAI / ChatGPT",
  //   desc: "Marketing website & chat interface",
  //   imgsrc: "src/assets/img/case/openai.png",
  //   video: "src/assets/video/openai.mp4",
  //   link: "",
  // },
  // {
  //   title: "Lemon Squeezy",
  //   desc: "SaaS application",
  //   imgsrc: "src/assets/img/case/lemon.png",
  //   video: "src/assets/video/lemon.mp4",
  //   link: "",
  // },
  // {
  //   title: "Shopify",
  //   desc: "Ecommerce platform website",
  //   imgsrc: "src/assets/img/case/shopify.png",
  //   video: "src/assets/video/shopify.mp4",
  //   link: "",
  // },
  // {
  //   title: "OpenAI / ChatGPT",
  //   desc: "Marketing website & chat interface",
  //   imgsrc: "src/assets/img/case/openai.png",
  //   video: "src/assets/video/openai.mp4",
  //   link: "",
  // },
  // {
  //   title: "Lemon Squeezy",
  //   desc: "SaaS application",
  //   imgsrc: "src/assets/img/case/lemon.png",
  //   video: "src/assets/video/lemon.mp4",
  //   link: "",
  // },
  // {
  //   title: "Shopify",
  //   desc: "Ecommerce platform website",
  //   imgsrc: "src/assets/img/case/shopify.png",
  //   video: "src/assets/video/shopify.mp4",
  //   link: "",
  // },
// ];
//获取当前页面所有video，并将其视频下载到本地
const videos = document.querySelectorAll("video");
//创建a标签，用于下载
const a = document.createElement("a");

</script>
<style scoped lang="scss"></style>
