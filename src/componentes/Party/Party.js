import Character from "../Character/Character";
import "./Party.css";

const Party = (props) => {
    const sectionCSS = { backgroundColor: props.secondaryColor };
    const h3CSS = { borderColor: props.primaryColor };

    return (
        (props.partyMembers.length > 0) && <section className="party" style={sectionCSS}>
            <h3 style={h3CSS}>{props.partyName}</h3>
            <div className="cards">
                {props.partyMembers.map(partyMember => <Character key={partyMember.nickname} partyMember={partyMember} cor={props.primaryColor}/>)}
            </div>
        </section>
    );
};

export default Party;
