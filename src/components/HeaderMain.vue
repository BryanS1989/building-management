<script>
export default {
    name: 'HeaderMain',
    props: {
        floors: Array,
    },
    emits: ['selectedFloor'],
    data() {
        return {
            selectedFloor: 1,
        };
    },
};
</script>

<template>
    <header>
        <h1>{{ $t('rooms') }}</h1>

        <nav>
            <select
                v-model="selectedFloor"
                @change="$emit('selectedFloor', selectedFloor)"
                class="form__input width--auto"
            >
                <option
                    v-for="floor in floors"
                    :key="floor"
                    v-bind:value="floor"
                >
                    {{ $t('floor') }} {{ floor }}
                </option>
            </select>
        </nav>
    </header>

    <hr />
</template>

<style scoped></style>
