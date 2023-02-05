
import GroupLink from "./UI/GroupLink";
import Instruction from "./UI/Instruction";
import Droplist from "./UI/Droplist";
import { useEffect, useState } from "react";
import Search from "./UI/Search";
import axios from "axios";

function Calendar() {

    const [groups, setGroups] = useState([]);
    const [copied, setCopied] = useState("");



    const url = "/cal/calendars.json"

    useEffect(() => {
        axios.get(url)
            .then(res => setGroups(res.data.groups))
    }, [])



    return (
        <main className="flex flex-col bg-background grow text-white h-screen">
            <div className="flex flex-col justify-center items-center p-5">

                <div className="flex flex-row justify-center mt-3">
                    <h1 className="text-4xl sm:text-6xl font-bold">Schedule</h1>
                </div>

                <Instruction />

                <div className="flex flex-row justify-between items-center sm:mt-10 mt-6 sm:px-8 w-full">

                    <Search groups={groups} setGroups={setGroups} />

                    <Droplist groups={groups} setGroups={setGroups} />
                </div>
            </div>
            <hr className="border-b-8 border-border"></hr>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-2 gap-x-4 grid-cols-1 auto-cols-auto content-start  place-items-center justify-items-stretch overflow-auto scrollbar-hide h-full w-full px-12 mt-4">
                {groups.map((group) => {
                    return <GroupLink data={group} copied={copied} setCopied={setCopied} />
                })}
            </div>

        </main>
    );
}

export default Calendar;