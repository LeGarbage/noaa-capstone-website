import { marked } from "marked"
import { reorg } from "@orgajs/reorg"
import mutate from "@orgajs/reorg-rehype"
import toHtml from "rehype-stringify"

function orgToHtml(orgText) {
    const processor = reorg().use(mutate).use(toHtml)

    return processor().processSync(orgText).value
}

const htmlStrings = {}

const orgModules = import.meta.glob("./progress-reports/**/*.org", { as: "raw" })
const mdModules = import.meta.glob("./progress-reports/**/*.md", { as: "raw" })

async function loadReports() {
    async function processModules(modules, parser) {
        for (const path in modules) {
            const text = await modules[path]()
            const match = path.match(/\.\/progress-reports\/([^\/]+)\/([^\/]+)\.(org|md)$/)
            if (!match) { continue }
            const [, person, file] = match

            const week = file.replace(/\.(org|md)$/, "")

            if (!htmlStrings[week]) { htmlStrings[week] = {} }

            htmlStrings[week][person] = parser(text)
        }
    }

    await processModules(orgModules, orgToHtml)
    await processModules(mdModules, marked)

    console.log(htmlStrings)
    renderReports()
}

function renderReports() {
    const container = document.getElementById("reports")
    if (!container) return

    const sortedWeeks = Object.keys(htmlStrings).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    sortedWeeks.forEach((week) => {
        const weekHeading = document.createElement("h2")
        weekHeading.textContent = week
        container.appendChild(weekHeading)

        const persons = htmlStrings[week]
        for (const person in persons) {
            const personHeading = document.createElement("h3")
            personHeading.textContent = person
            container.appendChild(personHeading)

            const reportDiv = document.createElement("div")
            reportDiv.innerHTML = persons[person]
            container.appendChild(reportDiv)
        }
    })
}

loadReports()
