## What?

Like the description says, an experiment in adding syntactic support for monads to CoffeeScript

## But why?

Largely inspired [this article](http://codon.com/refactoring-ruby-with-monads) about monads in Ruby. The fun stuff he does with `method_missing` isn't super easy in CS/JS, so adding it at the syntax level seemed like a good idea.

Plus, having good syntactic sugar for things (even when they're already possible in a slightly clunkier way) means they're more likely to be used.

## Examples

### 'Monadic' method calls: &.

This assumes that you've created your own monadic types that implement a constructor (`return`) and an `.and_then` function (`bind`). 

It wraps the method call in a function, and passes that as the argument to `bind`. Basically gets as close to the method missing stuff [here](http://codon.com/refactoring-ruby-with-monads) as possible in JS/CS.

```
new Maybe("Hello world")&.slice(6)&.splice(2).val #=> "wold"

new Maybe(undefined)&.slice(6)&.splice(2).val #=> undefined
```

It'd like being able to define the existential operator all on your own!

### Scala style for-yield blocks: =&

```
a =& [1, 2, 3]
b =& ['foo', 'bar', 'baz']
c =& ['x', 'y', 'x']
[a, b, c]
```

is analagous to the following Scala:

```
for {
  a <- [1, 2, 3]
  b <- ['foo', 'bar', 'baz']
  c <- ['x', 'y', 'x']
} yield {
  [a, b, c]
}
```


### Backcalls: =<

Acts as an "asynchronous" assignment. Passes the variable "assigned" to on the left as the argument to a function for which the remainder of the block is the body.

```
a =< f(x)
x = a * 3
console.log x
```

is equivalent to:

```
f(x, (a)=>
  x = a * 3
  console.log x
)
```


## TODO:

* Add `=&` ("Monadic Backcall") support, which would be the same as a backcall being passed as an argument to `.and_then`
* Support for CoffeeScript magic assignment destructuring in backcalls
* Nicer grammar
* Nicer generated code (especially for monadic method calls)

## These aren't actually monads...

Yeah, quite possibly...

I'm still kind of working on my understanding of these little guys. Hopefully, as I stumble through the implementation, I'll be able to properlly figure them out. Explanations of things I've gotten wrong are super welcome.
