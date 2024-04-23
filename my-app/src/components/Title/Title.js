function Title2({title}) {
    return (
        <h2>{title}</h2>
    )
}

function Title () {
    return (
        <>
            <Title2 title="Hello World!"/>
        </>
    )
}
export default Title;