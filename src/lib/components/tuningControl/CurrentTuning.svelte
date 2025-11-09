<script lang="ts">

    import { selectedTuningArray, activeTuningObject } from "$lib/stores/tunerStore";
    import TuningButtonControl from "./TuningButtonControl.svelte";
    import { page } from '$app/state';
</script>

<div class="current-tuning">
    <div class="current-tuning__container">
        {#each $selectedTuningArray as tuning, index}
        <div class="tuning-string">   
            <button class="tuning_key">{tuning}</button>
            <!--  only show TuningButtonControl on /tuner page -->
            {#if page.url.pathname === '/tuner'}
              <TuningButtonControl {tuning} />
            {/if}
        </div>
        {/each}
    </div>
    <p>{$activeTuningObject.label}</p>
 </div>  

 <style>
    .current-tuning {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .current-tuning__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .tuning-string {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tuning_key {
        font-size: 3dvw;
        aspect-ratio: 1 / 1;
        cursor: pointer;
        width: 4.5dvw;
    }
</style>