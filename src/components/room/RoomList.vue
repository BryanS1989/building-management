<script>
export default {
    name: 'RoomList',
    props: {
        selectedFloor: Number,
        rooms: Array,
    },
    data() {
        return {};
    },
    methods: {
        addRoom() {
            console.log('[RoomList] [addRoom()]');
        },
        modifyRoom(roomIndex) {
            console.log('[RoomList] [modifyRoom()] roomIndex: ' + roomIndex);
        },
        deleteRoom(roomIndex) {
            console.log('[RoomList] [deleteRoom()] roomIndex: ' + roomIndex);
        },
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
            v-for="(room, index) in rooms"
            :key="index"
        >
            <header class="rooms__header room__title">
                <h3 class="room__text--bold">
                    {{ $t('room') }} {{ room.number }}
                </h3>

                <font-awesome-icon
                    icon="fa-regular fa-trash-can"
                    class="pointer"
                    @click="deleteRoom(index)"
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
                    @click="modifyRoom(index)"
                >
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                    {{ $t('actions.modify') }}
                </button>
            </footer>
        </section>
    </article>
</template>

<style scoped></style>
