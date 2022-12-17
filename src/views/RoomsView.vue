<script>
import RoomList from '../components/room/RoomList.vue';

export default {
    components: {
        RoomList,
    },
    data() {
        return {
            selectedFloor: 1,
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
    methods: {},
};
</script>

<template>
    <main>
        <RoomList></RoomList>
    </main>
</template>
