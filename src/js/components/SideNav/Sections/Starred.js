import React from "react";
import ActionButton from "../components/ActionButton";

const StarredSection = () => {
    return (
        <section>
            <ActionButton name="Starred" icon="stars" />
            <ActionButton name="Start New" icon="add_circle" />
        </section>
    )
}

export default StarredSection;