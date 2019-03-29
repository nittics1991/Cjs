
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
				options:{
					icons:{
						primary:"ui-icon-plusthick",
					},
		  			text: false,
				},
				click:function(e) {
					console.log(e);
					console.log(e.target);
					console.log(e.target.parentNode);
					console.log(e.target.parentNode.parentNode);
				},
			},
			remove:{
				options:{
					icons:{
						primary:"ui-icon-minusthick",
					},
		  			text: false,
				},
				click:function(e) {
					console.log("BBB");
				},
			},
			save:{
				options:{
					icons:{
						primary:"ui-icon-disk",
					},
		  			text: false,
				},
				click:function(e) {
					console.log("CCC");
				},
			},
			reset:{
				options:{
					icons:{
						primary:"ui-icon-home",
					},
		  			text: false,
				},
				click:function(e) {
					console.log("DDD");
				},
			},
			download:{
				options:{
					icons:{
						primary:"ui-icon-arrowthickstop-1-s",
					},
		  			text: false,
				},
				click:function(e) {
					console.log("EEE");
				},
			},
			upload:{
				options:{
					icons:{
						primary:"ui-icon-arrowthickstop-1-n",
					},
		  			text: false,
				},
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
			$(el)
			.button(buttons[layout[i]].options || {})
	  		.on(
	  			'click',
	  			buttons[layout[i]].click
	  		);
			
		});
		
		$(buttonset).children().css(this.defined.button.css);
  		$(buttonset).buttonset();
 	}
}

