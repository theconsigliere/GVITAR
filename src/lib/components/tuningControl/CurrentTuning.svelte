<script lang="ts">
    import { musicKeys } from "$lib/data/musicKeys";
    import { setCurrentTuningArray, selectedTuning } from "$lib/tunerStore";
</script>

<div class="current-tuning-container">
    <p>current tuning: component</p>
    {#each $setCurrentTuningArray as tuning, index}
        <div>{tuning}</div>
    {/each}
    <p>current tuning label: {$selectedTuning}</p>
 </div>  