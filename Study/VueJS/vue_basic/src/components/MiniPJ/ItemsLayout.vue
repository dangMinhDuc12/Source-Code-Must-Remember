<template>
    <div class="row">
        <Items
            v-for="(item, index) in items"
            :key="index"
            :index="index"
            :removeItem="removeItem"
            >{{ item }}</Items
        >
    </div>
</template>

<script>
import Items from './Items.vue';

export default {
    props: {
        items: Array,
        removeItem: Function,
    },
    components: {
        Items,
    },
};
</script>

<style></style>
