using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Disc_Play.Models
{
  public class MessageForum
  {
    //	Message Forum Properties
    public int MessageID { get; set; }
    public int UserID { get; set; }
    public string Message { get; set; }
    public DateTime TimeStamp { get; set; }
    public string UID { get; set; }
  }
}
