//importing the libraries and declaring variable names
var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;
var prefix = '*';
var opus = require('opusscript');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

const queue = new Map();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

bot.on('error', console.error);
bot.on('ready', () => {
    console.log(`connected as ${bot.user.username}`);
    bot.user.setPresence({ game: { name: "I ain't no snitch but * makes me work", type: 2 } });
});

//making the bot online

bot.on('message', message => {
//stop the bot talking to itself
	if (message.author === bot.user) return; 
	
//Gets the bot to join the voice channel and play Shaxx screaming (really gets the blood pumping)
		 if (isReady && message.content === '*yes')
  {
//Stops Shaxx automatically screaming (if you ask me not a bad thing)
  isReady = false;
  
  var voiceChannel = message.member.voiceChannel;
  
  if (message.content === '*stop') {
	bot.leaveVoiceChannel(message.member.voiceState.channelID);
  message.channel.createMessage('Snitch!'); };
 //Actually gets Shaxx to scream(or cream whatever floats your boat)
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('./audio/80F1EA01.mp3');
     dispatcher.on("end", end => {
		 setTimeout(function(){
       voiceChannel.leave();
       }, 10000)
       
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
  
		 if (isReady && message.content === '*yee')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const yee = connection.playFile('./audio/yee.mp3');
    yee.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 10000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
  		 if (isReady && message.content === '*ghost')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const ghost = connection.playFile('./audio/ghost.mp3');
    ghost.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
  
   		 if (isReady && message.content === '*maverick')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const mav = connection.playFile('./audio/mavericks.mp3');
    mav.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*vex')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const vex = connection.playFile('./audio/vex.mp3');
    vex.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }

 		 if (isReady && message.content === '*high')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const high = connection.playFile('./audio/high_value.mp3');
    high.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }

 		 if (isReady && message.content === '*bad')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const bad = connection.playFile('./audio/bad_guy.mp3');
    bad.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }

 		 if (isReady && message.content === '*cry')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const cry = connection.playFile('./audio/crying.mp3');
    cry.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }

 		 if (isReady && message.content === '*hive')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const hive = connection.playFile('./audio/hive.mp3');
    hive.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*fallen')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const fallen = connection.playFile('./audio/fallen.mp3');
    fallen.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*scorn')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const scorn = connection.playFile('./audio/scorn.mp3');
    scorn.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
   }).catch(err => console.log(err));
   isReady = true;
  }
  
 		 if (isReady && message.content === '*ignore this one')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const tractor = connection.playFile('./audio/tractor.mp3');
    tractor.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*invader')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const inv = connection.playFile('./audio/invader.mp3');
    inv.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*4')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const four = connection.playFile('./audio/4kills.mp3');
    four.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }
  
   		 if (isReady && message.content === '*fools')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const fool = connection.playFile('./audio/fools.mp3');
    fool.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }
  
  	 if (isReady && message.content === '*woo23')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const woo23 = connection.playFile('./audio/woo23.mp3');
    woo23.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }

  	 if (isReady && message.content === '*wahoo')
  {
  isReady = false;
   var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const wahoo = connection.playFile('./audio/wahoo.mp3');
    wahoo.on("end", end => {
		setTimeout(function(){
       voiceChannel.leave();
       }, 12000)
	});
	
   }).catch(err => console.log(err));
   isReady = true;
  }
 //Music control for Drifter//
  const serverQueue = queue.get(message.guild.id);

//Gets each command to execute
	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if(message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} 
});

//Music stuff(I don't really know whats going on here I had help)
async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('Voice channel dumb cunt!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Gimme permissions snitch!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

//Creates the skip command
function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('Voice channel dumb cunt!');
	if (!serverQueue) return message.channel.send('Voice channel dumb cunt!');
	serverQueue.connection.dispatcher.end();
}

//Creates the stop command
function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('Voice channel dumb cunt!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

//Creates the play command
function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

//Gets all the commands to work with the JS youtube core
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
  
  
/*});*/
	
	
	
bot.login(TOKEN);
