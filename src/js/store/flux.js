const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      peopleProperties: [],
      characterDetails: {},
      planets: [],
      planetProperties: [],
      planetDetails: {},
      vehicles: [],
      vehicleProperties: [],
      vehicleDetails: {},
    },

    actions: {
      getPeople: async () => {
        const oldStore = getStore();
        try {
          const peopleResponse = await fetch(
            "https://www.swapi.tech/api/people"
          );
          const peopleData = await peopleResponse.json();
          setStore({ ...oldStore, people: peopleData.results });
        } catch (error) {
          console.log("error fetching people -->", error);
        }
      },

      getPlanets: async () => {
        const oldStore = getStore();
        try {
          const planetsResponse = await fetch(
            "https://www.swapi.tech/api/planets"
          );
          const planetsData = await planetsResponse.json();
          setStore({ ...oldStore, planets: planetsData.results });
        } catch (error) {
          console.log("error fetching planets -->", error);
        }
      },

      getVehicles: async () => {
        const oldStore = getStore();
        try {
          const vehiclesResponse = await fetch(
            "https://www.swapi.tech/api/vehicles"
          );
          const vehiclesData = await vehiclesResponse.json();
          setStore({ ...oldStore, vehicles: vehiclesData.results });
        } catch (error) {
          console.log("error fetching vehicles -->", error);
        }
      },

      fetchCharacterDetails: async () => {
        try {
          const updatedCharacterDetails = {};
          const { people } = getStore();
          for (const character of people) {
            const response = await fetch(character.url);
            const data = await response.json();
            updatedCharacterDetails[character.uid] = data.result.properties;
          }
          setStore({ characterDetails: updatedCharacterDetails });
        } catch (error) {
          console.log("error fetching character details -->", error);
        }
      },

      fetchPlanetDetails: async () => {
        try {
          const updatedPlanetDetails = {};
          const { planets } = getStore();
          for (const planet of planets) {
            const response = await fetch(planet.url);
            const data = await response.json();
            updatedPlanetDetails[planet.uid] = data.result.properties;
          }
          setStore({ planetDetails: updatedPlanetDetails });
        } catch (error) {
          console.log("error fetching planet details -->", error);
        }
      },

      fetchVehicleDetails: async () => {
        try {
          const updatedVehicleDetails = {};
          const { vehicles } = getStore();
          for (const vehicle of vehicles) {
            const response = await fetch(vehicle.url);
            const data = await response.json();
            updatedVehicleDetails[vehicle.uid] = data.result.properties;
          }
          setStore({ vehicleDetails: updatedVehicleDetails });
        } catch (error) {
          console.log("error fetching vehicle details -->", error);
        }
      },

      getPeopleProperties: async (id) => {
        const oldStore = getStore();

        try {
          const peoplePropRespons = await fetch(
            "https://www.swapi.tech/api/people/" + id
          );
          const peoplePropData = await peoplePropRespons.json();
          setStore({
            ...oldStore,
            peopleProperties: peoplePropData.result.properties,
          });
        } catch (error) {
          console.log("error fetching people -->", error);
        }
      },

      getPlanetProperties: async (id) => {
        const oldStore = getStore();

        try {
          const planetPropResponse = await fetch(
            "https://www.swapi.tech/api/planets/" + id
          );
          const planetPropData = await planetPropResponse.json();
          setStore({
            ...oldStore,
            planetProperties: planetPropData.result.properties,
          });
        } catch (error) {
          console.log("error fetching planet properties -->", error);
        }
      },

      getVehicleProperties: async (id) => {
        const oldStore = getStore();

        try {
          const vehiclePropResponse = await fetch(
            "https://www.swapi.tech/api/vehicles/" + id
          );
          const vehiclePropData = await vehiclePropResponse.json();
          setStore({
            ...oldStore,
            vehicleProperties: vehiclePropData.result.properties,
          });
        } catch (error) {
          console.log("error fetching vehicle properties -->", error);
        }
      },
    },
  };
};

export default getState;
