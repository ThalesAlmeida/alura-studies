import React from "react";
import Button from "../Button";


class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label>
                        Task
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What do you want to study?"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="timer">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="timer"
                        id="timer"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />


                </div>
                <Button />
            </form>
        )
    }
}

export default Form