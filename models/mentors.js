export default (sequelize, DataTypes) => {
  const mentors = sequelize.define('Mentors', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'username'
      }
    },
    names: { type: DataTypes.STRING },

    technology: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedIn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {});
  mentors.associate = (models) => {
    mentors.belongsTo(models.User, { as: 'user', foreignKey: 'username' });
  };
  return mentors;
};