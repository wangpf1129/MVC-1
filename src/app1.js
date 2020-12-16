import './app1.css'
import $ from 'jquery'


const $add = $('#add')
const $sub = $('#sub')
const $mul = $('#mul')
const $div = $('#div')
const $num = $('#num')

const  n = localStorage.getItem('n')
$num.text(n || 100)

$add.on('click',()=>{
  let n = parseInt($num.text())
  n +=1
  localStorage.setItem('n',n)
  $num.text(n)
})
$sub.on('click',()=>{
  let n = parseInt($num.text())
  n -=1
  localStorage.setItem('n',n)
  $num.text(n)
})
$mul.on('click',()=>{
  let n = parseInt($num.text())
  n *=2
  localStorage.setItem('n',n)
  $num.text(n)
})
$div.on('click',()=>{
  let n = parseInt($num.text())
  n /=2
  localStorage.setItem('n',n)
  $num.text(n)
})
