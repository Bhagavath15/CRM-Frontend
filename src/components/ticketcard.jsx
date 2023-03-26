import AvatarDisplay from "./avatardisplay"
import ProgressDisplay from "./progressdisplay"
import PriorityDisplay from "./prioritydisplay"
import StatusDisplay from "./statusdisplay"
import DeleteBlock from "./deleteblock"
import { Link } from "react-router-dom"

export default function TicketCard({ color, ticket }) {
    return (
        <div className="ticket-card" >
            <Link to={`/ticket/${ticket.documentID}`} id="link">
                <div className="ticket-color" style={{ backgroundColor: color }}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket} />
                <StatusDisplay status={ticket.status} />
                <PriorityDisplay priority={ticket.priority} />
                <ProgressDisplay progress={ticket.progress} />
            </Link>
            <DeleteBlock />
        </div>
    )
}