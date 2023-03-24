import AvatarDisplay from "./avatardisplay"
import ProgressDisplay from "./progressdisplay"
import PriorityDisplay from "./prioritydisplay"
import StatusDisplay from "./statusdisplay"
import DeleteBlock from "./deleteblock"
import { Link } from "react-router-dom"

export default function TicketCard({ color, ticket }) {
    return (
        <div className="ticket-card">
            <div className="ticket-color"></div>
            {/* <Link> */}
            <h3>{ticket.title}</h3>
            <AvatarDisplay />
            <StatusDisplay />
            <PriorityDisplay />
            <ProgressDisplay />
            {/* </Link> */}
            <DeleteBlock />
        </div>
    )
}