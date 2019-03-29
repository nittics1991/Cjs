
class ConcertoMb
{
	constructor(el, contents) {
		this.el = el;
		this._init();
		this._assign(contents);
	}
	
	_init() {
		this.defined = {
		items:[
		],
		button:{
			layout:[
				'add','remove','save','reset','upload','reset',
			],
			add:{
				icon:"ui-icon-plusthick",
				click:function(e) {
					console.log("AAA");
				},
			},
			remove:{
				icon:"ui-icon-minusthick",
				click:function(e) {
					console.log("BBB");
				},
			},
			save:{
				icon:"ui-icon-disk",
				click:function(e) {
					console.log("CCC");
				},
			},
			reset:{
				icon:"ui-icon-home",
				click:function(e) {
					console.log("DDD");
				},
			},
			download:{
				icon:"ui-icon-arrowthickstop-1-s",
				click:function(e) {
					console.log("EEE");
				},
			},
			upload:{
				icon:"ui-icon-arrowthickstop-1-n",
				click:function(e) {
					console.log("FFF");
				},
			},
			css:{
				'font-size':'0.8em',
				'min-width':'10px',
				'min-height':'10px',
			},
		}};
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
		`;
		
		tmpl += this.defined.button.layout.map(function(name) {
			return `<button>${name}</button>`;
		}).join("\n");
		
		tmpl += `
				</div>
			</div>
		`;
		this.el.insertAdjacentHTML('afterbegin', tmpl);
	}
	
	_setButton() {
		let buttons = this.defined.button;
		let layout = this.defined.button.layout;
		let buttonset = this.el.children[0].children[1];
		
		$(buttonset.children).map(function(i, el) {
			$(el).button({
	  			text: false,
	  			icons: {
	      		  primary:buttons[layout[i]].icon || ''
		  		}
	  		}).click(
	  			buttons[layout[i]].click
	  		);
			
		});
		
		$(buttonset).children().css(this.defined.button.css);
  		$(buttonset).buttonset();
 	}
}

