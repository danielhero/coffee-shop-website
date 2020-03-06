import { useEquipment } from "./equipmentDataProvider.js";
import { Equipment } from "./Equipment.js";


const contentTarget = document.querySelector(".equipmentStatus")

export const EquipmentList = () => {
    const EquipmentArray = useEquipment()

    for (const EquipmentObject of EquipmentArray) {

        const EquipmentString = Equipment(EquipmentObject)

        contentTarget.innerHTML += EquipmentString
        
    }

}