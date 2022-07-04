const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");

class User extends Model {
	getUser() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			profileImageUrl: this.profileImageUrl,
		};
	}

	async checkPassword(password) {
		const isValid = await bcrypt.compare(password, this.password);
		return isValid;
	}
}

const schema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	profileImageUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

const options = {
	sequelize: connection,
	timestamps: true,
	underscored: false,
	freezeTableName: true,
	modelName: "user",
	hooks: {
		beforeCreate: hashPassword,
	},
};

User.init(schema, options);

module.exports = User;
