//* DOM Selectors

const search = document.getElementById('search-text')
const foodCard = document.querySelector('.card-list')


function searchText(e) {
  const userText = e.target.value

  if (userText.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data.meals === null) {
          foodCard.innerHTML = `<p>There are no search results for ${userText}<p>`;
        } else {
          foodCard.innerHTML = data.meals
            .map(meal => `        
            <article class="card">
              <header class="card-header">
                <p id="cuisine">${meal.strArea}</p>
                <h2>${meal.strMeal}</h2>
              </header>
  
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            </article>
            `)
        }
      });
  }
}



//* Event Listners 
search.addEventListener('keyup', searchText)