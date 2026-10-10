<script setup lang="ts">
import MaterialButton from '@/components/MaterialButton.vue';

</script>

<template>
  <div class="home-view">
    <div class="centre">
      <div class="hero">
        <div class="title-wrap">
          <div class="brand">
            <img src="/logo.png" alt="Fever" class="logo" />
            <h1>FEVER</h1>
          </div>

          <p>A new discord bot, coming soon...</p>
        </div>

        <div class="centred-buttons">
          <MaterialButton label="Learn More" href="discord" />
          <MaterialButton label="Purchase" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#home-view {
  margin: 0;
  min-height: 100%;
}

body {
  min-height: 100vh;
  background: #19171c;
  color: #fff;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.home-view {
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%,
      rgba(47, 43, 53, 0.18),
      transparent 35%),
    radial-gradient(circle at 80% 80%,
      rgba(25, 19, 31, 0.15),
      transparent 35%),
    linear-gradient(135deg,
      #141116 0%,
      #131114 50%,
      #161318 100%);
}

.centre {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
}

.centred-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.logo {
  width: clamp(54px, 6vw, 94px);
  height: clamp(54px, 6vw, 94px);
  display: block;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 20px;
  transform: translateY(1px);
  background: #202126;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.32),
    0 0 0 1px rgba(255, 255, 255, 0.07),
    0 0 28px rgba(105, 42, 180, 0.12);
}

.title-wrap h1 {
  margin: 0;
  padding-right: 0.08em;
  color: #f8f7fb;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: clamp(58px, 8vw, 82px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.065em;
  text-shadow:
    0 0 18px rgba(255, 255, 255, 0.08),
    0 0 42px rgba(124, 58, 180, 0.12);
  white-space: nowrap;
}

.title-wrap p {
  margin: 0;
  color: rgba(255, 255, 255, 0.38);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.025em;
}

@media (max-width: 520px) {
  .brand {
    gap: 10px;
  }

  .logo {
    width: 44px;
    height: 44px;
    border-radius: 14px;
  }

  .title-wrap h1 {
    padding-right: 0.06em;
    font-size: 52px;
    letter-spacing: -0.065em;
  }
}
</style>