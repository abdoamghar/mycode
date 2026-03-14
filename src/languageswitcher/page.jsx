import { useState } from "react";
import Languageswitcher from "./languageswitcher";

export default function Page() {


    const [currntlang, setcurrentlang] = useState("AR")

    const displaymessage = () => {
        switch (currntlang) {
            case "AR": return "السلام عليكم"
            case "EN": return "Hello"
            case "ES": return "Hola"
            case "FR": return "Bonjour"
        }
    }

    return <>
    <Languageswitcher onlanguagechange={(value) => setcurrentlang(value)} />

        <hr />
        current language is : {currntlang}
        <hr />
        <div className="alert alert-primary" role="alert">
            <strong>{displaymessage()}</strong>
        </div>
    </>
    
}