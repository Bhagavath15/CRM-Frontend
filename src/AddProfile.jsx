import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
    id: yup.number().required(),
    avatar: yup.string().required(),
    customerName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNo: yup.number().required(),
    address: yup.string().required(),
    customeName: yup.string().required(),
    image: yup.string().url().required(),
    totalAmount: yup.string().required(),
    amountPaid: yup.string().required(),
    remainder: yup.string().required(),
});

// export function AddProfile() {
//     const navigate = useNavigate()
//     const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
//         initialValues: {
//             id: "",
//             avatar: "",
//             customerName: "",
//             email: "",
//             phoneNo: "",
//             address: "",
//             loanType: "",
//             image: "",
//             name: "",
//             totalAmount: "",
//             amountPaid: "",
//             remainder: ""

//         },
//         validationSchema: formValidationSchema,
//         onSubmit: (newdata) => {
//             console.log("form value", newdata)
//             addData(newdata)
//             navigate("/dashboard")
//             console.log("clicked")
//         }
//     });
//     const addData = (newdata) => {
//         fetch("https://6422b4e6001cb9fc202da663.mockapi.io/dashboard",
//             {
//                 method: "POST",
//                 body: JSON.stringify(newdata),
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             });

//     };
//     return (
//         <div className="add-Profile">
//             <h3>Details to be added</h3>
//             <form onSubmit={handleSubmit}>
//                 <TextField name="id"
//                     fullWidth sx={{ m: 1 }}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.id}
//                     id="outlined-basic"
//                     label="id"
//                     variant="standard"
//                     error={touched.id && errors.id}
//                 /><br />
//                 {touched.id && errors.id ? errors.id : null}<br />
//                 <TextField name="avatar"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.avatar}
//                     id="outlined-basic" label="Avatar"
//                     variant="standard"
//                     error={touched.avatar && errors.avatar} /><br />
//                 {touched.name && errors.avatar ? errors.avatar : null}<br />
//                 <TextField name="customerName"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.customerName}
//                     id="outlined-basic" label="Customer Name"
//                     variant="standard"
//                     error={touched.customerName && errors.customerName} /><br />
//                 {touched.name && errors.customerName ? errors.customerName : null}<br />
//                 <TextField name="email"
//                     fullWidth sx={{ m: 1 }}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.email}
//                     id="outlined-basic" label="Email"
//                     variant="standard"
//                     error={touched.email && errors.email} /><br />
//                 {touched.email && errors.email ? errors.email : null}<br />
//                 <TextField name="phoneNo"
//                     fullWidth sx={{ m: 1 }}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.phoneNo} id="outlined-basic"
//                     label="Phone Number" variant="standard"
//                     error={touched.phoneNo && errors.phoneNo} /><br />
//                 {touched.phoneNo && errors.phoneNo ? errors.phoneNo : null}<br />
//                 <TextField name="address"
//                     fullWidth sx={{ m: 1 }}
//                     onBlur={handleBlur}
//                     onChange={handleChange} value={values.address}
//                     id="outlined-basic" label="Address"
//                     variant="standard"
//                     error={touched.address && errors.address} /><br />
//                 {touched.address && errors.address ? errors.address : null}<br />
//                 <TextField name="loanType"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.loanType}
//                     id="outlined-basic" label="Loan Type"
//                     variant="standard"
//                     error={touched.loanType && errors.loanType} /><br />
//                 {touched.name && errors.loanType ? errors.loanType : null}<br />
//                 <TextField name="image"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.image}
//                     id="outlined-basic" label="Image"
//                     variant="standard"
//                     error={touched.image && errors.image} /><br />
//                 {touched.name && errors.image ? errors.image : null}<br />
//                 <TextField name="name"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.name}
//                     id="outlined-basic" label="Name"
//                     variant="standard"
//                     error={touched.name && errors.name} /><br />
//                 {touched.name && errors.name ? errors.name : null}<br />
//                 <TextField name="totalAmount"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.totalAmount}
//                     id="outlined-basic" label="Total Amount"
//                     variant="standard"
//                     error={touched.totalAmount && errors.totalAmount} /><br />
//                 {touched.name && errors.totalAmount ? errors.totalAmount : null}<br />
//                 <TextField name="amountPaid"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.amountPaid}
//                     id="outlined-basic" label="Amount Paid"
//                     variant="standard"
//                     error={touched.amountPaid && errors.amountPaid} /><br />
//                 {touched.name && errors.amountPaid ? errors.amountPaid : null}<br />
//                 <TextField name="remainder"
//                     fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.remainder}
//                     id="outlined-basic" label="Remainder"
//                     variant="standard"
//                     error={touched.remainder && errors.remainder} /><br />
//                 {touched.name && errors.remainder ? errors.remainder : null}<br />
//                 <Button color="primary"
//                     variant="outlined"
//                     fullWidth sx={{ m: 1 }} type=" submit" >ADD CUSTOMER</Button>
//             </form>
//         </div >
//     );

