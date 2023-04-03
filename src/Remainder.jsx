import { useState, useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
    email: yup.string().email().required(),

});
export function Remainder({ loanDetail, setLoanDetail }) {

    // const [email, setEmail] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post("/sendReminder", { email });
    //         console.log(res.data);
    //         alert("Reminder email sent!");
    //     } catch (err) {
    //         console.log(err.response.data);
    //         alert("Failed to send reminder email!");
    //     }
    // };

    const { id } = useParams()

    const [loanDetails, setLoanDetails] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:4004/dashboard/${id}`)
            .then((data) => data.json())
            .then((dts) => setLoanDetails(dts))
    }, [])
    return loanDetails ? <EditProfileList loanDetails={loanDetails} /> : <h2>Loading...</h2>

}


function EditProfileList({ loanDetails, setLoanDetails }) {
    const navigate = useNavigate()
    const { handleSubmit, values } = useFormik({
        initialValues: {
            email: loanDetails.email,
            remainder: loanDetails.remainder,
            loanType: loanDetails.loanType
        },
        validationSchema: formValidationSchema,
        onSubmit: (event) => {
            console.log("form value", event)
            alert("Email sent successfully")
            navigate("/dashboard")

            // Send email reminder using NodeJS API
            const response = fetch(`http://localhost:4004/dashboard/${loanDetails.id}`,
                {
                    method: "POST",
                    body: JSON.stringify(event),
                    headers: {
                        "content-type": "application/json"
                    }
                }
            );
        }
    });

    return (
        <form onSubmit={handleSubmit} className="remainderForm">
            <h1 htmlFor="email">Reminder</h1>
            <TextField name="email"
                fullWidth sx={{ m: 1 }}
                value={values.email}
                id="outlined-basic" label="Email"
                variant="standard"
            />
            <TextField name="loantype"
                fullWidth sx={{ m: 1 }}
                value={values.loanType}
                id="outlined-basic" label="Loan Type"
                variant="standard"
            />
            <TextField name="remainder"
                fullWidth sx={{ m: 1 }}
                value={values.remainder}
                id="outlined-basic" label="remainder"
                variant="standard"
            />
            <Button type="submit">SEND REMAINDER</Button>
        </form>
    );
}