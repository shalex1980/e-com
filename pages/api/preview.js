export default (req, res) => {
  console.log('Preview');
  res.setPreviewData({})
  res.end('Preview mode enabled')
}