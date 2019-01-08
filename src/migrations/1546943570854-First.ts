import {MigrationInterface, QueryRunner} from "typeorm";

export class First1546943570854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE cms_pages (
                id uuid PRIMARY KEY,
                title text NOT NULL,
                text text NOT NULL,
                visible boolean NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE cms_pages");
    }

}
