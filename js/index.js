let continuar = true
let money = 0

const firstMessage = "Type the code of the product or service you are asking for: \n" +
    "1) Full Web Design 💻 \n" +
    "2) Rebranding 🖌 \n" +
    "3) Photography 📸 \n" +
    "4) Specialized Budget 💰 \n"

function begin(){
    let result = prompt(firstMessage).trim()
    if (result !== "1" && result !== "2" && result !== "3" && result !== "4"){
        alert("⛔ Oops! Please enter a valid number.")
    } else {
        switch (result) {
            case "1":
                alert("Full Web Design costs $200 💻💰")
                money = 200
                break
            case "2":
                alert("Rebranding costs $120 🖌💰")
                money = 120
                break
            case "3":
                alert("Photography sessions cost $80 📸💰")
                money = 80
                break
            case "4":
            alert("If you need specialized budgets, hit the info button.ℹ")
            money = 0
            break
            default:
                console.error("Oops, I didn't get your query.😢")
        }
    }
}

function budgeting(){
    while (continuar){
        begin()
        continuar = confirm("Do you want to know the cost of another service?")
    }
    alert("👍Great! Thanks for your visit! Come back again anytime. 😀")
}