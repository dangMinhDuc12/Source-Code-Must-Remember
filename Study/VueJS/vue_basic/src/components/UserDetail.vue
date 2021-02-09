<template>
    <div class="component">
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My Name : {{ reverseName }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
export default {
    props: ['name'],

    computed: {
        reverseName() {
            return this.name
                .split('')
                .reverse()
                .join('');
        },
    },
    methods: {
        resetName() {
            this.$emit('resetName', 'Đặng Minh Đức');
        },
    },
};
</script>

<style scoped>
.component {
    background-color: lightcoral;
}
</style>
