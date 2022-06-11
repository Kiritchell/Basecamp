let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
let tabs = []

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage 
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

tabBtn.addEventListener('click', 
function(){//console.log(tabs[0].url)
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify(myLeads) )
render(myLeads)
})


deleteBtn.addEventListener("dblclick", 
function(){localStorage.clear()
           myLeads=[]
           render(myLeads)
           console.log("Local Storage Cleared")}
)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})