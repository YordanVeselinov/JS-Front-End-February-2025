function extractText() {

    let items = document.querySelectorAll("#items li")

    result = document.getElementById("result")

    output = []

    for (item of items) {
        output.push(item.textContent)
    }

    result.textContent = output.join("\n")
}