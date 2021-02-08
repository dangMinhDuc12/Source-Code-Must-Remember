<template>
    <div v-if="show"><Contact /></div>
</template>

<script>
import Contact from './components/Contact.vue';
export default {
    name: 'App',
    components: {
        Contact,
    },
    data: function() {
        return {
            title: 'Hello',
            show: true,
        };
    },
    methods: {
        changeShow: function() {
            this.show = !this.show;
        },
    },
};
</script>

<style scoped></style>
