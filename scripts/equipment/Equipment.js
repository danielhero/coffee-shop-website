export const Equipment = (equipmentObject) => {
    return `
       <div class="equipmentStatus__Model"> 
            <h4>Model: ${equipmentObject.model} Serial: ${equipmentObject.serialNumber}</h4>
                <ul class="equipmentStatus__Info">
                    <li>Under Warranty? ${equipmentObject.isUnderWarranty}</li>
                    <li>Functional? ${equipmentObject.isFunctional}</li>
                </ul>
       </div>   
     `
 }