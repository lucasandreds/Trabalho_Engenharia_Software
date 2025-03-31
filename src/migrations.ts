import Database from 'better-sqlite3';
import fs from 'node:fs/promises'
import path from 'node:path';
import { cwd } from 'node:process';

await fs.mkdir(path.join(cwd(), 'db'), { recursive: true });
const db = new Database('db/sqlite');
db.pragma('journal_mode = WAL');

const version = db.pragma('user_version', { simple: true });
db.exec('BEGIN');
switch(version) {
    case 0:
        // Aqui entra uma migração para a versão 1
        // Ao fim da migração, atualizar a versão:
        // db.pragma('user_version = 1');
    case 1:
}
db.exec('COMMIT');