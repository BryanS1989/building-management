<script>
import RoomCard from './RoomCard.vue';

export default {
    name: 'RoomList',
    components: { RoomCard },
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
        selectedFloor() {
            this.rooms = this.$store.getters.roomsByFloor(this.selectedFloor);
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

            if (this.selectedFloor !== newFloor) {
                this.selectedFloor = newFloor;
            }
        },
        addRoom() {
            console.log('[RoomList] [addRoom()]');
            this.$store.dispatch('addRoom', { id: this.selectedFloor });
        },
        modifyRoom(room) {
            console.log('[RoomList] [modifyRoom()] room: ', room);
            this.$store.dispatch('modifyRoom', {
                floor: { id: this.selectedFloor },
                room: {
                    number: room.number,
                    capacity: room.capacity,
                    occupation: room.occupation,
                },
            });
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

    <article
        class="rooms"
        v-if="rooms.length > 0"
    >
        <RoomCard
            v-for="room in rooms"
            :key="selectedFloor + room.number"
            :room="room"
            @modify="modifyRoom"
            @delete="deleteRoom"
        >
        </RoomCard>
    </article>
    <article
        class="rooms__empty animate__animated animate__tada"
        v-else
    >
        <font-awesome-icon
            icon="fa-solid fa-building-circle-exclamation"
            class="fa-5x"
        />
        <h2>{{ $t('noRooms') }}</h2>
    </article>
</template>

<style scoped></style>
