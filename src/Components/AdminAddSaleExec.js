import React from "react"
import classes from "../Components/admin.module.css";

class AdminAddSaleExec extends React.Component{
    constructor() {
        super();
        this.state = {
            medicinedata:{},
            FirstName:"",
            LastName:"",
            Dateofbirth:"",
            Gender:"",
            ExperienceYears:"",
        }
    }
    componentDidMount() {
        const submit = document.getElementById("submit")
        submit.addEventListener("click",(e) => {
            e.preventDefault()
            const datatopush = []
            const previousdata = localStorage.getItem("salesdata")
            const afterparse = JSON.parse(previousdata)
            console.log(previousdata)
            const pre = {
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Dateofbirth: this.state.Dateofbirth,
                Gender: this.state.Gender,
                ExperienceYears: this.state.ExperienceYears
            }
            if(previousdata === null) {
                datatopush.push(pre)
                localStorage.setItem("salesdata",JSON.stringify(datatopush))
            }
            else {
                afterparse.push(pre)
                localStorage.setItem("salesdata",JSON.stringify(afterparse))
            }
            let FirstName = document.getElementById("FirstName")
            let LastName = document.getElementById("LastName")
            let Dateofbirth = document.getElementById("Dateofbirth")
            let Gender = document.getElementById("Gender")
            let ExperienceYears = document.getElementById("ExperienceYears")
            FirstName.value = ""
            LastName.value = ""
            Dateofbirth.value = ""
            Gender.value = ""
            ExperienceYears.value = ""
        })
    }
    changehandle = (event) => {
        const dataname = event.target.name
        const datavalue = event.target.value
        this.setState({...this.state, [dataname]: datavalue})
    }
    render() {
        return(
            <div className={classes.formitemdisplay}>
                <form className={classes.form}>
                    <h1 className={classes.headingtitle}>Add Sales Executive</h1>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>First Name</label>
                        <input type="text" name={"FirstName"} placeholder={"Enter First Name"} className={classes.inputfield} id={"FirstName"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Last Name</label>
                        <input type="text" name={"LastName"} placeholder={"Enter Last Name"} className={classes.inputfield} id={"LastName"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Date of Birth</label>
                        <input type="date" name={"Dateofbirth"} className={classes.inputfield} id={"Dateofbirth"} onChange={this.changehandle}/>
                    {/*<input type="text" name={"Gender"} className={classes.inputfield} id={"Gender"} onChange={this.changehandle}/>*/}
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Gender</label>
                        <select name="Gender" id="Gender" className={classes.inputfield} onChange={this.changehandle}>
                            <option value="Gender">-Gender-</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Experience Years</label>
                        <input type="number" name={"ExperienceYears"} placeholder={"Enter Experience Years"} className={classes.inputfield} id={"ExperienceYears"} onChange={this.changehandle}/>
                    </div>
                    <button type={"submit"} className={classes.submitbutton} id={"submit"}>Add</button>
                </form>
            </div>
        );
    }
}
export default AdminAddSaleExec