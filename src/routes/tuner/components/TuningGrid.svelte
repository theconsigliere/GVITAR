<script lang="ts">
    import { setAllTuningsArrayOfObjects, selectedTuningString } from "$lib/stores/tunerStore";
    import TuningNoteArray from "./TuningNoteArray.svelte";

    // todo we need to show a grid of tunings relative to the current selectedStringCount
</script>


<div class="tuning-grid">
        {#each $setAllTuningsArrayOfObjects as item, index}
            <div class="tuning-option">
                <input type="radio" name="tuning-option" id={"tuning-" + index} value={item.name} bind:group={$selectedTuningString} />
                <p>{item.type}</p>
                <div class="tuning-notes">
                    <TuningNoteArray {item} />
                </div>
                <p>{item.label}</p>
            </div>
        {/each}
</div>

<style>
    .tuning-grid {
        grid-template-columns: subgrid;
        grid-column: 1 / -1;
        grid-row: 4 / -1;
        display: grid;
    }

    .tuning-option {
         grid-template-columns: subgrid;
         grid-column: span 4;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         padding: 1rem;
         border: 1px solid var(--color-dark-grey);
    }

    .tuning-notes {
        width: 100%;
    }

    .tuning-note-array {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }


</style>