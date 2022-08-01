const swapi = {
  getPeople: (id = 1) => {
    const endpoint = `https://swapi.dev/api/people/?page=${id}`;
    return fetchData(endpoint);
  },
};

const fetchData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.results;
};

export default swapi;
