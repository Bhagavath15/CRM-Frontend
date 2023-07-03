import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { AddProfile } from './AddProfile';
import CardActions from '@mui/material/CardActions';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';
import { Remainder } from './Remainder';
import TextField from '@mui/material/TextField';
import { Login, Signin } from './Login';
import { ForgetPassword } from "./forgetPassword"
import { VerifyOtp } from './VerifyOtp';


export default function App() {
  const [loanDetail, setLoanDetail] = useState([])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard loanDetail={loanDetail} setLoanDetail={setLoanDetail} /></ProtectedRoute>} />
        <Route path="/dashboard/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/addProfile" element={<ProtectedRoute><AddProfile /></ProtectedRoute>} />
        <Route path="/edit-dashboard/:id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/sendRemainder/:id" element={<ProtectedRoute><Remainder loanDetail={loanDetail} setLoanDetail={setLoanDetail} /></ProtectedRoute>} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
      </Routes>
    </div>
  )
}

// function SearchBar({ loanDetail }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleSearch} />
//       {/* <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  // const token=false;
  return (
    token ? <section>{children}</section> : <Navigate replace to="/" />
    //  token? <section>{children}</section>:<h1>unautharaied</h1>
  )
}
function Nav() {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate("/login")
    }, 1500);
    console.log("logout")
  }
  return (
    <div className="nav">
      <div className="logo-container" >
        <img className="logo"
          onClick={() => navigate("/dashboard")}
          src="data:image/jpeg;base64,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"
          alt="profile" />
        <div className="nav-btn">
          <IconButton color="primary" onClick={() => navigate("/addProfile")}><PersonAddIcon /></IconButton>
        </div>
        {
          localStorage.getItem("token") == null ? (
            <Button onClick={() => navigate("/login")}>LOGIN</Button>
          ) : (
            <Button onClick={handleClick}>LOGOUT</Button>
          )
        }

      </div>

      <div className="controls-continer">
        <IconButton color="primary" aria-label="forward" onClick={() => navigate(+1)}>
          <ArrowForwardIosIcon />
        </IconButton>
        <IconButton color="primary" aria-label="backward" onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </IconButton>

      </div>
    </div>
  )
}

