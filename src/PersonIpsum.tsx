import { useState } from "react";
import { fakerJA as faker} from "@faker-js/faker";

function PersonIpsum(){
    const [person, setPerson] = useState("");

    const generatePerson = () => {
        setPerson(faker.person.fullName());
    }

    return (
        <div>
            <h1>{person}</h1>
            <button onClick={generatePerson}>Generate Person</button>
        </div>
    );
}

export default PersonIpsum;
