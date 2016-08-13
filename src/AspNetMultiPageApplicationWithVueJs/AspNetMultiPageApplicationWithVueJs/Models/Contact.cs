using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetMultiPageApplicationWithVueJs.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
    }
}