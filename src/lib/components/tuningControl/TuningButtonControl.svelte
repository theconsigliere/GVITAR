<script lang="ts">
    // import { selectedTuningString} from "$lib/tunerStore";

    export let tuning: string;

    // function handleClick() {
    //     selectedTuning.set(tuning);
    // }
</script>

<div class="tuning-button__info {tuning}">
    <button>+</button>
    <button>-</button>
</div>

<style>
    .tuning-button__info {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .tuning-button__info button {
        font-size: 1rem;
        cursor: pointer;
    }
</style>