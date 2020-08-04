const baseUrl = "https://pixabay.com/api/";

const fetchImages = () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const requestParams =
    "?&page=1&category=forest&key=14591029-b9abf563857b66fab696140db&image_type=photo&orientation=horizontal&per_page=4";

  return fetch(baseUrl + requestParams, { options }).then((response) =>
    response.json().then((data) => data.hits)
  );
};

export { fetchImages };
