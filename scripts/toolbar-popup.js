const el = document.querySelector('input[type="file"]');
const link = document.querySelector(".link");
const pond = FilePond.create(el);

function fileLoadHandler(res) {
  res = JSON.parse(res);

  link.setAttribute("href", res.link);
  link.classList.add("active");
}

function deActivateLink() {
  link.removeAttribute("href");
  link.classList.remove("active");
}

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

pond.onremovefile = deActivateLink;

link.onclick(function() {
  if (link.classList.contains("active")) {
    deActivateLink();
    pond.removeFiles();
  }
});
