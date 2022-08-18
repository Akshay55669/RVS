using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RVS.Models
{
    public class ReviewDbContext:DbContext
    {
        string connectionString;

        public DbSet<Review> Reviews { get; set; }


        public ReviewDbContext()
        {
            connectionString = "server=(localdb)\\MSSQLLocalDB;database=RVS;integrated security=true; MultipleActiveResultSets=True;trustservercertificate=true";
        }

        public ReviewDbContext(string path) : base()
        {
            connectionString = path;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder
             optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(connectionString);
        }
    }


}
