function LigatureSymbols(options) {
  switch (Ti.Platform.osname) {
    case 'iphone':
    case 'ipad':
      this.fontfamily = 'LigatureSymbols';
      break;
    case 'android':
      this.fontfamily = 'LigatureSymbols';
  }

  this.charcode = {
    "list": 0xe084,
    "tile": 0xe129,
    "table": 0xe127, "cell": 0xe127,
    "copy": 0xe038, "files": 0xe038,
    "cut": 0xe03b, "scissors": 0xe03b,
    "backspace": 0xe010,
    "alignleft": 0xe005,
    "aligncenter": 0xe004,
    "alignright": 0xe006,
    "alignadjust": 0xe003,
    "italic": 0xe079,
    "bold": 0xe01f,
    "underline": 0xe132,
    "strike": 0xe159,
    "emphasis": 0xe152,
    "code": 0xe032,
    "link": 0xe082, "chain": 0xe082,
    "quote": 0xe10b,
    "graph": 0xe05b,
    "magic": 0xe089, "effect": 0xe089,
    "brush": 0xe022,
    "color": 0xe033, "palette": 0xe033,
    "contrast": 0xe001, "adjust": 0xe001,
    "ink": 0xe14a, "water": 0xe14a,
    "gradation": 0xe149, "grayscale": 0xe149,
    "sepia": 0xe14e, "grunge": 0xe14e,
    "invert": 0xe14b,
    "paint": 0xe09b,
    "paramater": 0xe09c, "param": 0xe09c, "slider": 0xe09c,
    "crop": 0xe039,
    "check": 0xe029, "ok": 0xe029,
    "checkbox": 0xe02a,
    "checkboxempty": 0xe02b,
    "pc": 0xe09e, "display": 0xe09e, "computer": 0xe09e,
    "keyboard": 0xe07d,
    "mobile": 0xe078, "iphone": 0xe078, "smartphone": 0xe078,
    "horizontal": 0xe071,
    "vertical": 0xe138,
    "web": 0xe13f,
    "mail": 0xe08a,
    "shopping": 0xe119, "cart": 0xe119,
    "dashboard": 0xe03c,
    "key": 0xe07c,
    "sns": 0xe11f, "network": 0xe11f,
    "calender": 0xe15e,
    "dailycalender": 0xe025,
    "ban": 0xe012,
    "remove": 0xe10f, "close": 0xe10f,
    "pen": 0xe09f, "pencil": 0xe09f, "write": 0xe09f,
    "eraser": 0xe148,
    "edit": 0xe041, "addnew": 0xe041,
    "tabs": 0xe095,
    "tag": 0xe128,
    "setup": 0xe117, "wrench": 0xe117, "spanner": 0xe117,
    "setting": 0xe055, "gear": 0xe055,
    "etc": 0xe043, "ellipsis": 0xe043,
    "clip": 0xe030, "attach": 0xe030,
    "bookmark": 0xe021,
    "book": 0xe020,
    "album": 0xe002,
    "user": 0xe137, "you": 0xe137, "human": 0xe137,
    "friend": 0xe051, "users": 0xe051,
    "group": 0xe05c,
    "frustrate": 0xe052,
    "laugh": 0xe07f,
    "wink": 0xe081,
    "smile": 0xe11e,
    "surprise": 0xe124,
    "trouble": 0xe12d,
    "male": 0xe176, "man": 0xe176,
    "female": 0xe175, "woman": 0xe175, "lady": 0xe175,
    "game": 0xe054,
    "globe": 0xe058, "global": 0xe058, "earth": 0xe058,
    "home": 0xe072, "house": 0xe072,
    "building": 0xe023,
    "rss": 0xe113, "feed": 0xe113,
    "app": 0xe009, "application": 0xe009,
    "memo": 0xe08d,
    "meal": 0xe08c, "dish": 0xe08c, "lunch": 0xe08c,
    "coffee": 0xe146, "cup": 0xe146,
    "spa": 0xe177, "onsen": 0xe177,
    "college": 0xe174,
    "bag": 0xe173,
    "present": 0xe109, "gift": 0xe109,
    "umbrella": 0xe178,
    "twinkle": 0xe073, "spark": 0xe073, "hot": 0xe073,
    "crown": 0xe03a,
    "category": 0xe028, "drawer": 0xe028,
    "circle": 0xe02e,
    "info": 0xe075, "information": 0xe075,
    "help": 0xe070,
    "refreshbutton": 0xe14d,
    "terminal": 0xe16e,
    "menu": 0xe08e,
    "tilemenu": 0xe12a,
    "notify": 0xe097,
    "file": 0xe048,
    "print": 0xe10a,
    "delete": 0xe12c, "trash": 0xe12c,
    "clear": 0xe02f,
    "save": 0xe115, "stock": 0xe115,
    "upload": 0xe136,
    "cloud": 0xe031,
    "folder": 0xe04c,
    "camera": 0xe026,
    "photo": 0xe101, "images": 0xe101,
    "image": 0xe074, "img": 0xe074,
    "barcode": 0xe013,
    "phone": 0xe100, "call": 0xe100,
    "music": 0xe094,
    "video": 0xe139,
    "playmedia": 0xe107,
    "record": 0xe10d, "mic": 0xe10d, "microphone": 0xe10d,
    "play": 0xe106,
    "pause": 0xe09d,
    "stop": 0xe123,
    "eject": 0xe042,
    "bell": 0xe014,
    "volumeup": 0xe13d,
    "volumedown": 0xe13c,
    "volume": 0xe13b, "volumeoff": 0xe13b,
    "off": 0xe098, "power": 0xe098,
    "light": 0xe14c, "brightness": 0xe14c,
    "dark": 0xe147, "darkness": 0xe147,
    "lock": 0xe086,
    "unlock": 0xe134,
    "flag": 0xe04a,
    "wifi": 0xe140,
    "time": 0xe12b,
    "map": 0xe08b,
    "geo": 0xe056,
    "location": 0xe085, "direction": 0xe085,
    "pin": 0xe103,
    "walking": 0xe13e,
    "bicycle": 0xe015,
    "car": 0xe027,
    "bus": 0xe024,
    "plane": 0xe105, "airport": 0xe105,
    "compass": 0xe036,
    "cursor": 0xe166,
    "pointer": 0xe16b,
    "grab": 0xe169,
    "arrowup": 0xe00e,
    "arrowright": 0xe00d,
    "arrowdown": 0xe00b,
    "arrowleft": 0xe00c,
    "up": 0xe135,
    "right": 0xe112,
    "down": 0xe03e,
    "left": 0xe080,
    "back": 0xe00f,
    "next": 0xe096,
    "dropdown": 0xe040,
    "sort": 0xe120,
    "good": 0xe059, "like": 0xe059,
    "bad": 0xe011, "nogood": 0xe011,
    "full": 0xe053,
    "small": 0xe11d,
    "move": 0xe093,
    "undo": 0xe133,
    "forward": 0xe04e,
    "reply": 0xe111,
    "share": 0xe118,
    "login": 0xe087, "in": 0xe087,
    "logout": 0xe088, "out": 0xe088,
    "exchange": 0xe045,
    "shuffle": 0xe11a, "random": 0xe11a,
    "repeat": 0xe110, "retweet": 0xe110,
    "refresh": 0xe10e, "reload": 0xe10e,
    "sync": 0xe125,
    "external": 0xe046, "newtab": 0xe046,
    "addstar": 0xe000,
    "star": 0xe121,
    "starempty": 0xe122,
    "heart": 0xe06e, "love": 0xe06e,
    "heartempty": 0xe06f,
    "view": 0xe13a, "eye": 0xe13a,
    "comment": 0xe034, "baloon": 0xe034,
    "comments": 0xe035, "baloons": 0xe035,
    "plus": 0xe108, "add": 0xe108,
    "minus": 0xe08f,
    "zoomin": 0xe142, "zoom": 0xe142,
    "zoomout": 0xe143,
    "search": 0xe116,
    "apple": 0xe00a,
    "android": 0xe008,
    "windows": 0xe151,
    "amazon": 0xe007,
    "facebook": 0xe047,
    "twitter": 0xe12f,
    "google": 0xe05a,
    "yahoo": 0xe172,
    "bing": 0xe164,
    "hatena": 0xe05d,
    "hatenabookmark": 0xe161,
    "digg": 0xe167,
    "linkedin": 0xe083,
    "myspace": 0xe16a,
    "paperboy": 0xe162,
    "mixi": 0xe090,
    "line": 0xe157,
    "mobage": 0xe158,
    "gree": 0xe153,
    "skype": 0xe11b,
    "aim": 0xe163,
    "forsquare": 0xe04d,
    "pinterest": 0xe104,
    "flickr": 0xe04b,
    "tumblr": 0xe12e,
    "wordpress": 0xe171,
    "blogger": 0xe165,
    "evernote": 0xe044,
    "dropbox": 0xe168,
    "github": 0xe057,
    "yapcasialogomark": 0xe15c,
    "dribbble": 0xe03f,
    "cookpad": 0xe037,
    "instapaper": 0xe076,
    "readability": 0xe10c,
    "gumroad": 0xe154,
    "picasa": 0xe102,
    "instagram": 0xe155,
    "delicious": 0xe03d,
    "youtube": 0xe141,
    "vimeo": 0xe170,
    "ustream": 0xe16f,
    "chrome": 0xe02c,
    "safari": 0xe114,
    "sleipnir": 0xe11c,
    "chess": 0xe11c,
    "knight": 0xe11c,
    "firefox": 0xe049,
    "opera": 0xe099,
    "internetexplorer": 0xe077, "ie": 0xe077
  };
}

LigatureSymbols.prototype.getCharcode = function(options) {
  return this.charcode[options];
};

module.exports = LigatureSymbols;