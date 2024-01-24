const btnNPM = document.querySelector("#btnNPM");

const userRequest = axios.create({
  baseURL: "https://openapi.npm.gov.tw",
  headers: { apiKey: "a43b71e8-1e1e-4db6-8065-a3be827cd3d6" },
  timeout: 1000,
});

const userRequest2 = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

btnNPM.addEventListener("click", async (e) => {
  e.preventDefault();
  let apiData;

  try {
    await userRequest
      .get("/v1/rest/collection/search/")
      .then(function (response) {
        console.log(response);
        console.log(response.headers);
        console.log(response.status);
        console.log(response.config);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    /*
    await userRequest2
      .get("/proxy/v1/rest/collection/search/")
      .then(function (response) {
        // default axios return object
        console.log("Default axios return object");
        console.log("response");
        console.log(response);
        // console.log("headers");
        // console.log(response.headers);
        // console.log("status");
        // console.log(response.status);
        // console.log("config");
        // console.log(response.config);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      */
  } catch (e) {
    console.log(error);
  } finally {
    console.log("appFetchAxios -> Axios");
  }
});
