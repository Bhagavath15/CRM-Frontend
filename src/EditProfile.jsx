import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"


const formValidationSchema = yup.object({
    id: yup.number().required(),
    avatar: yup.string().required(),
    customerName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNo: yup.number().required(),
    address: yup.string().required(),
    customeName: yup.string().required(),
    image: yup.string().required(),
    totalAmount: yup.string().required(),
    amountPaid: yup.string().required(),
    remainder: yup.string().required(),
});
export function EditProfile() {
    const { id } = useParams()

    const [loanDetails, setLoanDetails] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:4004/dashboard/${id}`)
            .then((data) => data.json())
            .then((dts) => setLoanDetails(dts))
    }, [])
    return loanDetails ? <EditProfileList loanDetails={loanDetails} /> : <h2>Loading...</h2>
}

// function EditProfileList({ loanDetails }) {
//     const navigate = useNavigate()
//     const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
//         initialValues: {
//             id: loanDetails.id,
//             avatar: loanDetails.avatar,
//             customerName: loanDetails.customerName,
//             email: loanDetails.email,
//             phoneNo: loanDetails.phoneNo,
//             address: loanDetails.address,
//             loanType: loanDetails.loanType,
//             name: loanDetails.name,
//             image: loanDetails.image,
//             totalAmount: loanDetails.totalAmount,
//             amountPaid: loanDetails.amountPaid,
//             remainder: loanDetails.remainder,
//         },
//         validationSchema: formValidationSchema,
//         onSubmit: (newUpdate) => {
//             console.log("form value", newUpdate)
//             UpdateData(newUpdate)
//             navigate("/dashboard")

//         }
//     });

//     const UpdateData = (newUpdate) => {
//         console.log(newUpdate)
//         fetch(`http://localhost:4004/dashboard/${loanDetails.id}`,
//             {
//                 method: "PUT",
//                 body: JSON.stringify(newUpdate),
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             });

//     };
//     return (
//         <div className="addProfile">
//             <h3>Edit - {loanDetails.customerName} Details</h3>
// <form onSubmit={handleSubmit}>
//     <TextField name="id"
//         fullWidth sx={{ m: 1 }}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.id}
//         id="outlined-basic"
//         label="id"
//         variant="standard"
//         error={touched.id && errors.id}
//     /><br />
//     {touched.id && errors.id ? errors.id : null}<br />
//     <TextField name="avatar"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.avatar}
//         id="outlined-basic" label="Avatar"
//         variant="standard"
//         error={touched.avatar && errors.avatar} /><br />
//     {touched.name && errors.avatar ? errors.avatar : null}<br />
//     <TextField name="customerName"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.customerName}
//         id="outlined-basic" label="Customer Name"
//         variant="standard"
//         error={touched.customerName && errors.customerName} /><br />
//     {touched.name && errors.customerName ? errors.customerName : null}<br />
//     <TextField name="email"
//         fullWidth sx={{ m: 1 }}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.email}
//         id="outlined-basic" label="Email"
//         variant="standard"
//         error={touched.email && errors.email} /><br />
//     {touched.email && errors.email ? errors.email : null}<br />
//     <TextField name="phoneNo"
//         fullWidth sx={{ m: 1 }}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.phoneNo} id="outlined-basic"
//         label="Phone Number" variant="standard"
//         error={touched.phoneNo && errors.phoneNo} /><br />
//     {touched.phoneNo && errors.phoneNo ? errors.phoneNo : null}<br />
//     <TextField name="address"
//         fullWidth sx={{ m: 1 }}
//         onBlur={handleBlur}
//         onChange={handleChange} value={values.address}
//         id="outlined-basic" label="Address"
//         variant="standard"
//         error={touched.address && errors.address} /><br />
//     {touched.address && errors.address ? errors.address : null}<br />
//     <TextField name="loanType"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.loanType}
//         id="outlined-basic" label="Loan Type"
//         variant="standard"
//         error={touched.loanType && errors.loanType} /><br />
//     {touched.name && errors.loanType ? errors.loanType : null}<br />
//     <TextField name="image"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.image}
//         id="outlined-basic" label="Image"
//         variant="standard"
//         error={touched.image && errors.image} /><br />
//     {touched.name && errors.image ? errors.image : null}<br />
//     <TextField name="name"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.name}
//         id="outlined-basic" label="Name"
//         variant="standard"
//         error={touched.name && errors.name} /><br />
//     {touched.name && errors.name ? errors.name : null}<br />
//     <TextField name="totalAmount"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.totalAmount}
//         id="outlined-basic" label="Total Amount"
//         variant="standard"
//         error={touched.totalAmount && errors.totalAmount} /><br />
//     {touched.name && errors.totalAmount ? errors.totalAmount : null}<br />
//     <TextField name="amountPaid"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.amountPaid}
//         id="outlined-basic" label="Amount Paid"
//         variant="standard"
//         error={touched.amountPaid && errors.amountPaid} /><br />
//     {touched.name && errors.amountPaid ? errors.amountPaid : null}<br />
//     <TextField name="remainder"
//         fullWidth sx={{ m: 1 }} onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.remainder}
//         id="outlined-basic" label="Remainder"
//         variant="standard"
//         error={touched.remainder && errors.remainder} /><br />
//     {touched.name && errors.remainder ? errors.remainder : null}<br />
//     <Button color="primary"
//         variant="outlined"
//         fullWidth sx={{ m: 1 }} type=" submit" >SAVE</Button>
// </form>
//         </div>
//     );
// }


function EditProfileList({ loanDetails }) {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            id: loanDetails.id,
            avatar: loanDetails.avatar,
            customerName: loanDetails.customerName,
            email: loanDetails.email,
            phoneNo: loanDetails.phoneNo,
            address: loanDetails.address,
            loanType: loanDetails.loanType,
            name: loanDetails.name,
            image: loanDetails.image,
            totalAmount: loanDetails.totalAmount,
            amountPaid: loanDetails.amountPaid,
            remainder: loanDetails.remainder,
        },
        // validationSchema: formValidationSchema,
        onSubmit: (newUpdate) => {
            console.log("form value", newUpdate)
            UpdateData(newUpdate)
            navigate("/dashboard")
            console.log("edit")
        }
    });

    const UpdateData = (newUpdate) => {
        console.log(newUpdate)
        fetch(`http://localhost:4004/dashboard/${loanDetails.id}`,
            {
                method: "PUT",
                body: JSON.stringify(newUpdate),
                headers: {
                    "content-type": "application/json"
                }
            });

    };
    return (
        <div className="add-Profile">
            <h3>Edit - {loanDetails.customerName} Details</h3>
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
                <Button color="success"
                    variant="outlined"
                    fullWidth sx={{ m: 1 }} type=" submit" >SAVE</Button>
            </form>
        </div>
    )
}