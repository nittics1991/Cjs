
class ConcertoMb
{
	constructor(el, contents) {
		this.el = el;
		this.contents = contents;
		this._importTemplate();
		this._checkTemplate();
	}
	
	_importTemplate() {
		this.el.insertAdjacentHTML('afterend', '<div style="display:none"></div>');
		$(this.el).next().load("cmb.htm");
	}
	
	_checkTemplate() {
		if ((this.tmpl = document.querySelector('#concerto-bm-button')) === null) {
			throw 'not defined template:concerto-bm-button';
		}
	}
	
	render() {
		let tmpl = document.importNode(this.tmpl.content, true);
		this.el.appendChild(tmpl);
		
		let defs = [
			{
				icon:"ui-icon-plusthick",
				click:function(e) {
					console.log("AAA");
				},
			},
			{
				icon:"ui-icon-minusthick",
				click:function(e) {
					console.log("BBB");
				},
			},
			{
				icon:"ui-icon-disk",
				click:function(e) {
					console.log("CCC");
				},
			},
			{
				icon:"ui-icon-home",
				click:function(e) {
					console.log("DDD");
				},
			},
			{
				icon:"ui-icon-arrowthickstop-1-s",
				click:function(e) {
					console.log("EEE");
				},
			},
			{
				icon:"ui-icon-arrowthickstop-1-n",
				click:function(e) {
					console.log("FFF");
				},
			},
		];
		
		
		$(this.el.children[0].children).map(function(i, el) {
			var _defs = defs;
			
			$(el).button({
	  			text: false,
	  			icons: {
	      		  primary:_defs[i].icon || ''
		  		}
	  		}).click(
	  			_defs[i].click
	  		);
			
		});
		
		$(this.el).children().children().css({
			'font-size':'0.8em',
			'min-width':'10px',
			'min-height':'10px',
		});
		
  		$(this.el.children[0]).buttonset();
 	}
}

