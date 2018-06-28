const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement);

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
      onload: null,
      onerror: null
    },
    fetch: null,
    revert: null,
    load: null,
    restore: null
  }
});
