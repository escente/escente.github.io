function footer(){
		var emojis = ['(ﾉﾟ▽ﾟ)ﾉ',
					  '(ง •̀ω•́)ง✧',
					  '(≖ᴗ≖✿)', 
					  '(⊙ᗜ⊙)',
					  '_(┐「ε:)_♡',
					  '〜(꒪꒳꒪)〜'
					 ];
		var rand = emojis[Math.floor(Math.random() * emojis.length)];
		var footerText =  '<p>escente &copy 2020 ' + rand + '</p>';
		$('footer').html(footerText);
	};