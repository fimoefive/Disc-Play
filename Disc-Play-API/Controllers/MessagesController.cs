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
  [Route("api/message_forum")]
  [ApiController]
  public class MessagesController : Controller
  {
    MessageRepository _repo;

    public MessagesController(MessageRepository repo)
    {
      _repo = repo;
    }

    // GetALLMESSAGES: MessagesController
    [HttpGet]
    public List<MessageForum> GetAllMESSAGES()
    {
      return _repo.GetAllMessages();
    }

    // GET: MessagesController/Details/5
    //public ActionResult Details(int ID)
    //{
    //  return View();
    //}

    // GETMessageID: MessagesController/{MessageID}
    [HttpGet("GetMessageByMessageID/{messageID}")]
    public List<MessageForum> GETMessageByMessageID(string messageID)
    {
      return _repo.GetMessageByMessageID(messageID);
    }

    // GET: MessageID IACTION
    [HttpGet("{messageID}")]
    public IActionResult GetMessageBYID(int messageID)
    {
      var message = _repo.GetByIDFromDB(messageID);

      if (message == null)
      {
        return NotFound($"No payment with ID of {messageID} was found.");
      }
      return Ok(message);
    }


    // POST: MessagesController/CreateMessage
    [HttpPost]
    public IActionResult CreateMessage(MessageForum newMessage)
    {
      if (string.IsNullOrEmpty(newMessage.Message) ||
           newMessage.MessageID.Equals(string.Empty))
      {
        return BadRequest("Text is a required field");
      }
      _repo.Add(newMessage);

        return Created($"/api/message_forum/{newMessage.MessageID}", newMessage);
    }

    //  PUT: MessagesController/Edit/{MessageID}
    [HttpPut("{ID}")]
    public IActionResult UpdateMessage(int ID, MessageForum message)
    {
      var messageUpdate = _repo.GetByIDFromDB(ID);

      if (messageUpdate == null)
      {
        return NotFound($"Could not find message with ID of {ID} to update");
      }
      var updatedMessage = _repo.UpdateMessage(ID, message);

      {
        return Ok(updatedMessage);
      }
    }

    // DELETE: MessagesController/Delete/{MessageID}
    [HttpDelete("{ID}")]
    public IActionResult DeleteMessage(int ID)
    {
      _repo.RemoveMessage(ID);

      return Ok();
    }

  }
}
