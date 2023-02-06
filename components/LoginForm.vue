<template>

<div class="flex-grow flex-col">

   <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
         <div>
               <div class="flex justify-center"><logo-svg class="w-12 h-12"></logo-svg></div>
               <h2 class="mt-4 mb-12 text-center text-3xl font-extrabold">{{__('sign in to your account')}}</h2>
         </div>
         
            <form-errors v-if="errors.length" :errors="errors"></form-errors>

            <form action="/login" method="POST" @submit.prevent="postLogin">
               <input type="hidden" name="remember" value="true">

               <label for="email-address" class="block text-sm font-bold">Email address</label>
               <input v-model="form.email" id="email-address" name="email" type="email" autocomplete="email" required class="text-lg appearance-none rounded-none relative block w-full py-2 border-b border-gray-300 placeholder-gray-300 text-gray-900 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 " placeholder="Enter your email">
               
         
               <label for="password" class="block text-sm font-bold mt-6">Password</label>
               <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password" required class="text-lg appearance-none rounded-none relative block w-full py-2 border-b border-gray-300 placeholder-gray-300 text-gray-900 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" placeholder="Enter your password">
               
         

            <div class="flex items-center justify-between my-8">
               <div class="text-sm">
                  <a href="/signup" class="font-medium hover:text-indigo-500">
                     
                  </a>
               </div>

               <div class="text-sm">
                  <a href="#" class="font-medium hover:text-indigo-500">
                     Forgot your password?
                  </a>
               </div>
            </div>

            <div>
               <button type="submit" href="" class="button w-full">
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                     <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                     </svg>
                  </span>

                  <loader-svg v-if="loginPending"></loader-svg>

                  {{__('sign in')}}
               </button>
            </div>
         </form>
      </div>
   </div>
</div>
</template>

<script setup>

import { ref, reactive } from 'vue'

const form = reactive({
    email: null,
    password: null,
})

const errors = ref([])
const loginPending = ref(0)

const postLogin = async () => {
   try
   {
      loginPending.value = 1
      let loginResult = await axios.post('/login', form)

      if(loginResult.status === 200)
      {
         location.href = '/'
      }

   }
   catch(e)
   {
      errors.value = e.response.data.errors
      loginPending.value = 0
   }

}

</script>


<script>
import LogoSvg from './svgs/LogoSvg.vue';

export default {
    components: {
        LogoSvg
    }
}
</script>