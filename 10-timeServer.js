function now (fecha) {
  return [
      fecha.getFullYear(), '-',
      fecha.getMonth() + 1, '-',
      fecha.getDate(), ' ',
      fecha.getHours(), ':',
      fecha.getMinutes()
    ].reduce(function (antes, current, cont) {
      return antes + (cont % 2 || ('' + current).length === 2 ? '' : '0') + current
    })
}

require('net').createServer(function (socket) {
  socket.end(now(new Date()) + '\n')
}).listen(process.argv[2] | 0)