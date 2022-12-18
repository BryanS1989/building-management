<script>
export default {
    name: 'RoomList',
    props: {},
    data() {
        return {
            selectedFloor: 0,
            rooms: [],
        };
    },
    watch: {
        $route(to) {
            console.log('[RoomList] [$route] params', to.params);
            this.setSelectedFloor(to.params.floor);
        },
    },
    methods: {
        setSelectedFloor(newFloor) {
            console.log(
                '[RoomList] [setSelectedFloor()] current Floor: ' +
                    this.selectedFloor +
                    ' newFloor: ' +
                    newFloor
            );
            this.selectedFloor =
                this.selectedFloor !== newFloor ? newFloor : this.selectedFloor;

            this.rooms = this.$store.getters.roomsByFloor(this.selectedFloor);
        },
        addRoom() {
            console.log('[RoomList] [addRoom()]');
            this.$store.dispatch('addRoom', { id: this.selectedFloor });
        },
        modifyRoom(room) {
            console.log('[RoomList] [modifyRoom()] room: ', room);
        },
        deleteRoom(room) {
            console.log('[RoomList] [deleteRoom()] room: ', room);
            this.$store.dispatch('deleteRoom', {
                floor: { id: this.selectedFloor },
                room: {
                    number: room.number,
                    capacity: room.capacity,
                    occupation: room.occupation,
                },
            });
        },
    },
    beforeMount() {
        console.log('[RoomList] [beforeMount()] ', this.$route.params);
        this.setSelectedFloor(this.$route.params.floor);
    },
};
</script>

<template>
    <header class="rooms__header">
        <h2>{{ $t('floor') }} {{ selectedFloor }}</h2>
        <button
            class="form__button form__button--primary"
            @click="addRoom()"
        >
            {{ $t('actions.add') }}
        </button>
    </header>

    <article class="rooms">
        <section
            class="room"
            v-for="room in rooms"
            :key="room.number"
        >
            <header class="rooms__header room__title">
                <h3 class="room__text--bold">
                    {{ $t('room') }} {{ room.number }}
                </h3>

                <font-awesome-icon
                    icon="fa-regular fa-trash-can"
                    class="pointer"
                    @click="deleteRoom(room)"
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
                        :value="room.capacity"
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
                        type="text"
                        id="occupation"
                        class="form__input"
                        :value="room.occupation"
                    />
                    <font-awesome-icon
                        icon="fa-solid fa-percent"
                        class="form_input--percent"
                    />
                </fieldset>
            </form>

            <footer class="room__actions">
                <button
                    class="form__button form__button--primary"
                    @click="modifyRoom(room)"
                >
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                    {{ $t('actions.modify') }}
                </button>
            </footer>
        </section>
    </article>
</template>

<style scoped></style>
