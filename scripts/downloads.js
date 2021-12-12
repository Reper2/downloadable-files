function index() {
	var r = confirm("File: index.html (Downloadable Files)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/')
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
	var r = confirm("File: index.html (Animal Crossing)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/acnh/index.html')
	}
}
function acnh_designs() {
	var r = confirm("File:\ndesigns.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nindex.html (DodoCodes)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/dodocodes/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/acnh/dodocodes/index.html')
	}
}
function acnh_img() {
	var r = confirm("File:\nimg.zip\n\nOk = Download\nCancel = Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/acnh/img.zio')
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
	var r = confirm("File:\nart.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nindex.html (Discord)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/index.html')
	}
}
function discord_acc() {
	var r = confirm("File:\nindex.html (Account)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account/index.html')
	}
}
function discord_acc_apps() {
	var r = confirm("File:\nindex.html (Applications)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/applications/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account/applications/index.html')
	}
}
function discord_acc_app_01() {
	var r = confirm("File:\nindex.html (TestBot1)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/772120114388140062/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/account/applications/772120114388140062/index.html')
	}
}
function discord_acc_app_01_avatar() {
	var r = confirm("File:\nbot-avatar.png\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/772120114388140062/bot-avatar.png')
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
		window.open('https://reper2.github.io/downloadable-files/discord/account/applications/772120114388140062/bot-avatar.png')
	}
}
function discord_acc_app_01_icon() {
	var r = confirm("File:\nicon.png\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/772120114388140062/icon.png')
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
		window.open('https://reper2.github.io/downloadable-files/discord/account/applications/772120114388140062/icon.png')
	}
}
function discord_acc_app_02() {
	var r = confirm("File:\nindex.html (Reper2 Bot)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/895031444878028831/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/account/applications/895031444878028831/index.html')
	}
}
function discord_acc_app_02_avatar() {
	var r = confirm("File:\nbot-avatar.png\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/895031444878028831/bot-avatar.png')
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
		window.open('https://reper2.github.io/downloadable-files/discord/account/applications/895031444878028831/bot-avatar.png')
	}
}
function discord_acc_app_02_icon() {
	var r = confirm("File:\nicon.png\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/account/applications/895031444878028831/icon.png')
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
		window.open('https://reper2.github.io/downloadable-files/discord/account/applications/895031444878028831/icon.png')
	}
}
function discord_acc_avatar() {
	var r = confirm("File:\navatar.png\n\nOk = Download\nCancel = Preview");
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
function discord_srv() {
	var r = confirm("File:\nindex.html (Servers)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/index.html')
	}
}
function discord_srv_01() {
	var r = confirm("File:\nindex.html (Reper2niverse)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/771861170256085023/index.html')
	}
}
function discord_srv_01_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_bans() {
	var r = confirm("File:\nbans.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_channels() {
	var r = confirm("File:\nchannels.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_emoji_a() {
	var r = confirm("File:\nemoji.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_emoji_b() {
	var r = confirm("File:\nemoji.zip\n\nOk = Download\nCancel = Nothing");
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
function discord_srv_01_guild() {
	var r = confirm("File:\nguild.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_icon() {
	var r = confirm("File:\nicon.png\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/icon.gif')
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
		window.open('https://reper2.github.io/downloadable-files/discord/servers/771861170256085023/icon.gif')
	}
}
function discord_srv_01_webhooks_a() {
	var r = confirm("File:\nwebhooks.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_01_webhooks_b() {
	var r = confirm("File:\nwebhooks.zip\n\nOk = Download\nCancel = Nothing");
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
function discord_srv_02() {
	var r = confirm("File:\nindex.html (Reper2niverse Appeals)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/884263560941817916/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/884263560941817916/index.html')
	}
}
function discord_srv_02_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_bans() {
	var r = confirm("File:\nbans.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_channels() {
	var r = confirm("File:\nchannels.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_emoji_a() {
	var r = confirm("File:\nemoji.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_emoji_b() {
	var r = confirm("File:\nemoji.zip\n\nOk = Download\nCancel = Nothing");
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
function discord_srv_02_guild() {
	var r = confirm("File:\nguild.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_icon() {
	var r = confirm("File:\nicon.png\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_webhooks_a() {
	var r = confirm("File:\nwebhooks.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_02_webhooks_b() {
	var r = confirm("File:\nwebhooks.zip\n\nOk = Download\nCancel = Nothing");
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
function discord_srv_03() {
	var r = confirm("File:\nindex.html (Reper2 Bot Official Server)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/discord/servers/909758653781930005/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/discord/servers/909758653781930005/index.html')
	}
}
function discord_srv_03_auditLog() {
	var r = confirm("File:\naudit-log.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_bans() {
	var r = confirm("File:\nbans.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_channels() {
	var r = confirm("File:\nchannels.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_emoji_a() {
	var r = confirm("File:\nemoji.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_emoji_b() {
	var r = confirm("File:\nemoji.zip\n\nOk = Download\nCancel = Nothing");
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
function discord_srv_03_guild() {
	var r = confirm("File:\nguild.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_icon() {
	var r = confirm("File:\nicon.png\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_webhooks_a() {
	var r = confirm("File:\nwebhooks.json\n\nOk = Download\nCancel = Preview");
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
function discord_srv_03_webhooks_b() {
	var r = confirm("File:\nwebhooks.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\ndiv.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nindex.html (GD Icons)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/icons/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/icons/index.html')
	}
}
function icon_player() {
	var r = confirm("File:\nplayer.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nship.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nplayer_ball.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nbird.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\ndart.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nrobot.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nspider.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nplayer_special.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nexplosion.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\npfp.zip\n\nOk = Download\nCancel = Nothing");
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
	var r = confirm("File:\nindex.html (Texture Packs)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp/index.html')
	}
}
function tp_01() {
	var r = confirm("File:\nindex.html (Reper2's Texture Pack)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp/tp1/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp/tp1/index.html')
	}
}
function tp_02() {
	var r = confirm("File:\nindex.html (NSMBWii Texture Pack)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/tp/tp2/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/tp/tp2/index.html')
	}
}
function extra() {
	var r = confirm("File:\nindex.html (Extra Downloads)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/extra/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/extra/index.html')
	}
}
function assets() {
	var r = confirm("File:\nassets.zip\n\nOk = Download\nCancel = Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/extra/assets.zip')
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
	var r = confirm("File:\nscripts.zip\n\nOk = Download\nCancel = Nothing");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/extra/scripts.zip')
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
	var r = confirm("File:\n404.html\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/404')
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
	var r = confirm("File:\n404.md\n\nOk = Download\nCancel = Preview");
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/404.md')
	}
}
function repo() {
	var r = confirm("File:\nmaster.zip (Downloadable Files)\n\nOk = Download\nCancel = Nothing");
	if (r == true) {
		window.open('https://github.com/Reper2/downloadable-files/archive/refs/heads/master.zip')
	} else {
		null
	}
}
function hof() {
	var r = confirm("File:\nindex.html (Hall of Fame)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/hof/index.html')
	}
}
function hof_01() {
	var r = confirm("File:\nhof_01.PNG\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_02.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_03.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_04.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_05.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_06.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_07.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_08.png\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_09.mp4\n\nOk = Download\nCancel = Preview");
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
	var r = confirm("File:\nhof_010.gif\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/hof/hof_10.gif')
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
		window.open('https://reper2.github.io/downloadable-files/hof/hof_10.gif')
	}
}
function lib() {
	var r = confirm("File:\nindex.html (Software Library)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/lib/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/lib/index.html')
	}
}
function gd() {
	var r = confirm("File:\nindex.html (Geometry Dash)\n\nOk = Download\nCancel = Preview");
	if (r == true) {
		fetch('https://reper2.github.io/downloadable-files/gd/')
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
		window.open('https://raw.githubusercontent.com/Reper2/downloadable-files/master/gd/index.html')
	}
}