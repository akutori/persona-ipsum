import { copyToClipboard } from "Utils/CopyToClipbord";

export default (personaData:object) => {
    return (
        <>
            <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => copyToClipboard(personaData.personData)}>コピー</button>
        </>
    )
}