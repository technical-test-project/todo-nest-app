import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ChecklistItemTable1724919968331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'checklist_items',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'checklist_id',
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
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    // Add ForeignKey
    await queryRunner.createForeignKey(
      'checklist_items',
      new TableForeignKey({
        columnNames: ['checklist_id'], // Column that will hold the foreign key
        referencedColumnNames: ['id'], // Column in the referenced table
        referencedTableName: 'checklists', // Referenced table
        onDelete: 'CASCADE', // What happens when the referenced checklist is deleted
        onUpdate: 'NO ACTION', // What happens when the referenced checklist is updated
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key constraint first
    await queryRunner.dropForeignKey(
      'checklist_items',
      'checklist_items_checklist_id_fk',
    );

    // Drop the checklist_items table
    await queryRunner.dropTable('checklist_items');
  }
}
