//* DOM Selectors

const search = document.getElementById('search-text')
const foodCard = document.querySelector('.food-card')


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
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
            
            
            `)
        }
      });
  }
}



//* Event Listners 
search.addEventListener('keyup', searchText)