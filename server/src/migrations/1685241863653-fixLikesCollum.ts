import { MigrationInterface, QueryRunner } from "typeorm";

export class FixLikesCollum1685241863653 implements MigrationInterface {
    name = 'FixLikesCollum1685241863653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "likeCount" TO "likes"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "likes"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "likes" text NOT NULL DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "likes"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "likes" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "likes" TO "likeCount"`);
    }

}
