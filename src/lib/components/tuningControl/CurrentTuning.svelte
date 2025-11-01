<script lang="ts">
    import { musicKeys } from "$lib/data/musicKeys";
    import { setCurrentTuningObject, selectedTuning, activeTuningObject } from "$lib/tunerStore";
    import TuningButtonControl from "./TuningButtonControl.svelte";
    import { page } from '$app/state';
</script>

<div class="current-tuning">
    <div class="current-tuning__container">
        {#each $setCurrentTuningObject as tuning, index}
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
    }

    .tuning-string {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tuning_key {
        font-size: 3rem;
    }
</style>