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
  public class UserRepository
  {
    //  User Static List Method
    static List<User> _users = new List<User>();
      readonly string _connectionString;

      // Connection configuration string in Startup
      public UserRepository(IConfiguration config)
      {
        _connectionString = config.GetConnectionString("DiscPlay");
        LoadAllUsers();
      }

    // LoadAllUsers from SQL DB.ToList Method
    internal void LoadAllUsers()
    {
      using var db = new SqlConnection(_connectionString);
      _users = db.Query<User>("SELECT * FROM USER").ToList();
    }

    // GetALL Method
    internal List<User> GetAllUsers()
    {
      return _users;
    }

    // GetByID Method
    internal IEnumerable<User> GetByID(int userID)
    {
      return _users.Where(user => user.UserID == userID);
    }

    // GetUserByUserID Method
    internal List<User> GetUserByUserID(string userID)
    {
      using var db = new SqlConnection(_connectionString);
      var temp = db.Query<User>("SELECT * FROM USER WHERE UserID = @userID", new { userID }).ToList();
      return temp;
    }

    // GetUserByIDFromDB Method
    internal User GetUserByIDFromDB(int userID)
    {
      using var db = new SqlConnection(_connectionString);
      var user = db.QueryFirstOrDefault<User>("SELECT * FROM USER WHERE UserID = @userID", new { userID });
      return user;
    }

    // GetUserByNameFromList Method
    internal IEnumerable<User> GetUserByNameFromList(string firstName)
    {
      var tempUser = _users.Where(user => user.FirstName == firstName); //&& user => user.LastName == LastName
      return tempUser;
    }

    // GetUserByNameFromDB Method
    internal User GetUserByNameFromDB(string firstName)
    {
      using var db = new SqlConnection(_connectionString);
      var temp = db.QueryFirstOrDefault<User>("SELECT * FROM USER WHERE FirstName = @firstName", new { firstName });
      return temp;
    }

    // ADD User Method
    internal void Add(User newUser)
    {
      using var db = new SqlConnection(_connectionString);

      var newUser2 = new
      {
        FirstName = newUser.FirstName,
        LastName = newUser.LastName,
        Email = newUser.Email,
        UID = newUser.UID,
        UserRole = newUser.UserRole,
      };

      var sql = @"INSERT into USER(FirstName,LastName,Email,UID,UserRole)
                        output INSERTED.UserID
                        values (@FirstName, @LastName, @Email, @UID, @UserRole)";

      var ID = db.ExecuteScalar(sql, newUser2);
    }

    //  DELETE User Method
    internal void RemoveUser(int ID)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM USER
                            WHERE  UserID = @ID
                            )
                   DELETE 
                   FROM USER 
                   WHERE UserID = @ID";

      db.Execute(sql, new { ID });
    }

    // UpdateUser Method
    internal User UpdateUser(int UserID, User user)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM USER
                            WHERE  UserID = @UserID
                            )
                        UPDATE USER 
                        Set FirstName = @FirstName
                           ,LastName = @LastName
	                       ,Email = @Email
                           ,UID = @UID
                           ,UserRole = @UserRole
                        OUTPUT INSERTED.*
                        Where UserID = @UserID";

      user.UserID = UserID;
      var updatedUser = db.QuerySingleOrDefault<User>(sql, user);

      return updatedUser;
    }

    //  GetByUserUID Method
    internal User GetByUserUID(string userUID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM USER
                  WHERE UID = @UID";

      var user = db.QueryFirstOrDefault<User>(sql, new { userUID });

      return user;
    }

  }
}
