import { useEffect, useState } from "react"

export default function Productlist() {

    const [productlist, setproductlist] = useState([])
    const [searchinput, setsearchinput] = useState("")
    const [categories, setcategories] = useState([])
    const [isloading, setisloading] = useState(false)

    const getproducts = () => {
        setisloading(true)
        const products = fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => {
            setproductlist(res)
            setisloading(false)
        })
    }

    const getcategories = () => {
        const categories = fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(res => setcategories(res))
    }

    useEffect(() => {
        console.log("printed")
        getproducts()
        getcategories()
    }, [])

    const filterproducts = productlist.filter(item => item.title.toLowerCase().includes(searchinput.toLowerCase()))
    const displaycategories = () => {
        return categories.map(category => <button key={category} className="btn btn-secondary">
            {category}
        </button>)
    }

    const handlesearch = (e) => {

        e.preventDefault()
        const searchvalue = document.querySelector("#search")
        setsearchinput(searchvalue)

    }





    return (
        <div className="container-fluid mx-auto w-75 my-3">
            <h2>Search:</h2>
            <form> 
                <div className="form-group">
          <label>search</label>
          <input onChange={(e) => setsearchinput(e.target.value)} type="text" value={searchinput} id="search" className="form-control" />
        </div>
        <div className="form-group">
        </div>
        <div>
            <div className="btn-group">
                
            {displaycategories()}
            </div>
        </div>
            </form>
            <h1>products list</h1>
            {isloading && <h1>Loading...</h1>}
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>DESCIPTION</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>RATING</th>
                    </tr>
                </thead>
                <tbody> 
                    {filterproducts.length > 0  ? (filterproducts.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td><img width="250" src={item.image}/></td>
                        <td><span className="badge badge-pill bg-primary">{item.rating.rate} / 5</span></td>
                    </tr> ))
                    ) : <tr><td colSpan="7" className="text-center">No products found</td></tr>}
                </tbody>
            </table>
        </div>
    )
}