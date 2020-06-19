import coordinates from "./coordinates";

const path = [
  {
    from: {
      name: "Paris",
      coordinates: coordinates.Paris,
    },
    to: {
      name: "Tours",
      coordinates: coordinates.Tours,
    },
  },

  {
    from: {
      name: "Paris",
      coordinates: coordinates.Paris,
    },
    to: {
      name: "Dijon",
      coordinates: coordinates.Dijon,
    },
  },

  {
    from: {
      name: "Dijon",
      coordinates: coordinates.Dijon,
    },
    to: {
      name: "Lyon",
      coordinates: coordinates.Lyon,
    },
  },

  {
    from: {
      name: "Tours",
      coordinates: coordinates.Tours,
    },
    to: {
      name: "Limoges",
      coordinates: coordinates.Limoges,
    },
  },

  {
    from: {
      name: "Lyon",
      coordinates: coordinates.Lyon,
    },
    to: {
      name: "Grenoble",
      coordinates: coordinates.Grenoble,
    },
  },

  {
    from: {
      name: "Limoges",
      coordinates: coordinates.Limoges,
    },
    to: {
      name: "Bordeaux",
      coordinates: coordinates.Bordeaux,
    },
  },

  {
    from: {
      name: "Bordeaux",
      coordinates: coordinates.Bordeaux,
    },
    to: {
      name: "Toulouse",
      coordinates: coordinates.Toulouse,
    },
  },

  {
    from: {
      name: "Toulouse",
      coordinates: coordinates.Toulouse,
    },
    to: {
      name: "Montpellier",
      coordinates: coordinates.Montpellier,
    },
  },

  {
    from: {
      name: "Montpellier",
      coordinates: coordinates.Montpellier,
    },
    to: {
      name: "Marseille",
      coordinates: coordinates.Marseille,
    },
  },
  {
    from: {
      name: "Grenoble",
      coordinates: coordinates.Grenoble,
    },
    to: {
      name: "Marseille",
      coordinates: coordinates.Marseille,
    },
  },

  {
    from: {
      name: "Marseille",
      coordinates: coordinates.Marseille,
    },
    to: {
      name: "Toulon",
      coordinates: coordinates.Toulon,
    },
  },
];

export default path;
