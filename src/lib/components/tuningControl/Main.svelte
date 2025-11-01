<script lang="ts">
    import CanvasStrings from "./CanvasStrings.svelte";
    import CurrentTuning from "./CurrentTuning.svelte";
</script>

<div class="tuning-control">
    <CanvasStrings />
    <CurrentTuning />
 </div>  




<style>
    .tuning-control {
    grid-template-columns: subgrid;
    grid-column: 6 / 12;
    grid-row: 1 / 4;
    display: flex;
    flex-direction: column;
}
</style>