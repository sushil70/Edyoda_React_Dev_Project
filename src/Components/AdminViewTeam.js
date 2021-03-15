import React from "react"
import classes from "./admin.module.css";

class AdminViewTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    deleting = (e) => {
        const deletingitem = []
        const gettingdatafromlocalstore = localStorage.getItem("salesdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const datalength = afterparsemedicinedata.length
        for(let i = 0; i < datalength; i++){
            if(e.target.id != i){
                deletingitem.push(afterparsemedicinedata[i])
            }
            else{
                let list = document.getElementById("list"+i)
                list.style.display = "none"
            }
        }
        localStorage.setItem("salesdata",JSON.stringify(deletingitem))
    }

    editing = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("salesdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let FirstName = document.getElementById("FirstName"+i)
                let LastName = document.getElementById("LastName"+i)
                let Dateofbirth = document.getElementById("Dateofbirth"+i)
                let Gender = document.getElementById("Gender"+i)
                let ExperienceYears = document.getElementById("ExperienceYears"+i)
                let FirstNameinput = document.getElementById("FirstNameinput"+i)
                let LastNameinput = document.getElementById("LastNameinput"+i)
                let Dateofbirthinput = document.getElementById("Dateofbirthinput"+i)
                let Genderinput = document.getElementById("Genderinput"+i)
                let ExperienceYearsinput = document.getElementById("ExperienceYearsinput"+i)
                FirstName.style.display="none"
                LastName.style.display="none"
                Dateofbirth.style.display="none"
                Gender.style.display="none"
                ExperienceYears.style.display="none"
                FirstNameinput.style.display="block"
                LastNameinput.style.display="block"
                Dateofbirthinput.style.display="block"
                Genderinput.style.display="block"
                ExperienceYearsinput.style.display="block"
            }
        }
    }

    updating = (e) => {
        const gettingdatafromlocalstore = localStorage.getItem("salesdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        const idgetting = e.target.id.split("n")[1]
        for(let i=0;i < afterparsemedicinedata.length;i++ ){
            if(i == idgetting){
                let FirstName = document.getElementById("FirstName"+i)
                let LastName = document.getElementById("LastName"+i)
                let Dateofbirth = document.getElementById("Dateofbirth"+i)
                let Gender = document.getElementById("Gender"+i)
                let ExperienceYears = document.getElementById("ExperienceYears"+i)
                let FirstNameinput = document.getElementById("FirstNameinput"+i)
                let LastNameinput = document.getElementById("LastNameinput"+i)
                let Dateofbirthinput = document.getElementById("Dateofbirthinput"+i)
                let Genderinput = document.getElementById("Genderinput"+i)
                let ExperienceYearsinput = document.getElementById("ExperienceYearsinput"+i)
                FirstName.style.display="block"
                LastName.style.display="block"
                Dateofbirth.style.display="block"
                Gender.style.display="block"
                ExperienceYears.style.display="block"
                FirstNameinput.style.display="none"
                LastNameinput.style.display="none"
                Dateofbirthinput.style.display="none"
                Genderinput.style.display="none"
                ExperienceYearsinput.style.display="none"

                FirstName.innerText = FirstNameinput.value
                LastName.innerText = LastNameinput.value
                Dateofbirth.innerText = Dateofbirthinput.value
                Gender.innerText = Genderinput.value
                ExperienceYears.innerText = ExperienceYearsinput.value

            }
        }

        const deletingitemupdating = []
        const gettingdatafromlocalstoreupdating = localStorage.getItem("salesdata")
        const afterparsemedicinedataupdating = JSON.parse(gettingdatafromlocalstoreupdating)
        for(let i = 0; i < afterparsemedicinedataupdating.length; i++){
            const idgettings = e.target.id.split("n")[1]
            if(idgettings != i){
                deletingitemupdating.push(afterparsemedicinedataupdating[i])
            }
            else{
                let FirstName = document.getElementById("FirstName"+i).innerText
                let LastName = document.getElementById("LastName"+i).innerText
                let Dateofbirth = document.getElementById("Dateofbirth"+i).innerText
                let Gender = document.getElementById("Gender"+i).innerText
                let ExperienceYears = document.getElementById("ExperienceYears"+i).innerText
                const pre = {
                    FirstName: FirstName,
                    LastName: LastName,
                    Dateofbirth: Dateofbirth,
                    Gender: Gender,
                    ExperienceYears: ExperienceYears
                }
                deletingitemupdating.push(pre)
            }
        }
        localStorage.setItem("salesdata",JSON.stringify(deletingitemupdating))
    }

    render() {
        const gettingdatafromlocalstore = localStorage.getItem("salesdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        let display
        if(afterparsemedicinedata !== null){
            display = afterparsemedicinedata.map((data,index) => {
                return(
                    <tr id={"list"+index} key={index} className={classes.tabledatarow}>
                        <td>
                            <p id={"FirstName"+index}>
                                {data.FirstName}
                            </p>
                            <input type="text" id={"FirstNameinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"LastName"+index}>
                                {data.LastName}
                            </p>
                            <input type="text" id={"LastNameinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"Dateofbirth"+index}>
                                {data.Dateofbirth}
                            </p>
                            <input type="date" id={"Dateofbirthinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"Gender"+index}>
                                {data.Gender}
                            </p>
                            <input type="text" id={"Genderinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td>
                            <p id={"ExperienceYears"+index}>
                                {data.ExperienceYears}
                            </p>
                            <input type="number" id={"ExperienceYearsinput"+index} style={{display:"none",margin:"auto"}} />
                        </td>
                        <td id={"editbutton"+index}>
                            <i className="fa fa-pencil-square-o" id={"editicon"+index} aria-hidden="true" onClick={(e) => {e.target.style.display="none";document.getElementById("updatebutton"+index).style.display="block" ;this.editing(e)}}></i>
                            <button id={"updatebutton"+index} style={{margin:"auto"}} className={classes.updatebutton} onClick={(e) => {e.target.style.display="none";document.getElementById("editicon"+index).style.display="block" ;this.updating(e)}}>Update</button>
                        </td>
                        <td id={"deletebutton"+index} onClick={(e) => this.deleting(e)}>
                            <i className="fa fa-trash" aria-hidden="true" id={index}></i>
                        </td>
                    </tr>
                )
            }
        )}else{
            display = () => {
                return(<h1>No Data</h1>)
            }
        }
        return(
            <div className={classes.listmaincontainer}>
                <h1>Team List</h1>
                <table className={classes.tablemain}>
                    <tbody>
                        <tr className={classes.tablehadingrow}>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Date of Birth
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                Experience Years
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {localStorage.getItem("salesdata") === null ? <h1>No Data</h1> : display}
                        {/*{display}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}export default AdminViewTeam