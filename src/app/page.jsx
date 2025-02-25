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
        <GetTicket meta={fields}/>


        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Keywords</th>
            </tr>
        </thead>
        <tbody>
            {fields.length > 0 ? (
                fields.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.category || "No Category"}
                        </td>
                        <td className="px-6 py-4">
                            {item.keyword || "No Keywords"}
                        </td>
                    </tr>
                ))
            ) : (
                <tr className="bg-white dark:bg-gray-800">
                    <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                        No Data 
                    </td>
                </tr>
            )}
        </tbody>
    </table>
</div>


      


      </main>
    </div>
  );
}
