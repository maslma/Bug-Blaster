import React from "react";
import TicketItme from "./TicketItme";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItme
          key={ticket.id}
          dispatch={dispatch}
          ticket={ticket}
        ></TicketItme>
      ))}
    </div>
  );
}
