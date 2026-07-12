<script setup lang="ts">
usePageSeo({
  title: 'Kontakt',
  description: 'Skontaktuj się w sprawie montażu sufitu napinanego w Inowrocławiu, Janikowie i regionie kujawsko-pomorskim. Bezpłatny pomiar i wycena.'
})

const { companyInfo } = useCompanyInfo()
</script>

<template>
  <div>
    <section class="container-page pt-14 sm:pt-16 pb-5">
      <div class="eyebrow mb-5">Kontakt</div>
      <h1 class="text-3xl sm:text-[44px] font-bold tracking-tight text-(--color-ink) max-w-175">Porozmawiajmy o Twoim suficie</h1>
      <p class="text-[16.5px] leading-relaxed text-(--color-ink-2) mt-4 max-w-150">
        Zadzwoń, napisz lub wypełnij formularz — odpowiadam w ciągu jednego dnia roboczego i umawiam bezpłatny pomiar.
      </p>
    </section>

    <section class="container-page py-6 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
      <div class="flex flex-col gap-5">
        <div class="card p-7">
          <div class="flex gap-4 items-start">
            <div class="w-11 h-11 rounded-xl bg-(--color-accent-light) flex items-center justify-center flex-none">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" fill="#E3423A" /></svg>
            </div>
            <div>
              <div class="text-[13px] text-(--color-ink-3) mb-1">Telefon</div>
              <a :href="companyInfo.phoneHref" class="text-lg font-semibold text-(--color-ink)">{{ companyInfo.phoneDisplay }}</a>
            </div>
          </div>
        </div>
        <div class="card p-7">
          <div class="flex gap-4 items-start">
            <div class="w-11 h-11 rounded-xl bg-(--color-accent-light) flex items-center justify-center flex-none">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#E3423A" stroke-width="1.6" /><path d="M3 6l9 7 9-7" stroke="#E3423A" stroke-width="1.6" /></svg>
            </div>
            <div>
              <div class="text-[13px] text-(--color-ink-3) mb-1">E-mail</div>
              <a :href="companyInfo.emailHref" class="text-lg font-semibold text-(--color-ink)">{{ companyInfo.email }}</a>
            </div>
          </div>
        </div>
        <div class="card p-7">
          <div class="flex gap-4 items-start">
            <div class="w-11 h-11 rounded-xl bg-(--color-accent-light) flex items-center justify-center flex-none">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="#E3423A" stroke-width="1.6" /><circle cx="12" cy="10" r="2.4" stroke="#E3423A" stroke-width="1.6" /></svg>
            </div>
            <div>
              <div class="text-[13px] text-(--color-ink-3) mb-1">Adres / obszar działania</div>
              <div class="text-base font-semibold text-(--color-ink)">{{ companyInfo.addressLine }}</div>
              <div class="text-[13.5px] text-(--color-ink-3) mt-1">Montaże w całym regionie kujawsko-pomorskim</div>
            </div>
          </div>
        </div>
        <div class="bg-(--color-dark) rounded-[20px] p-7">
          <div class="flex gap-4 items-start">
            <div class="w-11 h-11 rounded-xl bg-(--color-accent)/15 flex items-center justify-center flex-none">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EF6E67" stroke-width="1.6" /><path d="M12 7v5l3.5 2" stroke="#EF6E67" stroke-width="1.6" stroke-linecap="round" /></svg>
            </div>
            <div>
              <div class="text-[13px] text-(--color-ink-4) mb-1">Godziny pracy</div>
              <div class="text-[15px] font-semibold text-white">{{ companyInfo.hoursWeekday }}</div>
              <div class="text-sm text-(--color-ink-4) mt-0.5">{{ companyInfo.hoursSaturday }}</div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>

    <section class="container-page pb-20">
      <div class="aspect-21/9 sm:aspect-[21/6]">
        <UiOsmMap />
      </div>
    </section>
  </div>
</template>
