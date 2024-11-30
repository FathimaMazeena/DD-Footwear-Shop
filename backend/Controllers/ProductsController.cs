using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data.Common;
using System.Data;

namespace DD_Footwear_Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        string connectionString = "Data Source=DESKTOP-04O5V55;Initial Catalog=Company;Integrated Security=True";
        [HttpGet]
        public IActionResult GetItems()
        {
            SqlConnection connection = new SqlConnection(connectionString);

            {
                connection.Open();
                string query = "SELECT * FROM Item";
                SqlCommand command = new SqlCommand(query, connection);
                var reader = command.ExecuteReader();
                var items = new List<Item>();
                while (reader.Read())
                {
                    items.Add(new Item
                    {
                        id = int.Parse(reader["ItemID"].ToString()),
                        name = reader["ItemName"].ToString(),
                        description = reader["Description"].ToString(),
                        price = decimal.Parse(reader["UnitPrice"].ToString())
                    });
                }

                return Ok(items);
            }


        }
    }
}
