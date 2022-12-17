<script>
export default {
    name: 'HeaderMain',
    props: {
        floors: Array,
    },
    emits: [],
    data() {
        return {
            selectedFloor: 1,
        };
    },
    watch: {
        $route(to) {
            console.log('[HeaderMain] [$route] params', to.params);
            this.selectedFloor = to.params.floor;
        },
    },
    methods: {
        redirectTo() {
            this.$router.push({
                name: 'roomsList',
                params: { floor: this.selectedFloor },
            });
        },
    },
};
</script>

<template>
    <header>
        <h1>{{ $t('rooms') }}</h1>

        <nav>
            <select
                v-model="selectedFloor"
                @change="redirectTo"
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
