import {defineStore} from "pinia"

export const useHudStore = defineStore('hud', {
    state: () => ({
        safeZonePaddingHorizontal: 30,
        safeZonePaddingVertical: 100
    })
})