function Dashboard({ loanDetail, setLoanDetail }) {
  // const loanDetail = [
  //   {
  //     "id": "1",
  //     "avatar": "data:image/png;base64,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",
  //     "customerName": "Alex",
  //     "email": "alex@gmail.com",
  //     "phoneNo": "9876567899",
  //     "address": "1,x street,Y",
  //     "loanType": "Car loan",
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJFzmOra9ZXZyVt_ufgcv-Wm7cFDUJJiZig&usqp=CAU",
  //     "name": "Volkawagan Polo GT",
  //     "totalAmount": "Rs.4,50,000/-",
  //     "amountPaid": "Rs.2,55,000/-",
  //     "remainder": "2 days"
  //   },
  //   {
  //     "id": "2",
  //     "avatar": "data:image/png;base64,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",
  //     "customerName": "John",
  //     "email": "john@gmail.com",
  //     "phoneNo": "9876567899",
  //     "address": "10,z street,Y",
  //     "loanType": "Housing loan",
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2R91Nl_Dxlf3eqeZGouaijRhFmHyvJiRmw&usqp=CAU",
  //     "name": "Peter Residency",
  //     "totalAmount": "Rs.6,50,000/-",
  //     "amountPaid": "Rs.5,50,000/-",
  //     "remainder": "5 days"
  //   },
  //   {
  //     "id": "3",
  //     "avatar": "data:image/png;base64,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",
  //     "customerName": "Peter",
  //     "email": "peter@gmail.com",
  //     "phoneNo": "9876567899",
  //     "address": "45,x street,Y",
  //     "loanType": "Gold loan",
  //     "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHMAXQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADgQAAIBAwMCBAMHAgUFAAAAAAECAwAEERIhMQVBEyJRYXGBkQYUIzKhscHR8SRCQ1LwM2KCkuH/xAAaAQEAAwEBAQAAAAAAAAAAAAADAQIEAAUG/8QAIhEAAgICAgIDAQEAAAAAAAAAAAECEQMhEjEEQSIyQnEF/9oADAMBAAIRAxEAPwAxmtuo26zwIpxuVIpH1k9PtVU/dYfHO6DwxQOu56VdeGh1AnAA4arr6zkktBdupeRW8zHbY9h7Zr5rx/GfK7+J6dfJRXbE80jZMkhy7bnFVqHYhiKIa2Eh1PIR/wBoXNMrNIGjMNtAfFx/1HbOK9iGjTl8PNjhylHQZ0q3WCEBiA7bmmSAaGYnJAoJYXjT8VT7YORUwDDBlGLiTbSDnnami6VnlTFczAzOnhOZZXWQSnYBR6ev7bnvwbbQySzxK6qYY1MkikcjGMVC1QM7rOI2kjHh6k4wCTjPfGSPlTIWbwWaGOQ6rnzYPZBx9f2ah7X9Jaoz32hfxra3twuGmmVWAOcAebH6UX9zkeBBBIY3jwQVwT8AMjNQ6hGZL3x5wPBtATsQC7nGAPTv9R60RHI06adWhGxlBjj0pJO3xRVKkd1SWzuLe1sQ8NzJIzyBgdehhgsgbHJGB8gKGbpnTLlVc2qocf6ZIqwTyWf3jAtm3/AWWPU0bHQWZT/4j6UPHI0aALxUQ1oSP1D/ALssVpDeQN4jzeaVyPP8PhS27vZGBgbyBjgjn3/igUvZoBmByu2KAu5bqZlZHZpBxU0kqR6GLE8eRTl0nY3TIUZ5pn0lMefuTWKLdQJVfFYFjhfN3Nb7psXhwqgydIxvR006Nn+h58cuLhAaxgEAMKHvZLOKZGuiEjjVnJA3OBgD5kj+oqwSBRjakfWXWdXZkyTIsce/GMsx+mkfOkk6geGo2yVkGMUaZzJIQM4z5iacdQkIvPAjYsY1EIGPQbkAE+hO3PalfSJDF1WzLLlUOtjtjA+e3PNDTXUTeLJch2XGVAwC0jHZTtwRnPG3BFFF7Lzjugi5tzd9RldEKxw/hpGwwRp2OffOfnmrPCRU1OGTAqPTIfCiUZ7Ua0uI21Y25zSYyk1WhANUs1ywGpAg8+Ru2pPKO42GSPcVB5kTAfCn0Jo7p+lrJ7gDKy7IBghQW15O/ONPbjND3bpqXWqn0yKlEJ0Lp7VY4vLufUnahgUjw2Sze2w+tRLFsYydO9e8gEjn1qzPWjF+2GdOVridD4YcxnVkCtPCJymFgcbdxQn2bsxFCHceZxk5rTxS6QB6VTt2Yssk5aM9JbdQmuo7eBcySc+Q4Re7H0/nYd6jddMlm6gPBjxZWqaIyzZMjE5ZtvXb6e9a+KUJbNKN3myiMDgqBz/z4UtuZQkICjcnCipdPfoJN2JrK0nIvDGjGRgIlUd9xnvsADzSnq0sadWg6dHIH+7gyTsBsZCMfQDO381sracxWZt4XUsZj4rgEEbDj5535GCKWdQ6XFJKZ44h42MZA5FFFWmy2+VsWwyDQCpFA9Xu3+7NbxbyzAqPYdzV9xoiBLoYig37bClXSib2Z7sg+ZwsYJxhc7VdaRzVjxhFD0+2W0AWJssAUK6t8Z/MecUk6pI7yqFjYlc5AztWiux4ywGZsyCIByDwdROP1rM3fjLcyKpLIG8pzzUw6DjSZC2aJomj215yMnGanGkktyivEQicr6egpUrFeTW1+zNozWwnuFBJGAT/ALe1Wk9GzI+PysZdLIKah+U8CjZdbLiEDVpLb7DA/wDuB86CaKSKTXbJlM8V4wM0IzIySZDjTkYAOBv8ye3ANG9IzpqxlHdyXIjaQIpRAumPZQfYf84qKTGH71cYXMKhIi3Gt9h9P5qCxqFz9MUJdiaKeG0l3RnV5FA/zHJGfl+nwrp6jROmTtJHK+JKGDsSSX/Md9OT/wCtXtNnFC5MaqHOWxux/wAxqPiD41EXUS+mX3dtDfWs0LoPOhXI5GRWP+zz/dbq3tJkZZYZdLrp5x/atnasBzVF3YRHqMF1GQkjHQx+IIzUy3ApLTFl7cLMZJh+Uk6fh2rJXTETNkat+RT/AKkohjkt0fdWKbjHHekMvkbS3Iq8VSF8eK22W9D6Z99kElxqEAOyqMtIfQe3vW+ismWJS7eEq/lj1UJ0+B7VFUKkQxjKrTJdCoSzl/ia5bM85uTJxBHwqK+53PoO9VlpgUS6SIFsBljxhW7DO+QAcc14k8TKFkEmNYICHc6d8H2Jx9KnKGdWz+dskkjJzzmuW3YRTPF4TBFmZA4IXSNw3AI+HPI4qmbwmhLya5QEbWX3bGkr3PO9F25nlJaVI1CnY7EnbfB3x2G39ah1BDHqlhVXcrjQQcHzLnj2zVZdNiJ7oCYmAtHIpKg6Q57423qLBdQ/ijSPEXS4yh35zS65iktTqTLx+h5FQxIyLo5CMb1esyteWwJ4Ytt6gbfrigYJ1kP7jHFWPgXCsgxtg/P+1d+Scgt68Fdw5XzSZDEHjcGsxckGZs52NOvtLd+FcKiPjIz6VmpJY2bzyAGmXRONqKuz7CMBdl1ewquWBHEgVolZUL4bALe2/wBahHIWAVN2Y4AHNEz+T/DLgKArSHfzNj37d6lq9Iw8mgO3sSsep8508k53749q9uo0kxGWfzbYjG5PP8etEyTNFHjOV34HtXkOdTZKuvYrv2Hf45+tc4/lHcq2ym2TSXVySwxuWJJGMfxXSqkkuku0eldeVyTsynHtxVkuFuAVz5l/b+9DSThZJWx/kCZA41Z/p/fiqzVKi6fs8nTSMqcAnj0qpnyMNV0zKUwKCViz70b7ET0Tazjl33Vv9w5pe+uKTVIAwDMdfcdh/P1+GGMjlFwpAJ2GfWqL64Ij/ESOMRoFAQgjgEnI9ye9dW0iJSZ87+1N4JuqPpIKooXb6/zSF5jnaiLyTx55Jj/qMW+tCFR61sSpGN7dn2i0vI0uDNLIylNo1RcljkZGe2x55G2KOhugql5DkkliaQWzBoYmY75YmilucOrDUACcEKDlse+3pWeEtN+xZDid4ZYl0ynW2C8QU7EHbJ+X79qsgYjAzxSu2/CAU4ORuSMfDj6UZFOucYxSxVLYV2y6ZvxYz7kfpQVwH8R2H5C0Y3Hfzd/496uunGEYdmqEMiNZ3jcssyjbnHl59ufX5dzmLErYnG4qnUM77VObJXIoCZ3/ACxjL4JwTjAAzk1R62KrCHlheXTI7AKQPKudzn9NiPnSP7TXBt+mSIjeZl0j57U1DBUKGPSQctnGcgY9P675+FZD7WXWZIoc+rGpxxt2w5ypGWKaeRUKNOGHFQMaelajMpH0non40NzFKAyR6WQY4JbBr22OubLAeUlRgYwMmurqx4/uPIOLHSd66Jjqxmurq0hrstkJ0HeqLMf4OSTfV4mnOeRgH9wK9rqLJ6GiEHdaVzu6XzMjEFQCCO3mX+tdXVTJ0JEpkYhWwcfCsT11i3UZNRzgACurqaHYGToXg4xXrV1dSmd9n//Z",
  //     "name": "Gold Chain",
  //     "totalAmount": "Rs.2,50,000/-",
  //     "amountPaid": "Rs.1,34,000/-",
  //     "remainder": "3 days"
  //   }
  // ]

  const navigate = useNavigate()

  const getDetails = () => {
    const token = localStorage.getItem('token');
    fetch("https://crm-backend-virid.vercel.app/dashboard",
      {
        method: "GET",
        headers: {
          'x-auth-token': token,
        }
      })
      .then((data) => data.json())
      .then((dts) => setLoanDetail(dts))
  }
  useEffect(() => getDetails(), [])

  const deleteDetails = (id) => {
    fetch(`https://crm-backend-virid.vercel.app/dashboard/${id}`,
      { method: "DELETE" })
      .then(() => getDetails())
  }

  return (
    <div className="dashboard">
      <h2>Customer details about loans</h2>
      {/* <SearchBar /> */}
      {loanDetail.map((details, index, id) =>
        <LoanDetails loanDetails={details} key={index} id={details.id}
          deleteButton={
            <IconButton
              onClick={() => deleteDetails(details.id)}
              color="primary"
              aria-label="delete">
              <DeleteIcon />
            </IconButton>}
          editButton={
            <IconButton
              onClick={() => {
                navigate(`/edit-dashboard/${details.id}`)
                console.log("edit", details.id)
              }}
              color="primary"
              aria-label="edit">
              <EditIcon />
            </IconButton>}
        />
      )}


    </div>
  )
}
function LoanDetails({ loanDetails, id, deleteButton, editButton }) {
  const navigate = useNavigate()

  return (
    <div >

      <div className="loan-container">
        <div className="loan-card">
          <div className="loan-profile">
            <img className="avatar" src={loanDetails.avatar} alt={loanDetails.customerName} />
            <h4 className="profilename"
              onClick={() => {
                navigate(`/dashboard/${id}`)
                console.log("profile", id)
              }}
            >{loanDetails.customerName}</h4>
          </div>
          <div className="loan-type">
            <h4>{loanDetails.loanType}</h4>
          </div>
          <div className="loan-total-amount">
            <h4>Total loan amount</h4>
            {loanDetails.totalAmount}
          </div>
          <div className="loan-amount-paid">
            <h4>Amount paid</h4>
            {loanDetails.amountPaid}
          </div>
          <div className="loan-remainder" onClick={() => navigate(`/sendRemainder/${loanDetails.id}`)}>
            <h4> Remainder </h4>{loanDetails.remainder}
          </div>
          <div className="button">
            {editButton}
            {deleteButton}
          </div>
        </div>
      </div>
    </div>
  )
}

