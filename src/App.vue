<script setup lang="ts">
import CuteButton from './components/CuteButton.vue'
</script>

<template>
  <div class="app">
    <div class="centre">
      <div class="hero">
        <div class="title-wrap">
          <h1>FEVER</h1>
          <p>Something exciting is coming.</p>
        </div>

        <CuteButton label="Coming soon" />
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
#app {
  margin: 0;
  min-height: 100%;
}

body {
  min-height: 100vh;
  background: #17181c;
  color: white;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.app {
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%, rgba(90, 90, 110, 0.18), transparent 35%),
    radial-gradient(circle at 80% 80%, rgba(60, 80, 100, 0.15), transparent 35%),
    linear-gradient(135deg, #111216 0%, #1b1c21 50%, #15161a 100%);
}

.centre {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.title-wrap h1 {
  margin: 0;

  font-size: clamp(56px, 10vw, 110px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.065em;

  background: linear-gradient(180deg,
      #ffffff 0%,
      #d9dde0 45%,
      #978fa1 100%);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  text-shadow:
    0 0 40px rgba(150, 200, 210, 0.12);
}

.title-wrap p {
  margin: 0;

  color: rgba(255, 255, 255, 0.45);

  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
}
</style>
