const el = document.querySelector('input[type="file"]');
const linkWrap = document.querySelector(".link-wrap");
const link = document.querySelector(".link");
const pond = FilePond.create(el);

function fileLoadHandler(res) {
  try {
    res = JSON.parse(res);

    link.append(res.link);
    link.setAttribute("href", res.link);
    toggleLinkWrap(true);
  } catch (e) {}
}

function toggleLinkWrap(flag) {
  if (flag) {
    linkWrap.classList.add("active");
  } else {
    linkWrap.classList.remove("active");
  }
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

pond.onremovefile = function() {
  toggleLinkWrap(false);
};

link.onclick = function() {
  toggleLinkWrap(false);
  pond.removeFiles();
};
