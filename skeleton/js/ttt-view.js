(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
	  this.$el = $el;
	  this.game = game;
	  
	  this.setupBoard();
	  this.bindEvents();
  };

  View.prototype.bindEvents = function () {
	  
	  this.$el.on("click", ".spot", this.makeMove.bind(this));  
  }
  

  View.prototype.makeMove = function (event) {
  	  var $square = $(event.currentTarget);
  	  var move = [$square.data("row"), $square.data("col")]
  	  this.game.playMove(move)
  	  if (this.game.currentPlayer === 'x') {
  		  $square.css("background", "red");
  	  } else {
  		  $square.css("background", "blue");
  	  }

  };

  
  View.prototype.setupBoard = function () {
	  var megaString = "";
	  var ticker = 0;
	  _.times(3, function () {
		  megaString += "<div class='row clearfix'><div class='spot' data-row=\"" + ticker + "\" data-col='0'></div><div class='spot' data-row=\"" + ticker + "\" data-col='1'></div><div class='spot' data-row=\"" + ticker + "\" data-col='2'></div></div>";
		  ticker += 1;
	  })
	  this.$el.append(megaString);
  };
  
})();
