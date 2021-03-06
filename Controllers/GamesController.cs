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
  [Route("api/games")]
  [ApiController]
  public class GamesController : Controller
  {
    public readonly GameRepository _repo;

    public GamesController(GameRepository repo)
    {
      _repo = repo;
    }

    // GET: GamesController
    [HttpGet]
    public List<Game> GetAllGames()
    {
      return _repo.GetAllGames();
    }

    // GET: GamesController/GameID
    [HttpGet("{gameID}")]
    public IActionResult GETGameByID(int gameID)
    {
      var game = _repo.GetByGameIDFromDB(gameID);

      if (game == null)
      {
        return NotFound($"No game with ID of {gameID} was found.");
      }
      return Ok(game);
    }

    // GET: GamesController/{userID}
    [HttpGet("GetGamesByUserID/{userID}")]
    public IActionResult GetGamesByUserID(int userID)
    {
      var games = _repo.GetGamesByUserID(userID);

      if (games == null)
      {
        return NotFound($"No games for UserID {userID} were found.");
      }
      return Ok(games);
    }

    // GET: GamesController/{course}
    [HttpGet("GetCourseFromDB/{course}")]
    public Game GETCourseByDB(string course)
    {
      return _repo.GetCourseFromDB(course);
    }

    // POST: GamesController/Create
    [HttpPost]
    public IActionResult Create(Game newGame)
    {
      if (string.IsNullOrEmpty(newGame.Course) ||
          newGame.GameID.Equals(string.Empty)
          )
      {
        return BadRequest("Course is a required field");
      }
      _repo.Add(newGame);

      return Created($"/api/games/{newGame.GameID}", newGame);
    }

    // PUT: GamesController/Edit/{gameID}
    [HttpPut("{ID}")]
    public IActionResult Edit(int ID, Game game)
    {
      var gameUpdate = _repo.GetByGameIDFromDB(ID);

      if (gameUpdate == null)
      {
        return NotFound($"Could not find game with ID of {ID} to update");
      }
      var updatedGame = _repo.UpdateGame(ID, game);

      return Ok(updatedGame);
    }

    // DELETE: GamesController/Delete/{gameID}
    [HttpDelete("{ID}")]
    public ActionResult Delete(int ID)
    {
      _repo.RemoveGame(ID);

      return Ok();
    }

  }
}
