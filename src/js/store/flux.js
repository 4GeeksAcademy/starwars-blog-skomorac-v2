const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },

      getPeople: async () => {
        try {
          const peopleRespons = await fetch(
            "https://www.swapi.tech/api/people"
          );
          const peopleData = await peopleRespons.json();
          setStore({ people: peopleData.results });
        } catch (error) {
          console.log("error fetching people -->", error);
        }
      },

      getPeopleProperties: async (id) => {
        try {
          const peoplePropRespons = await fetch(
            "https://www.swapi.tech/api/people/" + id
          );
          const peoplePropData = await peoplePropRespons.json();
          setStore({ peopleProperties: peoplePropData.result.properties });
        } catch (error) {
          console.log("error fetching people -->", error);
        }
      },
    },
  };
};

export default getState;
