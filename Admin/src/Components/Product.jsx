import React from 'react'

function Product() {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-success">Product Management</h2>
              <button className="btn btn-success">
                Add New Product
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src="product1.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Fresh Apples</td>
                    <td>Fruits</td>
                    <td>99 R.s</td>
                    <td>100</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img src="product2.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Whole Milk</td>
                    <td>Dairy</td>
                    <td>49 R.s</td>
                    <td>75</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <img src="product3.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Whole Wheat Bread</td>
                    <td>Bakery</td>
                    <td>29 R.s</td>
                    <td>50</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <img src="product4.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Fresh Oranges</td>
                    <td>Fruits</td>
                    <td>79 R.s</td>
                    <td>120</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <img src="product5.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Yogurt</td>
                    <td>Dairy</td>
                    <td>35 R.s</td>
                    <td>200</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <img src="product6.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Croissant</td>
                    <td>Bakery</td>
                    <td>25 R.s</td>
                    <td>40</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <img src="product7.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Bananas</td>
                    <td>Fruits</td>
                    <td>59 R.s</td>
                    <td>150</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <img src="product8.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Cheese</td>
                    <td>Dairy</td>
                    <td>129 R.s</td>
                    <td>80</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      <img src="product9.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Muffins</td>
                    <td>Bakery</td>
                    <td>19 R.s</td>
                    <td>60</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      <img src="product10.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Grapes</td>
                    <td>Fruits</td>
                    <td>89 R.s</td>
                    <td>90</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      <img src="product11.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Butter</td>
                    <td>Dairy</td>
                    <td>69 R.s</td>
                    <td>100</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      <img src="product12.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Bagels</td>
                    <td>Bakery</td>
                    <td>39 R.s</td>
                    <td>70</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>
                      <img src="product13.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Strawberries</td>
                    <td>Fruits</td>
                    <td>149 R.s</td>
                    <td>80</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>
                      <img src="product14.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Cream</td>
                    <td>Dairy</td>
                    <td>45 R.s</td>
                    <td>90</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>
                      <img src="product15.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Danish Pastry</td>
                    <td>Bakery</td>
                    <td>35 R.s</td>
                    <td>45</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>
                      <img src="product16.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Mangoes</td>
                    <td>Fruits</td>
                    <td>129 R.s</td>
                    <td>70</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>
                      <img src="product17.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Ice Cream</td>
                    <td>Dairy</td>
                    <td>199 R.s</td>
                    <td>60</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>
                      <img src="product18.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Sourdough Bread</td>
                    <td>Bakery</td>
                    <td>45 R.s</td>
                    <td>40</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>
                      <img src="product19.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Pineapple</td>
                    <td>Fruits</td>
                    <td>89 R.s</td>
                    <td>50</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>
                      <img src="product20.jpg" alt="Product" style={{width: "50px"}} />
                    </td>
                    <td>Cottage Cheese</td>
                    <td>Dairy</td>
                    <td>79 R.s</td>
                    <td>85</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <nav aria-label="Product pagination">
              <ul className="pagination justify-content-center mt-4">
                {/* <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li> */}
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                {/* <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product