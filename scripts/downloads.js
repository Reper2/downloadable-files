function index() {
	var r = confirm("\rFile: index.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/index')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/index.html')
	}
}

function acnh() {
	var r = confirm("File: acnh.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/acnh.html')
	}
}

function acnh_designs() {
	var r = confirm("File:\ndesigns.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/designs.zip')
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

function acnh_dodocodes() {
	var r = confirm("File:\ndodocodes.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/dodocodes')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'dodocodes.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/acnh/dodocodes.html')
	}
}

function acnh_img() {
	var r = confirm("File:\nimg.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/img.zip')
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
	var r = confirm("File:\nart.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/art.zip')
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
	var r = confirm("File:\ndiscord.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord.html')
	}
}

function discord_acc() {
	var r = confirm("File:\naccount.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account.html')
	}
}

function discord_apps() {
	var r = confirm("File:\napplications.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account/applications.html')
	}
}

function discord_app_01() {
	var r = confirm("File:\n772120114388140062.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/772120114388140062')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/applications/772120114388140062')
	}
}

function discord_app_01_botAvatar() {
	var r = confirm("File:\nbot-avatar.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/772120114388140062/bot-avatar.png')
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
	var r = confirm("File:\nicon.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/772120114388140062/icon.png')
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
	var r = confirm("File:\n895031444878028831.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/895031444878028831')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account/applications/895031444878028831.html')
	}
}

function discord_app_02_avatar() {
	var r = confirm("File:\nbot-avatar.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/895031444878028831/bot-avatar.png')
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
	var r = confirm("File:\nicon.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/895031444878028831/icon.png')
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
	var r = confirm("File:\navatar.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/avatar.png')
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
	var r = confirm("File:\nservers.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers.html')
	}
}

function discord_server_01() {
	var r = confirm("File:\n771861170256085023.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/771861170256085023.html')
	}
}

function discord_server_01_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/audit-log.json')
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
	var r = confirm("File:\nbans.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/bans.json')
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
	var r = confirm("File:\nchannels.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/channels.json')
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
	var r = confirm("File:\nemoji.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/emoji.json')
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
	var r = confirm("File:\nemoji.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/emoji.zip')
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
	var r = confirm("File:\nguild.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/guild.json')
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
	var r = confirm("File:\nicon.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/icon.png')
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
	var r = confirm("File:\nwebhooks.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/webhooks.json')
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
	var r = confirm("File:\nwebhooks.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/webhooks.zip')
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
	var r = confirm("File:\n884263560941817916.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/884263560941817916.html')
	}
}

function discord_server_02_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/audit-log.json')
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
	var r = confirm("File:\nbans.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/bans.json')
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
	var r = confirm("File:\nchannels.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/channels.json')
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
	var r = confirm("File:\nemoji.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/emoji.json')
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
	var r = confirm("File:\nemoji.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/emoji.zip')
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
	var r = confirm("File:\nguild.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/guild.json')
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
	var r = confirm("File:\nicon.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/icon.png')
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
	var r = confirm("File:\nwebhooks.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/webhooks.json')
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
	var r = confirm("File:\nwebhooks.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/webhooks.zip')
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

function discord_server_03() {
	var r = confirm("File:\n909758653781930005.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '909758653781930005.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/909758653781930005.html')
	}
}

function discord_server_03_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/audit-log.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/audit-log.json')
	}
}

function discord_server_03_bans() {
	var r = confirm("File:\nbans.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/bans.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/bans.json')
	}
}

function discord_server_03_channels() {
	var r = confirm("File:\nchannels.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/channels.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/channels.json')
	}
}

function discord_server_03_emoji_a() {
	var r = confirm("File:\nemoji.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/emoji.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/emoji.json')
	}
}

function discord_server_03_emoji_b() {
	var r = confirm("File:\nemoji.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/emoji.zip')
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

function discord_server_03_guild() {
	var r = confirm("File:\nguild.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/guild.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/guild.json')
	}
}

function discord_server_03_icon() {
	var r = confirm("File:\nicon.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/icon.png')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/icon.png')
	}
}

function discord_server_03_webhooks_a() {
	var r = confirm("File:\nwebhooks.json\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/webhooks.json')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/webhooks.json')
	}
}

function discord_server_03_webhooks_b() {
	var r = confirm("File:\nwebhooks.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/webhooks.zip')
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
	var r = confirm("File:\ndiv.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/div.zip')
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
	var r = confirm("File:\nicons.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/icons.html')
	}
}

function icon_player() {
	var r = confirm("File:\nplayer.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/player.zip')
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
	var r = confirm("File:\nship.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/ship.zip')
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
	var r = confirm("File:\nplayer_ball.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/player_ball.zip')
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
	var r = confirm("File:\nbird.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/bird.zip')
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
	var r = confirm("File:\ndart.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/dart.zip')
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
	var r = confirm("File:\nrobot.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/robot.zip')
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
	var r = confirm("File:\nspider.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/spider.zip')
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
	var r = confirm("File:\nplayer_special.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/player_special.zip')
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
	var r = confirm("File:\nexplosion.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/explosion.zip')
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
	var r = confirm("File:\npfp.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/pfp.zip')
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
	var r = confirm("File:\ntp.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp.html')
	}
}

function tp_01() {
	var r = confirm("File:\ntp1.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp/tp1')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp/tp1.html')
	}
}

function tp_02() {
	var r = confirm("File:\ntp2.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp/tp2')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp/tp2.html')
	}
}

function extra() {
	var r = confirm("File:\nextra.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/extra')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/extra.html')
	}
}

function assets() {
	var r = confirm("File:\nassets.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/assets.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'assets.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

function scr() {
	var r = confirm("File:\nscripts.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/scripts.zip')
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
	var r = confirm("File:\n404.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/404.html')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/404.html')
	}
}

function fourZeroFour_b() {
	var r = confirm("File:\n404.md\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/404.md')
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
		window.open('https://reper2.github.io/downloadable-files/404.md')
	}
}

function repo() {
	var r = confirm("File:\nmaster.zip\n\nOk - Download\nCancel - Nothing");
	if (r == true) {
		window.open('https://github.com/Reper2/downloadable-files/archive/refs/heads/master.zip')
	} else {
		null
	}
}

function hof() {
	var r = confirm("File:\nhof.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/hof.html')
	}
}

function hof_01() {
	var r = confirm("File:\nhof_01.PNG\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_01.PNG')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_01.PNG';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_01.PNG')
	}
}

function hof_02() {
	var r = confirm("File:\nhof_02.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_02.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_02.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_02.png')
	}
}

function hof_03() {
	var r = confirm("File:\nhof_03.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_03.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_03.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_03.png')
	}
}

function hof_04() {
	var r = confirm("File:\nhof_04.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_04.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_04.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_04.png')
	}
}

function hof_05() {
	var r = confirm("File:\nhof_05.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_05.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_05.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_05.png')
	}
}

function hof_06() {
	var r = confirm("File:\nhof_06.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_06.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_06.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_06.png')
	}
}

function hof_07() {
	var r = confirm("File:\nhof_07.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_07.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_07.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_07.png')
	}
}

function hof_08() {
	var r = confirm("File:\nhof_08.png\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_08.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_08.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_08.png')
	}
}

function hof_09() {
	var r = confirm("File:\nhof_09.mp4\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_09.mp4')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_09.mp4';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_09.mp4')
	}
}

function hof_10() {
	var r = confirm("File:\nhof_010.gif\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_010.gif')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'hof_010.gif';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/hof_010.gif')
	}
}

function lib() {
	var r = confirm("File:\nlib.html\n\nOk - Download\nCancel - Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/lib')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/lib.html')
	}
}