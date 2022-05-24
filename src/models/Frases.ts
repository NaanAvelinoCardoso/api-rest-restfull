import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

interface FrasesInstace extends Model {
    id: number,
    author: string,
    text: string
}

export const Frases = sequelize.define<FrasesInstace>('Frases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'frases',
    timestamps: false
});