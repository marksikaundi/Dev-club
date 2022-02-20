import React from "react";
import style from "../style/welcome.module.css"


export default function Welcome() {
    return (
        <div className={style.welcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.welcomeInfo}>
                <p>
                    We're working hard to get Dev Club 
                    ready for everyone! While we are wrap 
                    up the finishing touches, we're addidng 
                    people gradually.
                </p>
                <p>
                    My team and I, we are putting all we can and make
                    it happen for all the dev club members.
                </p>
                <p>
                    Mark Sikaundi and Dev Club <b>Team</b>
                </p>
            </div>
        </div>
    );
}








