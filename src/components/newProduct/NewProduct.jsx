import './newproduct-styles.css'
import { useState } from "react"

export const NewProduct = () => {
    const [showBook, setShowBook] = useState(false)
    const [showFurniture, setShowFurniture] = useState(false)
    const [showDVD, setShowDVD] = useState(false)

    const switchForm = (e) => {
        const type = e.target.value
        if (type === 'dvd') {
            setShowDVD(true)
            setShowBook(false)
            setShowFurniture(false)
        } else if (type === 'furniture') {
            setShowDVD(false)
            setShowBook(false)
            setShowFurniture(true)
        } else if (type === 'book') {
            setShowDVD(false)
            setShowBook(true)
            setShowFurniture(false)
        } else {

        }


    }
    return (
        <>
            <div className="new-product">
                <form action="" id="product_form">
                    <div className="sku-container">
                        <label htmlFor="">SKU</label>
                        <input type="text" id="sku" />
                    </div>
                    <div className="name-container">
                        <label htmlFor="">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="price-container">
                        <label htmlFor="">Price($)</label>
                        <input type="text" id="price" />
                    </div>
                    <div className="type-switcher">
                        <label htmlFor="">Type Switcher</label>
                        <select name="" id="productType" onChange={switchForm}>
                            <option value="">Type Switcher</option>
                            <option value="dvd" id="DVD">DVD</option>
                            <option value="furniture" id="Furniture">Furniture</option>
                            <option value="book" id="Book">Book</option>
                        </select>
                    </div>
                    <div className="dynamic-form">
                        {
                            showDVD && <div className="size-container">
                                <label htmlFor="">Size (MB)</label>
                                <input type="text" id="size" />
                            </div>
                        }
                        {
                            showFurniture && <div className="furniture">
                                <div className="furniture-container">
                                    <label htmlFor="">Height (CM)</label>
                                    <input type="text" id="height" />
                                </div>
                                <div className="width-container">
                                    <label htmlFor="">Width (CM)</label>
                                    <input type="text" id="width" />
                                </div>
                                <div className="length-container">
                                    <label htmlFor="">Length (CM)</label>
                                    <input type="text" id="length" />
                                </div>
                            </div>
                        }

                        {
                            showBook && <div className="weight-container">
                                <label htmlFor="">Weight (KG)</label>
                                <input type="text" id="weight" />
                            </div>
                        }
                        <p>"Product Description"</p>
                    </div>
                </form>
            </div>
        </>

    )
}