import React from "react"
import classes from "../Components/admin.module.css";

class AdminAddMedicinePage extends React.Component{
    constructor() {
        super();
        this.state = {
            medicinedata:{},
            Name:"",
            ManufacturerName:"",
            Price:"",
            Stock:"",
            Discount:"",
        }
    }
    componentDidMount() {
        const submit = document.getElementById("submit")
        submit.addEventListener("click",(e) => {
            e.preventDefault()
            const datatopush = []
            const previousdata = localStorage.getItem("medicinedata")
            const afterparse = JSON.parse(previousdata)
            console.log(previousdata)
            const pre = {
                Name: this.state.Name,
                ManufacturerName: this.state.ManufacturerName,
                Price: this.state.Price,
                Stock: this.state.Stock,
                Discount: this.state.Discount
            }

            if(previousdata === null) {
                datatopush.push(pre)
                localStorage.setItem("medicinedata",JSON.stringify(datatopush))
            }
            else {
                afterparse.push(pre)
                localStorage.setItem("medicinedata",JSON.stringify(afterparse))
            }
            let Name = document.getElementById("Name")
            let ManufacturerName = document.getElementById("ManufacturerName")
            let Price = document.getElementById("Price")
            let Stock = document.getElementById("Stock")
            let Discount = document.getElementById("Discount")
            Name.value = ""
            ManufacturerName.value = ""
            Price.value = ""
            Stock.value = ""
            Discount.value = ""
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
                    <h1 className={classes.headingtitle}>Add Medicine to Inventory</h1>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Name</label>
                        <input type="text" name={"Name"} placeholder={"Enter Name"} className={classes.inputfield} id={"Name"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Manufacturer Name</label>
                        <input type="text" name={"ManufacturerName"} placeholder={"Enter Manufacturer Name"} className={classes.inputfield} id={"ManufacturerName"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Price</label>
                        <input type="number" name={"Price"} placeholder={"Enter Price"} className={classes.inputfield} id={"Price"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Stock</label>
                        <input type="number" name={"Stock"} placeholder={"Enter Stock"} className={classes.inputfield} id={"Stock"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Discount</label>
                        <input type="number" name={"Discount"} placeholder={"Enter Discount"} className={classes.inputfield} id={"Discount"} onChange={this.changehandle}/>
                    </div>
                        <button type={"submit"} className={classes.submitbutton} id={"submit"}>Add</button>
                </form>
            </div>
        );
    }
}
export default AdminAddMedicinePage