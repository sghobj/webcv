import React from "react";
import '../../styles/Achievements.css';



function Achievements() {
    return (
        <div>
            <h2 className={"section-title"}>Achievements</h2>
            <div>
            <h6 className={"sec"}>Publications:</h6>
            <p className={"desc"}>Ghobj, S.,Akl, A.,El-Farr, A.,Ayyash, M.and Abu Khalaf, J.(2017).
            Mechanical design for a cable driven upper limb exoskeleton
            prototype actuated by pneumatic rubber muscles- IEEE Conference
            Publication. [online] Ieeexplore.ieee.org.
            Available at: http://ieeexplore.ieee.org/document/8075232].
            </p>
            </div>
            <div>
                <h6 className={"sec"}>Competitions:</h6>
                <p className={"desc"}>Reached the top 30 among the middle east in the
                    number 1 scientific competition show in the Middle East "Stars of
                    Science"- Season 10, which is aired on TV.
                </p>
            </div>
        </div>
    );
}

export default Achievements;
