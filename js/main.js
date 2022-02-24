let clicks = 0

document.querySelector("#rickBtn").addEventListener("click", () => {
  clicks++
  document.querySelector("#clickView").innerText = clicks
})