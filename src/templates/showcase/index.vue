<template  >
  <Banner />
  <div class="px-8 mt-20 lg:px-24 xl:px-40 dark:bg-slate-900">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-8  max-w-[32rem] sm:max-w-[72rem]" >
      <CaseItem v-for="c in caseList" v-bind="c" />
    </ul>
  </div>
</template>
<script setup lang="ts">
import Banner from "./components/Banner.vue";
import CaseItem from "./components/CaseItem.vue";
import videoSrcList from './mock/videos'
import desList from "./mock/desList";
import imgSrcList from './mock/imgs'
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
    desc: desList[i],
    imgsrc:imgSrcList[i],
    video: v,
    link: '#',
  } as CaseItem;
})
  

</script>
<style scoped lang="scss"></style>
