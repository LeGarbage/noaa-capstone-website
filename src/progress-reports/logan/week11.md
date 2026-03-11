# Work Completed
After 2 more weeks of work, the visualization is stable enough to move on to
other things. The entirety of my work has been on stabilization.

# Challenges
There weren't that many issues beyond just figuring out what exactly needed to
be fixed. I began by changing the camera type, which didn't really do
anything. The real improvement came from redefining how the camera bounds are
calculated. Now, they are calculated in such a way that zooming causes them to
change, making not only zooming, but also just moving around normally much
more stable. When testing this implementation, I received no errors.

Additionally, I reduced the size of the tiles fetched from the server to
increase the perceived loading speed. Now, the individual tiles are loaded
much faster at the cost of having more tiles to load.

# Next week

Now that the main visualization is stable, there are 2 main things that need
to be implemented:

1. **Zooming between data levels.** There are 12 different levels of data,
   each with a different level of detail. The goal is to create an easy
interface for switching between the levels. The actual interface still needs
to be designed, such as deciding whether to override the current scrolling
behavior to have a "zoom" between layers or just use buttons.

2. **Data caching and queue management.** In the current implementation there
   are 2 main issues with the way data is handled. The first is that data is not
   cached at all. Once a tile leaves the screen, its data is immediately
deleted, meaning it needs to be fetched again from the server upon returning to
the tile. The second issue is that the queue is not dynamic. If a tile of data
is queued to be fetched and that tile leaves the screen before the request can
be processed, such as when panning quickly, the request remains in the queue,
causing it to be deleted as soon as it is fetched. Dynamically removing requests
from the queue would solve this problem, increasing the loading speed when
panning quickly, although this is less critical to the functionality of the app.
