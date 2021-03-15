import React from "react"
import classes from "../Components/admin.module.css";

class Createpage extends React.Component{
    constructor() {
        super();
        this.state = {
            medicinedata:{},
            OrderId:"",
            CustomerName:"",
            CustomerContactNumber:"",
            Products:"",
            PurchaseQuantity:"",
            TotalAmount:""
        }
    }
    componentDidMount() {
        const id = document.getElementById("OrderId").value
        const submit = document.getElementById("submit")
        submit.addEventListener("click",(e) => {
            e.preventDefault()
            const datatopush = []
            const previousdata = localStorage.getItem("orderdata")
            const afterparse = JSON.parse(previousdata)
            const pre = {
                OrderId: id,
                CustomerName: this.state.CustomerName,
                CustomerContactNumber: this.state.CustomerContactNumber,
                Products: this.state.Products,
                PurchaseQuantity: this.state.PurchaseQuantity,
                TotalAmount: this.state.TotalAmount,
            }
            if(previousdata === null) {
                datatopush.push(pre)
                localStorage.setItem("orderdata",JSON.stringify(datatopush))
            }
            else {
                afterparse.push(pre)
                localStorage.setItem("orderdata",JSON.stringify(afterparse))
            }
            let CustomerName = document.getElementById("CustomerName")
            let CustomerContactNumber = document.getElementById("CustomerContactNumber")
            let PurchaseQuantity = document.getElementById("PurchaseQuantity")
            let Products = document.getElementById("Products")
            let TotalAmount = document.getElementById("TotalAmount")
            CustomerName.value = ""
            CustomerContactNumber.value = ""
            PurchaseQuantity.value = ""
            Products.value = ""
            TotalAmount.value = ""
        })
    }

    changehandle = (event) => {
        const dataname = event.target.name
        const datavalue = event.target.value
        this.setState({...this.state, [dataname]: datavalue})
    }

    render() {
        const autoid = localStorage.getItem("orderdata")
        let a
        if(autoid === null){
            a = 0
        }
        else{
            a = JSON.parse(autoid).length
        }


        return(
            <div className={classes.formitemdisplay}>
                <form className={classes.form}>
                    <h1 className={classes.headingtitle}>Add Order</h1>
                    <div className={classes.formitem}>
                        {/*<label className={classes.lable}>Order Id</label>*/}
                        <input type="number" name={"OrderId"} className={classes.inputfield} value={a} id={"OrderId"}style={{display:"none"}} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Customer Name</label>
                        <input type="text" name={"CustomerName"} placeholder={"Enter Customer Name"} className={classes.inputfield} id={"CustomerName"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Customer Contact Number</label>
                        <input type="number" name={"CustomerContactNumber"} placeholder={"Enter Customer Contact Number"} className={classes.inputfield} id={"CustomerContactNumber"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Products</label>
                        <input type="text" name={"Products"} placeholder={"Enter Products"} className={classes.inputfield} id={"Products"} onChange={this.changehandle}/>
                    {/*<select name="Gender" id="Gender" onChange={this.changehandle}>*/}
                    {/*    <option value="Gender">-Gender-</option>*/}
                    {/*    <option value="Male">Male</option>*/}
                    {/*    <option value="Female">Female</option>*/}
                    {/*    <option value="Other">Other</option>*/}
                    {/*</select>*/}
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Purchase Quantity</label>
                        <input type="number" name={"PurchaseQuantity"} placeholder={"Enter Purchase Quantity"} className={classes.inputfield} id={"PurchaseQuantity"} onChange={this.changehandle}/>
                    </div>
                    <div className={classes.formitem}>
                        <label className={classes.lable}>Total Amount</label>
                        <input type="number" name={"TotalAmount"} placeholder={"Enter Total Amount"} className={classes.inputfield} id={"TotalAmount"} onChange={this.changehandle}/>
                    </div>
                        <button type={"submit"} className={classes.submitbutton} id={"submit"}>Add</button>
                </form>
            </div>
        );
    }
}

export default Createpage