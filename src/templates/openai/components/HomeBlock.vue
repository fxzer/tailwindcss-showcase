<template>
  <div class="home-content bg-black text-white divide-y">
    <div class="list-mixed py-8 px-4">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li class="mb-6 p-4 hover:bg-gray-900/90">
          <h2 class="text-xl font-mono font-semibold mb-3">
            Creating safe AGI that benefits all of humanity
          </h2>
          <a href="" class="hover:border-slate-400 border-b border-white"
            >Learn about OpenAI</a
          >
        </li>
        <li class="mb-6 p-4 hover:bg-gray-900/90">
          <h2 class="text-xl font-mono font-semibold mb-3">
            Pioneering research on the path to AGI
          </h2>
          <a href="" class="hover:border-slate-400 border-b border-white"
            >Learn about our research</a
          >
        </li>
        <li class="mb-6 p-4 hover:bg-gray-900/90">
          <h2 class="text-xl font-mono font-semibold mb-3">
            Transforming work and creativity with AI
          </h2>
          <a href="" class="hover:border-slate-400 border-b border-white"
            >Explore our products</a
          >
        </li>
        <li class="mb-6 p-4 hover:bg-gray-900/90">
          <h2 class="text-xl font-mono font-semibold mb-3">
            Join us in shaping the future of technology
          </h2>
          <a href="" class="hover:border-slate-400 border-b border-white"
            >View careers</a
          >
        </li>
      </ul>
    </div>

    <!-- 新特性 -->
    <div class="list-feature flex py-8 p-4">
      <img
        class="w-1/2 ratio ratio-1x1"
        src="https://openaicom.imgix.net/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?fm=auto&auto=compress,format&fit=min&rect=0,0,2048,2048&w=1919&h=1919"
        alt=""
      />
      <div class="flex-1 ml-4">
        <h2 class="text-4xl font-semibold">ChatGPT</h2>
        <p class="my-6 text-xl">
          We’ve trained a model called ChatGPT which interacts in a
          conversational way. The dialogue format makes it possible for ChatGPT
          to answer follow-up questions, admit its mistakes, challenge incorrect
          premises, and reject inappropriate requests.
        </p>
        <a href="" class="border-b border-white hover:border-slate-500"
          >Try ChatGPT
        </a>
        <a class="border-b border-white hover:border-slate-500 ml-6" href=""
          >Read about ChatGPT</a
        >
      </div>
    </div>
    <!-- 最近更新 -->
    <div class="list-latest-update p-4">
      <h2 class="text-3xl font-sans flex justify-between items-center ">
        Latest updates
        <a href="" class="text-xl border-b border-white hover:border-slate-500">
          View all updates</a
        >
      </h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <li class="">
          <a href="#">
            <img class="ratio ratio-1x1 w-full"
              src="https://openaicom.imgix.net/e2d6b8cb-8def-4aa7-854f-58f9f5261a5c/march-20-chatgpt-outage.png?fm=auto&auto=compress,format&fit=min&rect=,,,&w=500&h=500"
              alt=""
            />
            <h3  class="mt-4 mb-2 text-xl font-medium">March 20 ChatGPT outage: Here’s what happened</h3>
            <p>Mar 24, 2023</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="ratio ratio-1x1 w-full"
              src="https://openaicom.imgix.net/c51f2c96-3595-48ae-9fb6-165563fbb086/chat-plugins.png?fm=auto&auto=compress,format&fit=min&rect=0,0,2048,2048&w=500&h=500"
              alt=""
            />
            <h3 class="mt-4 mb-2 text-xl font-medium">March 20 ChatGPT outage: Here’s what happened</h3>
            <p>Mar 24, 2023</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="ratio ratio-1x1 w-full"
              src="https://openaicom.imgix.net/44fefabe-41f8-4dbf-9218-b1e1c44dc319/introducing-chatgpt-and-whisper-apis.jpg?fm=auto&auto=compress,format&fit=min&rect=,,,&w=500&h=500"
              alt=""
            />
            <h3 class="mt-4 mb-2 text-xl font-medium">March 20 ChatGPT outage: Here’s what happened</h3>
            <p>Mar 24, 2023</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="ratio ratio-1x1 w-full"
              src="https://openaicom.imgix.net/e632747f-9587-47a4-a591-ad9317aaf066/planning-for-agi-and-beyond.jpg?fm=auto&auto=compress,format&fit=min&rect=0,0,1024,1024&w=500&h=500"
              alt=""
            />
            <h3 class="mt-4 mb-2 text-xl font-medium">March 20 ChatGPT outage: Here’s what happened</h3>
            <p>Mar 24, 2023</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.ratio-1x1 {
  --ratio: 100%;
}
.ratio:before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: var(--ratio);
}
</style>
