<script>
export default {
    name: 'ModalComponent',
    props: {},
    emits: [],
    data() {
        return {};
    },
    computed: {
        show() {
            return this.$store.getters.showModal;
        },
        modal() {
            return this.$store.getters.modal;
        },
    },
    watch: {},
    methods: {},
};
</script>

<template>
    <div
        class="backdrop"
        v-if="show"
    >
        <section class="modal animate__animated animate__zoomIn">
            <font-awesome-icon
                v-if="modal.icon === 'correct'"
                icon="fa-solid fa-circle-check"
                class="modal__icon--check fa-7x animate__animated animate__pulse animate__infinite"
            />
            <font-awesome-icon
                v-if="modal.icon === 'warning'"
                icon="fa-solid fa-circle-exclamation"
                class="modal__icon--warning fa-7x animate__animated animate__pulse animate__infinite"
            />
            <font-awesome-icon
                v-if="modal.icon === 'error'"
                icon="fa-regular fa-circle-xmark"
                class="modal__icon--error fa-7x animate__animated animate__pulse animate__infinite"
            />

            <hr />

            <h2 class="text--center">
                {{ modal.message }}
            </h2>
        </section>
    </div>
</template>

<style scoped></style>
