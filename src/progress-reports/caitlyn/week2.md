At the time of writing this we are still ahead of schedule by about a month. We anticipated that our infrastructure would take until October 31st, but as it stands both of us are making decent progress through **Milestone 2** which can be basically summarized into data reprocessing and basic front end visualization.

A meeting with Rudy on October 14, 2025 confirmed that I’m on track to actually finish **Milestone 2** by **Thanksgiving Break (~November 21)** if not sooner!

Do note Caitlyn loses half a day worth of development on Thursdays due to Cornerstone from now until the end of the semester— Roughly December 11, 2025— I think. I’m not actually sure when Cornerstone ends :D

## Work Completed this Week

All of the tests from the past few weeks are working as they should be! It’s like a miracle. This week was mainly focused on learning what Data Trees are and how to implement them in the context of whatever a “tile pyramid scheme” is. I’ve made it possible to pull out our “resampling” axis from the data store. In this case it would be time. From there you can take that value and divide it by 2 until it gets somewhere around 4096 units long. The resulting powers of 2 will be how many levels we will have to sample in, where each level is half of the last. This will be a goal for the coming weeks. It’s basically taking the five million methods I’ve written (it’s like six) and making them all work together to make the “tile pyramid scheme” but with resampled data.

But! I’m able to take the powers of two and make an empty datatree based on it. Pretty nifty if you ask me.

## Challenges Encountered

Moving into the front end after finishing **Milestone 2** will certainly be a challenge for me since I absolutely have no knowledge at all about ThreeJS and generally a limited background of JS. Woo~ A new thing to learn. To help with this Rudy has offered me and Logan a ThreeJS course to help us navigate the learning curve. We’re still thinking about it, but I think it’ll be an amazing resource to use!

Oh and of course the shut down is still happening, but it almost works in our favor since Rudy’s response times are even faster now :)

## Goals for the Coming Week

*Written on Tuesday as meeting notes:* There’s one more big section of this milestone! It’s has something with duplicating the data into even smaller chunks— Datatree or something like that. This should take two to three weeks according to Rudy which means we’re on path to see **Milestone 2** completion right around the first week of November :D At least for the backend half of things. **Milestone 3** will be very broad and open for me and Logan to decide what type of visualization path we want to take. Seeing as we’re speeding through almost everything I think we might have to time to try out multiple visualizations! Or who knows it might just take forever to implement one.

As I move away from backend with the end of **Milestone 2** I would like to start trying to write a proper READEME for the backend repo before we completely abandon it. Right now the README is full of commands for housekeeping management so I’ll have to see what works best for that. Maybe this isn’t a goal for next week, but within the coming weeks for sure. There are two main issues left for **Milestone 2**!
