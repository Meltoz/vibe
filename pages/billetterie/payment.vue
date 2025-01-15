<script setup lang="ts">
import Stepper from '../../components/billetterie/stepper.vue';
import Modal from '../../components/layout/modal.vue';

const isPaypal = ref(false);
const isModalOpen = ref(false);

const closeModal = () => {
  isModalOpen.value = false;
}
</script>

<template>
  <stepper :current-step="6" @finished="() => isModalOpen = true">
    <section>
      <div class="flex justify-center xl:justify-center gap-14 xl:gap-48 my-10">
        <button @click="() => (isPaypal = false)"
                :class="{'bg-gray-400 hover:bg-gray-300': !isPaypal, 'hover:bg-gray-400': isPaypal }"
                class="shadow-lg rounded-xl p-4 xl:py-2 xl:px-[68px] xl:h-full transition-all duration-200 shrink"
        >
          <img src="/imgs/billetterie/paiement/card.svg"
                class="h-20 xl:h-full"/></button>
        <button @click="() => (isPaypal = true)"
                :class="{'bg-gray-400 hover:bg-gray-300': isPaypal, 'hover:bg-gray-400': !isPaypal }"
                class="shadow-lg rounded-xl p-4 xl:py-2 xl:px-[68px] transition-all duration-200 shrink">
          <img src="/imgs/billetterie/paiement/paypal.svg" class="h-20 xl:h-full"/></button>
      </div>
      <div v-if="isPaypal" class="mx-6 xl:mx-auto  max-w-5xl space-y-6">
        <fieldset class="flex flex-col">
          <label for="email" class="px-5 font-semibold">Mail Paypal</label>
          <input type="email" placeholder="jean.serien@outlook.com" id="email"
                 class="rounded-full xl:rounded-xl border border-black py-2 px-5 "
          />
        </fieldset>
        <fieldset class="flex flex-col">
          <label for="pass" class=" px-5 font-semibold">Mot de passe Paypal</label>
          <input type="password" placeholder="••••••••" id="pass"
          class="rounded-full xl:rounded-xl border border-black py-2 px-5"
          />
        </fieldset>
      </div>
    <div v-if="!isPaypal" class="mx-5 xl:mx-auto max-w-5xl space-y-6">
      <fieldset class="flex flex-col">
        <label for="number" class=" px-5 font-semibold">Numéro de carte</label>
        <input type="text" placeholder="1234 1234 1234 1234" id="number"
               class="rounded-full xl:rounded-xl border border-black py-2 px-5"
        />
      </fieldset>
      <div class="flex justify-between gap-5 xl:gap-10">
        <fieldset class="flex flex-col basis-1/2 shrink">
          <label for="expire" class=" px-5 font-semibold">Expire le</label>
          <input type="text" placeholder="MM/MM" id="expire"
                 class="rounded-full xl:rounded-xl border border-black py-2 px-5 w-full"
          />
        </fieldset>
        <fieldset class="flex flex-col basis-1/2 shrink">
          <label for="cvc" class=" px-5 font-semibold">CVC</label>
          <input type="text" placeholder="CVC" id="cvc"
                 class="rounded-full xl:rounded-xl border border-black py-2 px-5 w-full"
          />
        </fieldset>
      </div>
      <div class="flex flex-col xl:flex-row justify-between gap-6 xl:gap-10">
        <fieldset class="flex flex-col grow">
          <label for="firstName" class=" px-5 font-semibold">Prenom du titulaire de la carte</label>
          <input type="text" placeholder="Jean" id="firstName"
                 class="rounded-full xl:rounded-xl border border-black py-2 px-5"
          />
        </fieldset>
        <fieldset class="flex flex-col basis-1/2">
          <label for="lastName" class=" px-5 font-semibold">Nom du titulaire de la carte</label>
          <input type="text" placeholder="Sérien" id="lastName"
                 class="rounded-full xl:rounded-xl border border-black py-2 px-5"
          />
        </fieldset>
      </div>
    </div>
    </section>
  </stepper>

  <Modal :is-open="isModalOpen" @close="closeModal">
    <img src="/imgs/billetterie/paiement/validation.png" class="rounded-t-xl object-cover">
    <p class="text-center py-6 text-xl font-semibold">Votre Commande a été confirmée avec succès!</p>
    <div class="flex justify-center mb-6">
      <NuxtLink class="rounded-md bg-green-200 py-2 text-xl font-semibold hover:bg-green-100 max-w-60 text-center" to="/">Retourner à la page d'accueil</NuxtLink>
    </div>
  </Modal>
</template>
