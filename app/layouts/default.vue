<template>
  <div class="relative w-full overflow-x-clip bg-(--color-bg)">
    <a href="#main-content" class="skip-link">Przejdź do treści</a>
    <LayoutTheHeader />
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>
