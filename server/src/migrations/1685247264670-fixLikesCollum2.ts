import { MigrationInterface, QueryRunner } from "typeorm";

export class FixLikesCollum21685247264670 implements MigrationInterface {
    name = 'FixLikesCollum21685247264670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "likes" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "likes" SET DEFAULT '[]'`);
    }

}
