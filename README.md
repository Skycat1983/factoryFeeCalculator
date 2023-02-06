The FeeFactory: a working prototype calculator

The brief for this project was to build a calculator that can process a series of preset fees. I wanted to expand on this a bit and see if I could build a calculator that can calculate any number of fees, even if it doesn't yet know what those fees will look like. After giving it some thought, I grew certain this was possible due the fundamental building blocks that all fees share.

Indeed, any fee (that I can think of) can be described using the following properties:

1. Threshold: the point beyond/before which a fee is triggered.
2. Clause: the condition against which a variable is measured against a threshold.
3. Rate: the amount.
4. Interval: the frequency at which the rate will apply.

With this in mind,

At runtime this calculator assembles and configures the functions it will need for various inputs, and separates them accordingly. Although the task brief included only a couple of different fees for each user-supplied input, this calculator can calculate 
this calculator is not constrained by

What makes this calculator unique
this level of granularity allows a calculator to be much more flexible and adaptable. when seen through to its conclusion, it would allow for dynamic and programmatic prioritisation of fee assertions, without having to change the functions themselves. 
a fee calculator of this nature could conceivably process different and varying quantities of localised fees for differing regions.

finally, by building the calculator this way, and by breaking down the nature of a fee into a set of universal properties, we also unlock the potential of dynamic fee name generation, which probably isn't actually that useful but is definitely kinda cool.
