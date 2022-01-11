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

      readonly string _connectionString;

      // Connection configuration string in Startup
      public UserRepository(IConfiguration config)
      {
        _connectionString = config.GetConnectionString("DiscPlay");
      }

    // GetALL Method
    internal List<User> GetAllUsers()
    {
      using var db = new SqlConnection(_connectionString);

      var users = db.Query<User>(@"SELECT * FROM [USER]").ToList();

      return users;
    }

    // GetUserByIDFromDB Method
    internal User GetUserByIDFromDB(int userID)
    {
      using var db = new SqlConnection(_connectionString);
      var user = db.QueryFirstOrDefault<User>("SELECT * FROM [USER] WHERE UserID = @userID", new { userID });
      return user;
    }

    // GetUserByNameFromDB Method
    internal User GetUserByNameFromDB(string firstName)
    {
      using var db = new SqlConnection(_connectionString);
      var temp = db.QueryFirstOrDefault<User>("SELECT * FROM [USER] WHERE FirstName = @firstName", new { firstName });
      return temp;
    }

    // ADD User Method
    internal void Add(User newUser)
    {
      using var db = new SqlConnection(_connectionString);

      var newUser2 = new
      {
        newUser.FirstName,
        newUser.LastName,
        newUser.Email,
        newUser.UID,
        newUser.UserRole,
      };

      var sql = @"INSERT into [USER](FirstName,LastName,Email,UID,UserRole)
                        OUTPUT INSERTED.UserID
                        VALUES (@FirstName, @LastName, @Email, @UID, @UserRole)";

      var ID = db.ExecuteScalar(sql, newUser2);
      //var ID = db.ExecuteScalar<int>(sql, newUser2);
      //newUser.UserID = ID;
    }

    //  DELETE User Method
    internal void RemoveUser(int ID)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM [USER]
                            WHERE  UserID = @ID
                            )
                   DELETE 
                   FROM [USER] 
                   WHERE UserID = @ID";

      db.Execute(sql, new { ID });
    }

    // UpdateUser Method
    internal User UpdateUser(int UserID, User user)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM [USER]
                            WHERE  UserID = @UserID
                            )
                        UPDATE [USER] 
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
    internal User GetByUserUID(string uid)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"SELECT *
                  FROM [USER]
                  WHERE UID = @uid";

      var user = db.QueryFirstOrDefault<User>(sql, new { uid });

      return user;
    }

    // Get User Bool if Registarted
    internal bool IsAUser(string uID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"IF EXISTS(SELECT *
                  FROM [USER]
                  WHERE UID = @uid) SELECT 1 ELSE SELECT 0";

      var result = db.QueryFirstOrDefault<bool>(sql, new { uID });

      return result;
    }

  }
}
