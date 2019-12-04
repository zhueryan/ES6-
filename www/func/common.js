/**v1.0.0 2019-12-4 zhuyan 提取的一些公共的js方法*/

//打开一个窗口
function popUp(url){
  window.open(url,"name","widht=300,height=500");
}
//将函数添加到页面加载后执行
function addLoadEvent(func){
  var oldOnload = window.onload;
  if(typeof window.onload != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
      oldOnload();
      func();
    }
  }
}
//在元素后插入新节点
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
