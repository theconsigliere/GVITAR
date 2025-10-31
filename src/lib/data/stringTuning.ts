// export const stringTuning = {
//     4: {
//         family: "Bass",
//         name: "4 String",
//         tunings: {
//             "standard": ["E", "A", "D", "G"],
//             "drop D": ["D", "A", "D", "G"],
//             "drop C": ["C", "G", "C", "F"],
//             "half Step Down": ["D#", "G#", "C#", "F#"],
//             "whole Step Down": ["D", "G", "C", "F"],
//             "drop B": ["B", "F#", "B", "E"],
//             "drop A": ["A", "E", "A", "D"],
//             "open D": ["D", "A", "D", "F#"],
//             "open E": ["E", "B", "E", "G#"],
//             "open G": ["D", "G", "D", "G"],
//             "open C": ["C", "G", "C", "E"]
//         },
//     },  
//     5: {
//         family: "Bass",
//         name: "5 String",
//         tunings: {
//             "standard": ["A", "D", "G", "B", "E"],
//             "drop C": ["G", "C", "F", "Bb", "D"],
//             "half Step Down": ["Ab", "Db", "Gb", "Bb", "Eb"],
//             "whole Step Down": ["G", "C", "F", "A", "D"],
//             "drop B": ["F#", "B", "E", "A", "D"],
//             "drop A": ["E", "A", "D", "G", "C"],
//             "open D": ["A", "D", "A", "D", "F#"],
//             "open E": ["B", "E", "B", "E", "G#"],
//             "open G": ["D", "G", "D", "G", "B"],
//             "open C": ["G", "C", "G", "C", "E"]
//         }
//     },
//     6: {
//         family: "Guitar",
//         name: "6 String",
//         tunings: {
//             "standard": ["E", "A", "D", "G", "B", "E"],
//             "drop D": ["D", "A", "D", "G", "B", "E"],
//             "drop C": ["C", "G", "C", "F", "Bb", "D"],
//             "half Step Down": ["Eb", "Ab", "Db", "Gb", "Bb", "Eb"],
//             "whole Step Down": ["D", "G", "C", "F", "A", "D"],
//             "drop B": ["B", "Gb", "B", "E", "A", "D"],
//             "open D": ["D", "A", "D", "Gb", "A", "D"],
//             "open E": ["E", "B", "E", "Ab", "B", "E"],
//             "open G": ["D", "G", "D", "G", "B", "D"],
//             "open C": ["C", "G", "C", "G", "C", "E"],
//             "dadgad": ["D", "A", "D", "G", "A", "D"]
//         }
//     },
//     7: {
//         family: "Guitar",
//         name: "7 String",
//         tunings: {
//             "standard": ["B", "E", "A", "D", "G", "B", "E"],
//             "drop A": ["A", "E", "A", "D", "G", "B", "E"],
//             "drop G": ["G", "D", "G", "C", "F", "A", "D"],
//             "half Step Down": ["Bb", "Eb", "Ab", "Db", "Gb", "Bb", "Eb"],
//             "whole Step Down": ["A", "D", "G", "C", "F", "A", "D"],
//             "drop Gb": ["Gb", "B", "Gb", "B", "E", "A", "D"],
//             "drop F": ["F", "Bb", "F", "Bb", "Eb", "Ab", "Db"],
//             "drop E": ["E", "B", "E", "A", "D", "G", "C"],
//             "drop D": ["D", "A", "D", "G", "C", "F", "A"]
//         }
//     },
//     8: {
//         family: "Guitar",
//         name: "8 String",
//         tunings: {
//             "standard": ["Gb", "B", "E", "A", "D", "G", "B", "E"],
//             "drop E": ["E", "B", "E", "A", "D", "G", "B", "E"],
//             "drop D": ["Gb", "B", "E", "A", "D", "G", "B", "D"],
//             "half Step Down": ["F", "Bb", "Eb", "Ab", "Db", "Gb", "Bb", "Eb"],
//             "whole Step Down": ["E", "A", "D", "G", "C", "F", "A", "D"],
//             "drop C": ["C", "G", "C", "F", "Bb", "Eb", "G", "C"],
//             "drop B": ["B", "Gb", "B", "E", "A", "D", "Gb", "B"],
//             "drop A": ["A", "E", "A", "D", "G", "C", "E", "A"],
//             "drop G": ["G", "D", "G", "C", "F", "A", "D", "G"]
//         }
//     }
// }

