<template>
    <the-header pageNum="2">
        <div class="flex justify-between">
        <section class="mt-10 w-[500px]">
           <div>
            <h2 class="font-bold text-xl">გაქვს გადატანილი Covid-19?*</h2>
            <div class="mt-2 mb-5 ml-5">
            <input class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900" type="radio" name="covidStatus" id="yes" value="yes">
            <label class="text-lg ml-2" for="yes">კი</label>
            </div>
            <div class="ml-5 mb-5">
            <input class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900" type="radio" name="covidStatus" id="no" value="no">
            <label class="text-lg ml-2" for="no">არა</label>
            </div>
           <div class="ml-5">
            <input class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900" type="radio" name="covidStatus" id="now" value="now">
            <label class="text-lg ml-2" for="now">ახლა მაქვს</label>
           </div>
           </div>

           <div class="mt-10">
            <h2 class="font-bold text-xl">ანტისხეულების ტესტი გაქვს გაკეთებული?*</h2>
            <div class="mt-2 mb-5 ml-5">
            <input class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900" type="radio" name="covidTest" id="yes" value="testYes">
            <label class="text-lg ml-2" for="yes">კი</label>
            </div>
            <div class="ml-5 mb-5">
            <input class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900" type="radio" name="covidTest" id="no" value="testNo">
            <label class="text-lg ml-2" for="no">არა</label>
            </div>
           </div>

           <div>
            <h2 class="font-bold text-xl">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</h2>
            <input class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"  type="number"  placeholder="რიცხვი"/>
            <input class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500" type="text" placeholder="ანტისხეულების რაოდენობა"/>
           </div>
           <div>
            <h2 class="font-bold text-xl">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h2>
            <input class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"  type="number"  placeholder="დდ/თთ/წწ"/>
           </div>
        </section>
        <img class="h-[600px]" src="@/assets/images/temperature.png" alt="Boy with temperature"/>
    </div>

    </the-header>
    <footer class="mt-20">
        <the-footer pageNum="2" :isActive="true" :previousPage="{name: 'information'}" :nextPage="{name: 'covidSituation'}"></the-footer>
    </footer>

</template>

<style scoped>
.box-shadow{
    box-shadow: 0 0 0 1px black;
}
</style>