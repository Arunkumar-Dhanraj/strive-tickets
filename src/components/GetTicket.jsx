"use client";
import { useState } from "react";

export default function CategoryKeywords({ meta }) {
  console.log("cat", meta);

  const [ticketId, setTicketId] = useState("");
  const [category, setCategory] = useState("");

  const getTicket = async () => {
    if (!ticketId) return alert("Enter a valid Ticket ID");

    try {
      const url = `http://localhost:8000/tickets/${ticketId}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.ticket) {
        const ticketText =
          `${data.ticket.subject} ${data.ticket.description}`.toLowerCase();
        const matchedCategories = [];

        meta.forEach(({ category, keyword }) => {

          if (!keyword) return;

          const keywordList = keyword.split(",");
          if (
            keywordList.some((k) => ticketText.includes(k.trim().toLowerCase()))
          ) {
            matchedCategories.push(category);
          }
        });

        setCategory(matchedCategories.join(", ") || "No Matching Category");
      } else {
        setCategory("No Ticket Found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between w-full">
        <h1>Get Zendesk Ticket</h1>
      </div>

      <div className="flex">
        <div className="">
          <h1 className=" pb-3">Ticket ID</h1>
          <input
            onChange={(e) => setTicketId(e.target.value)}
            type="number"
            className="border-slate-500 border-2 rounded-sm"
          />
          <button
            onClick={getTicket}
            className="border-2 border-black w-24 mr-4 float-end hover:bg-gray-600 hover:text-white ml-40"
          >
            Get Ticket
          </button>
        </div>
      </div>

      {category && (
        <div className="mt-4 p-2 w-4/12 border border-gray-400 rounded">
          <h2>Matched Category:</h2>
          <p>{category}</p>
        </div>
      )}
    </>
  );
}
