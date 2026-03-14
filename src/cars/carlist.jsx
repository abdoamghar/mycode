
import React, { useRef, useState } from 'react'
const cars = [
    {
        "brand": "Toyota",
        "model": "Camry",
        "year": 2020,
        "color": "Red",
        "price": 24000
    },
    {
        "brand": "Honda",
        "model": "Civic",
        "year": 2019,
        "color": "Blue",
        "price": 22000
    },
    {
        "brand": "Ford",
        "model": "Mustang",
        "year": 2021,
        "color": "Black",
        "price": 35000
    },
    {
        "brand": "Chevrolet",
        "model": "Impala",
        "year": 2018,
        "color": "White",
        "price": 28000
    } ]

export default function Carlist() {

    const [carList, setCarList] = useState(cars);

    const [isloggedin, setisloggedin] = useState(true)

    const displaycars = () => {
        return carList.map((car, index) => <tr key={index}><td>{index + 1}</td><td>{car.brand}</td><td>{car.model}</td><td>{car.year}</td><td>{car.color}</td><td>${car.price}</td></tr>)
    }

    const brandinput = useRef()
    const modelinput = useRef()
    const yearinput = useRef()
    const colorinput = useRef()
    const priceinput = useRef()

    const pushcar = (brand, model, year, color, price) => {

        const obj = {
            brand: brand,
            model: model,
            year: year,
            color: color,
            price: price
        }

        setCarList([...carList, obj])
    }

    return (
        <>
        <input className='form-control mb-2' type="text" placeholder="Brand" ref={brandinput} />
        <input className='form-control mb-2' type="text" placeholder="Model" ref={modelinput} />
        <input className='form-control mb-2' type="number" placeholder="Year" ref={yearinput} />
        <input className='form-control mb-2' type="text" placeholder="Color" ref={colorinput} />
        <input className='form-control mb-2' type="number" placeholder="Price" ref={priceinput} />
        <button type="button" className="btn btn-primary" onClick={() => pushcar(brandinput.current.value, modelinput.current.value, yearinput.current.value, colorinput.current.value, priceinput.current.value)}>Add Car</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setisloggedin(!isloggedin)}>{isloggedin ? "Logout" : "Login"}</button>
        {isloggedin && 
        <table className="table table-striped table-bordered table-hover table-sm table-responsive ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cars.length > 0 ? displaycars() : <tr><td colSpan="6">No cars available</td></tr>}
            </tbody>
        </table>
}
        </>
    )
}