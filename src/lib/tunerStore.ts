import { writable, derived } from "svelte/store";
import { stringTuningObject } from "$lib/data/stringTuning";

export const defaultTuning = "standard";
export const defaultStringCount = 6;

export const selectedStringCount = writable(defaultStringCount);
export const selectedTuning = writable(defaultTuning);
export const selectedKey = writable("A");
export const selectedScale = writable("minor");
export const selectedFretCount = writable(24);
export const isPlaying = writable(false);
export const selectedInstrumentType = writable("Guitar");

// get number of objects for selected instrument type
export const getTotalInstrumentObjects = derived(
    selectedInstrumentType,
    ($selectedInstrumentType) => {
        const instrumentObjects = stringTuningObject.family[$selectedInstrumentType as keyof typeof stringTuningObject.family]
        return instrumentObjects.length - 1;
    }
)

// SET THE OBJECT
export const setCurrentStringInstrumentObject = derived(
    [selectedStringCount, selectedInstrumentType],
    ([$selectedStringCount, $selectedInstrumentType]) => {
        const instrumentObjects = stringTuningObject.family[$selectedInstrumentType as keyof typeof stringTuningObject.family]

        // loop through instrumentObjects to find matching string count
        let tuningObject = null;
        for (const obj of instrumentObjects) {
            if (obj.stringCount === $selectedStringCount) {
                tuningObject = obj;
                break;
            }
        }

        console.log("setCurrentStringInstrumentObject derived triggered with:", $selectedStringCount);
        if (tuningObject) {
            console.log("setCurrentStringInstrumentObject found tuningObject:", tuningObject);
            return tuningObject;
        }
        return stringTuningObject.family[$selectedInstrumentType as keyof typeof stringTuningObject.family][0]; // default to 6 string if not found
    }
)

setCurrentStringInstrumentObject.subscribe((value) => {})

// GET THE CURRENT TUNING ARRAY
export const setCurrentTuningArray = derived(
    [setCurrentStringInstrumentObject, selectedTuning],
    ([$setCurrentStringInstrumentObject, $selectedTuning]) => {
        const stringInstrumentObjectTunings = $setCurrentStringInstrumentObject.tunings;
        console.log("setCurrentTuningArray derived triggered with stringInstrumentObject:", stringInstrumentObjectTunings, "selectedTuning:", $selectedTuning);
        if (stringInstrumentObjectTunings) {
            console.log("setCurrentTuningArray found stringInstrumentObject:", stringInstrumentObjectTunings);
            // const tuningArray = tuningObject.tunings[$selectedTuning as keyof typeof tuningObject.tunings];
            
            // loop through instrumentObjects to find matching string count
            let selectedTuningObject = null;
            for (const obj of stringInstrumentObjectTunings) {
                if (obj.name === $selectedTuning) {
                    selectedTuningObject = obj.notes;
                    break;
                }
            }

            if (selectedTuningObject) {
                console.log("setCurrentTuningArray updated:", selectedTuningObject);
                return selectedTuningObject;
            }
        }
        return [];
    }
)

setCurrentTuningArray.subscribe((value) => {})

// NOW RETURN ACTIVE TUNINGS
export const setCurrentTuningGrid = derived(
    setCurrentStringInstrumentObject,
    ($setCurrentStringInstrumentObject) => {

        if ($setCurrentStringInstrumentObject && $setCurrentStringInstrumentObject.tunings) {
            const allTunings = $setCurrentStringInstrumentObject.tunings;
            // Create a new object omitting the selected tuning
            // const filteredTunings = Object.fromEntries(
            //     Object.entries(allTunings).filter(([key, _]) => key !== $selectedTuning)
            // );
            // console.log("setCurrentTuningGrid filtered tunings (omitting", $selectedTuning + "):", filteredTunings);
            // return filteredTunings;
            return allTunings;
        }
        // Default fallback - also omit selected tuning
        const defaultTunings = stringTuningObject.family["Guitar"][0].tunings;
        return defaultTunings;
    }
)

setCurrentTuningGrid.subscribe((value) => {});

//STORE FUNCTIONS

// Function that converts step value to tuning count
// export function getTuningCountFromStep(stepValue: number): number {
//     const tuningKeys = Object.keys(stringTuning);
//     const tuningKey = tuningKeys[stepValue] as unknown as keyof typeof stringTuning;
    
//     if (tuningKey && stringTuning[tuningKey]) {
//         const tuningCount = Number(tuningKey);
//         console.log("getTuningCountFromStep: stepValue", stepValue, "-> tuningKey", tuningKey, "-> tuningCount", tuningCount);
//         return tuningCount;
//     }
    
//     console.log("getTuningCountFromStep: fallback for stepValue", stepValue);
//     return defaultStringCount; // default fallback
// }
