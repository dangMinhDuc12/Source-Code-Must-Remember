<template>
    <div>
        <p>Result : {{ tenResult }}</p>
        <!-- <p>Name Result : {{ nameResult }}</p> -->
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
    computed: {
        // ...mapGetters(['tenResult', 'nameResult']),
        tenResult() {
            return this.$store.getters.nameResult;
        },
    },
};
</script>

<style></style>
