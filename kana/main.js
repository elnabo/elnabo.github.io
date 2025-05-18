const KANA = {
	hiragana: {
		base: {
			'あ': { kana: 'あ', romaji: 'a' },
			'い': { kana: 'い', romaji: 'i' },
			'う': { kana: 'う', romaji: 'u' },
			'え': { kana: 'え', romaji: 'e' },
			'お': { kana: 'お', romaji: 'o' },
			'か': { kana: 'か', romaji: 'ka' },
			'き': { kana: 'き', romaji: 'ki' },
			'く': { kana: 'く', romaji: 'ku' },
			'け': { kana: 'け', romaji: 'ke' },
			'こ': { kana: 'こ', romaji: 'ko' },
			'さ': { kana: 'さ', romaji: 'sa' },
			'し': { kana: 'し', romaji: 'shi' },
			'す': { kana: 'す', romaji: 'su' },
			'せ': { kana: 'せ', romaji: 'se' },
			'そ': { kana: 'そ', romaji: 'so' },
			'た': { kana: 'た', romaji: 'ta' },
			'ち': { kana: 'ち', romaji: 'chi' },
			'つ': { kana: 'つ', romaji: 'tsu' },
			'て': { kana: 'て', romaji: 'te' },
			'と': { kana: 'と', romaji: 'to' },
			'な': { kana: 'な', romaji: 'na' },
			'に': { kana: 'に', romaji: 'ni' },
			'ぬ': { kana: 'ぬ', romaji: 'nu' },
			'ね': { kana: 'ね', romaji: 'ne' },
			'の': { kana: 'の', romaji: 'no' },
			'は': { kana: 'は', romaji: 'ha' },
			'ひ': { kana: 'ひ', romaji: 'hi' },
			'ふ': { kana: 'ふ', romaji: 'fu' },
			'へ': { kana: 'へ', romaji: 'he' },
			'ほ': { kana: 'ほ', romaji: 'ho' },
			'ま': { kana: 'ま', romaji: 'ma' },
			'み': { kana: 'み', romaji: 'mi' },
			'む': { kana: 'む', romaji: 'mu' },
			'め': { kana: 'め', romaji: 'me' },
			'も': { kana: 'も', romaji: 'mo' },
			'や': { kana: 'や', romaji: 'ya' },
			'ゆ': { kana: 'ゆ', romaji: 'yu' },
			'よ': { kana: 'よ', romaji: 'yo' },
			'ら': { kana: 'ら', romaji: 'ra' },
			'り': { kana: 'り', romaji: 'ri' },
			'る': { kana: 'る', romaji: 'ru' },
			'れ': { kana: 'れ', romaji: 're' },
			'ろ': { kana: 'ろ', romaji: 'ro' },
			'わ': { kana: 'わ', romaji: 'wa' },
			'を': { kana: 'を', romaji: 'wo' },
			'ん': { kana: 'ん', romaji: 'n' },
		},
		combined: {
			'きゃ': { kana: 'きゃ', romaji: 'kya' },
			'きゅ': { kana: 'きゅ', romaji: 'kyu' },
			'きょ': { kana: 'きょ', romaji: 'kyo' },
			'しゃ': { kana: 'しゃ', romaji: 'sha' },
			'しゅ': { kana: 'しゅ', romaji: 'shu' },
			'しょ': { kana: 'しょ', romaji: 'sho' },
			'ちゃ': { kana: 'ちゃ', romaji: 'cha' },
			'ちゅ': { kana: 'ちゅ', romaji: 'chu' },
			'ちょ': { kana: 'ちょ', romaji: 'cho' },
			'にゃ': { kana: 'にゃ', romaji: 'nya' },
			'にゅ': { kana: 'にゅ', romaji: 'nyu' },
			'にょ': { kana: 'にょ', romaji: 'nyo' },
			'ひゃ': { kana: 'ひゃ', romaji: 'hya' },
			'ひゅ': { kana: 'ひゅ', romaji: 'hyu' },
			'ひょ': { kana: 'ひょ', romaji: 'hyo' },
			'みゃ': { kana: 'みゃ', romaji: 'mya' },
			'みゅ': { kana: 'みゅ', romaji: 'myu' },
			'みょ': { kana: 'みょ', romaji: 'myo' },
			'りゃ': { kana: 'りゃ', romaji: 'rya' },
			'りゅ': { kana: 'りゅ', romaji: 'ryu' },
			'りょ': { kana: 'りょ', romaji: 'ryo' },
		},
		diacritics: {
			'が': { kana: 'が', romaji: 'ga' },
			'ぎ': { kana: 'ぎ', romaji: 'gi' },
			'ぐ': { kana: 'ぐ', romaji: 'gu' },
			'げ': { kana: 'げ', romaji: 'ge' },
			'ご': { kana: 'ご', romaji: 'go' },
			'ぎゃ': { kana: 'ぎゃ', romaji: 'gya' },
			'ぎゅ': { kana: 'ぎゅ', romaji: 'gyu' },
			'ぎょ': { kana: 'ぎょ', romaji: 'gyo' },
			'ざ': { kana: 'ざ', romaji: 'za' },
			'じ': { kana: 'じ', romaji: 'ji' },
			'ず': { kana: 'ず', romaji: 'zu' },
			'ぜ': { kana: 'ぜ', romaji: 'ze' },
			'ぞ': { kana: 'ぞ', romaji: 'zo' },
			'じゃ': { kana: 'じゃ', romaji: 'ja' },
			'じゅ': { kana: 'じゅ', romaji: 'ju' },
			'じょ': { kana: 'じょ', romaji: 'jo' },
			'だ': { kana: 'だ', romaji: 'da' },
			'ぢ': { kana: 'ぢ', romaji: 'ji' },
			'づ': { kana: 'づ', romaji: 'zu' },
			'で': { kana: 'で', romaji: 'de' },
			'ど': { kana: 'ど', romaji: 'do' },
			'ぢゃ': { kana: 'ぢゃ', romaji: 'ja' },
			'ぢゅ': { kana: 'ぢゅ', romaji: 'ju' },
			'ぢょ': { kana: 'ぢょ', romaji: 'jo' },
			'ば': { kana: 'ば', romaji: 'ba' },
			'び': { kana: 'び', romaji: 'bi' },
			'ぶ': { kana: 'ぶ', romaji: 'bu' },
			'べ': { kana: 'べ', romaji: 'be' },
			'ぼ': { kana: 'ぼ', romaji: 'bo' },
			'びゃ': { kana: 'びゃ', romaji: 'bya' },
			'びゅ': { kana: 'びゅ', romaji: 'byu' },
			'びょ': { kana: 'びょ', romaji: 'byo' },
			'ぱ': { kana: 'ぱ', romaji: 'pa' },
			'ぴ': { kana: 'ぴ', romaji: 'pi' },
			'ぷ': { kana: 'ぷ', romaji: 'pu' },
			'ぺ': { kana: 'ぺ', romaji: 'pe' },
			'ぽ': { kana: 'ぽ', romaji: 'po' },
			'ぴゃ': { kana: 'ぴゃ', romaji: 'pya' },
			'ぴゅ': { kana: 'ぴゅ', romaji: 'pyu' },
			'ぴょ': { kana: 'ぴょ', romaji: 'pyo' },
		},
	},
	katakana: {
		base: {
			'ア': { kana: 'ア', romaji: 'a' },
			'イ': { kana: 'イ', romaji: 'i' },
			'ウ': { kana: 'ウ', romaji: 'u' },
			'エ': { kana: 'エ', romaji: 'e' },
			'オ': { kana: 'オ', romaji: 'o' },
			'カ': { kana: 'カ', romaji: 'ka' },
			'キ': { kana: 'キ', romaji: 'ki' },
			'ク': { kana: 'ク', romaji: 'ku' },
			'ケ': { kana: 'ケ', romaji: 'ke' },
			'コ': { kana: 'コ', romaji: 'ko' },
			'サ': { kana: 'サ', romaji: 'sa' },
			'シ': { kana: 'シ', romaji: 'shi' },
			'ス': { kana: 'ス', romaji: 'su' },
			'セ': { kana: 'セ', romaji: 'se' },
			'ソ': { kana: 'ソ', romaji: 'so' },
			'タ': { kana: 'タ', romaji: 'ta' },
			'チ': { kana: 'チ', romaji: 'chi' },
			'ツ': { kana: 'ツ', romaji: 'tsu' },
			'テ': { kana: 'テ', romaji: 'te' },
			'ト': { kana: 'ト', romaji: 'to' },
			'ナ': { kana: 'ナ', romaji: 'na' },
			'ニ': { kana: 'ニ', romaji: 'ni' },
			'ヌ': { kana: 'ヌ', romaji: 'nu' },
			'ネ': { kana: 'ネ', romaji: 'ne' },
			'ノ': { kana: 'ノ', romaji: 'no' },
			'ハ': { kana: 'ハ', romaji: 'ha' },
			'ヒ': { kana: 'ヒ', romaji: 'hi' },
			'フ': { kana: 'フ', romaji: 'fu' },
			'ヘ': { kana: 'ヘ', romaji: 'he' },
			'ホ': { kana: 'ホ', romaji: 'ho' },
			'マ': { kana: 'マ', romaji: 'ma' },
			'ミ': { kana: 'ミ', romaji: 'mi' },
			'ム': { kana: 'ム', romaji: 'mu' },
			'メ': { kana: 'メ', romaji: 'me' },
			'モ': { kana: 'モ', romaji: 'mo' },
			'ヤ': { kana: 'ヤ', romaji: 'ya' },
			'ユ': { kana: 'ユ', romaji: 'yu' },
			'ヨ': { kana: 'ヨ', romaji: 'yo' },
			'ラ': { kana: 'ラ', romaji: 'ra' },
			'リ': { kana: 'リ', romaji: 'ri' },
			'ル': { kana: 'ル', romaji: 'ru' },
			'レ': { kana: 'レ', romaji: 're' },
			'ロ': { kana: 'ロ', romaji: 'ro' },
			'ワ': { kana: 'ワ', romaji: 'wa' },
			'ヲ': { kana: 'ヲ', romaji: 'wo' },
			'ン': { kana: 'ン', romaji: 'n' },
		},
		combined: {
			'キャ': { kana: 'キャ', romaji: 'kya' },
			'キュ': { kana: 'キュ', romaji: 'kyu' },
			'キョ': { kana: 'キョ', romaji: 'kyo' },
			'シャ': { kana: 'シャ', romaji: 'sha' },
			'シュ': { kana: 'シュ', romaji: 'shu' },
			'ショ': { kana: 'ショ', romaji: 'sho' },
			'チャ': { kana: 'チャ', romaji: 'cha' },
			'チュ': { kana: 'チュ', romaji: 'chu' },
			'チョ': { kana: 'チョ', romaji: 'cho' },
			'ニャ': { kana: 'ニャ', romaji: 'nya' },
			'ニュ': { kana: 'ニュ', romaji: 'nyu' },
			'ニョ': { kana: 'ニョ', romaji: 'nyo' },
			'ヒャ': { kana: 'ヒャ', romaji: 'hya' },
			'ヒュ': { kana: 'ヒュ', romaji: 'hyu' },
			'ヒョ': { kana: 'ヒョ', romaji: 'hyo' },
			'ミャ': { kana: 'ミャ', romaji: 'mya' },
			'ミュ': { kana: 'ミュ', romaji: 'myu' },
			'ミョ': { kana: 'ミョ', romaji: 'myo' },
			'リャ': { kana: 'リャ', romaji: 'rya' },
			'リュ': { kana: 'リュ', romaji: 'ryu' },
			'リョ': { kana: 'リョ', romaji: 'ryo' },
		},
		diacritics: {
			'ガ': { kana: 'ガ', romaji: 'ga' },
			'ギ': { kana: 'ギ', romaji: 'gi' },
			'グ': { kana: 'グ', romaji: 'gu' },
			'ゲ': { kana: 'ゲ', romaji: 'ge' },
			'ゴ': { kana: 'ゴ', romaji: 'go' },
			'ギャ': { kana: 'ギャ', romaji: 'gya' },
			'ギュ': { kana: 'ギュ', romaji: 'gyu' },
			'ギョ': { kana: 'ギョ', romaji: 'gyo' },
			'ザ': { kana: 'ザ', romaji: 'za' },
			'ジ': { kana: 'ジ', romaji: 'ji' },
			'ズ': { kana: 'ズ', romaji: 'zu' },
			'ゼ': { kana: 'ゼ', romaji: 'ze' },
			'ゾ': { kana: 'ゾ', romaji: 'zo' },
			'ジャ': { kana: 'ジャ', romaji: 'ja' },
			'ジュ': { kana: 'ジュ', romaji: 'ju' },
			'ジョ': { kana: 'ジョ', romaji: 'jo' },
			'ダ': { kana: 'ダ', romaji: 'da' },
			'ヂ': { kana: 'ヂ', romaji: 'ji' },
			'ヅ': { kana: 'ヅ', romaji: 'zu' },
			'デ': { kana: 'デ', romaji: 'de' },
			'ド': { kana: 'ド', romaji: 'do' },
			'ヂャ': { kana: 'ヂャ', romaji: 'ja' },
			'ヂュ': { kana: 'ヂュ', romaji: 'ju' },
			'ヂョ': { kana: 'ヂョ', romaji: 'jo' },
			'バ': { kana: 'バ', romaji: 'ba' },
			'ビ': { kana: 'ビ', romaji: 'bi' },
			'ブ': { kana: 'ブ', romaji: 'bu' },
			'ベ': { kana: 'ベ', romaji: 'be' },
			'ボ': { kana: 'ボ', romaji: 'bo' },
			'ビャ': { kana: 'ビャ', romaji: 'bya' },
			'ビュ': { kana: 'ビュ', romaji: 'byu' },
			'ビョ': { kana: 'ビョ', romaji: 'byo' },
			'パ': { kana: 'パ', romaji: 'pa' },
			'ピ': { kana: 'ピ', romaji: 'pi' },
			'プ': { kana: 'プ', romaji: 'pu' },
			'ペ': { kana: 'ペ', romaji: 'pe' },
			'ポ': { kana: 'ポ', romaji: 'po' },
			'ピャ': { kana: 'ピャ', romaji: 'pya' },
			'ピュ': { kana: 'ピュ', romaji: 'pyu' },
			'ピョ': { kana: 'ピョ', romaji: 'pyo' },
		}
	},
};

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function generateDataPool(kana, subset) {
	if (kana === 'random') {
		kana = Math.round(Math.random()) < 0.5 ? 'hiragana' : 'katakana';
	}

	if (!KANA[kana]) {
		return Object.assign({}, KANA.katakana.base);
	}

	if (subset === 'combined') {
		return Object.assign({}, KANA[kana].base, KANA[kana].combined);
	}
	else if (subset === 'full') {
		return Object.assign({}, KANA[kana].base, KANA[kana].combined, KANA[kana].diacritics);
	}
	else {
		return Object.assign({}, KANA[kana].base);
	}
}

