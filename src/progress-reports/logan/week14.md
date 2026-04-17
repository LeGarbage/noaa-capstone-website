# Work Completed

I have not made much progress in the past couple of weeks, but this week I did
something. It wasn't much, but it is a step toward getting the project ready
for the presentation.

I also fixed a bug in the zooming system so that it is much more stable and
doesn't leave "ghost tiles" when zooming and panning.

Additionally, I removed most of the texture cleanup system to stop the
textures from being deleted as soon as they leave the screen. However, this
means that they are never deleted. In the future, I would like to build a
system that dynamically deletes tiles that are far away from the viewport to
strike a balance between speed and memory usage.

# Challenges

The main challenge was figuring out how exactly to go about preparing the
project for the presentation. I began by adding a panel that will eventually
contain information to contextualize the visualization, such as coordinates,
zoom, frequency, and more. The goal of the panel is to make the visualization
easier to understand for people who do not know about the underlying
principles.

# Next Week

My top priority right now is the information panel, but if I have time I will
try and implement the dynamic tile unloading, although it is low priority for
the presentation at this point.
