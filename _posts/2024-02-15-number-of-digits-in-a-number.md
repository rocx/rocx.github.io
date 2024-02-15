---
title: "Number of Digits in a Number"
layout: "post"
tags: ["math", "til"]
summary: >
  My dumb ass remembers logarithms exist.
---

For reasons involving string-formatting and width adjustments in a
project, I ran into the pickle of figuring out how to get the number
of digits in a number.

This isn't a serious problem.
In theory I _could_ have just used `foobar.digits.size`,
be done with it, and save the hassle of writing this post.
While [premature optimization is said to be the root of all evil][1],
this in particular felt more like a challenge to figure out how to
get the number of digits in a number **without going through a loop**.
Constant time rather than linear just to get this info is a bonus.

[1]: https://en.wikiquote.org/wiki/Donald_Knuth

Since this project is written in [Crystal], so is the code here.

[Crystal]: https://crystal-lang.org/

# Traditional Way

Like before, `foobar.digits.size` would be the easy way out.
[`Int#digits`][digits] just gives us an `Array` of digits in
a number by looping, [dividing and getting the remainder from 10][modulo]
and stopping when the quotient reaches zero.

```crystal
# Int#digits is part of the standard library in Crystal
# but this method illustrates the gist of this.
def digits(number : Int32)
  digits = Array(Int32).new

  while !number.zero?
    digits.push (number % 10).to_i
    number = number.tdiv 10
  end

  return digits
end
```

The amount of iterations in this kind of loop is never large.
A `UInt32`'s maximum limit is ten digits and a `UInt64`'s,
the largest fixed number type, twenty digits.

[modulo]: https://en.wikipedia.org/wiki/Modular_arithmetic
[digits]: https://crystal-lang.org/api/1.11.2/Int.html#digits(base=10):Array(Int32)-instance-method

# The `rocx`-y Road

For some reason this situation brought up "powers of ten" in my head.
Specifically the part where, say, 10<sup>3</sup> means there's three
zeroes in 1,000.
What's the inverse of doing that?
The [logarithm].
That looks like a good place to start.

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

```crystal
Math.log10(2024)
# ⇒ 3.3062105081677613 : Float64

Math.log10(30)
# ⇒ 1.4771212547196624 : Float64

# Am I on the right track? 🤔 Let's try this...

Math.log10(2024).ceil.to_i
# ⇒ 4 : Int32

Math.log10(30)
# ⇒ 2 : Int32
# 😎
```

Nice.
But there's one snag I encountered while testing: dealing with powers
of ten (or whatever the base used is).

```crystal
Math.log10(1000).ceil.to_i
# ⇒ 3 : Int32
# 🫤
```

Well drat.
Time to pull up a playground and tinker around.
There _has_ to be a pattern _somewhere_...

```crystal
log_999  = Math.log10  999
# ⇒ 2.9995654882259823 : Float64
log_1000 = Math.log10 1000
# ⇒ 3.0 : Float64
log_1001 = Math.log10 1001
# ⇒ 3.000434077479319 : Float64

log_999.ceil  # ⇒ 3.0 : Float64
log_1000.ceil # ⇒ 3.0 : Float64
log_1001.ceil # ⇒ 4.0 : Float64
```

_Ooooooh I see now..._

# Aha! A Solution!

There's the pattern.
It looks like it's a typical off-by-one error in my logic.
What needs to be done is to get the logarithm of a given
number _plus one_, turning log<sub>10</sub>(1000)
into log<sub>10</sub>(1000 + 1).

```crystal
def digit_count(number : Int32) : Int32
  return Math.log10(number.succ).ceil.to_i
end

digit_count 999  # ⇒ 3 : Int32
digit_count 1000 # ⇒ 4 : Int32
digit_count 1001 # ⇒ 4 : Int32
```

No loops.
Just raw mathematics.
You never think this kind of stuff comes up outside of a problem
domain in computer science and yet it still comes in handy.
