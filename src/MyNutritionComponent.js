import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyNutritionComponent ({label, image, calories,mealType,cuisineType ,dietLabels,dishType,ingridients,totalWeight}){
    return(
   <div className="container2">
   
            
            <div className='info'>
            <Card style={{ width: 'auto'  }}>
            <Card.Title><h2>{label}</h2></Card.Title>
      <Card.Img variant="top" width='180px' src={image} />
      <Card.Body>
        <Card.Title>cal: {calories.toFixed()}</Card.Title>
        <Card.Title>Dish type: {dishType}</Card.Title>
        <Card.Title>Weight: {totalWeight.toFixed()}</Card.Title>


        <Card.Text>
          <ul className='list'>
            {ingridients.map(ingridient =>
                <li>{ingridient}</li>)}
          </ul>
        </Card.Text>
        <Button variant="primary">Here can be advertising of your proper nutrition store</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
    )
}

export default MyNutritionComponent;


