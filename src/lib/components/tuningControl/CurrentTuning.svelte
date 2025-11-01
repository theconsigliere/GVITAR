<script lang="ts">
    import { musicKeys } from "$lib/data/musicKeys";
    import { setCurrentTuningArray, selectedTuning } from "$lib/tunerStore";
    import TuningButtonControl from "./TuningButtonControl.svelte";
    import { page } from '$app/state';
</script>

<div class="current-tuning">
    <div class="current-tuning__container">
        {#each $setCurrentTuningArray as tuning, index}
        <div>   
            <button class="h1">{tuning}</button>

            <!--  only show TuningButtonControl on /tuner page -->
            {#if page.url.pathname === '/tuner'}
              <TuningButtonControl {tuning} />
            {/if}
        </div>
        {/each}
    </div>
    <p>{$selectedTuning}</p>
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
    }
</style>