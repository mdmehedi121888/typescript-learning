"use strict";
//----------------object destructing-----------
const msc = {
    fullName: "md.mehedi",
    id: "IT-23606",
    isAdmit: true,
    resident: {
        hall: "srh",
        room: 406,
    },
};
const { fullName: shortName, // its called name alias
resident: { hall: hallName }, // its called name alias
 } = msc;
//----------------array destructing-------------
const letters = ["a", "b", "c", "d", "e", "f", "g"];
const [, , thirdLetter, ...remaining] = letters;
