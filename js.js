/**
 * Created by erdaye on 2015/6/14.
 */
    //-----------------------ͼƬ�ֻ�------------------------
var curIndex = 0;
var timeInterval = 3000;//�����Զ����ż���¼�����λ�����룩
var arr = new Array();
arr[0] = "imgs/renzaijiongtu.jpg";
arr[1] = "imgs/wangdeshengyan.jpg";
arr[2] = "imgs/shaonianpai.jpg";
//���ͼƬ
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj = document.getElementById("obj");
    if (curIndex == arr.length-1)
    {
        curIndex = 0;//�ж��Ƿ������һ����
    }
    else
    {
        curIndex += 1;//��ת����һ����
    }
    obj.src = arr[curIndex];//����ͼƬ
    if(curIndex==0){f1();}//��ť����ɫ�ĸı�
    if(curIndex==1){f2();}
    if(curIndex==2){f3();}
}
function f1()
{
    a1.style.borderColor="red";
    a2.style.borderColor="blue";
    a3.style.borderColor="blue";
    obj.src="imgs/renzaijiongtu.jpg";
}

function f2()
{
    a1.style.borderColor="blue";
    a2.style.borderColor="red";
    a3.style.borderColor="blue";
    obj.src="imgs/wangdeshengyan.jpg";
}
function f3()
{
    a1.style.borderColor="blue";
    a2.style.borderColor="blue";
    a3.style.borderColor="red";
    obj.src="imgs/shaonianpai.jpg";
}
//-----------------------------------�����������Ŀ-------------------------------
function f11()
{
    c1.style.width="380px";c1.style.zIndex="4";c1.style.overflow="auto";
    c2.style.width="190px";c2.style.zIndex="1";c2.style.overflow="hidden";
    c3.style.width="190px";c3.style.zIndex="1";c3.style.overflow="hidden";
}
function f22()
{
    c2.style.width="380px";c2.style.zIndex="4";c2.style.overflow="auto";
    c1.style.width="190px";c1.style.zIndex="1";c1.style.overflow="hidden";
    c3.style.width="190px";c3.style.zIndex="1";c3.style.overflow="hidden";
}
function f33()
{
    c3.style.width="380px";c3.style.zIndex="4";c3.style.overflow="auto";
    c2.style.width="190px";c2.style.zIndex="1";c2.style.overflow="hidden";
    c1.style.width="190px";c1.style.zIndex="1";c1.style.overflow="hidden";
}