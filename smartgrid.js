const smartGrid = require('smart-grid')

const options = {
  filename: 'smart-grid',
  outputStyle: 'sass',
  columns: 12,
  offset: '30px',
  mobileFirst: true,
  container: {
    maxWidth: '1440px',
    fields: '30px'
  },
  breakPoints: {
    lg: {
      width: '1440px'
    },
    md: {
      width: '768px'
    },
    sm: {
      width: '320px'
    }

  },
  mixinNames: {
    container: 'wrapper',
    row: 'row-flex',
    rowFloat: 'row-float',
    rowInlineBlock: 'row-ib',
    rowOffsets: 'row-offsets',
    column: 'col',
    size: 'size',
    columnFloat: 'col-float',
    columnInlineBlock: 'col-ib',
    columnPadding: 'col-padding',
    columnOffsets: 'col-offsets',
    shift: 'shift',
    from: 'from',
    to: 'to',
    fromTo: 'from-to',
    reset: 'reset',
    clearfix: 'clearfix',
    debug: 'debug',
    uRowFlex: 'u-row-flex',
    uColumn: 'u-col',
    uSize: 'u-size'
  },
  tab: '    ',
  defaultMediaDevice: 'screen',
  detailedCalc: false
}

smartGrid('./src/SCSS', options)
