import Header from "../../libs/components/header/script.js";
import { fetchUtils } from "../../libs/utils/fetchUtils.js";

const sections = {
  header: document.querySelector("section#header"),
  form: document.querySelector("form"),
};

const header = new Header(sections.header);
header.init();

sections.form.addEventListener("submit", async (e) => {
  const data = {
    name: sections.form.querySelector(".name").value,
    lastname: sections.form.querySelector(".lastname").value,
    login: sections.form.querySelector(".login").value,
    password: sections.form.querySelector(".password").value,
    codice: sections.form.querySelector(".codice").value,
  };

  return fetchUtils
    .postData("../../api/sign_up.php", data)
    .then((fetchResponse) => {
      e.preventDefault();
      debugger;
      const responseStatus = fetchResponse.status;

      if (responseStatus >= 200 && responseStatus < 300) {
        window.location.href = "../index.html";
      } else {
        console.error(fetchResponse);
      }
    });
});
