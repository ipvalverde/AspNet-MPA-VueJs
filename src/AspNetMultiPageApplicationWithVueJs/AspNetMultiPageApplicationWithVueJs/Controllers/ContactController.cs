using AspNetMultiPageApplicationWithVueJs.DAL;
using AspNetMultiPageApplicationWithVueJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspNetMultiPageApplicationWithVueJs.Controllers
{
    public class ContactController : Controller
    {
        private readonly ContactRepository _contactRepository;
        public ContactController()
        {
            _contactRepository = new ContactRepository();
        }

        // GET: Contact
        public ActionResult Index()
        {
            return View(_contactRepository.Get());
        }

        // GET: Contact/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Contact/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Contact/Create
        [HttpPost]
        public ActionResult Create(Contact contact)
        {
            try
            {
                this._contactRepository.Add(contact);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Contact/Edit/5
        public ActionResult Edit(int id)
        {
            var contact = this._contactRepository.Get(id);
            return View(contact);
        }

        // POST: Contact/Edit/5
        [HttpPost]
        public ActionResult Edit(Contact updatedContact)
        {
            try
            {
                var dataStoreContact = this._contactRepository.Get(updatedContact.Id);

                dataStoreContact.FirstName = updatedContact.FirstName;
                dataStoreContact.LastName = updatedContact.LastName;
                dataStoreContact.Age = updatedContact.Age;
                dataStoreContact.Email = updatedContact.Email;

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        public ActionResult Delete(int id)
        {
            _contactRepository.Delete(id);
            return View();
        }
    }
}
