import { date } from "faker/lib/locales/vi";
import productList from "./productList";


const App = () => {
    console.log(productList)
    
    const random= Math.floor(Math.random() * productList.length)
    const noDollar=productList[random].price.slice(1)
    const promoPrice=Number(noDollar)/2
    
    
    let today=new Date()
    let months=["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    let todayDate=today.getDate()
    let todayMonth=months[today.getMonth()]
    let formatDate=todayDate + " " + todayMonth



    return (
        <div>
            <h3 style={{textAlign: "center"}}>Random Product of the day</h3>
            <h6 style={{textAlign: "right"}}>Todays date: {formatDate}</h6>
            <div className="card">
            <img src={productList[random].image} className="card-img-top" alt="product" />
                <div className="card-body">
                    <h5 className="card-title">{productList[random].name}</h5>
                    <p>Category: {productList[random].category}</p>
                    <p className="card-text">{productList[random].shortDescription}</p>
                    <p>Old price: <span style={{textDecoration:"line-through"}}>{productList[random].price}</span></p>
                    <p>New price: ${promoPrice}</p>
                </div>
            </div>
            <h3 style={{textAlign: "center"}}>The rest of the products</h3>
            <div className="products row">
                {productList.map((item)=>(
                    <div className="col-md-4">
                    <div className="card">
                    <img src={item.image} className="card-img-top" alt="product" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>Category: {item.category}</p>
                            <p className="card-text">{item.shortDescription}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                    </div>
                ))}
                
            </div>
            <footer>
                <p>We bring you <strong>only the best products</strong> that can be randomly generated!</p>
                <p>Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from <a href="https://picsum.photos/">Lorem Picsum</a></p>
            </footer>
        </div>
    );
};

export default App;