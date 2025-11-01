
<script lang="ts">
    import { setCurrentTuningObject } from "$lib/tunerStore";
</script>

<div class="canvas-container">

    <div class="canvas-string-labels">
    {#each { length: $setCurrentTuningObject.length } as string,  index}
        {@const newIndex = index + 1 }
            <div class="canvas-string-label">
                <span>{newIndex}{#if newIndex === 1}st
                    {:else if newIndex === 2}nd
                    {:else if newIndex === 3}rd
                    {:else}th
                {/if}
                </span>
                <span>String</span>
            </div>
    {/each}
    </div>
 </div>  

 <style>
    .canvas-string-labels {
        display: flex;
    }


    .canvas-string-label {
        font-size: 0.5rem;
    }


 </style>





