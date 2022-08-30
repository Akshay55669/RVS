using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewApi.Models
{
    public class Review
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        [MaxLength(300)]
        public String Name { get; set; }
        [MaxLength(300)]
        public string CompanyName { get; set; }
        [MaxLength(300)]
        public string Designation { get; set; }
        [MaxLength(1000)]
        public string Reviews { get; set; }
        public bool Status { get; set; }
    }
}
