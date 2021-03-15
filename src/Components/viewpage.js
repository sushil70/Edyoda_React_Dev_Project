import React from "react"
import classes from "./admin.module.css"

class Viewpage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            medicinedata:[],
            count:0
        };
    }
    render() {
        const gettingdatafromlocalstore = localStorage.getItem("orderdata")
        const afterparsemedicinedata = JSON.parse(gettingdatafromlocalstore)
        let display
        if(afterparsemedicinedata !== null) {
            display = afterparsemedicinedata.map((data, index) => {
                return (
                    <tr key={index} className={classes.tabledatarow} style={{height: "55px"}}>
                        <td>
                            {data.OrderId}
                        </td>
                        <td>
                            {data.CustomerName}
                        </td>
                        <td>
                            {data.CustomerContactNumber}
                        </td>
                        <td>
                            {data.Products}
                        </td>
                        <td>
                            {data.PurchaseQuantity}
                        </td>
                        <td>
                            {data.TotalAmount} $
                        </td>
                    </tr>
                )

            })
        }
        return(
            <div className={classes.listmaincontainer}>
                <h1>Order List</h1>
                <table className={classes.tablemain}>
                    <tbody>
                        <tr className={classes.tablehadingrow}>
                            <th>
                                Order Id
                            </th>
                            <th>
                                Customer Name
                            </th>
                            <th>
                                Customer Contact Number
                            </th>
                            <th>
                                Products
                            </th>
                            <th>
                                PurchaseQuantity
                            </th>
                            <th>
                                TotalAmount
                            </th>
                        </tr>
                        {localStorage.getItem("orderdata") === null ? <h1>No Data</h1> : display}
                        {/*{display}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Viewpage