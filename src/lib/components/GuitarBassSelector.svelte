<script lang="ts">
    import { stringTuningObject } from "$lib/data/stringTuning";
    import { selectedStringCount, selectedInstrumentType, setCurrentStringInstrumentObject, selectedTuning, defaultTuning } from "$lib/tunerStore";

    // Create independent step values for each family
    let stepValues = $state<Record<string, number>>({});
    
    // Initialize step values for each family
    $effect(() => {
        const families = Object.keys(stringTuningObject.family);
        // UPDATE STEP VALUES IF NEW FAMILY ADDED
        families.forEach(family => {
            if (!(family in stepValues)) {
                stepValues[family] = 0; // Start at index 0 for each family
            }
        });

        // update the selectedInstrumentType to the family with the checked checkbox
        Object.keys(stepValues).forEach(family => {
            if ($selectedInstrumentType === family) {
              // the step values that change $inspect(stepValues[family]); family

              const currentTuningObject = stringTuningObject.family[family as keyof typeof stringTuningObject.family][stepValues[family]];
              $selectedStringCount = currentTuningObject.stringCount;
              $selectedTuning = defaultTuning
            }
        });

    });
</script>

<div class="guitar-bass-selector">
  {#each Object.keys(stringTuningObject.family) as family}
    <div>
      <input 
        type="checkbox" 
        id={family + "-selector-checkbox"} 
        name={family + "-selector-checkbox"} 
        checked={$selectedInstrumentType === family} 
        value={family} 
        onchange={(e) => {
          const target = e.target as HTMLInputElement;
          if (target && target.checked) {
            $selectedInstrumentType = family;
          } else if (target && !target.checked && $selectedInstrumentType === family) {
            // Prevent unchecking if this is the currently selected type
            // Re-check the checkbox
            target.checked = true;
          }
        }} 
      />
      <label for={family + "-selector"}>Select {family} Type:</label>
      <input 
        type="range" 
        id={family + "-selector"} 
        name={family + "-selector"} 
        min="0" 
        max={stringTuningObject.family[family as keyof typeof stringTuningObject.family].length - 1} 
        bind:value={stepValues[family]} 
        step="1" 
        disabled={$selectedInstrumentType !== family}
      />
      {#each stringTuningObject.family[family as keyof typeof stringTuningObject.family] as instrumentObject, index}
        <div>
          <p>{instrumentObject.label}</p>
        </div>
      {/each}
    </div>
  {/each}
</div>


