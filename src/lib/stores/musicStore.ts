import { writable, derived, type Readable } from "svelte/store";
import { selectedStringCount, selectedTuningArray } from "$lib/stores/tunerStore";
import { musicKeys } from "$lib/data/musicKeys";

export const selectedKey = writable("A");
export const selectedScale = writable("minor");
export const selectedFretCount = writable(24);
export const isPlaying = writable(false);


// FUNCTIONS

// input the index and the note (full, sharp, or flat)
// output using musicKeys how far the current note is from the input note
// export function getNotePositionInMusicKeys(note: string, noteString: number) {

//     // we want this to run as a derived store so it updates when selectedKey or selectedStringCount changes
//     const doDom = derived([selectedTuningArray, selectedStringCount], ([$selectedTuningArray, $selectedStringCount]) => {

//         // find the note in musicKeys
//         let currentNoteObject = null

//         for (let i = 0; i < musicKeys.length; i++) {
//             const key = musicKeys[i];
//             if (key.full === note || key.sharp === note || key.flat === note) {
//                 currentNoteObject = i;
//             }
//         }

//         // now we need to use noteString to return the current note from $selectedTuningArray

//         const position = $selectedTuningArray.indexOf(noteString as unknown as string);

//         console.log("getNotePositionInMusicKeys derived triggered with:", note, noteString, "found note position:", position);
    
//  // placeholder
//     });

//     return doDom;

//     doDom.subscribe((value) => {
//         console.log("getNotePositionInMusicKeys subscribe value:", value);
//     });


// }

export function getNotePositionInMusicKeys(note: string, noteIndex: number) {
    const derivedStore = derived([selectedTuningArray], ([$selectedTuningArray]) => {
        // Find the note position in musicKeys
        for (let i = 0; i < musicKeys.length; i++) {
            const key = musicKeys[i];
            if (key.full === note || key.sharp === note || key.flat === note) {
                console.log(`Note ${note} found at position ${i}`);
                return i.toString(); // Return the position as a string
            }
        }
        console.log(`Note ${note} not found`);
        return "-1"; // Note not found, return as string
    });
    
    
    return derivedStore;
}
