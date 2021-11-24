function index() {
	var r = confirm("Download:\nindex.html");
	if (r == true) {
		fetch('./index')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'index.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function acnh() {
	var r = confirm("Download:\nacnh.html");
	if (r == true) {
		fetch('./acnh')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'acnh.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function acnh_designs() {
	var r = confirm("Download:\ndesigns.zip");
	if (r == true) {
		fetch('./acnh/designs.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'designs.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function acnh_img() {
	var r = confirm("Download:\nimg.zip");
	if (r == true) {fetch('./acnh/img.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'img.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function art() {
	var r = confirm("Download:\nart.zip");
	if (r == true) {
		fetch('./art.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'art.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord() {
	var r = confirm("Download:\ndiscord.html");
	if (r == true) {
		fetch('./discord')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'discord.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_acc() {
	var r = confirm("Download:\naccount.html");
	if (r == true) {
		fetch('./discord/account')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'account.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_apps() {
	var r = confirm("Download:\napplications.html");
	if (r == true) {
		fetch('./discord/applications')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'applications.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_app_01() {
	var r = confirm("Download:\n772120114388140062.html");
	if (r == true) {
		fetch('./discord/applications/772120114388140062')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '772120114388140062.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_app_01_botAvatar() {
	var r = confirm("Download:\nbot-avatar.png");
	if (r == true) {
		fetch('./discord/applications/772120114388140062/bot-avatar.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'bot-avatar.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/applications/772120114388140062/bot-avatar.png')
	}
}

function discord_app_01_icon() {
	var r = confirm("Download:\nicon.png");
	if (r == true) {
		fetch('./discord/applications/772120114388140062/icon.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'icon.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/applications/772120114388140062/icon.png')
	}
}

function discord_app_02() {
	var r = confirm("Download:\n895031444878028831.html");
	if (r == true) {
		fetch('./discord/applications/895031444878028831')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '895031444878028831.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_app_02_avatar() {
	var r = confirm("Download:\nbot-avatar.png");
	if (r == true) {
		fetch('./discord/applications/895031444878028831/bot-avatar.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'bot-avatar.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/applications/895031444878028831/bot-avatar.png')
	}
}

function discord_app_02_icon() {
	var r = confirm("Download:\nicon.png");
	if (r == true) {
		fetch('./discord/applications/895031444878028831/icon.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'icon.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/applications/895031444878028831/icon.png')
	}
}

function discord_avatar() {
	var r = confirm("Download:\navatar.png");
	if (r == true) {
		fetch('./discord/account/avatar.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'avatar.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/account/avatar.png')
	}
}

function discord_servers() {
	var r = confirm("Download:\nservers.html");
	if (r == true) {
		fetch('./discord/servers')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'servers.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_01() {
	var r = confirm("Download:\n771861170256085023.html");
	if (r == true) {
		fetch('./discord/servers/771861170256085023')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '771861170256085023.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_01_auditLog() {
	var r = confirm("Download:\naudit-log.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/audit-log.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'audit-log.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/audit-log.json')
	}
}

function discord_server_01_bans() {
	var r = confirm("Download:\nbans.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/bans.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'bans.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/bans.json')
	}
}

function discord_server_01_channels() {
	var r = confirm("Download:\nchannels.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/channels.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'channels.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/channels.json')
	}
}

function discord_server_01_emoji_a() {
	var r = confirm("Download:\nemoji.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/emoji.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'emoji.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/emoji.json')
	}
}

function discord_server_01_emoji_b() {
	var r = confirm("Download:\nemoji.zip");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/emoji.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'emoji.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_01_guild() {
	var r = confirm("Download:\nguild.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/guild.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'guild.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/guild.json')
	}
}

function discord_server_01_icon() {
	var r = confirm("Download:\nicon.png");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/icon.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'icon.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/icon.png')
	}
}

function discord_server_01_webhooks_a() {
	var r = confirm("Download:\nwebhooks.json");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/webhooks.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'webhooks.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/webhooks.json')
	}
}

function discord_server_01_webhooks_b() {
	var r = confirm("Download:\nwebhooks.zip");
	if (r == true) {
		fetch('./discord/servers/771861170256085023/webhooks.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'webhooks.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_02() {
	var r = confirm("Download:\n884263560941817916.html");
	if (r == true) {
		fetch('./discord/servers/884263560941817916')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '884263560941817916.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_02_auditLog() {
	var r = confirm("Download:\naudit-log.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/audit-log.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'audit-log.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/audit-log.json')
	}
}

function discord_server_02_bans() {
	var r = confirm("Download:\nbans.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/bans.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'bans.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/bans.json')
	}
}

function discord_server_02_channels() {
	var r = confirm("Download:\nchannels.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/channels.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'channels.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/channels.json')
	}
}

function discord_server_02_emoji_a() {
	var r = confirm("Download:\nemoji.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/emoji.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'emoji.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/emoji.json')
	}
}

function discord_server_02_emoji_b() {
	var r = confirm("Download:\nemoji.zip");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/emoji.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'emoji.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function discord_server_02_guild() {
	var r = confirm("Download:\nguild.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/guild.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'guild.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/guild.json')
	}
}

function discord_server_02_icon() {
	var r = confirm("Download:\nicon.png");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/icon.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'icon.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/icon.png')
	}
}

function discord_server_02_webhooks_a() {
	var r = confirm("Download:\nwebhooks.json");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/webhooks.json')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'webhooks.json';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/webhooks.json')
	}
}

function discord_server_02_webhooks_b() {
	var r = confirm("Download:\nwebhooks.zip");
	if (r == true) {
		fetch('./discord/servers/884263560941817916/webhooks.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'webhooks.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function div() {
	var r = confirm("Download:\ndiv.zip");
	if (r == true) {
		fetch('./div.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'div.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icons() {
	var r = confirm("Download:\nicons.html");
	if (r == true) {
		fetch('./icons')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'icons.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_player() {
	var r = confirm("Download:\nplayer.zip");
	if (r == true) {
		fetch('./icons/player.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'player.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_ship() {
	var r = confirm("Download:\nship.zip");
	if (r == true) {
		fetch('./icons/ship.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'ship.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_ball() {
	var r = confirm("Download:\nplayer_ball.zip");
	if (r == true) {
		fetch('./icons/player_ball.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'player_ball.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_bird() {
	var r = confirm("Download:\nbird.zip");
	if (r == true) {
		fetch('./gdIcons/bird.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'bird.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_dart() {
	var r = confirm("Download:\ndart.zip");
	if (r == true) {
		fetch('./gdIcons/dart.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'dart.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_robot() {
	var r = confirm("Download:\nrobot.zip");
	if (r == true) {
		fetch('./gdIcons/robot.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'robot.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_spider() {
	var r = confirm("Download:\nspider.zip");
	if (r == true) {
		fetch('./gdIcons/spider.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'spider.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_special() {
	var r = confirm("Download:\nplayer_special.zip");
	if (r == true) {
		fetch('./gdIcons/player_special.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'player_special.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function icon_explosion() {
	var r = confirm("Download:\nexplosion.zip");
	if (r == true) {
		fetch('./gdIcons/explosion.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'explosion.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function pfp() {
	var r = confirm("Download:\npfp.zip");
	if (r == true) {
		fetch('./pfp.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'pfp.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function tp() {
	var r = confirm("Download:\ntp.html");
	if (r == true) {
		fetch('./tp')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'tp.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function tp_01() {
	var r = confirm("Download:\ntp1.html");
	if (r == true) {
		fetch('./tp/tp1')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'tp1.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function tp_02() {
	var r = confirm("Download:\ntp2.html");
	if (r == true) {
		fetch('./tp/tp2')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'tp2.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function extra() {
	var r = confirm("Download:\nextra.html");
	if (r == true) {
		fetch('./extra')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'extra.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function src() {
	var r = confirm("Download:\nsrc.zip");
	if (r == true) {
		fetch('./src.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'src.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function scripts() {
	var r = confirm("Download:\nscripts.zip");
	if (r == true) {
		fetch('./scripts.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'scripts.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function fourZeroFour_a() {
	var r = confirm("Download:\n404.html");
	if (r == true) {
		fetch('./404.html')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '404.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function fourZeroFour_b() {
	var r = confirm("Download:\n404.md");
	if (r == true) {
		fetch('./404.md')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '404.md';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function repo() {
	var r = confirm("Download:\nmaster.zip");
	if (r == true) {
		window.open('https://github.com/Reper2/downloadable-files/archive/refs/heads/master.zip')
	} else {
		null
	}
}

function hof() {
	var r = confirm("Download:\nhof.html");
	if (r == true) {
		fetch('./hof')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function hof_01() {
	var r = confirm("Download:\nIMG_001.PNG");
	if (r == true) {
		fetch('./hof/IMG_001.PNG')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_001.PNG';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_001.PNG')
	}
}

function hof_02() {
	var r = confirm("Download:\nIMG_002.png");
	if (r == true) {
		fetch('./hof/IMG_002.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_002.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_002.png')
	}
}

function hof_03() {
	var r = confirm("Download:\nIMG_003.png");
	if (r == true) {
		fetch('./hof/IMG_003.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_003.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_003.png')
	}
}

function hof_04() {
	var r = confirm("Download:\nIMG_004.png");
	if (r == true) {
		fetch('./hof/IMG_004.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_004.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_004.png')
	}
}

function hof_05() {
	var r = confirm("Download:\nIMG_005.png");
	if (r == true) {
		fetch('./hof/IMG_005.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_005.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_005.png')
	}
}

function hof_06() {
	var r = confirm("Download:\nIMG_006.png");
	if (r == true) {
		fetch('./hof/IMG_006.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_006.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_006.png')
	}
}

function hof_07() {
	var r = confirm("Download:\nIMG_007.png");
	if (r == true) {
		fetch('./hof/IMG_007.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_007.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_007.png')
	}
}

function hof_08() {
	var r = confirm("Download:\nIMG_008.png");
	if (r == true) {
		fetch('./hof/IMG_008.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_008.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_008.png')
	}
}

function hof_09() {
	var r = confirm("Download:\nIMG_009.mp4");
	if (r == true) {
		fetch('./hof/IMG_009.mp4')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_009.mp4';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_009.mp4')
	}
}

function hof_10() {
	var r = confirm("Download:\nIMG_0010.gif");
	if (r == true) {
		fetch('./hof/IMG_0010.gif')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_0010.gif';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_0010.gif')
	}
}

function lib() {
	var r = confirm("Download:\nlib.html");
	if (r == true) {
		fetch('./lib')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'lib.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}