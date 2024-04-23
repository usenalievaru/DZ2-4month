import title from "../Title/Title";

const info = {
    title: "Some Title",
    body: "Some body"
};

function Subtitle(props) {
    return (
        <div>
            <h2>{info.title}</h2>
            <p>{info.body}</p>
        </div>
    )
}

function About () {
    return (
        <Subtitle info = {info}/>
    )
}
export default About;