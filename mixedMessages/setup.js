const names = ['Steve ', 'Jeff ','Dave ','Colt ','Patrick '];
const verbs = ['likes ','dislikes ','loves ','hates ','is into '];
const nouns = ['turtles.','snakes.','dogs.','cats.'];

console.log(
    names[Math.floor(Math.random()*names.length)] + verbs[Math.floor(Math.random()*verbs.length)] + nouns[Math.floor(Math.random()*nouns.length)]
    )
console.log(names.length)