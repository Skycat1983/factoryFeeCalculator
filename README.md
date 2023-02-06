The FeeFactory: a working prototype calculator

The brief for this project was to build a calculator that can process a series of preset fees. I wanted to expand on this a bit and see if I could build a calculator that can calculate any number of fees, even if it doesn't yet know what those fees will look like. After giving it some thought, I grew certain this was possible due the fundamental building blocks that all fees share.

Indeed, any fee (that I can think of) can be described using the following properties:

1. Threshold: the point beyond/before which a fee is triggered.
2. Clause: the condition against which a variable is measured against a threshold.
3. Rate: the amount.
4. Interval: the frequency at which the rate will apply.

With these shared properties it was possible to describe all manner and shape of fees in the brief. This allowed me to make a function that accepted fee 'blueprints' as arguments, and then assembles and configures the functions it will need for various user inputs, separating them accordingly. Although the task brief included only a couple of different fees for each user-supplied input, this calculator can calculate as many fees as you can throw at it.

Although it's not finished, this working prototype has a level of granularity that potnetially allows it to be much more flexible and adaptable than had i made it with preset fee calculations in mind. I imagine a calculator of this nature could prove useful if there was a need to process different and varying quantities of localised fees for differing regions.

Finally, by building the calculator this way, and by breaking down the nature of a fee into a set of universal properties, we also unlock the potential of dynamic fee name generation, which probably isn't actually that useful but is definitely quite cool.
