const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';
const pick = require('picocolors');

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (err) {
    console.error(`No se pudo leer el directorio ${folder}`);
    process.exit(1);
  }
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (err) {
      console.error(pick.red('Ocurrio un error: ', err));
      process.exit(1);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : '-';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return ` ${pick.red(fileType)}  ${pick.blue(file)} ${pick.green(fileSize.toString())} ${pick.yellow(fileModified)}`;
  });
  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((file) => console.log(file));
}

ls(folder);
