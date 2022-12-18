<script>
export default {
    name: 'RoomCard',
    props: {
        room: Object,
    },
    data() {
        return {
            roomInfo: {},
        };
    },
    watch: {},
    emits: ['modify', 'delete'],
    methods: {},
    beforeMount() {
        console.log('[RoomCard] [beforeMount()] ');
        this.roomInfo = { ...this.room };
    },
};
</script>

<template>
    <section class="room animate__animated animate__bounceIn">
        <header class="rooms__header room__title">
            <h3 class="room__text--bold">
                {{ $t('room') }} {{ roomInfo.number }}
            </h3>

            <font-awesome-icon
                icon="fa-regular fa-trash-can"
                class="pointer zoom"
                @click="$emit('delete', roomInfo)"
            />
        </header>

        <form class="room__body">
            <fieldset>
                <label
                    for="maxCapacity"
                    class="room__text--bold form__label--block"
                >
                    {{ $t('maxCapacity') }}
                </label>
                <input
                    type="number"
                    id="maxCapacity"
                    class="form__input"
                    v-model="roomInfo.capacity"
                />
            </fieldset>

            <fieldset>
                <label
                    for="occupation"
                    class="room__text--bold form__label--block"
                >
                    {{ $t('occupation') }}
                </label>
                <input
                    type="number"
                    id="occupation"
                    class="form__input"
                    v-model="roomInfo.occupation"
                />
                <font-awesome-icon
                    icon="fa-solid fa-percent"
                    class="form_input--percent"
                />
            </fieldset>
        </form>

        <footer class="room__actions">
            <button
                class="form__button form__button--primary zoom"
                @click="$emit('modify', roomInfo)"
            >
                <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                {{ $t('actions.modify') }}
            </button>
        </footer>
    </section>
</template>

<style scoped></style>
