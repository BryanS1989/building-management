<script>
export default {
    name: 'LoadingComponent',
    props: {},
    emits: [],
    data() {
        return {};
    },
    computed: {
        loading() {
            return this.$store.getters.loading;
        },
    },
    watch: {},
    methods: {},
};
</script>

<template>
    <div
        class="loader"
        v-if="loading"
    >
        <font-awesome-icon
            icon="fa-solid fa-spinner"
            class="loader__icon animate__animated animate__rotateOut animate__infinite fa-5x"
        />
    </div>
</template>

<style scoped></style>
