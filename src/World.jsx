import {useState, useEffect} from "react"

function World() {
    const [loading, setLoading] = useState(true);
    const [countries, setCountry] = useState([])
    const [language, setLanguage] = useState("")
    const getCountry = async () => {
        const json = await(
        await fetch(`https://restcountries.com/v3.1/lang/${language}`)
        ).json();
        setLoading(false)
        setCountry(json)
        console.log(json)
    }
    const onChange = (event) => {
        console.log(event.target.value)
        setLanguage(event.target.value)
    }
    const onClick = (event) => {
        event.preventDefault()
        getCountry()
    }
 return (
    <div className="Container">
    <div className="formContainer">   
        <form action="" id="searchForm">
            <input id="searchInput" type="text" value={language} onChange={onChange} placeholder="Which language do you like?" style={{width:"200px"}}/>
            <br />
            <input id="searchButton" type="submit" value={"검색"} onClick={onClick}/>
        </form>
    
            </div>
            
            {loading ? <h1>Language is a key</h1> : 
         <div className="resultContainer">
            <h1 className="cardTitle">Here are countries use {language}</h1>
            <div className="card">
            {countries.map((country) => (
                
            <div className="countryCard" key={country.name.common}>
            <img src={country.flags.svg} alt="flags" style={{width:"150px"}}/>
            {country.name.common}
            </div>
  ))}</div>

</div>
        }
        
    </div>
 )
};

export default World;