export const appRoutes = [
  { path: "/", title: "Home" },
  { path: "/fahrzeugangebote", title: "Fahrzeugangebote" },
  { path: "/finanzierung", title: "Finanzierung" },
  { path: "/fahrzeugankauf", title: "Fahrzeugankauf" },
  { path: "/galerie", title: "Galerie" },
  { path: "/kontakt", title: "Kontakt" },
  { path: "/:id", title: "Fahrzeugdetails", dynamic: true },
];
