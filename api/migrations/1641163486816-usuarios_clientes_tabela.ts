import {MigrationInterface, QueryRunner} from "typeorm";

export class usuariosClientesTabela1641163486816 implements MigrationInterface {
    name = 'usuariosClientesTabela1641163486816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "senha" character varying NOT NULL, "criado" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
