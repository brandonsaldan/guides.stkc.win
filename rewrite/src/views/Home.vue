<template>
  <div class="py-16 bg-dark overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-48 animate__animated animate__fadeIn">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">stkc's site</p>
      </div>
      <div class="relative text-base mx-auto">
        <p class="text-lg text-gray-300">Guides</p>
        <ul class="pt-3 text-blue-500" role="list">
          <li>• Odysseyn1x</li>
          <li>• Sideloadly</li>
          <router-link to="/delayota"><li>• DelayOTA</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
