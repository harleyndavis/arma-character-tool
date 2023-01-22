import React, { useState, useEffect } from 'react'
import styles from './armstyles.module.css';

const moment = require("moment-timezone");

function TimeBlock() {
    var [date, setDate] = useState(moment());

    useEffect(() => {
        var timer = setInterval(() => setDate(moment()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className={styles.timeBlock}>
            Local Time is {date.local().format("MM/DD/YYYY hh:mm:ss A")}
            <br></br>
            Server Time is {date.tz("America/New_York").format("MM/DD/YYYY hh:mm:ss A")}
        </div>
    );
}

export default TimeBlock;