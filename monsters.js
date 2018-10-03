const config = require('./config');

class Monsters {
  constructor(url = `http://localhost:${config.port}${config.staticDir}`) {
    this.url = url;
    this.monsters = [
      {
        name: 'Fooz',
        imagePrefix: 'yellow'
      },
      {
      	name: 'Bazz',
        imagePrefix: 'blue'
      },
      {
      	name: 'Barry',
        imagePrefix: 'seledin'
      },
      {
      	name: 'Koo',
        imagePrefix: 'violet'
      },
      {
      	name: 'Roar',
        imagePrefix: 'green'
      },
      {
      	name: 'Dee',
        imagePrefix: 'pinky'
      },
    ];
    this.properties = ['power', 'danger', 'frequency'];
    this.descriptions = [
      'Loves to eat semicolons 😋.',
      '"Response with an error is a happy response".',
      'Outdates dependencies.',
      'Somebody touched his (code) spaghett! 🍝.',
      'He knows the way 🛣.',
      'Listens to "Last christmas" in june 🎶.',
      'Enjoys dummy jokes 🍞.',
      'Upvotes wrong answers at StackOverlow.',
      'Changes APIs request params without saying a word 🤐.',
      'Code works only on his machine.'
    ];

    this.monstersList = this.generateMonstersData();
  }

  getMonstersList() {
    return this.monstersList.map((monster) => ({
      name: monster.name,
      slug: monster.name.toLowerCase(),
      images: monster.images
    }));
  }

  getMonster(slug) {
    return this.monstersList.find((monster) => monster.name.toLowerCase() === slug);
  }

  generateMonstersData() {
    return this.monsters.map((monster) => ({
      name: monster.name,
      ...this.createMonsterDetails(monster)
    }));
  }

  createMonsterDetails(monster) {
    return {
      statistics: this.generateStatistics(),
      description: this.generateDescription(),
      images: {
      	thumb: `${this.url}/${monster.imagePrefix}-150x150.jpg`,
        big: `${this.url}/${monster.imagePrefix}-500x500.jpg`,
      }
    }
  }

  generateStatistics() {
    const statistics = {};

    this.properties.forEach((property) => {
    	statistics[property] = Math.random().toFixed(2);
    });

    return statistics;
  }

  generateDescription() {
    const copy = [...this.descriptions];
    const description = [];

    while(description.length !== 3) {
    	const index = Math.floor(Math.random() * copy.length);
      description.push(copy.splice(index, 1)[0]);
    }

    return description.join(' ');
  }
}

module.exports = Monsters;
