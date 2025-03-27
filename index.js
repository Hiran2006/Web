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
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  alert("This website version for desktop only.");
  document.body.innerHTML = "";
}
