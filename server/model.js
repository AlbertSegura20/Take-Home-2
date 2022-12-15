const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Agent extends Sequelize.Model { }
Agent.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    photoUrl: {
      type: Sequelize.STRING
    },
    agentLicence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    practiceAreas: {
      type: Sequelize.STRING
    },
    aboutMe: {
      type: Sequelize.TEXT
    }
  },
  {
    sequelize,
    modelName: 'Agents'
    // options
  }
);


class Reviews extends Sequelize.Model { }
Reviews.init(
    {
        // attributes
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idAgent: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        review: {
            type: Sequelize.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'Reviews'
        // options
    }
);


module.exports = {
  sequelize,
  Agent,
  Reviews
};
