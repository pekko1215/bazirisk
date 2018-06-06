
function convertKana(str){

	var arMoji = [];
	arMoji["が"] = 	"か゛";
	arMoji["ぎ"] = 	"き゛";
	arMoji["ぐ"] = 	"く゛";
	arMoji["げ"] = 	"け゛";
	arMoji["ご"] = 	"こ゛";
	arMoji["ざ"] = 	"さ゛";
	arMoji["じ"] = 	"し゛";
	arMoji["ず"] = 	"す゛";
	arMoji["ぜ"] = 	"せ゛";
	arMoji["ぞ"] = 	"そ゛";
	arMoji["だ"] = 	"た゛";
	arMoji["ぢ"] = 	"ち゛";
	arMoji["づ"] = 	"つ゛";
	arMoji["で"] = 	"て゛";
	arMoji["ど"] = 	"と゛";
	arMoji["ば"] = 	"は゛";
	arMoji["び"] = 	"ひ゛";
	arMoji["ぶ"] = 	"ふ゛";
	arMoji["べ"] = 	"へ゛";
	arMoji["ぼ"] = 	"ほ゛";
	arMoji["ぱ"] = 	"は゜";
	arMoji["ぴ"] = 	"ひ゜";
	arMoji["ぷ"] = 	"ふ゜";
	arMoji["ぺ"] = 	"へ゜";
	arMoji["ぽ"] = 	"ほ゜";

	arMoji["ガ"] = 	"カ゛";
	arMoji["ギ"] = 	"キ゛";
	arMoji["グ"] = 	"ク゛";
	arMoji["ゲ"] = 	"ケ゛";
	arMoji["ゴ"] = 	"コ゛";
	arMoji["ザ"] = 	"サ゛";
	arMoji["ジ"] = 	"シ゛";
	arMoji["ズ"] = 	"ス゛";
	arMoji["ゼ"] = 	"セ゛";
	arMoji["ゾ"] = 	"ソ゛";
	arMoji["ダ"] = 	"タ゛";
	arMoji["ヂ"] = 	"チ゛";
	arMoji["ヅ"] = 	"ツ゛";
	arMoji["デ"] = 	"テ゛";
	arMoji["ド"] = 	"ト゛";
	arMoji["バ"] = 	"ハ゛";
	arMoji["ビ"] = 	"ヒ゛";
	arMoji["ブ"] = 	"フ゛";
	arMoji["べ"] = 	"ヘ゛";
	arMoji["ボ"] = 	"ホ゛";
	arMoji["パ"] = 	"ハ゜";
	arMoji["ピ"] = 	"ヒ゜";
	arMoji["プ"] = 	"フ゜";
	arMoji["ペ"] = 	"ヘ゜";
	arMoji["ポ"] = 	"ホ゜";
	arMoji["ヴ"] = 	"ウ゛";

	var ret = "";
	for (var i = 0; i < str.length; i++) {
		if(typeof arMoji[str[i]] != "undefined"){
			ret += arMoji[str[i]];
		}else{
			ret += str[i];
		}
	}
	return ret;
}

