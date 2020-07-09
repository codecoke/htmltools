

// 根据 html 代码片段创建 dom 对象
function createElemByHTML(html) {
  let div;
  div = document.createElement('div')
  div.innerHTML = html;
  return div.children;
}

// 是否是 DOM List
function isDOMList(selector) {
  if (!selector) {
    return false;
  }
  if (selector instanceof window.HTMLCollection || selector instanceof window.NodeList) {
    return true;
  }
  return false;
}

// 封装 document.querySelectorAll
function querySelectorAll(selector) {
  const result = document.querySelectorAll(selector);
  if (isDOMList(result)) {
    return result;
  } else {
    return [result];
  }
}



function $(id){
  let el = 'string' == typeof id
    ? document.getElementById(id)
    : id;

  el.on = function(event, fn){
    if ('content loaded' == event) {
      event = window.attachEvent ? 'load' : 'DOMContentLoaded';
    }
    el.addEventListener
      ? el.addEventListener(event, fn, false)
      : el.attachEvent('on' + event, fn);
  };

  el.all = function(selector){
    return $(el.querySelectorAll(selector));
  };

  el.each = function(fn){
    let len = el.length;
    for (var i = 0; i < len; ++i) {
      fn($(el[i]), i);
    }
  };

  el.getClasses = function(){
    return this.getAttribute('class').split(/\s+/);
  };

  el.addClass = function(name){
    let classes = this.getAttribute('class');
    el.setAttribute('class', classes
      ? classes + ' ' + name
      : name);
  };

  el.removeClass = function(name){
    let classes = this.getClasses().filter(function(curr){
      return curr != name;
    });
    this.setAttribute('class', classes.join(' '));
  };

  el.strhas =function (str,text) {
    return str.length && ~text.indexOf(str);
  };

  return el;
}


let _where = () => {
  console.log('/public/codecoke/lib/core/codecoke.1.js');
};




export {
  _where as where
  ,$
};

/**
 function search() {
        var str = $('search').value.toLowerCase();
        var links = $('files').all('a');

        links.each(function(link){
          var text = link.textContent.toLowerCase();

          if ('..' == text) return;
          if (str.length && ~text.indexOf(str)) {
            link.addClass('highlight');
          } else {
            link.removeClass('highlight');
          }
        });
      }

      $(window).on('content loaded', function(){
        $('search').on('keyup', search);
      });
    
      
	if ('WebSocket' in window) {
		(function() {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					head.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					head.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function(msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if(sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer'))
			{
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}


const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
*/