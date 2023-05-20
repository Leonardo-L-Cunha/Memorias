import { MigrationInterface, QueryRunner } from "typeorm";

export class Likecount1684557892853 implements MigrationInterface {
    name = 'Likecount1684557892853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "likeCount" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "likeCount"`);
    }

}
