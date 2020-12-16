import './app2.css'
import $ from 'jquery'

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget)
  $li.addClass('selected')
    .siblings().removeClass('selected')

  const index = $li.index()
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
// 让tabBar的第一个li触发点击事件
$tabBar.children().eq(0).trigger('click')