export const stringTuningObject = {
    family: {
        "Guitar": [
             {
                stringCount: 6,
                family: "Guitar",
                label: "6 String",
                tunings: [
                    { name: "standard", label: "Standard", notes: ["E", "A", "D", "G", "B", "E"], type: "regular" },
                    { name: "drop-d", label: "Drop D", notes: ["D", "A", "D", "G", "B", "E"], type: "drop" },
                    { name: "drop-c", label: "Drop C", notes: ["C", "G", "C", "F", "Bb", "D"], type: "drop" },
                    { name: "half-step-down", label: "Half Step Down", notes: ["Eb", "Ab", "Db", "Gb", "Bb", "Eb"], type: "regular" },
                    { name: "whole-step-down", label: "Whole Step Down", notes: ["D", "G", "C", "F", "A", "D"], type: "regular" },
                    { name: "drop-b", label: "Drop B", notes: ["B", "Gb", "B", "E", "A", "D"], type: "drop" },
                    { name: "open-d", label: "Open D", notes: ["D", "A", "D", "Gb", "A", "D"], type: "open" },
                    { name: "open-e", label: "Open E", notes: ["E", "B", "E", "Ab", "B", "E"], type: "open" },
                    { name: "open-g", label: "Open G", notes: ["D", "G", "D", "G", "B", "D"], type: "open" },
                    { name: "open-c", label: "Open C", notes: ["C", "G", "C", "G", "C", "E"], type: "open" },
                    { name: "dadgad", label: "DADGAD", notes: ["D", "A", "D", "G", "A", "D"], type: "special" }
                ]   
            },
            {
                stringCount: 7,
                family: "Guitar",
                label: "7 String",
                tunings: [
                    { name: "standard", label: "Standard", notes: ["B", "E", "A", "D", "G", "B", "E"], type: "regular" },
                    { name: "drop-a", label: "Drop A", notes: ["A", "E", "A", "D", "G", "B", "E"], type: "drop" },
                    { name: "drop-g", label: "Drop G", notes: ["G", "D", "G", "C", "F", "A", "D"], type: "drop" },
                    { name: "half-step-down", label: "Half Step Down", notes: ["Bb", "Eb", "Ab", "Db", "Gb", "Bb", "Eb"], type: "regular" },
                    { name: "whole-step-down", label: "Whole Step Down", notes: ["A", "D", "G", "C", "F", "A", "D"], type: "regular" },
                    { name: "drop-gb", label: "Drop Gb", notes: ["Gb", "B", "Gb", "B", "E", "A", "D"], type: "drop" },
                    { name: "drop-f", label: "Drop F", notes: ["F", "Bb", "F", "Bb", "Eb", "Ab", "Db"], type: "drop" },
                    { name: "drop-e", label: "Drop E", notes: ["E", "B", "E", "A", "D", "G", "C"], type: "drop" },
                    { name: "drop-d", label: "Drop D", notes: ["D", "A", "D", "G", "C", "F", "A"], type: "drop" }
                ]
            },
            {
                stringCount: 8,
                family: "Guitar",
                label: "8 String",
                tunings: [
                    { name: "standard", label: "Standard", notes: ["Gb", "B", "E", "A", "D", "G", "B", "E"], type: "regular" },
                    { name: "drop-e", label: "Drop E", notes: ["E", "B", "E", "A", "D", "G", "B", "E"], type: "drop" },
                    { name: "drop-d", label: "Drop D", notes: ["Gb", "B", "E", "A", "D", "G", "B", "D"], type: "drop" },
                    { name: "half-step-down", label: "Half Step Down", notes: ["F", "Bb", "Eb", "Ab", "Db", "Gb", "Bb", "Eb"], type: "regular" },
                    { name: "whole-step-down", label: "Whole Step Down", notes: ["E", "A", "D", "G", "C", "F", "A", "D"], type: "regular" },
                    { name: "drop-c", label: "Drop C", notes: ["C", "G", "C", "F", "Bb", "Eb", "G", "C"], type: "drop" },
                    { name: "drop-b", label: "Drop B", notes: ["B", "Gb", "B", "E", "A", "D", "Gb", "B"], type: "drop" },
                    { name: "drop-a", label: "Drop A", notes: ["A", "E", "A", "D", "G", "C", "E", "A"], type: "drop" },
                    { name: "drop-g", label: "Drop G", notes: ["G", "D", "G", "C", "F", "A", "D", "G"], type: "drop" }
                ]
            }
        ],
        "Bass": [
                {
                    stringCount: 4,
                    family: "Bass",
                    label: "4 String",
                    tunings: [
                        { name: "standard", label: "Standard", notes: ["E", "A", "D", "G"], type: "regular" },
                        { name: "drop-d", label: "Drop D", notes: ["D", "A", "D", "G"], type: "drop" },
                        { name: "drop-c", label: "Drop C", notes: ["C", "G", "C", "F"], type: "drop" },
                        { name: "half-step-down", label: "Half Step Down", notes: ["D#", "G#", "C#", "F#"], type: "regular" },
                        { name: "whole-step-down", label: "Whole Step Down", notes: ["D", "G", "C", "F"], type: "regular" },
                        { name: "drop-b", label: "Drop B", notes: ["B", "F#", "B", "E"], type: "drop" },
                        { name: "drop-a", label: "Drop A", notes: ["A", "E", "A", "D"], type: "drop" },
                        { name: "open-d", label: "Open D", notes: ["D", "A", "D", "F#"], type: "open" },
                        { name: "open-e", label: "Open E", notes: ["E", "B", "E", "G#"], type: "open" },
                        { name: "open-g", label: "Open G", notes: ["D", "G", "D", "G"], type: "open" },
                        { name: "open-c", label: "Open C", notes: ["C", "G", "C", "E"], type: "open" }
                    ]
                },  
                {
                    stringCount: 5,
                    family: "Bass",
                    label: "5 String",
                    tunings: [
                        { name: "standard", label: "Standard", notes: ["A", "D", "G", "B", "E"], type: "regular" },
                        { name: "drop-c", label: "Drop C", notes: ["G", "C", "F", "Bb", "D"], type: "drop" },
                        { name: "half-step-down", label: "Half Step Down", notes: ["Ab", "Db", "Gb", "Bb", "Eb"], type: "regular" },
                        { name: "whole-step-down", label: "Whole Step Down", notes: ["G", "C", "F", "A", "D"], type: "regular" },
                        { name: "drop-b", label: "Drop B", notes: ["F#", "B", "E", "A", "D"], type: "drop" },
                        { name: "drop-a", label: "Drop A", notes: ["E",  "A", "D", "G", "C"], type: "drop" },
                        { name: "open-d", label: "Open D", notes: ["A", "D", "A", "D", "F#"], type: "open" },
                        { name: "open-e", label: "Open E", notes: ["B", "E", "B", "E", "G#"], type: "open" },
                        { name: "open-g", label: "Open G", notes: ["D", "G", "D", "G", "B"], type: "open" },
                        { name: "open-c", label: "Open C", notes: ["G", "C", "G", "C", "E"], type: "open" }
                    ]
                },
                {
                    stringCount: 6,
                    family: "Bass",
                    label: "6 String",
                    tunings: [
                        { name: "standard", label: "Standard", notes: ["B", "E", "A", "C", "G", "D"], type: "regular" },
                        { name: "drop-a", label: "Drop A", notes: ["A", "E", "A", "D", "G", "C"], type: "drop" },
                        { name: "drop-g", label: "Drop G", notes: ["G", "D", "G", "C", "F", "A"], type: "drop" },
                        { name: "half-step-down", label: "Half Step Down", notes: ["Bb", "Eb", "Ab", "Db", "Gb", "Bb"], type: "regular" },
                        { name: "whole-step-down", label: "Whole Step Down", notes: ["A", "D", "G", "C", "F", "A"], type: "regular" },
                        { name: "drop-fb", label: "Drop Fb", notes: ["Fb", "Bb", "Fb", "Bb", "Eb", "Ab"], type: "drop" },
                        { name: "high-b", label: "High B", notes: ["B", "E", "A", "D", "G", "B"], type: "drop" }
                    ]
                },
        ],
    }
}