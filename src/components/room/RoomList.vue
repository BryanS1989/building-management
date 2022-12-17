<script>
export default {
    name: 'RoomList',
    props: {
        rooms: Array,
    },
    data() {
        return {
            selectedFloor: 0,
        };
    },
    watch: {
        $route(to, from) {
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
        },
        addRoom() {
            console.log('[RoomList] [addRoom()]');
        },
        modifyRoom(room) {
            console.log('[RoomList] [modifyRoom()] room: ' + room);
        },
        deleteRoom(room) {
            console.log('[RoomList] [deleteRoom()] room: ' + room);
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
                    @click="deleteRoom(room.number)"
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
                        type="number"
                        id="occupation"
                        class="form__input"
                        :value="room.occupation"
                    />
                </fieldset>
            </form>

            <footer class="room__actions">
                <button
                    class="form__button form__button--primary"
                    @click="modifyRoom(room.number)"
                >
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                    {{ $t('actions.modify') }}
                </button>
            </footer>
        </section>
    </article>
</template>

<style scoped></style>
