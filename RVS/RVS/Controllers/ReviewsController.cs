using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RVS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RVS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly ReviewDbContext _context;
        
        public ReviewsController( ReviewDbContext context)
        {
            
            _context = context;
        }

        [HttpPost("review")]
        public ActionResult Create(Review review)
        {
            _context.Reviews.Add(review);
            _context.SaveChanges();
            return Ok("Success from creat method");
        }
    }
}
