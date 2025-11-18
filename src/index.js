// const message = 'Hello world Node';

import path from 'node:path';

const somePath = path.join('some_folder', 'some_file.txt');

// абсолютний шлях до робочої директорії
const pathToWorkDir = path.join(process.cwd());

// додаємо нові частини до шляху
const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');

console.log('somePath', somePath);
console.log('pathToFile', pathToFile); ///home/eduard/Develop/Go_IT_Projects/Nodejs/nodejs-template/some_folder/some_file.txt
