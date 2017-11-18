module.exports = () => {
  $.gulp.task('deploy:ftp', () => {
    const globs = [$.path.build + '**/*.*'],
          conn  =  $.ftp.create({
            host: 'mywebsite.tld',
            user: 'me',
            password: 'mypass'
          });
    return $.gulp.src(globs, {base: '.', buffer: false})
        .pipe(conn.newer('/public_html')) // only upload newer files 
        .pipe(conn.dest('/public_html'));
  });
  $.gulp.task('deploy:sftp', () => {
    return $.gulp.src($.path.build + '**/*.*')
      .pipe($.load.sftp({
        host: "mywebsite.tld",
        user: "me",
        pass: "mypass",
        remotePath: "/public_html"
      }));
  });
};
