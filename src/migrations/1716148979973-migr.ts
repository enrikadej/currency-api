import { MigrationInterface, QueryRunner } from "typeorm";

export class Migr1716148979973 implements MigrationInterface {
    name = 'Migr1716148979973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isSubscribed2"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isSubscribe2d" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isSubscribe23d" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isSubscribe23d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isSubscribe2d"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isSubscribed2" boolean NOT NULL DEFAULT false`);
    }

}
