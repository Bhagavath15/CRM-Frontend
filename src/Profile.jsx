import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Profile() {
    const { id } = useParams();
    const [loanDetails, setLoanDetails] = useState([]);
    useEffect(() => {
        fetch(`https://6422b4e6001cb9fc202da663.mockapi.io/dashboard/${id}`)
            .then((data) => data.json())
            .then((dts) => setLoanDetails(dts));
    }, [id]);
    // const navigate = useNavigate()
    return (
        <div className="profile">
            <h3>Loan Details of {loanDetails.customerName}</h3>
            <Card sx={{ minWidth: 275 }}>
                <div className="profile-flex">
                    <div className="details">
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                {loanDetails.loanType}
                            </Typography>
                            <Typography variant="p" component="div">
                                <b>NAME: </b> {loanDetails.customerName}
                            </Typography>
                            <Typography variant="p" component="div">
                                <b>EMAIL:</b>{loanDetails.email}
                            </Typography>
                            <Typography variant="p" component="div">
                                <b>PHONE-NO:</b>{loanDetails.phoneNo}
                            </Typography>
                            <Typography variant="p" component="div">
                                <b>ADDRESS:</b>{loanDetails.address}
                            </Typography>
                            <Typography variant="p" component="div">
                                <b>PROPERTY:</b>{loanDetails.name}
                            </Typography>
                        </CardContent>
                    </div>

                    <img className="property-image" src={loanDetails.image} alt={loanDetails.name} />
                </div>
            </Card>
        </div>
    );
}
