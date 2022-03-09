let upgrades = Array.from(document.querySelectorAll("#upgrades button"))
let rickBtn = document.querySelector("#rickBtn")

let upgradeValues = [1, 10, 20, 50, 100, 500]

let clicks = 0
let rps = 0

rickBtn.addEventListener("click", () => {
  clicks++

  rickBtn.style.width = "200px"
  rickBtn.style.height = "241px"
  
  document.querySelector("#clickView").innerText = clicks

  setTimeout(() => {
    rickBtn.style.width = "220px"
    rickBtn.style.height = "261px"
  }, 100)
})

upgrades.forEach(upgrade => {
  upgrade.addEventListener("click", () => {
    let index = upgrades.indexOf(upgrade)
    rps += upgradeValues[index]
  })
})

setInterval(() => {
  clicks += rps / 100
  document.querySelector("#clickView").innerText = Math.round(clicks * 100) / 100
}, 10)

