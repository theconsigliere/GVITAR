<script lang="ts">
    import { getNotePositionInMusicKeys } from "$lib/stores/musicStore";

    export let item: {
        label: string;
        type: string;
        notes: string[];
    };

    // Simple function that gets the current value from the store
    function getPosition(note: string, index: number): string {
        const store = getNotePositionInMusicKeys(note, index);
        let currentValue = "-1";
        
        // Get the current value synchronously
        const unsubscribe = store.subscribe(value => {
            currentValue = value;
        });
        unsubscribe();
        
        return currentValue;
    }

</script>


<div class="tuning-note-array">
    {#each item.notes as note, noteIndex}
        <div class="note-container">
            <h3>{note}</h3>
            <p>Position: {getPosition(note, noteIndex)}</p>
        </div>
    {/each}
 </div>

<style>
    .tuning-note-array {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>