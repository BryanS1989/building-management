import { createStore } from 'vuex';
import BackendApi from '../services/room.service';

export const store = createStore({
    state() {
        return {
            loading: false,
            floors: {},
            showModal: false,
            modal: {
                icon: '',
                message: '',
            },
        };
    },
    getters: {
        loading(state) {
            return state.loading;
        },
        showModal(state) {
            return state.showModal;
        },
        modal(state) {
            return state.modal;
        },
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
        loading(state, loading) {
            state.loading = loading;
        },
        showModal(state, modal) {
            state.showModal = true;
            state.modal.icon = modal.type;
            state.modal.message = modal.message;
        },
        hideModal(state) {
            state.showModal = false;
            state.modal.icon = '';
            state.modal.message = '';
        },
        setBuildingInfo(state, floors) {
            console.log(
                '[store] [mutations] [setBuildingInfo] floors: ',
                floors
            );
            state.floors = floors;
        },
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
        buildingInfo(context) {
            context.commit('loading', true);
            BackendApi.getBuildingInfo()
                .then((response) => {
                    console.log(
                        '[store] [actions] [buildingInfo]',
                        response.data
                    );
                    context.commit('setBuildingInfo', response.data);
                    context.commit('loading', false);
                })
                .catch((error) => {
                    console.log('[store] [actions] [buildingInfo]', error);
                    context.commit('setBuildingInfo', {});
                    context.commit('loading', false);
                });
        },
        addRoom(context, floor) {
            console.log('[store] [actions] [addRoom] floor', floor);
            context.commit('addRoom', floor);

            store.dispatch('showModal', {
                type: 'correct',
                message: 'Se ha añadido correctamente la sala',
            });
        },
        deleteRoom(context, { floor, room }) {
            console.log(
                '[store] [actions] [deleteRoom] floor: ',
                floor,
                ' room: ',
                room
            );
            context.commit('deleteRoom', { floor, room });

            store.dispatch('showModal', {
                type: 'correct',
                message: 'Se ha eliminado correctamente la sala ' + room.number,
            });
        },
        modifyRoom(context, { floor, room }) {
            console.log(
                '[store] [actions] [modifyRoom] floor: ',
                floor,
                ' room: ',
                room
            );
            context.commit('modifyRoom', { floor, room });

            store.dispatch('showModal', {
                type: 'correct',
                message:
                    'Se ha modificado correctamente la sala ' + room.number,
            });
        },
        showModal(context, { type, message }) {
            console.log(
                '[store] [actions] [showModal] type: ',
                type,
                ' message: ',
                message
            );
            context.commit('showModal', { type, message });

            window.setTimeout(() => context.commit('hideModal'), 1300);
        },
    },
});
