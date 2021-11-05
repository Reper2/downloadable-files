// download confirmation for: index
function download_index() {var r = confirm("Download:\nindex.html");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/index')
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

// download confirmation for: acnh
function download_acnh() {var r = confirm("Download:\nacnh.html");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/acnh')
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

// download confirmation for: acnh/customDesigns.zip
function download_acnhCustomDesigns() {var r = confirm("Download:\ncustomDesigns.zip");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/acnh/customDesigns.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'customDesigns.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: acnh/customDesigns-qr.zip
function download_acnhCustomDesignsQR() {var r = confirm("Download:\ncustomDesigns-qr.zip");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/acnh/customDesigns-qr.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'customDesigns-qr.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: acnh/screenshots.zip
function download_acnhImg() {var r = confirm("Download:\nscreenshots.zip");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/acnh/screenshots.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'screenshots.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: art.zip
function download_art() {var r = confirm("Download:\nart.zip");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/art.zip')
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

// download confirmation for: discord
function download_discord() {
	var r = confirm("Download:\ndiscord.html");
	if (r == true) {fetch('https://reper2.github.io/downloadable-files/discord')
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

// download confirmation for: discord/account
function download_acc() {
	var r = confirm("Download:\naccount.html");
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
		null
	}
}

// download confirmation for: discord/account/applications
function download_apps() {
	var r = confirm("Download:\napplications.html");
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
		null
	}
}

// download confirmation for: discord/account/applications/772120114388140062
function download_botApp1() {
	var r = confirm("Download:\n772120114388140062.html");
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
		null
	}
}

// download confirmation for: discord/account/applications/772120114388140062/bot-avatar.png
function download_botAvatar1() {
	var r = confirm("Download:\nbot-avatar.png");
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

// download confirmation for: discord/account/applications/772120114388140062/icon.png
function download_botIcon1() {
	var r = confirm("Download:\nicon.png");
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

// download confirmation for: discord/account/applications/895031444878028831
function download_botApp2() {
	var r = confirm("Download:\n895031444878028831.html");
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
		null
	}
}

// download confirmation for: discord/account/applications/895031444878028831/bot-avatar.png
function download_botAvatar2() {
	var r = confirm("Download:\nbot-avatar.png");
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

// download confirmation for: discord/account/applications/895031444878028831/icon.png
function download_botIcon2() {
	var r = confirm("Download:\nicon.png");
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

// download confirmation for: discord/account/applications/899911106104012851
function download_botApp3() {
	var r = confirm("Download:\n899911106104012851.html");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/899911106104012851')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = '899911106104012851.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: discord/account/applications/899911106104012851/cover-image.png
function download_botCoverImage3() {
	var r = confirm("Download:\ncover-image.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/899911106104012851/cover-image.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'cover-image.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/discord/applications/899911106104012851/cover-image.png')
	}
}

// download confirmation for: discord/account/applications/899911106104012851/EasyRP.zip
function download_botEasyRP3() {
	var r = confirm("Download:\nEasyRP.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/899911106104012851/EasyRP.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'EasyRP.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: discord/account/avatar.png
function download_avatar() {
	var r = confirm("Download:\navatar.png");
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

// download confirmation for: discord/servers
function download_servers() {
	var r = confirm("Download:\nservers.html");
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
		null
	}
}
	
// download confirmation for: discord/servers/771861170256085023
function download_reper2niverse() {
	var r = confirm("Download:\n771861170256085023.html");
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
		null
	}
}

// download confirmation for: discord/servers/771861170256085023/audit-log.json
function download_serverAuditLog1() {
	var r = confirm("Download:\naudit-log.json");
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

// download confirmation for: discord/servers/771861170256085023/bans.json
function download_serverBans1() {
	var r = confirm("Download:\nbans.json");
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

// download confirmation for: discord/servers/771861170256085023/channels.json
function download_serverChannels1() {
	var r = confirm("Download:\nchannels.json");
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

// download confirmation for: discord/servers/771861170256085023/emoji.json
function download_serverEmojiA1() {
	var r = confirm("Download:\nemoji.json");
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

// download confirmation for: discord/servers/771861170256085023/emoji.zip
function download_serverEmojiB1() {
	var r = confirm("Download:\nemoji.zip");
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

// download confirmation for: discord/servers/771861170256085023/guild.json
function download_serverGuild1() {
	var r = confirm("Download:\nguild.json");
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

// download confirmation for: discord/servers/771861170256085023/icon.png
function download_serverIcon1() {
	var r = confirm("Download:\nicon.png");
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

// download confirmation for: discord/servers/771861170256085023/webhooks.json
function download_serverWebhooksA1() {
	var r = confirm("Download:\nwebhooks.json");
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

// download confirmation for: discord/servers/771861170256085023/webhooks.zip
function download_serverWebhooksB1() {
	var r = confirm("Download:\nwebhooks.zip");
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

// download confirmation for: discord/servers/884263560941817916
function download_reper2niverseAppeals() {
	var r = confirm("Download:\n884263560941817916.html");
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
		null
	}
}

// download confirmation for: discord/servers/884263560941817916/audit-log.json
function download_serverAuditLog2() {
	var r = confirm("Download:\naudit-log.json");
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

// download confirmation for: discord/servers/884263560941817916/bans.json
function download_serverBans2() {
	var r = confirm("Download:\nbans.json");
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

// download confirmation for: discord/servers/884263560941817916/channels.json
function download_serverChannels2() {
	var r = confirm("Download:\nchannels.json");
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

// download confirmation for: discord/servers/884263560941817916/emoji.json
function download_serverEmojiA2() {
	var r = confirm("Download:\nemoji.json");
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

// download confirmation for: discord/servers/884263560941817916/emoji.zip
function download_serverEmojiB2() {
	var r = confirm("Download:\nemoji.zip");
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

// download confirmation for: discord/servers/884263560941817916/guild.json
function download_serverGuild2() {
	var r = confirm("Download:\nguild.json");
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

// download confirmation for: discord/servers/884263560941817916/icon.png
function download_serverIcon2() {
	var r = confirm("Download:\nicon.png");
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

// download confirmation for: discord/servers/884263560941817916/webhooks.json
function download_serverWebhooksA2() {
	var r = confirm("Download:\nwebhooks.json");
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

// download confirmation for: discord/servers/884263560941817916/webhooks.zip
function download_serverWebhooksB2() {
	var r = confirm("Download:\nwebhooks.zip");
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

// download confirmation for: dividers.zip
function download_divs() {
	var r = confirm("Download:\ndividers.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/dividers.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'dividers.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: gdIcons
function download_gdIcons() {
	var r = confirm("Download:\ngdIcons.html");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'gdIcons.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: gdIcons/player.zip
function download_iconPlayer() {
	var r = confirm("Download:\nplayer.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/player.zip')
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

// download confirmation for: gdIcons/ship.zip
function download_iconShip() {
	var r = confirm("Download:\nship.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/ship.zip')
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

// download confirmation for: gdIcons/player_ball.zip
function download_iconBall() {
	var r = confirm("Download:\nplayer_ball.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/player_ball.zip')
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

// download confirmation for: gdIcons/bird.zip
function download_iconBird() {
	var r = confirm("Download:\nbird.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/bird.zip')
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

// download confirmation for: gdIcons/dart.zip
function download_iconDart() {
	var r = confirm("Download:\ndart.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/dart.zip')
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

// download confirmation for: gdIcons/robot.zip
function download_iconRobot() {
	var r = confirm("Download:\nrobot.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/robot.zip')
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

// download confirmation for: gdIcons/spider.zip
function download_iconSpider() {
	var r = confirm("Download:\nspider.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/spider.zip')
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

// download confirmation for: gdIcons/player_special.zip
function download_iconSpecial() {
	var r = confirm("Download:\nplayer_special.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/player_special.zip')
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

// download confirmation for: gdIcons/explosion.zip
function download_iconExplosion() {
	var r = confirm("Download:\nexplosion.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gdIcons/explosion.zip')
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

// download confirmation for: profilePictures.zip
function download_pfp() {
	var r = confirm("Download:\nprofilePictures.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/profilePictures.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'profilePictures.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: texturePacks
function download_texturePacks() {
	var r = confirm("Download:\ntexturePacks.html");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/texturePacks')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'texturePacks.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: texturePack-uhd.zip
function download_texturePack() {
	var r = confirm("Download:\ntexturePack-uhd.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/texturePack-uhd.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'texturePack-uhd.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: moreDownloads
function download_moreDownloads() {
	var r = confirm("Download:\nmoreDownloads.html");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/moreDownloads')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'moreDownloads.html';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: assets.zip
function download_assets() {
	var r = confirm("Download:\nassets.zip");
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

// download confirmation for: classes.zip
function download_classes() {
	var r = confirm("Download:\nclasses.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/classes.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'classes.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: misc.zip
function download_misc() {
	var r = confirm("Download:\nmisc.zip");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/misc.zip')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'misc.zip';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		null
	}
}

// download confirmation for: 404.html
function download_404a() {
	var r = confirm("Download:\n404.html");
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
		null
	}
}

// download confirmation for: 404.md
function download_404b() {
	var r = confirm("Download:\n404.md");
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
		null
	}
}

// download confirmation for: https://github.com/Reper2/downloadable-files/archive/refs/heads/master.zip
function download_repo() {
	var r = confirm("Download:\nmaster.zip");
	if (r == true) {
		window.open('https://github.com/Reper2/downloadable-files/archive/refs/heads/master.zip')
	} else {
		null
	}
}

// download confirmation for: hof
function download_hof() {
	var r = confirm("Download:\nhof.html");
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
		null
	}
}

// download confirmation for: hof/IMG_001.png
function download_hof1() {
	var r = confirm("Download:\nIMG_001.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_001.png')
			.then(resp => resp.blob())
			.then(blob => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'IMG_001.png';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
	} else {
		window.open('https://reper2.github.io/downloadable-files/hof/IMG_001.png')
	}
}

// download confirmation for: hof/IMG_002.png
function download_hof2() {
	var r = confirm("Download:\nIMG_002.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_002.png')
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

// download confirmation for: hof/IMG_003.png
function download_hof3() {
	var r = confirm("Download:\nIMG_003.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_003.png')
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

// download confirmation for: hof/IMG_004.png
function download_hof4() {
	var r = confirm("Download:\nIMG_004.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_004.png')
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

// download confirmation for: hof/IMG_005.png
function download_hof5() {
	var r = confirm("Download:\nIMG_005.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_005.png')
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

// download confirmation for: hof/IMG_006.png
function download_hof6() {
	var r = confirm("Download:\nIMG_006.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_006.png')
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

// download confirmation for: hof/IMG_007.png
function download_hof7() {
	var r = confirm("Download:\nIMG_007.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_007.png')
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

// download confirmation for: hof/IMG_008.png
function download_hof8() {
	var r = confirm("Download:\nIMG_008.png");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/IMG_008.png')
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