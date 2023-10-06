import { ROUTES } from "../constants/routes";

export const getRandomRoute = () => {
  const enumValues = Object.values(ROUTES);
  const excludedValues = [ROUTES.MAIN];

  const availableValues = enumValues.filter(
    (value) => !excludedValues.includes(value)
  );

  if (availableValues.length === 0) {
    return ROUTES.ABOUT;
  }

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * availableValues.length);

  // Return the randomly selected enum value
  return availableValues[randomIndex] as ROUTES;
};
