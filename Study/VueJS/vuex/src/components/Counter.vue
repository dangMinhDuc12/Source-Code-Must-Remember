<template>
    <div>
        <button @click="increment">Tang</button>
        <button @click="decrement(4)">Giam</button>
        <input type="text" v-model="value" />
        <p>Test v-model {{ value }}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        increment() {
            this.$store.dispatch('increment', 3);
        },

        ...mapMutations(['decrement']),
    },
    computed: {
        value: {
            get() {
                return this.$store.getters.value;
            },
            set(value) {
                this.$store.dispatch('updateValue', value);
            },
        },
    },
};
</script>

<style></style>
