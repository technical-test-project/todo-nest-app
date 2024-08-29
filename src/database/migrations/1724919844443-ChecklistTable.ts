import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ChecklistTable1724919844443 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'checklists',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    // Add ForeignKey
    await queryRunner.createForeignKey(
      'checklists',
      new TableForeignKey({
        name: 'checklists_user_id_fk',
        columnNames: ['user_id'], // Column that will hold the foreign key
        referencedColumnNames: ['id'], // Column in the referenced table
        referencedTableName: 'users', // Referenced table
        onDelete: 'CASCADE', // What happens when the referenced checklist is deleted
        onUpdate: 'NO ACTION', // What happens when the referenced checklist is updated
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key constraint first
    await queryRunner.dropForeignKey('checklists', 'checklists_user_id_fk');

    // Drop the checklist_items table
    await queryRunner.dropTable('checklists');
  }
}
