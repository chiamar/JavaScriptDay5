var car = {
    brand: "Skoda",
    type: "Fabia",
    color: "grey",
    hp: 75,
    accessories: ["acc", "radio", "bluetooth connection", "cupholder"] s

        message: function() {
        return `My car has the following attributes: ${brand} ${type}, in ${color}, with hp ${hp} and it has the following extras: ${this.accessories}`
    }
}