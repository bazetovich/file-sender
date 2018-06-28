const el = document.querySelector('input[type="file"]');
const link = document.querySelector(".link");
const pond = FilePond.create(el);

pond.setOptions({
  name: "file",
  server: {
    url: "https://file.io",
    process: {
      url: "",
      method: "POST",
      withCredentials: false,
      headers: {},
      timeout: 7000,
      onload: fileLoadHandler,
      onerror: null
    },
    fetch: null,
    revert: null,
    load: null,
    restore: null
  }
});

function fileLoadHandler(res) {
  res = JSON.parse(res);

  link.setAttribute("href", res.link);
}
