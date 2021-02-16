<template>
    <div>
        {{ products }}
    </div>
</template>

<script>
import productMixin from '../mixins/product.js';

export default {
    mixins: [productMixin],
};
</script>

<style></style>
