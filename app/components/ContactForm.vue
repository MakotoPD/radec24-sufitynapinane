<script setup lang="ts">
interface FormState {
  name: string
  phone: string
  email: string
  city: string
  message: string
  rodo: boolean
}

const form = reactive<FormState>({ name: '', phone: '', email: '', city: '', message: '', rodo: false })
const errors = reactive<Record<string, string>>({})
const submitted = ref(false)
const submitting = ref(false)
const serverError = ref('')

function clearError(key: string) {
  delete errors[key]
}

function validate(): boolean {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.name.trim()) errors.name = 'Podaj imię i nazwisko.'
  const digits = form.phone.replace(/[^0-9]/g, '')
  if (digits.length < 9) errors.phone = 'Podaj poprawny numer telefonu.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Podaj poprawny adres e-mail.'
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = 'Opisz zapytanie (min. 10 znaków).'
  if (!form.rodo) errors.rodo = 'Zgoda jest wymagana, by wysłać formularz.'
  return Object.keys(errors).length === 0
}

async function onSubmit() {
  serverError.value = ''
  if (!validate()) return
  submitting.value = true
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    submitted.value = true
  } catch {
    serverError.value = 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń bezpośrednio.'
  } finally {
    submitting.value = false
  }
}

function fieldClass(key: string) {
  return errors[key]
    ? 'w-full px-3.5 py-3 rounded-[10px] border-[1.5px] border-(--color-accent) text-[14.5px] text-(--color-ink) bg-(--color-bg) focus:outline-none'
    : 'w-full px-3.5 py-3 rounded-[10px] border-[1.5px] border-(--color-border) text-[14.5px] text-(--color-ink) bg-(--color-bg) focus:outline-none focus:border-(--color-accent)'
}
</script>

<template>
  <div class="card !rounded-3xl p-6 sm:p-10">
    <div v-if="!submitted">
      <h2 class="text-[22px] font-bold text-(--color-ink) mb-1.5">Wyślij zapytanie</h2>
      <p class="text-sm text-(--color-ink-3) mb-6">Odpowiadam w ciągu jednego dnia roboczego.</p>
      <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          <div>
            <label class="text-[13.5px] font-semibold text-(--color-ink) block mb-2">Imię i nazwisko</label>
            <input v-model="form.name" type="text" placeholder="Jan Kowalski" :class="fieldClass('name')" @input="clearError('name')">
            <div v-if="errors.name" class="text-(--color-accent) text-[12.5px] mt-1.5">{{ errors.name }}</div>
          </div>
          <div>
            <label class="text-[13.5px] font-semibold text-(--color-ink) block mb-2">Telefon</label>
            <input v-model="form.phone" type="text" placeholder="600 000 000" :class="fieldClass('phone')" @input="clearError('phone')">
            <div v-if="errors.phone" class="text-(--color-accent) text-[12.5px] mt-1.5">{{ errors.phone }}</div>
          </div>
        </div>
        <div>
          <label class="text-[13.5px] font-semibold text-(--color-ink) block mb-2">E-mail</label>
          <input v-model="form.email" type="text" placeholder="jan@przyklad.pl" :class="fieldClass('email')" @input="clearError('email')">
          <div v-if="errors.email" class="text-(--color-accent) text-[12.5px] mt-1.5">{{ errors.email }}</div>
        </div>
        <div>
          <label class="text-[13.5px] font-semibold text-(--color-ink) block mb-2">Miejscowość</label>
          <input v-model="form.city" type="text" placeholder="np. Inowrocław" :class="fieldClass('city')">
        </div>
        <div>
          <label class="text-[13.5px] font-semibold text-(--color-ink) block mb-2">Wiadomość</label>
          <textarea v-model="form.message" rows="4" placeholder="Opisz krótko czego dotyczy zapytanie (metraż, rodzaj pomieszczenia, termin)" :class="fieldClass('message')" @input="clearError('message')" />
          <div v-if="errors.message" class="text-(--color-accent) text-[12.5px] mt-1.5">{{ errors.message }}</div>
        </div>
        <label class="flex items-start gap-2.5 cursor-pointer">
          <input v-model="form.rodo" type="checkbox" class="mt-0.5 accent-(--color-accent) w-4 h-4 flex-none" @change="clearError('rodo')">
          <span class="text-[13px] leading-relaxed text-(--color-ink-3)">Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi zapytania (RODO).</span>
        </label>
        <div v-if="errors.rodo" class="text-(--color-accent) text-[12.5px] -mt-3">{{ errors.rodo }}</div>
        <div v-if="serverError" class="text-(--color-accent) text-sm">{{ serverError }}</div>
        <button type="submit" class="btn-accent text-base py-4 mt-1 disabled:opacity-60" :disabled="submitting">
          {{ submitting ? 'Wysyłanie…' : 'Wyślij zapytanie' }}
        </button>
      </form>
    </div>
    <div v-else class="text-center py-10 px-2.5">
      <div class="w-15 h-15 rounded-full bg-(--color-success-light) flex items-center justify-center mx-auto mb-5.5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#2C7A4B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </div>
      <h2 class="text-[22px] font-bold text-(--color-ink) mb-2.5">Dziękuję, {{ form.name }}!</h2>
      <p class="text-[15px] leading-relaxed text-(--color-ink-3) max-w-90 mx-auto">
        Twoje zapytanie zostało wysłane. Skontaktuję się pod numerem {{ form.phone }} w ciągu jednego dnia roboczego.
      </p>
    </div>
  </div>
</template>
