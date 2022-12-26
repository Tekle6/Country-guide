const url = `https://restcountries.com/v3.1/name/${"Ethiopia"}?fullText=true`
const container = document.querySelector('.container')
const searchWrapper = document.querySelector('.search-wrapper')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const result = document.querySelector(".result")


searchBtn.addEventListener('click', function()
{
    let searchInputValue = searchInput.value
    let requestedUrl = `https://restcountries.com/v3.1/name/${searchInputValue}?fullText=true`
    fetch(requestedUrl)
    .then((response) => response.json())
    .then ((data) => 
    {
        result.innerHTML = `

        <img src="${data[0].flags.svg}">
        <h2> ${data[0].name.common.toUpperCase()} </h2>

        <div class="description">

            <h4> Continent </h4>
            <span> : ${data[0].continents[0]} </span>

        </div>
        
        <div class="description"> 

            <h4> Capital </h4>
            <span> : ${data[0].capital} </span>

        </div>
        
        <div class="description"> 
        
            <h4> Currency </h4>
            <span> : ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>

        </div>

        <div class="description"> 
        
            <h4> Currency code </h4>
            <span> : ${Object.keys(data[0].currencies)[0]} </span>

        </div>

        `
        
    }).catch()
    {
        if (searchInputValue.length === 0)
        {
            result.innerHTML = `<h3> The search field can not be empty </h3>`
        }

        else
        {
            result.innerHTML = `<h3> Please enter a valid country name </h3>`
        }
    }

   searchInput.value = ''
})
