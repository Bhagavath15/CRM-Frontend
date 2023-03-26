import blankavatar from "../images/blankavatar.png"

export default function AvatarDisplay({ ticket }) {
    return (
        <div className="avatar-container">
            <div className="image-container">
                <img src={ticket.avatar ? ticket.avatar : blankavatar}
                    alt={ticket.owner} />
            </div>
        </div>
    )
}