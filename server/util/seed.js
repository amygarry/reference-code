const {Product}= require("./models")

let allProducts = [
    {
        name: "duck",
        price: 149.99,
        clearance: false
    },
    {
        name: "door",
        price: 49.99,
        clearance: false
    },
    {
        name: "Dingo",
        price: 34995.49,
        clearance: true
    },
    {
        name: "baby",
        price: 1000000.49,
        clearance: false
    }
]

const seed = async ()=>{
    await Product.bulkCreate(allProducts)
}

module.exports = seed