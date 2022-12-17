<script>
import HeaderMain from './components/HeaderMain.vue';

export default {
    components: {
        HeaderMain,
    },
    data() {
        return {
            floors: [1, 2, 3],
        };
    },
    methods: {},
};
</script>

<template>
    <HeaderMain :floors="floors" />

    <router-view></router-view>
</template>

<style scoped></style>
