<template>
  <div class="bg-white text-[#233152] bg-cover bg-center">
    <Header class="bg-pink-700"></Header>
    <div class="container mx-auto px-16 py-12 flex justify-center">
      <div class="flex-1 p:2 sm:p-6 gap-6 flex flex-col h-screen bg-gray-800">
        <div
          class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200"
        >
          <div class="relative flex items-center space-x-4">
            <div class="relative">
              
            </div>
            <div class="flex flex-col leading-tight">
              <div class="text-2xl mt-1 flex items-center">
                <span class="text-white mr-3">Balabaqsha</span>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="messages"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch "
        >
          <div class="chat-message">
            <div class="flex items-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
              >
                <div>
                  <span
                    class="px-4 py-2 rounded-lg text-base inline-block rounded-bl-none bg-gray-600 text-white"
                  >
                    Мама Алины <br />
                    Наша Аминочка сегодня заболела, не сможет сегодня
                    присутствовать, прошу понять!🥹</span
                  >
                </div>
              </div>
              <img
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end justify-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
              >
                <div>
                  <span
                    class="px-4 py-2 rounded-lg text-base inline-block rounded-br-none bg-blue-600 text-white"
                    >Поскорее выздоравливайте😘</span
                  >
                </div>
              </div>
              
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
              >
                <div>
                  <span
                    class="px-4 py-2 rounded-lg text-base inline-block rounded-bl-none bg-gray-600 text-white"
                    >Мама Лунары <br />
                    Девочки, ваши дети какие костюмы выбирают на новогодний
                    утренник? Моя дочка хочет быть Wednesday 🤣</span
                  >
                </div>
                <div></div>
              </div>
              <img
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Frabbit.jpg?cs=srgb&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=dc17004d89dc8f66cb2d8df31719d3a6"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>

          <div class="chat-message">
            <div class="flex items-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
              >
                <div>
                  <span
                    class="px-4 py-2 rounded-lg text-base inline-block rounded-bl-none bg-gray-600 text-white"
                    >Папа Мерей <br>   
                    Вчера на мою дочку краску облили😤, кто это сделал, я так зол🤬, сегодня пойду к вам разбираться, ждите меня😎</span
                  >
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div class="relative flex">
            <span class="absolute inset-y-0 flex items-center">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              placeholder="Введите сообщение!"
              class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 transform rotate-90"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer class="bg-pink-700"></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>
