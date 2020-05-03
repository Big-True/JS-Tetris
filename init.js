var NowPos = 'menu';
var logo = new Image();
logo.src = 'Logo.PNG';
var G_skin = new Image();
G_skin.src = 'skin/' + defaultSkinSettings.skin + '/G_skin.PNG';
var I_skin = new Image();
I_skin.src = 'skin/' + defaultSkinSettings.skin + '/I_skin.PNG';
var J_skin = new Image();
J_skin.src = 'skin/' + defaultSkinSettings.skin + '/J_skin.PNG';
var L_skin = new Image();
L_skin.src = 'skin/' + defaultSkinSettings.skin + '/L_skin.PNG';
var O_skin = new Image();
O_skin.src = 'skin/' + defaultSkinSettings.skin + '/O_skin.PNG';
var S_skin = new Image();
S_skin.src = 'skin/' + defaultSkinSettings.skin + '/S_skin.PNG';
var T_skin = new Image();
T_skin.src = 'skin/' + defaultSkinSettings.skin + '/T_skin.PNG';
var Z_skin = new Image();
Z_skin.src = 'skin/' + defaultSkinSettings.skin + '/Z_skin.PNG';
var skins = [undefined, I_skin, J_skin, L_skin, O_skin, S_skin, T_skin, Z_skin, G_skin];
var settingsPos = -1;
var inputKeys;
var gameSettings
if (!window.localStorage) {
    alert("浏览器不支持存储设置 可以游玩 但设置会在重新打开后回复默认");
    inputKeys = JSON.parse(JSON.stringify(defaultInputKeys));
    gameSettings = JSON.parse(JSON.stringify(defaultGameSettings));
} else {
    if (window.localStorage.inputKeys) {
        inputKeys = JSON.parse(window.localStorage.inputKeys);
    }
    else {
        window.localStorage.inputKeys = JSON.stringify(defaultInputKeys);
        inputKeys = JSON.parse(JSON.stringify(defaultInputKeys));
    }
    if (window.localStorage.gameSettings) {
        gameSettings = JSON.parse(window.localStorage.gameSettings);
    }
    else {
        window.localStorage.gameSettings = JSON.stringify(defaultGameSettings);
        gameSettings = JSON.parse(JSON.stringify(defaultGameSettings));
    }
}
