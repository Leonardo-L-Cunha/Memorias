import { MigrationInterface, QueryRunner } from "typeorm";

export class FixBack1684601629681 implements MigrationInterface {
    name = 'FixBack1684601629681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "selectedFile"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "selectedFile" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "selectedFile"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "selectedFile" bytea NOT NULL`);
    }

}
