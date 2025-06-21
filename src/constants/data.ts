export type Variable = {
  id: string;
  name: string;
  description: string;
};

export const VARIABLES: { [id: string]: Variable } = {
  "carbon": {
    id: "carbon",
    name: "Carbon",
    description:
      "This is the description for the Carbon variable. Adjust its value using the controls.",
  },
  "co2-distribution": {
    id: "co2-distribution",
    name: "Co2 Distribution",
    description:
      "But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.",
  },
  "fleet-distribution": {
    id: "fleet-distribution",
    name: "Fleet distribution",
    description: "This is the description for Fleet distribution. Adjust its value as needed.",
  },
  "parking-rate": {
    id: "parking-rate",
    name: "Parking Rate",
    description: "Description for Parking Rate.",
  },
  "border-rate": {
    id: "border-rate",
    name: "Border Rate",
    description: "Description for Border Rate.",
  },
  "request-rate": {
    id: "request-rate",
    name: "Request rate",
    description: "Description for Request rate.",
  },
  "variable-1-1": {
    id: "variable-1-1",
    name: "Variable 1",
    description: "Description for the first Variable 1.",
  },
  "variable-1-2": {
    id: "variable-1-2",
    name: "Variable 1",
    description: "Description for the second Variable 1.",
  },
  "variable-1-3": {
    id: "variable-1-3",
    name: "Variable 1",
    description: "Description for the third Variable 1.",
  },
  "variable-1-4": {
    id: "variable-1-4",
    name: "Variable 1",
    description: "Description for the fourth Variable 1.",
  },
  "variable-1-5": {
    id: "variable-1-5",
    name: "Variable 1",
    description: "Description for the fifth Variable 1.",
  },
  "variable-1-6": {
    id: "variable-1-6",
    name: "Variable 1",
    description: "Description for the sixth Variable 1.",
  },
};

export const CATEGORY_MAP: Record<string, string[]> = {
  "Variable Category 1": ["carbon", "co2-distribution", "fleet-distribution"],
  "Variable Category 2": [
    "parking-rate",
    "border-rate",
    "request-rate",
    "variable-1-1",
    "variable-1-2",
    "variable-1-3",
  ],
  "Variable Category 3": ["variable-1-4", "variable-1-5", "variable-1-6"],
};

export const PRIMARY_IDS = ["carbon", "co2-distribution", "fleet-distribution"];

export const SECONDARY_IDS = [
  "parking-rate",
  "border-rate",
  "request-rate",
  "variable-1-1",
  "variable-1-2",
  "variable-1-3",
];
