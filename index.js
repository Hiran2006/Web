const gitContainer = document.querySelector(".github-rep .git-container");
loadRepositories();
function loadRepositories() {
  fetch("https://api.github.com/users/Hiran2006/repos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((d) => {
        const con = document.createElement("div");
        con.innerHTML = `
          <a href="https://github.com/Hiran2006/${d.name}" target="_blank"><h3>${d.name}</h3></a>`;
        gitContainer.appendChild(con);
      });
    });
}
