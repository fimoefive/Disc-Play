using Disc_Play.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace Disc_Play.DataAccess
{
  public class GameRepository
  {
    //  Game Static List Method
    static List<Game> _games = new List<Game>();
    readonly string _connectionString;

    //  Connection configuration string in Startup
    public GameRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("DiscPlay");
      LoadAllGames();
    }

    //  SQL Queries all Games.ToList
    internal void LoadAllGames()
    {
      using var db = new SqlConnection(_connectionString);
      _games = db.Query<Game>("SELECT * FROM GAME").ToList();
    }

    //  GetALL Games Method
    internal List<Game> GetAllGames()
    {
      return _games;
    }

    //  GetGameByID Method
    internal IEnumerable<Game> GetGameByID(int gameID)
    {
      return _games.Where(game => game.GameID == gameID);
    }

    //  GetByIDFromDB Method
    internal Game GetByIDFromDB(int gameID)
    {
      using var db = new SqlConnection(_connectionString);
      // sql query string
      var sql = db.QueryFirstOrDefault<Game>("SELECT * FROM GAME WHERE GameID = @gameID", new { gameID });
      return sql;
    }

    //  GetGameByGameID Method
    internal List<Game> GetGameByGameID(string gameID)
    {
      using var db = new SqlConnection(_connectionString);
      var temp = db.Query<Game>("SELECT * FROM GAME WHERE GameID = @gameID", new { gameID }).ToList();
      return temp;
    }

    //  GetCourseFromList Method
    internal IEnumerable<Game> GetCourseFromList(string course)
    {
      var temp = _games.Where(game => game.Course == course);
      return temp;
    }

    //  GetCourseFromDB Method
    internal Game GetCourseFromDB(string course)
    {
      using var db = new SqlConnection(_connectionString);
      var temp = db.QueryFirstOrDefault<Game>("SELECT * FROM GAME WHERE Course = @course", new { course });
      return temp;
    }

    //  ADD GAME Method
    internal void Add(Game newGame)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"INSERT INTO GAME (UserID, Course, Hole1, Hole2, Hole3, Hole4, Hole5, Hole6, 
                                    Hole7, Hole8, Hole9, Hole10, Hole11, Hole12, Hole13, Hole14,
                                    Hole15, Hole16, Hole17, Hole18, TimeStamp, UID)
                   OUTPUT INSERTED.GameID
                   VALUES (@UserID, @Course, @Hole1, @Hole2, @Hole3, @Hole4, @Hole5, @Hole6, 
                                    Hole7, Hole8, Hole9, Hole10, Hole11, Hole12, Hole13, Hole14, 
                                    Hole15, Hole16, Hole17, Hole18, TimeStamp, UID)";

      var ID = db.ExecuteScalar<int>(sql, newGame);
      newGame.GameID = ID;
    }

    //  DELETE GAME Method
    internal void RemoveGame(int ID)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM GAME
                            WHERE  GameID = @ID
                            )
                   DELETE 
                   FROM GAME 
                   WHERE GameID = @ID";

      db.Execute(sql, new { ID });
    }

    //  UPDATE GAME Method
    internal Game UpdateGame(int GameID, Game game)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM GAME
                            WHERE  GameID = @gameID
                            )
                   UPDATE GAME 
                   SET Course = @Course, Hole1 = @Hole1, Hole2 = @Hole2, Hole3 = @Hole3, Hole4 = @Hole4,
                       Hole5 = @Hole5, Hole6 = @Hole6, Hole7 = @Hole7, Hole8 = @Hole8, Hole9 = @Hole9,
                       Hole10 = @Hole10, Hole11 = @Hole11, Hole12 = @Hole12, Hole13 = @Hole13,
                       Hole14 = @Hole14, Hole15 = @Hole15, Hole16 = @Hole16, Hole17 = @Hole17,
                       Hole18 = @Hole18, TimeStame = @TimeStamp,
                   OUTPUT INSERTED.*
                   WHERE GameID = @gameID";

      // game.GameID = ID;
      var updateGame = db.QuerySingleOrDefault<Game>(sql, game);

      return updateGame;
    }

  }
}
