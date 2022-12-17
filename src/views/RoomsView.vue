<script>
import HeaderMain from '../components/HeaderMain.vue';
import RoomList from '../components/room/RoomList.vue';

export default {
    components: {
        HeaderMain,
        RoomList,
    },
    data() {
        return {
            selectedFloor: 1,
            floors: [1, 2, 3],
            rooms: [
                {
                    number: 1,
                    capacity: 30,
                    occupation: 40,
                },
                {
                    number: 2,
                    capacity: 30,
                    occupation: 40,
                },
                {
                    number: 3,
                    capacity: 30,
                    occupation: 40,
                },
                {
                    number: 4,
                    capacity: 30,
                    occupation: 40,
                },
                {
                    number: 5,
                    capacity: 30,
                    occupation: 40,
                },
            ],
        };
    },
    methods: {
        printFloor(selectedFloor) {
            console.log('[App] [printFloor()] selectedFloor: ' + selectedFloor);
            this.selectedFloor = selectedFloor;
        },
    },
};
</script>

<template>
    <HeaderMain
        :floors="floors"
        @selected="printFloor"
    />

    <main>
        <RoomList
            :selected-floor="selectedFloor"
            :rooms="rooms"
        ></RoomList>
    </main>
</template>