// }

export function AddProfile() {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            id: "",
            avatar: "",
            customerName: "",
            email: "",
            phoneNo: "",
            address: "",
            loanType: "",
            image: "",
            name: "",
            totalAmount: "",
            amountPaid: "",
            remainder: ""

        },
        // validationSchema: formValidationSchema,
        onSubmit: (newdata) => {
            console.log("form value", newdata)
            addData(newdata)
            navigate("/dashboard")
            console.log("clicked")
        }
    });
    const addData = (newdata) => {
        fetch("http://localhost:4004/dashboard",
            {
                method: "POST",
                body: JSON.stringify(newdata),
                headers: {
                    "content-type": "application/json"
                }
            });

    };
    return (
        <div className="add-Profile">
            <h3>Details to be Added</h3>
            <form onSubmit={handleSubmit}>
                <TextField name="id"
                    fullWidth sx={{ m: 1 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.id}
                    id="outlined-basic"
                    label="id"
                    variant="standard"
                    error={touched.id && errors.id}
                /><br />
                {touched.id && errors.id ? errors.id : null}<br />
                <TextField name="avatar"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.avatar}
                    id="outlined-basic" label="Avatar"
                    variant="standard"
                    error={touched.avatar && errors.avatar} /><br />
                {touched.name && errors.avatar ? errors.avatar : null}<br />
                <TextField name="customerName"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.customerName}
                    id="outlined-basic" label="Customer Name"
                    variant="standard"
                    error={touched.customerName && errors.customerName} /><br />
                {touched.name && errors.customerName ? errors.customerName : null}<br />
                <TextField name="email"
                    fullWidth sx={{ m: 1 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    id="outlined-basic" label="Email"
                    variant="standard"
                    error={touched.email && errors.email} /><br />
                {touched.email && errors.email ? errors.email : null}<br />
                <TextField name="phoneNo"
                    fullWidth sx={{ m: 1 }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNo} id="outlined-basic"
                    label="Phone Number" variant="standard"
                    error={touched.phoneNo && errors.phoneNo} /><br />
                {touched.phoneNo && errors.phoneNo ? errors.phoneNo : null}<br />
                <TextField name="address"
                    fullWidth sx={{ m: 1 }}
                    onBlur={handleBlur}
                    onChange={handleChange} value={values.address}
                    id="outlined-basic" label="Address"
                    variant="standard"
                    error={touched.address && errors.address} /><br />
                {touched.address && errors.address ? errors.address : null}<br />
                <TextField name="loanType"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.loanType}
                    id="outlined-basic" label="Loan Type"
                    variant="standard"
                    error={touched.loanType && errors.loanType} /><br />
                {touched.name && errors.loanType ? errors.loanType : null}<br />
                <TextField name="image"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.image}
                    id="outlined-basic" label="Image"
                    variant="standard"
                    error={touched.image && errors.image} /><br />
                {touched.name && errors.image ? errors.image : null}<br />
                <TextField name="name"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    id="outlined-basic" label="Name"
                    variant="standard"
                    error={touched.name && errors.name} /><br />
                {touched.name && errors.name ? errors.name : null}<br />
                <TextField name="totalAmount"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.totalAmount}
                    id="outlined-basic" label="Total Amount"
                    variant="standard"
                    error={touched.totalAmount && errors.totalAmount} /><br />
                {touched.name && errors.totalAmount ? errors.totalAmount : null}<br />
                <TextField name="amountPaid"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amountPaid}
                    id="outlined-basic" label="Amount Paid"
                    variant="standard"
                    error={touched.amountPaid && errors.amountPaid} /><br />
                {touched.name && errors.amountPaid ? errors.amountPaid : null}<br />
                <TextField name="remainder"
                    fullWidth sx={{ m: 1 }} onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.remainder}
                    id="outlined-basic" label="Remainder"
                    variant="standard"
                    error={touched.remainder && errors.remainder} /><br />
                {touched.name && errors.remainder ? errors.remainder : null}<br />
                <Button color="primary"
                    variant="outlined"
                    fullWidth sx={{ m: 1 }} type=" submit" >ADD CUSTOMER</Button>
            </form>
        </div>
    )
}