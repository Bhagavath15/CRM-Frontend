import { useState } from "react"

export default function TicketPage() {
    const [formData, setFormData] = useState({
        status: "Not started",
        progress: 0,
        timeStamp: new Date().toISOString()
    })
    const editMode = false
    const handleSubmit = () => {
        console.log("form submit")
    }
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }
    console.log(formData)

    const categories = ["test1", "test2"]
    return (
        <div className="ticket">
            <h1>{editMode ? "update your ticket" : "create a ticket"}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >{categories?.map((category, _index) => {
                            <option key={_index} value={category}>{category}</option>
                        })}
                        </select>
                        <label htmlFor="new-category">New category</label>
                        <input
                            id="new-category"
                            name="category"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.category}
                        />
                        <label >Priority </label>
                        <div className="multiple-inut-container"></div>
                        <input
                            id="priority-1"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={1}
                            checked={formData.priority === 1}
                        />
                        <label className="priority-1"> 1</label>
                        <input
                            id="priority-2"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={2}
                            checked={formData.priority === 2}
                        />
                        <label className="priority-2"> 2</label>
                        <input
                            id="priority-3"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={3}
                            checked={formData.priority === 3}
                        />
                        <label className="priority-3"> 3</label>
                        <input
                            id="priority-4"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={4}
                            checked={formData.priority === 4}
                        />
                        <label className="priority-4"> 4</label>
                        <input
                            id="priority-5"
                            name="priority"
                            type="radio"
                            onChange={handleChange}
                            value={5}
                            checked={formData.priority === 5}
                        />
                        <label className="priority-5"> 5</label>

                        {editMode &&
                            <>
                                <input
                                    type="range"
                                    id="progress"
                                    name="progress"
                                    value={formData.progress}
                                    onChange={handleChange}
                                    min="0"
                                    max="100"

                                />
                                <label htmlFor="progress">Progress</label>

                                <label>Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option selected={formData.status === "done"} value={"done"}>Done</option>
                                    <option selected={formData.status === "working on it"} value={"working on it"}>Working on it</option>
                                    <option selected={formData.status === "stuck"} value={"stuck"}>Stuck</option>
                                    <option selected={formData.status === "not started"} value={"not started"}>Not started</option>

                                </select>
                            </>}
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="owner">Owner</label>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            value={formData.owner}
                            onChaange={handleChange}
                            required={true}
                        />

                        <label htmlFor="avatar">Avatar</label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="url"
                            value={formData.avatar}
                            onChaange={handleChange}
                            required={true}
                        />
                        <div className="img-preview">
                            {formData.avatar && (
                                <img src={formData.avatar} alt="image preview" />
                            )}
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}