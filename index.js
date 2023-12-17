const app = require("express")()
let mini;

import("minidenticons").then(minidenticons => {
    mini = minidenticons.minidenticon
})

app.get("/", (req, res) => {
    res.redirect("https://github.com/de-katze/MaaS")
})

app.get("/icon", (req, res) => {
    res.contentType("svg")
    const { seed, saturation, lightness } = req.query

    res.end(mini(seed || "MaaS", saturation || 95, lightness || 45))
})

app.listen(3000)