<template>
    <div class="page fx-column">
        <tf-deputy-topbar title=""></tf-deputy-topbar>
        <div class="page__content">
        </div>
    </div>
</template>

<script>
    import deputyTopbar from '@/components/deputy-topbar.vue'

    export default {
        components: {
            'tf-deputy-topbar': deputyTopbar
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/out-import";

    .page {
        min-height: 100vh;
        &__content {
            flex: 1;
            padding: 0 tr(30px);
        }
    }
</style>
