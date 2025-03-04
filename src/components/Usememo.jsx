import { useState, useMemo } from "react";
import FilterSort from "./FilterSort";

const Usememo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    console.log("count rendered");

    function expensiveTask(num) {
        console.log("expensive Task");
        return num * 2;
    }

    let doubleValue = useMemo(() => expensiveTask(Number(input)), [input]);

    return (
        <>
            <div>
                <h1 className="font-bold">Usememo Hook</h1>
                <button onClick={() => setCount(count + 1)} className="p-2 bg-gray-200 rounded mt-5">
                    Increment
                </button>
                <span className="ml-8">{count}</span>
            </div>
            <div className="mt-6">
                <input
                    placeholder="Enter Number"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-1 rounded"
                />
                <span className="ml-5">{doubleValue}</span>

                <FilterSort />
            </div>
        </>
    );
};

export default Usememo;
