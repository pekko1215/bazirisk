const $input = document.getElementById('input');
const $out = document.getElementById('out');
const $outimage = document.getElementById('outimage');
const $create = document.getElementById('create');
const small = [..."ァィゥェォャュョッぁぃぅぇぉゃゅょっ"];
const large = [..."アイウエオヤユヨツアイウエオヤユヨツ"];
$input.addEventListener('keyup',()=>{
	[...$out.childNodes].forEach(e=>{
		$out.removeChild(e)
	})
	var {value} = $input;
	var str = new moji(convertKana(value)).convert('HG','KK');
	str = str.toString();
	[...str].forEach(t=>{
		var e = document.createElement('img');
		switch(t){
			case '゛':
				e.src = 'image/濁点.png'
				e.classList.add('half')
				break
			case '゜':
				e.src = 'image/半濁点.png'
				e.classList.add('half')
				break
			default:
				e.classList.add('char')
				var idx = small.findIndex((f)=>f==t)
				console.log(idx)
				if(idx!=-1){
					t = large[idx];
					e.classList.add('small')
				}
				e.src = `image/${t}.png`
		}
		$out.appendChild(e)
	})
})

$create.addEventListener('click',()=>{
	$create.disabled = true;
	html2canvas($out).then(canvas => {
		[...$outimage.childNodes].forEach(e=>{
			$outimage.removeChild(e)
		})
		$outimage.appendChild(canvas);
		$create.disabled = false;
	});
})