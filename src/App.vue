<script>
import HeaderMain from './components/HeaderMain.vue';
import LoadingComponent from './components/shared/LoadingComponent.vue';
import ModalComponent from './components/shared/ModalComponent.vue';

export default {
    components: {
        HeaderMain,
        LoadingComponent,
        ModalComponent,
    },
    data() {
        return {};
    },
    computed: {
        floors() {
            console.log('[APP] [computed] [floors()] ');
            return this.$store.getters.floors;
        },
    },
    methods: {},
    beforeMount() {
        console.log('[APP] [beforeMount()] ');
        this.$store.dispatch('buildingInfo');
    },
};
</script>

<template>
    <HeaderMain :floors="floors" />

    <router-view v-if="floors.length > 0"></router-view>

    <LoadingComponent></LoadingComponent>

    <ModalComponent></ModalComponent>
</template>

<style scoped></style>
