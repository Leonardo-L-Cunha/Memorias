import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path"
import "dotenv/config"

const dataSourceConfig = ():DataSourceOptions =>{
    const entitiesPath:string = path.join(__dirname, '/entities/**.{js,ts}')
    const migrationPath:string = path.join(__dirname,'/migrations/**.{js,ts}')
    const dbUrl:string | undefined = process.env.DATABASE_URL
    if(!dbUrl){
        throw new Error('missing var env  url')
    }

    return {
        type: "postgres",
        url: dbUrl,
        synchronize:false,
        logging:true,
        entities: [entitiesPath],
        migrations:[migrationPath]
    }
}

const AppDataSource:DataSource = new DataSource(dataSourceConfig())

export default AppDataSource