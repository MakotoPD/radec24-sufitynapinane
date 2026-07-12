<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  badge?: string
}>()
</script>

<template>
  <div style="width: 1200px; height: 630px; position: relative; background: #1C1917; font-family: sans-serif;">
    <!-- decorative background -->
    <div style="position: absolute; top: -120px; right: -120px; width: 520px; height: 520px; border-radius: 9999px; background: linear-gradient(160deg, #E3423A, #8f221d); opacity: 0.9; display: flex;" />
    <div style="position: absolute; top: 60px; right: 40px; width: 420px; height: 420px; border-radius: 9999px; border: 1.5px solid rgba(255,255,255,0.18); display: flex;" />
    <div style="position: absolute; bottom: -160px; left: -100px; width: 380px; height: 380px; border-radius: 9999px; background: rgba(227,66,58,0.12); display: flex;" />
    <div style="position: absolute; top: 40px; left: 40px; right: 40px; bottom: 40px; border: 1px solid rgba(255,255,255,0.06); border-radius: 32px; display: flex;" />

    <!-- content -->
    <div style="position: relative; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 64px 72px;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; display: flex;">RADEC24.PL</div>
        <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); padding: 9px 18px; border-radius: 9999px;">
          <div style="width: 8px; height: 8px; border-radius: 9999px; background: #4ADE80; display: flex;" />
          <div style="font-size: 14px; font-weight: 600; color: #EDE9E4; display: flex;">{{ badge || 'Województwo kujawsko-pomorskie' }}</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; max-width: 900px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 20px; height: 20px; background: #E3423A; transform: rotate(45deg); border-radius: 5px; display: flex;" />
          <div style="font-weight: 700; font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; color: #EF6E67; display: flex;">Sufity napinane</div>
        </div>
        <div style="font-size: 52px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; color: #ffffff; display: flex;">
          {{ title || 'Sufity napinane' }}
        </div>
        <div style="font-size: 20px; line-height: 1.55; color: #C9C3BB; max-width: 700px; display: flex;">
          {{ description || 'Montaż sufitów napinanych w Inowrocławiu, Janikowie i regionie kujawsko-pomorskim.' }}
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 40px;">
          <div style="display: flex; flex-direction: column;">
            <div style="font-size: 21px; font-weight: 700; color: #ffffff; display: flex;">Bez pośredników</div>
            <div style="font-size: 13px; color: #9A948B; margin-top: 4px; display: flex;">pełna odpowiedzialność</div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div style="font-size: 21px; font-weight: 700; color: #ffffff; display: flex;">Gwarancja pisemna</div>
            <div style="font-size: 13px; color: #9A948B; margin-top: 4px; display: flex;">na każdą usługę</div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div style="font-size: 21px; font-weight: 700; color: #ffffff; display: flex;">1 dzień</div>
            <div style="font-size: 13px; color: #9A948B; margin-top: 4px; display: flex;">czas montażu</div>
          </div>
        </div>
        <div style="background: #E3423A; color: #ffffff; font-weight: 700; font-size: 17px; padding: 16px 30px; border-radius: 9999px; display: flex;">radec24.pl</div>
      </div>
    </div>
  </div>
</template>
