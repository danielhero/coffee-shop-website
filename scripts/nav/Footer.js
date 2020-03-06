import { YearEstablished } from "./YearEstablished.js"
import { BusinessName } from "./BusinessName.js"
import { ContactList } from "./contact/ContactList.js"





const contentTarget = document.querySelector(".siteFooter")



export const Footer = () => {
    contentTarget.innerHTML = `
        ${ContactList()}    
        ${BusinessName()}
        ${YearEstablished()}
    `

}