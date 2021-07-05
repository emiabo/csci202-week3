# CSCI 202 Assignment 3 - Recreate a painting

> Recreate the following painting (Theo van Doesburg, (Links to an external site.) Counter composition XIII, 1929) using HTML & CSS. Using CSS3 animations and transitions to create either an animated loop, or an animation that is responsive to mouse “hover” interactions. Create two versions, (1) a static reproduction of the painting, and (2) the animated version.

- [?] Static version - Made the triangles and tried to arrange them using a CSS grid with very small increments. Maybe not the best approach given elements cannot ever go *outside* a grid's bounds, and it also messed up the placement of every element that came after the grid.
- [x] Interactive version - To make up for this, I've made the triangles draggable, with a hover animation to indicate they can be picked up. I also added a toggleable copy of the original painting, to compare with when you're done solving the "puzzle".

If it were up to me, I would try this project using HTML5 Canvas and just drawing the shapes using JS.