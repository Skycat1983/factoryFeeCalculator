The FeeFactory: a working prototype calculator.

The brief for this project- pasted below- was to build a calculator that can process a series of preset fees. I wanted to expand on this a bit and see if I could build a calculator that can calculate any number of fees, even if it doesn't yet know what those fees will look like. After giving it some thought, I grew certain this was possible due the fundamental building blocks that all fees share.

Indeed, any fee (that I can think of) can be described using the following properties blueprint:

1. Threshold: the point beyond/before which a fee is triggered.
2. Clause: the condition which must acconpany a threshold.
3. Rate: the amount.
4. Interval: the frequency at which the rate will trigger/apply.

With a value for each of these shared properties it was possible to perfectly describe the calculation instructions for every fee mentioned in the brief. This allowed me to make a function that accepted any number of fee 'blueprints' as arguments, to then return an equal number of fee calculators, with each fee calculator assembled and configured for the purpose of targeting a specific user input in accordance with the brief. Finally, the results of this 'configuration' are pushed to a corresponding functions array, to await a particular user input. When this input arrives (onSubmit), we iteratively apply each functiion in the array to the given input, adding the result to an accumulator, which we return.

Although this calculator has met the criteria outlined in the brief, i do not consider it 'finished'. Due to time constraints, some 'placeholder' code remains. This placeholder code performs functions that are- as yet- not generated. These hardcoded fuctions were necessary to account for the fact that while some fee calculator functions take an input as an argument, others take a total. Naturally those functions which take an input should run before those which take a total, and as i did not have time to devise a way of programmatically allocating prioritisation to these functions during configuration, i thought it best just to set that task aside for now. Nonetheless, the criteria which can be used to describe those hardcoded functions remains the same as outlined above, and this is visible in the code.

Anyway, this task turned into something of a labour of love for me, and i'm pleased with the initial results. The calculator has a level of granularity that potnetially allows it to be much more flexible and adaptable than had i made it with preset fee calculations in mind. Indeed, by having a system that understands the core structure of a fee, we can overcome the need to craft our solutions by hand.

I imagine a calculator of this nature could prove useful if there was a need to process different and varying quantities of localised fees for differing regions. Alternatively, perhaps a client has a very broad spectrum of potential fees, and would like the ability to substitue any number of these at will, without having to delve too deep into the code. With just a basic understanding of the 'fee blueprint' outlined above, this calculator allows that.

One final area of untapped scope within the FeeFactory calculator is that of its potential for dynamic fee name generation. Admittedly this probably isn't actually very useful to anyone, but it's definitely quite cool and i hope to eventually implement it, when i'm a bit less busy.

Finally, if you are an employer reading this, I hope i have not left the impression that I am someone who can't see an obvious answer to an easy question. Rather, I assume this assignment attracted a lot of similar approaches, and so i thought i'd take this opportunity to demonstrate a bit of creativity. I have certainly learnt a lot along the way, and had i the time again I would certainly do things differently (the major one being stringent adherence to tdd from the start!). But overall i'm pleased. My previous projects demanded a high level of content in a short space of time, and so i found it really rewarding to approach a task with a more patient and measured mindset.

<!-- ------------------------- -->

Known issue: there is a bug in validation which sometimes leads to an error ("cartValue must be to two decimal places") being incorrectly returned. This prevents any fee calculations from running.

<!-- ------------------------- -->

_The Brief_:

"If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€
Example 1: If the number of items is 4, no extra surcharge
Example 2: If the number of items is 5, 50 cents surcharge is added
Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 \* 50 cents) + 1,20€)
The delivery fee can never be more than 15€, including possible surcharges.
The delivery is free (0€) when the cart value is equal or more than 100€.
During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€)."
