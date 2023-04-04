import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Party from "./componentes/Party/Party";

function App() {
    const bosses = [
        {
            boss: "NLucid",
            primaryColor: "#db6ebf",
            secondaryColor: "#fae9f5",
        },
        {
            boss: "NWill",
            primaryColor: "#82cffa",
            secondaryColor: "#e8f8ff",
        },
        {
            boss: "HLucid",
            primaryColor: "#db6ebf",
            secondaryColor: "#fae9f5",
        },
        {
            boss: "HWill",
            primaryColor: "#82cffa",
            secondaryColor: "#e8f8ff",
        },
        {
            boss: "HLotus",
            primaryColor: "#ffba05",
            secondaryColor: "#fff5d9",
        },
        {
            boss: "HDamien",
            primaryColor: "#e06b69",
            secondaryColor: "#fde7eb",
        },
        {
            boss: "VHilla",
            primaryColor: "#a6d157",
            secondaryColor: "#f0f8e2",
        },
    ];

    const [partyMembers, setPartyMembers] = useState([]);

    const addPartyMember = (newPartyMember) => {
        console.log(newPartyMember);
        setPartyMembers([...partyMembers, newPartyMember]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario
                sendFormData={(newPartyMember) =>
                    addPartyMember(newPartyMember)
                }
            />
            {bosses.map((boss) => (
                <Party
                    key={boss.boss}
                    partyName={boss.boss}
                    primaryColor={boss.primaryColor}
                    secondaryColor={boss.secondaryColor}
                />
            ))}
        </div>
    );
}

export default App;
