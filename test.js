// Generated by CoffeeScript 1.8.0
(function() {
  (null_maybe).and_then(function(x){return x.foo;);

  (null_mabye).and_then(function(x){return x.foo(););

  ((null_maybe).and_then(function(x){return x.foo;)).and_then(function(x){return x.bar;);

  ((null_maybe).and_then(function(x){return x.foo();)).and_then(function(x){return x.bar;);

  (null_maybe).and_then(function(x){return x.foo;).bar;

  (null_mabye).and_then(function(x){return x.foo();).bar;

  ((null_maybe).and_then(function(x){return x.foo();).bar).and_then(function(x){return x.baz;);

  (null_maybe.foo).and_then(function(x){return x.bar;);

}).call(this);
