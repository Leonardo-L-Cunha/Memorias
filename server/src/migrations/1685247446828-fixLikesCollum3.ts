import { MigrationInterface, QueryRunner } from "typeorm";

export class FixLikesCollum31685247446828 implements MigrationInterface {
    name = 'FixLikesCollum31685247446828'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "likes" SET DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "likes" DROP DEFAULT`);
    }

}
