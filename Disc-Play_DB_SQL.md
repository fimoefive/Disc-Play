# Disc-Play
CREATE DATABASE [Disc-Play]
CREATE TABLE [dbo].[USER](
	[UserID] [int] Primary Key identity(1, 1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[UID] [varchar](50) NULL,
	[UserRole] [nvarchar](50) NOT NULL
	)
	CREATE TABLE [dbo].[GAME](
	[GameID] [int] Primary Key identity(1, 1) NOT NULL,
	[UserID] [int] NOT NULL,
	[Course] [nvarchar](50) NOT NULL,
	[Hole1] [int] NOT NULL,
	[Hole2] [int] NOT NULL,
	[Hole3] [int] NOT NULL,
	[Hole4] [int] NOT NULL,
	[Hole5] [int] NOT NULL,
	[Hole6] [int] NOT NULL,
	[Hole7] [int] NOT NULL,
	[Hole8] [int] NOT NULL,
	[Hole9] [int] NOT NULL,
	[Hole10] [int] NOT NULL,
	[Hole11] [int] NOT NULL,
	[Hole12] [int] NOT NULL,
	[Hole13] [int] NOT NULL,
	[Hole14] [int] NOT NULL,
	[Hole15] [int] NOT NULL,
	[Hole16] [int] NOT NULL,
	[Hole17] [int] NOT NULL,
	[Hole18] [int] NOT NULL,
	[TimeStamp] [smalldatetime] NOT NULL,
	[UID] [varchar](50) NULL
	Foreign Key(UserID) References [dbo].[USER](UserID)
	)

	CREATE TABLE [dbo].[MESSAGE_FORUM](
	[MessageID] [int] Primary Key identity(1, 1) NOT NULL,
	[UserID] [int] NOT NULL,
	[Message] [nvarchar](50) NOT NULL,
	[TimeStamp] [smalldatetime] NOT NULL,
	[UID] [varchar](50) NULL
	Foreign Key(UserID) References [dbo].[USER](UserID)
	)

		/****** Object:  INSERT [dbo].[USER]    Script Date: 12/13/2021 ******/
GO
INSERT [dbo].[USER] ([FirstName], [LastName], [Email], [UID], [UserRole]) VALUES (N'Chad', N'Atkins', N'DiscGolf@hotmail.com', N'wC4H5aEkpQM6NMYw4ygJNa45UJo1', N'PLAYER')
GO
INSERT [dbo].[USER] ([FirstName], [LastName], [Email], [UID], [UserRole]) VALUES (N'Hank', N'Hill', N'DiscPlayer@msn.com', N'qCbslP4fmcSqLEN3rASXK0OkcoM2', N'PLAYER')

Select *
FROM [USER]

/****** Object:  INSERT [dbo].[GAME]    Script Date: 12/13/2021 ******/
GO
INSERT [dbo].[Game] ([UserID], [Course], [Hole1], [Hole2], [Hole3], [Hole4], [Hole5], [Hole6], [Hole7], [Hole8], [Hole9], [Hole10], [Hole11], [Hole12], [Hole13], [Hole14], [Hole15], [Hole16],
[Hole17], [Hole18], [TimeStamp], [UID]) VALUES (N'1', N'Cedar Hill', N'4', N'5', N'4', N'4', N'6', N'4', N'3', N'4', N'4', N'7', N'4', N'5', N'4', N'6', N'4', N'3', N'5', N'4', CAST(N'2021-12-14T17:29:00' AS SmallDateTime), N'wC4H5aEkpQM6NMYw4ygJNa45UJo1')
GO
INSERT [dbo].[Game] ([UserID], [Course], [Hole1], [Hole2], [Hole3], [Hole4], [Hole5], [Hole6], [Hole7], [Hole8], [Hole9], [Hole10], [Hole11], [Hole12], [Hole13], [Hole14], [Hole15], [Hole16],
[Hole17], [Hole18], [TimeStamp], [UID]) VALUES (N'2', N'Cedar Hill', N'5', N'5', N'6', N'5', N'6', N'4', N'6', N'4', N'5', N'6', N'6', N'6', N'4', N'5', N'3', N'5', N'5', N'4', CAST(N'2021-12-14T17:45:00' AS SmallDateTime), N'qCbslP4fmcSqLEN3rASXK0OkcoM2')

Select *
FROM [GAME]

/****** Object:  INSERT [dbo].[MESSAGE_FORUM]    Script Date: 12/13/2021 ******/
GO
INSERT [dbo].[MESSAGE_FORUM] ([UserID], [Message], [TimeStamp], [UID]) VALUES (N'1', N'Hey Guys, are you playing today?', CAST(N'2021-12-14T09:17:00' AS SmallDateTime), N'wC4H5aEkpQM6NMYw4ygJNa45UJo1')
GO
INSERT [dbo].[MESSAGE_FORUM] ([UserID], [Message], [TimeStamp], [UID]) VALUES (N'1', N'Wanna play Cedar Hill this afternoon?', CAST(N'2021-12-14T10:47:00' AS SmallDateTime), N'wC4H5aEkpQM6NMYw4ygJNa45UJo1')
GO
INSERT [dbo].[MESSAGE_FORUM] ([UserID], [Message], [TimeStamp], [UID]) VALUES (N'2', N'Yeah, I can play later today at 3pm.', CAST(N'2021-12-14T11:07:00' AS SmallDateTime), N'qCbslP4fmcSqLEN3rASXK0OkcoM2')
GO
INSERT [dbo].[MESSAGE_FORUM] ([UserID], [Message], [TimeStamp], [UID]) VALUES (N'1', N'Sounds Good!', CAST(N'2021-12-14T12:27:00' AS SmallDateTime), N'wC4H5aEkpQM6NMYw4ygJNa45UJo1')

Select *
FROM [MESSAGE_FORUM]

