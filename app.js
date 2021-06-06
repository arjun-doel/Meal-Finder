//* DOM Selectors

const search = document.getElementById('search-text')
const foodCard = document.getElementById('food-card')


function searchText(e) {
  const userText = e.target.value

  if (userText.trim()){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }
}



//* Event Listners 
search.addEventListener('keyup', searchText)