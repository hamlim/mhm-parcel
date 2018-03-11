import React from 'react'
import Post from '../../../../components/post.js'
import preval from 'preval.macro'

const md = preval`
  module.exports = require('fs').readFileSync(require.resolve('./Family-time.md'), {encoding: 'utf-8'});
`

//cache buster

const FamilyTime = () => <Post source={md} />
export default FamilyTime
