
import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ margin: "100px" }}>Dashboard
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Rubber Duck</td>
          <td>$4.99</td>
          <td>13</td>
          <td>__</td>
          <td>__</td>
        </tr>
      </table>

      <div style={{ marginTop: "100px" }}>
        Orders
        <table>
          <tr>
            <th>Duck Shop</th>
            <th>Total Price</th>
            <th>View</th>
          </tr>
          <tr>
            <td>Rubber Duck</td>
            <td>$4.99</td>
            <td>__</td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default Dashboard