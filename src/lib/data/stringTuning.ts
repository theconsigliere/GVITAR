export const stringTuningObject = {
    family: {
        "Guitar": [
             {
                stringCount: 6,
                family: "Guitar",
                label: "6 String",
                octaves: [
                    { string: 6, min: 1, max: 2},
                    { string: 5, min: 2, max: 3},
                    { string: 4, min: 2, max: 3},
                    { string: 3, min: 3, max: 4},
                    { string: 2, min: 3, max: 4},
                    { string: 1, min: 4, max: 5},
                ],
                tunings: [
                    { name: "standard", label: "Standard", notes: ["E", "A", "D", "G", "B", "E"], type: "regular",  },
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
                octaves: [
                    { string: 7, min: 1, max: 2},
                    { string: 6, min: 1, max: 2},
                    { string: 5, min: 2, max: 3},
                    { string: 4, min: 2, max: 3},
                    { string: 3, min: 3, max: 4},
                    { string: 2, min: 3, max: 4},
                    { string: 1, min: 4, max: 5},
                ],
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
                octaves: [
                    { string: 8, min: 0, max: 1},
                    { string: 7, min: 1, max: 2},
                    { string: 6, min: 1, max: 2},
                    { string: 5, min: 2, max: 3},
                    { string: 4, min: 2, max: 3},
                    { string: 3, min: 3, max: 4},
                    { string: 2, min: 3, max: 4},
                    { string: 1, min: 4, max: 5},
                ],
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
                    octaves:[
                        { string: 4, min: 0, max: 1},
                        { string: 3, min: 1, max: 2},
                        { string: 2, min: 1, max: 2},
                        { string: 1, min: 2, max: 3},
                    ],
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
                    octaves:[
                        { string: 5, min: 0, max: 1},
                        { string: 4, min: 0, max: 1},
                        { string: 3, min: 1, max: 2},
                        { string: 2, min: 2, max: 3},
                        { string: 1, min: 2, max: 3}
                    ],
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
                    octaves:[
                        { string: 6, min: 0, max: 1},
                        { string: 5, min: 0, max: 1},
                        { string: 4, min: 1, max: 2},
                        { string: 3, min: 1, max: 2},
                        { string: 2, min: 2, max: 3},
                        { string: 1, min: 3, max: 4}
                    ],
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