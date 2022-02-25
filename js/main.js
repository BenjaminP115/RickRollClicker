let upgrades = Array.from(document.querySelectorAll("#upgrades button"))
let upgradeValues = [1, 10, 20, 50, 100, 500]

let clicks = 0
let rps = 0

document.querySelector("#rickBtn").addEventListener("click", () => {
  clicks++
  document.querySelector("#clickView").innerText = clicks
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