"use client"
import React, { useState } from 'react'

const todo = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task === "") return;
        setTodos([...todos, task]);
        setTask("");
    };
    return (
        <section className='bg-[#003465]' >
            <div className='max-w-300 pt-10 pb-15 w-full mx-auto'>
                <h1 className="text-[50px] text-[#F9DD00] font-bold mb-4">Todo</h1>
                <div className='flex flex-col gap-4'>
                    <input value={task} onChange={(e) => setTask(e.target.value)} className='border rounded-2xl border-white p-4 w-full outline-none text-white' type="text" placeholder='Task' />
                </div>
                <button onClick={addTodo} className='text-[20px] py-3 px-6 mt-5 border rounded-2xl bg-[#F9DD00]'>Add Task</button>
                <ul>
                    {todos.map((item, index) => (
                        <li className=' text-white rounded-2xl w-full border border-white mt-5 p-4 ' key={index}>{item}</li>


                    ))}

                </ul>

            </div>
        </section>
    )
}

export default todo;