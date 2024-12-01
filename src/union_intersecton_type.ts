type Gender = "male" | "female"; // union type

type Frontend = {
  skills: string[];
  experience?: number;
};

type Backend = {
  skills: string[];
  gender: string;
};

type Fullstack = Frontend & Backend; // intersection type

const fullstackDeveloper: Fullstack = {
  skills: ["html", "css", "js"],
  gender: "male",
};
