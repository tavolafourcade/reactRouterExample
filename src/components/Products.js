import { Link } from "react-router-dom";
const ProductsList = [
  {
    "id": 1,
    "name": "Mara Chambers",
    "price": 9.1469,
    "description": "Pariatur ea dolor nostrud et nulla proident exercitation id officia quis eu in nisi adipisicing. Officia ea dolor laboris cillum fugiat. Commodo aliqua id exercitation qui sunt nisi duis enim sunt do. Minim laborum dolor minim ullamco eu quis aliqua anim.\r\n"
  },
  {
    "id": 3,
    "name": "Sanford Ballard",
    "price": 0.9168,
    "description": "Irure ea nulla ipsum dolore deserunt proident. Nisi ex pariatur laboris in. Consequat officia minim id cupidatat officia.\r\n"
  },
  {
    "id": 4,
    "name": "Knowles Hodge",
    "price": 0.6352,
    "description": "Sunt sunt cupidatat eiusmod laboris est dolore velit nulla officia. Magna sint deserunt ad culpa amet nisi et reprehenderit cupidatat nulla officia incididunt duis minim. Non sunt laboris duis deserunt quis duis incididunt eu ex minim laboris aliqua.\r\n"
  },
  {
    "id": 2,
    "name": "Lakeisha Rocha",
    "price": 2.1416,
    "description": "Nisi labore in irure dolor nostrud culpa et sit. Esse laboris ex quis amet officia incididunt. Consectetur minim irure sunt enim. Non culpa labore Lorem magna aliquip eiusmod pariatur dolore commodo amet velit consequat. Mollit laboris sunt ut consequat enim nulla laboris. Sint velit voluptate est consequat occaecat cillum velit pariatur.\r\n"
  },
  {
    "id": 6,
    "name": "Claudine Becker",
    "price": 3.5005,
    "description": "Tempor ea commodo est nulla tempor ut ut nulla velit. Cillum dolor Lorem nostrud anim aliqua in consequat amet nulla nulla. Commodo aliqua exercitation culpa non laborum incididunt ut Lorem esse. Anim est dolor dolore proident do esse.\r\n"
  },
  {
    "id": 9,
    "name": "Kerri Stephens",
    "price": 5.2899,
    "description": "Elit enim ex qui fugiat tempor qui reprehenderit sunt duis mollit commodo elit voluptate elit. Laboris occaecat ut commodo aute sit ex ea quis aute nostrud do culpa. Ex in qui ut nulla aute ex aute esse eu sunt dolore occaecat amet.\r\n"
  },
  {
    "id": 10,
    "name": "Maxine Mccarty",
    "price": 9.5464,
    "description": "Nulla mollit amet commodo ad occaecat ea duis culpa velit non in ea. Consequat officia irure consequat consequat amet nisi anim aliquip voluptate aliqua laboris do. Qui est est velit mollit eu sunt sit cillum ut laboris. Laboris cupidatat consequat irure reprehenderit ex elit id. Est amet pariatur ex ad tempor eu dolore est irure mollit elit veniam.\r\n"
  }
]

function Products(props){

  let id = Number(props.match.params.id)
  console.log(id)
  let product = ProductsList.find(oneProduct => oneProduct.id === id);
  console.log(product)
  return(
    <div>
      <h2>Soy el componente PRODUCTS</h2>

      <Link to='/products/1'>Product 1</Link><br/>
      <Link to='/products/2'>Product 2</Link><br/>
      <Link to='/products/3'>Product 3</Link><br/>
      <Link to='/products/4'>Product 4</Link><br/>
      {
        product &&
        <>
          <p><b>ID:</b> {product.id}</p>
          <p><b>Nombre:</b> {product.name}</p>
          <p><b>Precio (PEN):</b> {product.price}</p>
          <p><b>Descripcion:</b> {product.description}</p>
        </>
      }

      {
        !product && <p>No hay productos con ese ID</p>
      }
      
    </div>
  )
}

export default Products;