import { reactive, computed } from 'vue'

const state = reactive({
    items: [],
    totalPrice: 0
})

const setItems = (newItems) => {

    if (typeof newItems === 'object' && !Array.isArray(newItems)) {
        state.items = [newItems]

        if (newItems.isAdded) {
            if (newItems.price) {
                state.totalPrice += Number(newItems.price)
            }
        }
        else {
            state.totalPrice -= Number(newItems.price)
        }
        
        
    } else if (Array.isArray(newItems)) {    
        state.items = newItems
        for (let item of newItems) {
            if (item.price) {
                state.totalPrice += Number(item.price)
            }
        }
    } else {
        console.error(newItems)
    }
    console.log(state.items)
    console.log(state.totalPrice)    
}

export default {
    state,
    setItems,
    totalPrice: computed(() => state.totalPrice)
}