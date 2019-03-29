
class ConcertoMb
{
	constructor(el, contents) {
		this.el = el;
		this._init();
		this._assign(contents);
	}
	
	_init() {
		this.defined = [
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
	}
	
	_assign(defs) {
		
		
		
	}
	
	render() {
		this._addElement();
		this._setButton();
	}
	
	_addElement() {
		let tmpl = `
			<div class="concerto-bm-container">
				<div>
					<div>&nbsp;</div>
				</div>
				<div class="ui-widget-header">
					<button>add</button>
					<button>remove</button>
					<button>save</button>
					<button>reset</button>
					<button>download</button>
					<button>upload</button>
				</div>
			</div>
		`;
		this.el.insertAdjacentHTML('afterbegin', tmpl);
	}
	
	_setButton() {
		let defs = this.defined;
		let buttonset = this.el.children[0].children[1];
		
		$(buttonset.children).map(function(i, el) {
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
		
		$(buttonset).children().css({
			'font-size':'0.8em',
			'min-width':'10px',
			'min-height':'10px',
		});
		
  		$(buttonset).buttonset();
 	}
}

