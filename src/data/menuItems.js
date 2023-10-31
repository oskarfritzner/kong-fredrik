
const menuItems = [
    {
        id: 1, name: "Pizza pepperoni", price: 249, imgUrl: "../images/pizza-pepperoni.webp" 
    },
    {
        id: 2, name: "Pizza margherita", price: 199, imgUrl: "../images/pizza-margarita.jpeg"  
    },
    {
        id: 3, name: "Pizza vegetarian", price: 199, imgUrl: "../images/pizza-vegetar.webp"
    }
]

const displayItems = () => {
    
        menuItems.forEach(item => {
            return (
                <div className="menu-item">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="content">
                        <h1 className="title">{item.name}</h1>
                        <span className="subtitle">{item.price}</span>
                    </div>
                </div>
            )
        })
}

export default displayItems;