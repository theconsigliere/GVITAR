import { writable, derived } from "svelte/store";
import { stringTuningObject } from "$lib/data/stringTuning";

export const defaultTuning = "standard";
export const defaultStringCount = 6;
export const defaultTuningArray = ['E', 'A', 'D', 'G', 'B', 'E'];

export const selectedStringCount = writable(defaultStringCount);
export const selectedTuningString = writable(defaultTuning);
export const selectedInstrumentType = writable("Guitar");
export const selectedTuningArray = writable(defaultTuningArray);

// get number of objects for selected instrument type
export const getTotalInstrumentObjects = derived(
    selectedInstrumentType,
    ($selectedInstrumentType) => {
        const instrumentObjects = stringTuningObject.family[$selectedInstrumentType as keyof typeof stringTuningObject.family]
        return instrumentObjects.length - 1;
    }
)

// SET THE INSTRUMENT OBJECT
// returns 'guitar' or 'bass'
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

       // console.log("setCurrentStringInstrumentObject derived triggered with:", $selectedStringCount);
        if (tuningObject) {
            console.log("setCurrentStringInstrumentObject found tuningObject:", tuningObject);
            return tuningObject;
        }
        return stringTuningObject.family[$selectedInstrumentType as keyof typeof stringTuningObject.family][0]; // default to 6 string if not found
    }
)

setCurrentStringInstrumentObject.subscribe((value) => {})


// SET THE CURRENT TUNING ARRAY
// returns = ['E', 'A', 'D', 'G', 'B', 'E']
export const setCurrentTuningArray = derived(
    [setCurrentStringInstrumentObject, selectedTuningString],
    ([$setCurrentStringInstrumentObject, $selectedTuningString]) => {
        const stringInstrumentObjectTunings = $setCurrentStringInstrumentObject.tunings;
        // console.log("setCurrentTuningArray derived triggered with stringInstrumentObject:", stringInstrumentObjectTunings, "selectedTuning:", $selectedTuning);
        if (stringInstrumentObjectTunings) {
            // loop through instrumentObjects to find matching string count
           
            for (const obj of stringInstrumentObjectTunings) {
                if (obj.name === $selectedTuningString) {
                    selectedTuningArray.set(obj.notes);
                    break;
                }
            }

            if (selectedTuningArray) {
                console.log("setCurrentTuningArray updated:", selectedTuningArray);
                return selectedTuningArray;
            }
        }
        return [];
    }
)

setCurrentTuningArray.subscribe((value) => {})

// NOW RETURN CURRENT TUNING ARRAY OF OBJECTS
// returns = [  {name: 'standard', label: 'Standard', notes: Array(8), type: 'regular'}, ...]
export const setAllTuningsArrayOfObjects = derived(
    setCurrentStringInstrumentObject,
    ($setCurrentStringInstrumentObject) => {

        if ($setCurrentStringInstrumentObject && $setCurrentStringInstrumentObject.tunings) {
            const allTunings = $setCurrentStringInstrumentObject.tunings;
            // Create a new object omitting the selected tuning
            // const filteredTunings = Object.fromEntries(
            //     Object.entries(allTunings).filter(([key, _]) => key !== $selectedTuning)
            // );
            // console.log("setAllTuningsArrayOfObjects filtered tunings (omitting", $selectedTuningString+ "):", filteredTunings);
            // return filteredTunings;
            console.log("setAllTuningsArrayOfObjects all tunings:", allTunings);  
            return allTunings;
        }
        // Default fallback - also omit selected tuning
        const defaultTunings = stringTuningObject.family["Guitar"][0].tunings;
        return defaultTunings;
    }
)

setAllTuningsArrayOfObjects.subscribe((value) => {});


// NOW RETURN ACTIVE TUNING OBJECT FROM TUNING ARRAY
// returns active object likes: { stringCount: 6, type: 'regular', tunings: { standard: [...], dropD: [...] }, name: 'guitar' }
export const activeTuningObject = derived(
    [setAllTuningsArrayOfObjects, selectedTuningString],
    ([$setAllTuningsArrayOfObjects, $selectedTuningString]) => {
        const tuningObject = $setAllTuningsArrayOfObjects.find(obj => obj.name === $selectedTuningString);
        console.log("activeTuningObject found tuningObject:", tuningObject);
        return tuningObject || { name: "", label: "", notes: [] };
    }
);

activeTuningObject.subscribe((value) => {});
