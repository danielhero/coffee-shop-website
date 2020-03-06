export const Product = (productObject) => {
    return `
       <div class="currentProducts__Name"> 
            <h4>THE MENU</h4>
                <h5>${productObject.name}</h5>
                    <ul class="currentProducts__Info">
                        <li>Origin: ${productObject.beanType}</li>
                        <li>Roast: ${productObject.roastType}</li>
                        <li>Price: ${productObject.price}</li>
                    </ul>
       </div>   
     `
 }