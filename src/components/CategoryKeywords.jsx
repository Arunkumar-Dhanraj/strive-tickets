"use client"
import { useState } from "react";


export default function CategoryKeywords({fields, setFields}) {
   

    const addField = () => {
        setFields([...fields, { category: "", keyword: "" }]);
    };

    return (
        <>
            <div className="flex justify-between w-full">
                <h1>Click + add more Categories & Keywords</h1>
                <button
                    className="text-black border-2 w-8 text-lg font-bold border-slate-500"
                    onClick={addField}
                >
                    +
                </button>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-8">
                        
                        <div className="pt-2">
                            <h1>Category</h1>
                            <input 
                                type="text" 
                                className="border-slate-500 border-2 rounded-sm"
                                value={field.category}
                                onChange={(e) => {
                                    const newFields = [...fields];
                                    newFields[index].category = e.target.value;
                                    setFields(newFields);
                                }}
                            />
                        </div>
                        
                        <div className="pt-2">
                            <h1>Keywords</h1>
                            <input 
                                type="text" 
                                className="border-slate-500 border-2 rounded-sm"
                                value={field.keyword}
                                onChange={(e) => {
                                    const newFields = [...fields];
                                    newFields[index].keyword = e.target.value;
                                    setFields(newFields);
                                }}
                            />
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="w-full "> <button className=" mr-4 border-2 border-black w-2/12 float-end hover:bg-gray-600 hover:text-white ">Save</button>     </div>
            
        </> 
    );
}
