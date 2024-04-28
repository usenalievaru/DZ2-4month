import React from "react";
import About from "../../components/About/About";
import Title from "../../components/Title/Title";


const MainPage = () => {
    const aboutInfo = {
        title: 'Some title',
        body: 'Some body'
    }
    return (
        <div>
            <Title text="Hello World!"/>
            <About info={aboutInfo}/>
        </div>
    );
};

export default MainPage;