import Title from "./components/Title/Title";
import About from "./components/About/About";


// function User({name, lastname, age}) {
//   return (
//       <li>
//         {name} - {lastname}
//         через 10 лет Вам будет {age + 10}
//       </li>
//   )
// }

// function Users () {
//   return (
//       <ul>
//         <User name="Anna" lastname="Ivanova " age={25}/>
//         <User name="John" lastname="Johnson " age={18}/>
//         <User name="Mike" lastname="Tyson " age={20}/>
//         <User name="Robert" lastname="JR " age={30}/>
//         <User name="Elena" lastname="Petrova " age={28}/>
//       </ul>
//   )
// }

// function Header () {
//   return(
//       <>
//         <span>Logo header</span>
//         <Subtitle subtitle="Header"/>
//       </>
//
//   )
// }
// function Footer () {
//   return(
//       <>
//         <Subtitle subtitle="Footer"/>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </>
//   )
// }

// function Subtitle ({subtitle}) {
//   return <h2>{subtitle}</h2>
// }

function App() {
  return (
      <>
        {/*<Header/>*/}
        {/*<Users/>*/}
        {/*<Footer/>*/}
        <About/>
        <Title/>
      </>
  )
}
export default App;