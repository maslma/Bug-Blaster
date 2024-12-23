import React, { useState } from "react";

export default function TickectForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setpriority] = useState("1");

  const priorityLapels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setpriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    // console.log(ticketData);

    dispatch({
      type: "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="form-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLapels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setpriority(e.target.value)}
            ></input>
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
