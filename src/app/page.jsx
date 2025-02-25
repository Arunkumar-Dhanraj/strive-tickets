"use client"
import { useState } from "react";
import CategoryKeywords from "@/components/CategoryKeywords";
import GetTicket from "@/components/GetTicket";
export default function Home() {
  const [fields, setFields] = useState([{ category: "", keyword: "" }]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="font-bold text-2xl">Strive Tickets</header>
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <CategoryKeywords fields={fields} setFields={setFields}/>
        <GetTicket categoryKeywords={fields}/>
      </main>
    </div>
  );
}
