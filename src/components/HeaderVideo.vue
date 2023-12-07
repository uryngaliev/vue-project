<template>
    <header class="header py-8 text-lg text-white">
    <div class="container mx-auto px-24">
      <nav class="flex justify-between items-center">
        <ul class="flex items-center gap-12">
          <li>
            <router-link :to="{ name: 'play-ground' }">Игровая площадка</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'game-room' }">Игровая комната</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'dining-room' }">Столовая</router-link>
          </li>
        </ul>
        <router-link class="mr-24" :to="{ name: 'home' }">
          <ul class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10 text-red-500 ml-[115px]"
            >
              <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
              />
            </svg>

            <li
              class="text-red-500 font-displayfont text-[40px] font-normal uppercase"
            >
              Balabaqsha
            </li>
            <li class="text-[16px]">мир счастья маленьких чудес</li>
          </ul>
        </router-link>
        <ul class="flex items-center gap-12">
          <li class="ml-8">
            <router-link :to="{ name: 'bed-room' }">Спальня</router-link>
          </li>
          <li class="mr-28">
            <router-link :to="{ name: 'wardrobe' }">Гардеробная</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>