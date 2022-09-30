<template>
   <the-header pageNum="1">
    <div class="flex justify-between">
        <section class="mt-10 w-[500px]">
            <div class="mb-5">
            <label class="w-full font-bold text-xl" for="name">სახელი*</label>
            <input class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3" id="name" type="text" v-model.trim="name" @blur="validateName"/>
            <p v-if="nameValidity === 'invalid'" class="text-red-400 text-sm px-5">სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსაგან</p>
            </div>
            <div class="mb-5">
            <label class="w-full font-bold text-xl"  for="lastname">გვარი*</label>
            <input class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3" id="lastname" type="text" v-model.trim="lastName" @blur="validateLastName"/>
            <p v-if="lastNameValidity === 'invalid'" class="text-red-400 text-sm px-5">გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსაგან</p>
            </div>
            <div>
            <label class="w-full font-bold text-xl"  for="email">მეილი*</label>
            <input class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3" id="email" type="text" v-model.trim="email" @blur="validateEmail"/>
            <p v-if="emailValidity === 'invalid'" class="text-red-400 text-sm px-5">მეილი უნდა იყოს რედბერის ფორმატში</p>
            </div>   

            <div class="mt-28 w-64">
                 <div class="w-60 border-t-2 border-gray-500 mb-5">
                 </div>
                 <p class="text-gray-500">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
            </div>
           
        </section>
        <img class="h-[600px]" src="@/assets/images/BoyGirl.png" alt="Boy and the girl with stars in eyes"/>
    </div>
    <footer class="mt-20">
        <the-footer :isActive="buttoniSDisabled" pageNum="1" :nextPage="{name: 'covidSituation'}"></the-footer>
    </footer>
    <transition name="line" appear>
        <div class="bg-[#D6D16E] absolute top-80 left-[1175px] w-[420px] h-16 opacity-70"></div>
    </transition>
   </the-header>
   
</template>

<script>
    export default {
       data(){
        return {
            name: '',
            lastName: '',
            email: '',
            nameValidity: 'pending',
            emailValidity: 'pending',
            lastNameValidity: 'pending',
            buttoniSDisabled: 'pending'
        }
       },
       methods: {
        validateName() {
            if (this.name.length < 2) {
            this.nameValidity = 'invalid';
            } else {
            this.nameValidity = 'valid';
            }
       },
       validateLastName() {
            if (this.lastName.length < 2) {
            this.lastNameValidity = 'invalid';
            } else {
            this.lastNameValidity = 'valid';
            }
       },
       validateEmail() {
            const emailRegex = /.@redberry.ge$/;
            if (!emailRegex.test(this.email)) {
            this.emailValidity = 'invalid';
            } else {
            this.emailValidity= 'valid';
            }
       }

    },
    computed: {
        buttoniSDisabled () {
            return this.nameValidity === 'valid' &&  this.lastNameValidity === 'valid' &&  this.emailValidity === 'valid';;
            }
}
    }
</script>


<style scoped>
.line-enter-from {
    translate: 10px 50px;
    width: 0px;
}
.line-enter-active {
  transition: all 0.4s ease-out;
}
.line-enter-to {
  width: 420px;
}

</style>
