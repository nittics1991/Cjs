
class ConcertoMb
{
	constructor(el, options = {}) {
		this.el = el;
		this._defaultOptions();
		this._assign(options);
	}
	
	_defaultOptions() {
		this.options = {
		menu:[
		],
		button:{
			layout:[
				'add','remove','save','reset','download','upload',
			],
			add:{
				options:{
					icons:{
						primary:"ui-icon-plusthick",
					},
		  			text:false,
		  			label:'add',
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
		  			text:false,
		  			label:'remove',
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
		  			text:false,
		  			label:'save',
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
		  			text:false,
		  			label:'reset',
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
		  			text:false,
		  			label:'download',
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
		  			text:false,
		  			label:'upload',
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
	
	_assign(options) {
		this._doAssign(this.options, options, this.options, null);
	}
	
	_doAssign(options, input, parent, prop) {
		if (Array.isArray(options) && Array.isArray(input) ||
			(typeof options === 'object' && typeof input === 'object')
		) {
			for (let key in input) {
				this._doAssign(options[key], input[key], options, key);
			}
		} else {
			parent[prop] = input;
		}
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
		
		tmpl += this.options.button.layout.map(function(name) {
			return `<button class="concerto-bm-button-${name}">${name}</button>`;
		}).join("\n");
		
		tmpl += `
				</div>
			</div>
		`;
		this.el.insertAdjacentHTML('afterbegin', tmpl);
	}
	
	_setButton() {
		let options = this.options;
		let buttons = this.options.button;
		let layout = this.options.button.layout;
		let buttonset = this.el.children[0].children[1];
		
		$(buttonset.children).map(function(i, el) {
			$(el).button(buttons[layout[i]].options || {});
			
		});
		
		$(buttonset).on('click', 'button', function(e) {
			let _options = options;
			let classNames = e.currentTarget.className.split(' ');
			let className = null;
			
			classNames.some(function(val) {
				if (/^concerto-bm-button-.+$/.test(val)) {
					className = val;
					return true;
				}
				return false;
			});
			
			if (!className) {
				return;
			}
			
			let names = className.split('-');
			let buttonName = names[names.length-1];
			
			if (_options.button[buttonName]['click']) {
				return _options.button[buttonName]['click'](e);
			}
		});
		
		$(buttonset).children().css(this.options.button.css);
  		$(buttonset).buttonset();
 	}
}

