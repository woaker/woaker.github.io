//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(/image/1.jpeg)",
    "url(/image/2.jpeg)",
    "url(/image/3.jpeg)",
    "url(/image/4.jpeg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(/image/11.jpeg)",
    "url(/image/12.jpeg)",
    "url(/image/13.jpeg)",
    "url(/image/14.jpeg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];