<script setup lang="ts">
interface Props {
  label?: string
  href?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  label: 'example',
  href: undefined,
  disabled: false,
})
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" :disabled="!href ? disabled : undefined" class="material-button"
    :class="{ 'is-disabled': disabled }">
    <span>{{ label }}</span>

    <svg class="material-button__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </component>
</template>

<style scoped>
.material-button {
  --border-color: rgba(171, 146, 210, 0.16);
  --glow-color: rgba(171, 146, 210, 0.12);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  height: 50px;
  padding: 0 15px 0 20px;

  border: 1px solid var(--border-color);
  border-radius: 999px;

  color: #fff;
  background:
    linear-gradient(to bottom,
      rgba(138, 98, 204, 0.25) 0%,
      rgba(72, 34, 104, 0.25) 100%),
    #0c0d0d;

  font-family:
    Satoshi,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;

  text-decoration: none;
  cursor: pointer;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.25);

  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

/* Tiny ambient glow behind the button */
.material-button::before {
  content: "";
  position: absolute;
  inset: 3px;
  z-index: -1;

  border-radius: inherit;

  background: radial-gradient(circle at 50% 0%,
      var(--glow-color),
      transparent 65%);

  filter: blur(10px);
  opacity: 0.7;
  transition: opacity 180ms ease;
}

.material-button:hover {
  transform: translateY(-1px);

  border-color: rgba(171, 146, 210, 0.28);

  background:
    linear-gradient(to bottom,
      rgba(171, 146, 210, 0.31) 0%,
      rgba(93, 75, 108, 0.3) 100%),
    #0c0d0d;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 5px 20px rgba(0, 0, 0, 0.25);
}

.material-button:hover::before {
  opacity: 1;
}

.material-button:active {
  transform: translateY(0) scale(0.98);
}

.material-button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #0c0d0d,
    0 0 0 4px rgba(171, 146, 210, 0.45);
}

.material-button__icon {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;

  opacity: 0.85;

  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.material-button:hover .material-button__icon {
  transform: translateX(2px);
  opacity: 1;
}

.material-button.is-disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
</style>