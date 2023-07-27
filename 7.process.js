console.log(process.argv);

process.exit(1);

process.on('exit', () => {
  console.log('limpiar los recursos');
});
