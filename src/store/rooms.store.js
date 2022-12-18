import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            floors: {
                1: [
                    {
                        number: 1,
                        capacity: 10,
                        occupation: 90,
                    },
                ],
                2: [
                    {
                        number: 1,
                        capacity: 20,
                        occupation: 50,
                    },
                    {
                        number: 2,
                        capacity: 200,
                        occupation: 5,
                    },
                ],
                3: [
                    {
                        number: 1,
                        capacity: 300,
                        occupation: 80,
                    },
                    {
                        number: 2,
                        capacity: 20,
                        occupation: 10,
                    },
                    {
                        number: 3,
                        capacity: 50,
                        occupation: 50,
                    },
                ],
                4: [
                    {
                        number: 1,
                        capacity: 300,
                        occupation: 80,
                    },
                    {
                        number: 2,
                        capacity: 20,
                        occupation: 10,
                    },
                    {
                        number: 3,
                        capacity: 50,
                        occupation: 50,
                    },
                    {
                        number: 4,
                        capacity: 40,
                        occupation: 40,
                    },
                ],
            },
        };
    },
    getters: {
        floors(state) {
            return Object.keys(state.floors);
        },
        roomsByFloor: (state) => (floorId) => {
            return state.floors[floorId];
        },
        countRoomsByFloor: (state) => (floorId) => {
            return state.floors[floorId].length;
        },
        indexRoomsByFloor: (state) => (floorId, roomNumber) => {
            return state.floors[floorId].findIndex(
                (roomAux) => roomAux.number === roomNumber
            );
        },
        maxNumberRoomByFloor: (state) => (floorId) => {
            let maxNumber = 0;
            state.floors[floorId].map((roomAux) => {
                if (roomAux.number > maxNumber) {
                    maxNumber = roomAux.number;
                }
            });

            return maxNumber + 1;
        },
    },
    mutations: {
        addRoom(state, floor) {
            console.log('[store] [mutations] [addRoom] floor: ', floor);
            const room = {
                number: this.getters.maxNumberRoomByFloor(floor.id),
                capacity: 0,
                occupation: 0,
            };

            state.floors[floor.id].push(room);
        },
        deleteRoom(state, { floor, room }) {
            console.log(
                '[store] [mutations] [deleteRoom] floor: ',
                floor,
                ' room: ',
                room
            );

            const indexRoomToDelete = this.getters.indexRoomsByFloor(
                floor.id,
                room.number
            );

            state.floors[floor.id].splice(indexRoomToDelete, 1);
        },
        modifyRoom(state, { floor, room }) {
            console.log(
                '[store] [mutations] [modifyRoom] floor: ',
                floor,
                ' room: ',
                room
            );

            const indexRoomToModify = this.getters.indexRoomsByFloor(
                floor.id,
                room.number
            );

            state.floors[floor.id].splice(indexRoomToModify, 1, room);
        },
    },
    actions: {
        addRoom(context, floor) {
            console.log('[store] [actions] [addRoom] floor', floor);
            context.commit('addRoom', floor);
        },
        deleteRoom(context, { floor, room }) {
            console.log(
                '[store] [actions] [deleteRoom] floor: ',
                floor,
                ' room: ',
                room
            );
            context.commit('deleteRoom', { floor, room });
        },
        modifyRoom(context, { floor, room }) {
            console.log(
                '[store] [actions] [modifyRoom] floor: ',
                floor,
                ' room: ',
                room
            );
            context.commit('modifyRoom', { floor, room });
        },
    },
});
