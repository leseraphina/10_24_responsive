import $ from 'jquery'

$(function(){
//  각각 미디어 작업 
let windowW = $(window).width();
if(windowW > 1160 ){
nav()
}
else if(windowW < 1159 && windowW > 980){
nav()
}
else if(windowW < 979 && windowW > 580){
  gallery();
  // tnav()
}
else if(windowW < 579){
  gallery();
  formData();
  // tnav();
}
//  포트폴리오: reset
$(window).on('resize',function(e){
  window.location.reload();
})

})

//  함수
function gallery(){
// 준비하기
const figureW = $('#all>figure').width();
console.log(figureW)
$('#all>figure:last').prependTo('#all')
$('#all').css('margin-left','-'+figureW+'px')
// evnet
$('#gallery>p.prev').on('click',function(e){
$('#all').animate({marginLeft:'+='+figureW+'px'},600,function(){
  $('#all>figure:last').prependTo('#all')
  $('#all').css('margin-left','-'+figureW+'px')
})
})
 $('#gallery>p.next').on('click',function(e){
$('#all').animate({marginLeft:'-='+figureW+'px'},600,function(){
  $('#all>figure:first').appendTo('#all')
  $('#all').css('margin-left','-'+figureW+'px')
})
  
 })
}

function formData(){
const $liForm = $('#box04 form ul>li>input,#box04 form ul>li>textarea');
$liForm.removeAttr('placeholder')
$liForm.on('focus',function(e){
  $(this).prev('label').fadeOut(400)
})
$liForm.on('blur',function(e){
 let str = $(this).val()
 if(str === ''){
  $(this).prev('label').fadeIn(400)
 }
})
}
// nav
// wnav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop:aPos-headerHeight},800)
  })
}

// tnav,mobild

// aside

// top



//  modal
const H5 = document.querySelector('#modal h5')
const Img = document.querySelector('#modal figure>img')
const Figcaption = document.querySelector('#modal figure>figcaption')
const Year = document.querySelector('#modal dl>.year')
const Program = document.querySelector('#modal .program')
const Url = document.querySelector('#modal .url')
const Text = document.querySelector('#modal .text')
// 생성자 함수
fuction Modal(){
  this.속성 = 매개변수
}
// prototype
Modal.Prototype.action = function(){}

// 인스턴스
let modal = [
  new Modal('work01','이미지 주소','2022','프로그램 이름','url','text')
]
//  이벤트: figure-> click, #modal>.close
const btn = document.querySelectorAll('#box03 #all>figure')
const close = document.querySelector('#modal>p.close')
btn.forEach()
close.addEventListener()
//  이벤트 함수
