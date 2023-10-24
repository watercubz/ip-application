const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a03f64a3a9msh71ff3a4d6ea9312p17eba6jsn0d5b9fbdbfe1",
    "X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,
    OPTIONS
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");
  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  } else {
    $results.textContent = "No se pudo obtener información para esta IP.";
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
