<template lang="pug">
#safeZoneWrapper(:style="getSafeZoneStyles()")
</template>

<script setup lang="ts">
import {useHudStore} from "@/stores/hud";

const store = useHudStore()

function getSafeZoneStyles() {
  let left: string, right: string, top: string, bottom: string
  left = right = store.safeZonePaddingHorizontal + 'px'
  top = bottom = store.safeZonePaddingVertical + 'px'
  return {left, top, right, bottom}
}
</script>

<style scoped>
#safeZoneWrapper {
  background: rgba(197, 0, 0, 0.5);
  position: absolute;
  overflow: hidden;
}
</style>