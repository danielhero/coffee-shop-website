export const Contact = (contactObject) => {
    return `
       <p class="contactInfo"> 
            ${contactObject.infoType}: ${contactObject.info}
       </p>
     `
 }