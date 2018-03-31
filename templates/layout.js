module.exports = (title, styles, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style type="text/css">${styles}</style>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;
