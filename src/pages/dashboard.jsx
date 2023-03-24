import TicketCard from "../components/ticketcard"

export default function Dashboard() {
    const tickets = [{
        "category": "Q1 2023",
        "color": "red",
        "title": "NFT Safety 101 video",
        "owner": "Bhgavath",
        "avatar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F59%2FUser-avatar.svg%2F2048px-User-avatar.svg.png&tbnid=2C1nR7GfPIwzeM&vet=12ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser-avatar.svg&docid=jkSSRW6HEZViEM&w=2048&h=2048&q=profile%20avatar%20&ved=2ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg",
        "status": "done",
        "priority": "5",
        "progress": "40",
        "description": "Make a video showcasting how to work with NFT safety",
        "timestamp": "2023-01-11T07:36:17+0000"

    },
    {
        "category": "Q1 2023",
        "color": "red",
        "title": "Build and Sell AI model",
        "owner": "Bhgavath",
        "avatar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F59%2FUser-avatar.svg%2F2048px-User-avatar.svg.png&tbnid=2C1nR7GfPIwzeM&vet=12ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser-avatar.svg&docid=jkSSRW6HEZViEM&w=2048&h=2048&q=profile%20avatar%20&ved=2ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg",
        "status": "working on it",
        "priority": "2",
        "progress": "70",
        "description": "Make a video about AI",
        "timestamp": "2023-01-13T07:36:17+0000"

    },
    {
        "category": "Q2 2023",
        "color": "blue",
        "title": "Build a bot",
        "owner": "Bhgavath",
        "avatar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F59%2FUser-avatar.svg%2F2048px-User-avatar.svg.png&tbnid=2C1nR7GfPIwzeM&vet=12ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser-avatar.svg&docid=jkSSRW6HEZViEM&w=2048&h=2048&q=profile%20avatar%20&ved=2ahUKEwjdxoua8vP9AhW9BrcAHQP2BjIQMygSegUIARCUAg",
        "status": "working on it",
        "priority": "3",
        "progress": "10",
        "description": "Make a video about bot",
        "timestamp": "2023-01-15T07:36:17+0000"

    }]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))     //Group by category
    ]
    console.log(uniqueCategories)
    return (
        <div className="dashboard">
            <h1>My Project</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, index) =>
                    <Ticket uniqueCategory={uniqueCategory} uniqueCategories={uniqueCategories}
                        index={index} tickets={tickets} />)}
            </div>
        </div >
    )
}

function Ticket({ uniqueCategory, index, tickets, uniqueCategories }) {
    return (
        <div key={index}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter((tickets) => tickets.category === uniqueCategories[index])
                .map((filteredTicket, _index) =>
                    <TicketCard
                        id={_index}
                        color={filteredTicket.color}
                        ticket={filteredTicket}
                    />)}
        </div>
    )
}