function chooseRandomKana(pool) {
	const keys = Object.keys(pool);
	const chosen = keys[~~(Math.random() * keys.length)];
	const info = pool[chosen];
	delete pool[chosen];
	return info;
}

function newQuestion(kana, subset, format) {
	const pool = generateDataPool(kana, subset);
	const question = chooseRandomKana(pool);

	const guesses = [ question ];
	while (guesses.length < 4) {
		const otherGuess = chooseRandomKana(pool);
		guesses.push(otherGuess);
	}

	shuffle(guesses);

	const nextButton = document.getElementById('next_button');
	nextButton.classList.add('hidden');

	const kanaBox = document.getElementById('big_kana_box').firstElementChild;
	kanaBox.innerHTML = question.kana;


	const choiceAnswerBox = document.getElementById('answer_box_choice');
	const freeAnswerBox = document.getElementById('answer_box_free');

	if (format === 'choice') {
		choiceAnswerBox.style.display = 'grid';
		freeAnswerBox.style.display = 'none';

		const callback = evt => {
			evt.target.dataset.validity = 'invalid';
			for (const child of evt.target.parentNode.children) {
				const kana = child.dataset.kana;
				const romaji = child.dataset.romaji;
				if (question.kana === kana && question.romaji === romaji) {
					child.dataset.validity = 'valid';
				}
				child.onclick = undefined;
			}
			nextButton.classList.remove('hidden');
		}

		for (let i=0; i<guesses.length; i++) {
			const child = choiceAnswerBox.children[i];
			child.innerHTML = guesses[i].romaji;
			child.dataset.kana = guesses[i].kana;
			child.dataset.romaji = guesses[i].romaji;
			child.dataset.validity = '';
			child.onclick = callback;
		}

		freeAnswerBox.firstElementChild.onkeypress = undefined;
		freeAnswerBox.lastElementChild.onclick = undefined;
	}
	else {
		choiceAnswerBox.style.display = 'none';
		freeAnswerBox.style.display = 'block';

		const input = freeAnswerBox.firstElementChild;
		input.dataset.validity = '';
		input.disabled = false;
		input.value = '';
		input.focus();

		const button = freeAnswerBox.lastElementChild;
		button.disabled = false;

		const callback = () => {
			if (input.value?.trim().toLowerCase() === question.romaji) {
				input.dataset.validity = 'valid';
			}
			else {
				input.dataset.validity = 'invalid';
				input.value = `${input.value} -- (${question.romaji})`;
			}
			input.onkeypress = (evt) => {
				evt.preventDefault();
				evt.stopProgation();
				return false;
			};
			button.disabled = true;
			nextButton.classList.remove('hidden');
		}

		input.onkeypress = (evt) => {
			if (evt.key === 'Enter') {
				callback();
			}
		};

		freeAnswerBox.lastElementChild.onclick = () => callback();

		for (const child of choiceAnswerBox.children) {
			child.onclick = undefined;
		}
	}
}

function init() {
	const nextButton = document.getElementById('next_button');

	const kanaPicker = document.getElementById('kana_picker');
	const subsetPicker = document.getElementById('subset_picker');
	const formatPicker = document.getElementById('format_picker');
	const callback = (evt) => {
		nextButton.onclick = () => newQuestion(kanaPicker.value, subsetPicker.value, formatPicker.value);
		nextButton.click();
	}
	kanaPicker.onchange = callback;
	subsetPicker.onchange = callback;
	formatPicker.onchange = callback;

	nextButton.onclick = () => newQuestion(kanaPicker.value, subsetPicker.value, formatPicker.value);
	nextButton.click();
}


init();
