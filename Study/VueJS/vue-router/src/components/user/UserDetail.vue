<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <button @click="$router.push('/')">go home</button>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
