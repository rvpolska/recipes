import './App.css';
import { useEffect, useState } from 'react';
import video from './video_n.mp4';
import search from './broccoli.gif';
import MyNutritionComponent from './MyNutritionComponent'
import cat from './cat.gif'


function App() {

  const MY_ID = '7f326584';
  const MY_KEY = '186405e713dcf49ff89b979398808d4c';

  const [mySearch, setMySearch] = useState('');
  const [myNutrition, setMyNutrition ] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('')
  

  useEffect (() =>{
    const getAdvice = async () =>{
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log (data.hits)
      setMyNutrition(data.hits);

    }
    getAdvice()
  },[wordSubmitted])

  const myNutritionAnalys = (e) =>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();  // что бы страница не перезагружалась при нажатии на поиск
    setWordSubmitted(mySearch);
  }



  return(

<div className="App">

 <div className="container">

 <video autoPlay muted loop>

<source src={video} type="video/mp4" />
</video>
      <h1>Hello fatty</h1>
<img src={cat} width='100px' alt='wow' className='icons'/>
 </div>

<div className='container'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='search...' onChange={myNutritionAnalys} value={mySearch}>
    </input>
  </form>
</div>

<div className='container'>
  <button onClick={finalSearch}>
    <img src={search} width='40px' alt='wow' className='icons'/>
  </button>
</div>


{myNutrition.map(element =>(
  <MyNutritionComponent label={element.recipe.label} 
  image={element.recipe.image}
  calories={element.recipe.calories}
  mealType={element.recipe.mealType}
  cuisineType={element.recipe.cuisineType}
  dietLabels={element.recipe.dietLabels}
  dishType={element.recipe.dishType}
  ingridients = {element.recipe.ingredientLines}
  totalWeight = {element.recipe.totalWeight}
  />
)
)}




 </div>
  );
}

export default App;
