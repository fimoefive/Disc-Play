using Disc_Play.DataAccess;
using Disc_Play.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Disc_Play.Controllers
{
  [Route("api/user")]
  [ApiController]
  public class UserController : Controller  // ControllerBase
  {
    UserRepository _repo;

    public UserController(UserRepository repo)
    {
      _repo = repo;
    }

    // GET: GETALLUSERS UserController
    [HttpGet]
    public List<User> GETALLUSERS()
    {
      return _repo.GetAllUsers();
    }

    // GET: GETBYUSERID UserController/userID/{id}
    [HttpGet("GETBYUSERID/{userID}")]
    public List<User> GETBYUSERID(string userID)
    {
      return _repo.GetUserByUserID(userID);
    }

    // GET: UserController/{ID}
    [HttpGet("{ID}")]
    public IActionResult GETUSERBYID(int ID)
    {
      var user = _repo.GetUserByIDFromDB(ID);

      if (user == null)
      {
        return NotFound($"No user with the ID of {ID} was found");
      }
      return Ok(user);
    }

    //  GET: User/FirstName
    [HttpGet("CGetUserFirstFromList/{firstName}")]
    public IEnumerable<User> CGetUserFirstFromList(string firstName)
    {
      return _repo.GetUserByNameFromList(firstName);
    }

    [HttpGet("CGetUserByNameFromDB/{firstName}")]
    public User CGetUserByNameFromDB(string firstName)
    {
      return _repo.GetUserByNameFromDB(firstName);
    }

    // POST: UserController/AddUser
    [HttpPost]
    public IActionResult AddUser(User newUser)
    {
      if (string.IsNullOrEmpty(newUser.FirstName) ||
         string.IsNullOrEmpty(newUser.LastName) ||
         string.IsNullOrEmpty(newUser.Email))
      {
        return BadRequest("User information fields and Payment ID are required");
      }
      _repo.Add(newUser);

        return Created($"api/user/{newUser.UserID}", newUser);
    }

    // GET: UserController/Edit/{ID}
    [HttpPut("{ID}")]
    public IActionResult Edit(int ID, User user)
    {
      var userToUpdate = _repo.GetUserByIDFromDB(ID);

      if (userToUpdate == null)
      {
        return NotFound($"Could not find user with that ID of {ID} for updating.");
      }

      var updateUser = _repo.UpdateUser(ID, user);
      return Ok(updateUser);
    }

    // DELETE: UserController/Delete/{ID}
    [HttpDelete("{ID}")]
    public IActionResult Delete(int ID)
    {
      _repo.RemoveUser(ID);

      return Ok();
    }

    // GET: validateUse/{UID}
    [HttpGet("validateUser/{uID}")]
    public bool validateUser(string uID)
    {
      return _repo.IsAUser(uID);
    }

    // GET: GETUserByUID/{UID}
    [HttpGet("GetUserByUID/{uID}")]
    public User GETUserByUID(string uID)
    {
      return _repo.GetByUserUID(uID);
    }


  }
}
