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
  public class MessageRepository
  {
    //  MessageForum Static List Method
    //static List<MessageForum> _messages = new List<MessageForum>();
    readonly string _connectionString;

    //  Connection configuration string in Startup
    public MessageRepository(IConfiguration config)
    {
      _connectionString = config.GetConnectionString("DiscPlay");
      //LoadAllMessages();
    }

    //  LoadAllMessages Method
    //internal void LoadAllMessages()
    //{
    //  using var db = new SqlConnection(_connectionString);
    //  _messages = db.Query<MessageForum>("SELECT * FROM [MESSAGE_FORUM]").ToList();
    //}

    //  GetALL Messages Method
    internal List<MessageForum> GetAllMessages()
    {
      using var db = new SqlConnection(_connectionString);

      var messages = db.Query<MessageForum>(@"
            SELECT 
	          [MESSAGE_FORUM].UserID, 
	          [MESSAGE_FORUM].MessageID, 
	          [MESSAGE_FORUM].Message, 
	          [MESSAGE_FORUM].TimeStamp,
              [MESSAGE_FORUM].UID, 
	          [USER].FirstName
            FROM [MESSAGE_FORUM]
            LEFT JOIN 
            [USER] ON [USER].UserID=[MESSAGE_FORUM].UserID;"
      ).ToList();

      return messages;
    }

    //  GetPaymentByID Method
    //internal IEnumerable<MessageForum> GetMessageByID(int messageID)
    //{
    //  return _messages.Where(message_forum => message_forum.MessageID == messageID);
    //}

    //  GetByIDFromDB Method
    internal MessageForum GetByIDFromDB(int messageID)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = db.QueryFirstOrDefault<MessageForum>("SELECT * FROM [MESSAGE_FORUM] WHERE MessageID = @messageID", new { messageID });
      return sql;
    }

    //  GetMessageByMessageID Method
    //internal List<MessageForum> GetMessageByMessageID(string messageID)
    //{
    //  using var db = new SqlConnection(_connectionString);
    //  var temp = db.Query<MessageForum>("SELECT * FROM MESSAGE_FORUM WHERE MessageID = @messageID", new { messageID }).ToList();
    //  return temp;
    //}

    //  ADD Message Method
    internal void Add(MessageForum newMessage)
    {
      using var db = new SqlConnection(_connectionString);

      var sql = @"INSERT INTO [MESSAGE_FORUM] (UserID, Message, TimeStamp, UID)
                   OUTPUT INSERTED.MessageID
                   VALUES (@UserID, @Message, @TimeStamp, @UID)";

      var ID = db.ExecuteScalar<int>(sql, newMessage);
      newMessage.MessageID = ID;
    }

    //  DELETE Message Method
    internal void RemoveMessage(int ID)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM [MESSAGE_FORUM]
                            WHERE  MessageID = @ID
                            )
                   DELETE 
                   FROM [MESSAGE_FORUM] 
                   WHERE MessageID = @ID";

      db.Execute(sql, new { ID });
    }

    //  UpdateMessage Method
    internal MessageForum UpdateMessage(int MessageID, MessageForum message)
    {
      using var db = new SqlConnection(_connectionString);
      var sql = @"IF EXISTS(SELECT * 
                            FROM [MESSAGE_FORUM]
                            WHERE  MessageID = @messageID
                            )
                   UPDATE [MESSAGE_FORUM]
                   SET UserID = @UserID
                   ,Message = @Message
                   ,TimeStamp = @TimeStamp
                   ,UID = @UID
                   OUTPUT INSERTED.*
                   WHERE MessageID = @MessageID";

      // message.MessageID = ID;
      var updatedMessage = db.QuerySingleOrDefault<MessageForum>(sql, message);

      return updatedMessage;
    }




  }
}
