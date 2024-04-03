<template>
    <div>
        {{ id }}
    </div>
</template>

<script setup>
    const route = useRoute()
    const id = ref()
    id.value = route.params.id
</script>