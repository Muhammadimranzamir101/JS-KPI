const dishes = [
    {
        name:'Minestrone',
        vegetarian: true,
    },
    {
        name:'Baked Alaska',
        vegetarian:true,
    },
    {
        name:"General Tso's chicken",
        vegetarian:false,
    },
    {
        name:'Chicken soup',
        vegetarian:true,
    },
    {
        name:'Laksa',
        vegetarian:false
    },
    {
        name:'Hot and sour soup',
        vegetarian:false
    },
    {
        name: 'Sundae',
        vegetarian:true
    },
    {
        name:'Apple pie',
        vegetarian:true
    },{
        name:'Trifle',
        vegetarian:true
    },
    {
        name:'Peach Melba',
        vegetarian:true
    },
    {
        name: 'Steak tartare',
        vegetarian:false
    },{
        name:'Beef Wellington',
        vegetarian:false
    },{
        name:'Steak and kidney pie',
        vegetarian:false
    },{
        name:'Bacon and egg pie',
        vegetarian:false
    },{
        name:'Corned beef pie',
        vegetarian:false
    },{
        name: 'Meat and potato pie',
        vegetarian:false
    },
    {
        name:'Sweet potato pie',
        vegetarian:true
    },
    {
        name:'Banana cream pie',
        vegetarian:true
    },
    {
        name:'Blackberry pie',
        vegetarian:true
    },
    {
        name:'Biryani',
        vegetarian:false
    },
    {
        name: 'Tandoori chicken',
        vegetarian:false
    },
    {
        name:'Butter chicken',
        vegetarian:false
    },
    {
        name:'Scrambled eggs',
        vegetarian:false
    },
    {
        name:'Palak paneer',
        vegetarian:true
    },
];

const nonVeg=dishes.filter(dish=>!dish.vegetarian)
console.log(nonVeg)
