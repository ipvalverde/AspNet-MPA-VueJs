using AspNetMultiPageApplicationWithVueJs.Models;
using System.Collections.Generic;
using System.Linq;

namespace AspNetMultiPageApplicationWithVueJs.DAL
{
    public class ContactRepository
    {
        private static List<Contact> _contacts = new List<Contact>();

        public void Add(Contact contact)
        {
            contact.Id = _contacts.Any() ? (_contacts.Max(c => c.Id) + 1) : 1;
            _contacts.Add(contact);
        }

        public Contact Get(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public IEnumerable<Contact> Get()
        {
            return _contacts;
        }

        public void Delete(int id)
        {
            var contact = _contacts.FirstOrDefault(c => c.Id == id);
            if(contact != null)
                _contacts.Remove(contact);
        }
    }
}