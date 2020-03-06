export const Employee = (employeeObject) => {
    return `
       <div class="employees__Name"> 
            <h4>${employeeObject.firstName} ${employeeObject.lastName}</h4>
                <section class="employees__Status">
                    <p>Title: ${employeeObject.jobTitle}</p>
                    <p> Hours Scheduled: ${employeeObject.hoursScheduled}</p>
                </section>
       </div>
     `
 }