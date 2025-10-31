
<script lang="ts">
    import { setCurrentTuningArray } from "$lib/tunerStore";
</script>

<div class="canvas-container">
    <p>Canvas Strings Component</p>
    {#each { length: $setCurrentTuningArray.length } as string,  index}
        {@const newIndex = index + 1 }
            <div>
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





