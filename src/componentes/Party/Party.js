import "./Party.css";

const Party = (props) => {
    const sectionCSS = { backgroundColor: props.secondaryColor };
    const h3CSS = { borderColor: props.primaryColor };

    return (
        <section className="party" style={sectionCSS}>
            <h3 style={h3CSS}>{props.partyName}</h3>
        </section>
    );
};

export default Party;
