// Api Wikipedia to Find Something that User Needs
var input = document.getElementById("inp");
var result = document.getElementById("result");
const getRandomLinks = () => {
  const value = input.value;
  result.innerHTML = "";
  fetch(
    "https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=5&exintro&explaintext&gpslimit=5&gpssearch=" +
      value +
      "&origin=*",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      Object.keys(data.query.pages).map(function (key) {
        const { title } = data.query.pages[key];
        const li = document.createElement("li");
        const text = li.textContent;
        li.textContent = "";
        const a = document.createElement("a");
        a.href = `https://en.wikipedia.org/wiki/${title}`;
        a.setAttribute("target", "_blank");
        a.textContent = text;
        a.innerHTML = `${title}`;
        li.appendChild(a);
        result.appendChild(li);
      });
    });
};

getRandomLinks();
// Api Wikipedia to Find Something that User Needs
