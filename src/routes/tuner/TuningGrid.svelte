<script lang="ts">
    import { setCurrentTuningGrid, selectedTuning } from "$lib/tunerStore";
    // todo we need to show a grid of tunings relative to the current selectedStringCount
</script>


<div class="tuning-selector-container">
        <h3>Current Tuning</h3>
        {#each $setCurrentTuningGrid as item, index}
            <div>
                <input type="radio" name="tuning-option" id={"tuning-" + index} value={item.name} bind:group={$selectedTuning} />
                <h4>{item.label}</h4>
                <p>{item.type}</p>
                {#each item.notes as note, noteIndex}
                    <span>{note}</span>
                {/each}
            </div>
        {/each}
</div>