let upgrades = Array.from(document.querySelectorAll("#upgrades button"))
let upgradeCost = Array.from(document.querySelectorAll("#upgrades .upgrade p"))
let rickBtn = document.querySelector("#rickBtn")

let upgradeValues = [1, 10, 20, 50, 100, 500]
let baseCost = [100, 200, 300, 400, 500, 6000]
let upgradeAmount = [0, 0, 0, 0, 0, 0]

let buyAmount = 1;
let clicks = 0
let rps = 0

upgradeCost.forEach(upgrade => {
  upgrade.innerText = "Cost: " + baseCost[upgradeCost.indexOf(upgrade, 0)] + " rick rolls"
})

document.querySelector("body").addEventListener("keydown", event => {
  if (event.key == "Control")
    buyAmount = 100
  else if (event.key == "Shift")
    buyAmount = 10

  upgrades.forEach(upgrade => {
    let index = upgrades.indexOf(upgrade, 0)
    let cost1 = upgradeAmount[index] * 0.1 * baseCost[index] + baseCost[index]
    let cost = cost1 * Math.pow(1.1, buyAmount - 1)
    upgradeCost[index].innerText = "Cost: " + Math.round(cost) + " rick rolls"
  })
})

document.querySelector("body").addEventListener("keyup", () => {
  buyAmount = 1
  
  upgrades.forEach(upgrade => {
    let index = upgrades.indexOf(upgrade, 0)
    upgradeCost[index].innerText = "Cost: " + Math.round(upgradeAmount[index] * 0.1 * baseCost[index] + baseCost[index]) + " rick rolls"
  })
})

upgrades.forEach(upgrade => {
  upgrade.addEventListener("click", () => {
    let index = upgrades.indexOf(upgrade, 0)
    let cost1 = upgradeAmount[index] * 0.1 * baseCost[index] + baseCost[index]
    let cost = cost1 * Math.pow(1.1, buyAmount - 1)

    if (clicks >= cost) {
      upgradeAmount[index] += buyAmount
      document.querySelector("#upgradeDisplay" + index).innerText = upgradeAmount[index]
      rps += upgradeAmount[index] * upgradeValues[index]
      clicks -= cost
    }
  })
})

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

setInterval(() => {
  clicks += rps / 10
  document.querySelector("#clickView").innerText = Math.round(clicks * 10) / 10
}, 100)