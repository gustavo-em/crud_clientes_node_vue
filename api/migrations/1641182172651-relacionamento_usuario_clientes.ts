import {MigrationInterface, QueryRunner} from "typeorm";

export class relacionamentoUsuarioClientes1641182172651 implements MigrationInterface {
    name = 'relacionamentoUsuarioClientes1641182172651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" ADD "usuarioId" uuid`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD CONSTRAINT "FK_cd3ac1304e69f6efe85ac90fe0b" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" DROP CONSTRAINT "FK_cd3ac1304e69f6efe85ac90fe0b"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "usuarioId"`);
    }

}
