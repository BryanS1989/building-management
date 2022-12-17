<script>
import HeaderMain from './components/HeaderMain.vue';

export default {
    components: {
        HeaderMain,
    },
    data() {
        return {
            floors: [],
        };
    },
    methods: {},
    beforeMount() {
        console.log('[APP] [beforeMount()] ');
        this.floors = this.$store.getters.floors;
    },
};
</script>

<template>
    <HeaderMain :floors="floors" />

    <router-view></router-view>
</template>

<style scoped></style>
