import {useHudStore} from "@/stores/hud";

const events: { [eventName: string]: any } = {
    'updateHudSafeZone': (paddingHorizontal: number, paddingVertical: number) => {
        const store = useHudStore()
        store.safeZonePaddingVertical = paddingVertical
        store.safeZonePaddingHorizontal = paddingHorizontal
    }
}

if (!('mp' in window)) {
    window.mp = {
        events: {
            call(eventName: string) {
                console.log(eventName)
            },
            add(name: string, ...args: any[]): void {
                console.log("Registered " + name, ...args)
            },
        }
    }
}

Object.keys(events).forEach(key => {
    mp.events.add(key, events[key])
})

export default {}