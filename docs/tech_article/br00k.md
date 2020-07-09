# brook install guide

原创技术小哥的网站更多详细设置参见原贴：

[原贴](https://doub.io/brook-jc3/)

---

brook
Brook

---

此方式优点： 属于小众代理，被XX的概率较低，速度和SSR 不相伯仲
缺点：客户端配置不如SSR客户端丰富 比如规则之类的 设置相对麻烦或者要下对应客户端而且并不是全平台。还有就是更正一下视频里说的不支持路由器目前已知支持 软路由系统openwrt
2018-04-02 00 04 13
但梅林貌似还没有。如果有我会在这里通知大家。

---

以下是以谷歌云为例子！！

Part1首先搭建BBR加速

1：sudo -i

(最前面显示root@xxxx)

BBR加速 有两套代码，选其一

2（第一套）：

```shell
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/YankeeBBR/master/bbr.sh && bash bbr.sh install
```

蓝底窗口按TAB键选NO

选择重启 Y

这里会断开连接，大家可以关掉窗口再重新打开。

如果用第一套 就按照顺序继续 第2步完了 第3步 第4步。。。

----

（第二套） TCP-BBR加速方案 用这套代码（视频中使用的）完事以后可以直接到第5步！

```shell
wget --no-check-certificate https://github.com/iyuco/scripts/raw/master/bbr.sh
chmod +x bbr.sh
./bbr.sh
```

复制过去以后便会自动开始当显示./bbr.sh 的时候回车
37384008-33e9d8d0-2787-11e8-8156-bcffc955149e

到这个界面的时候再按回车
37384163-3aeb94ec-2788-11e8-8898-458788f429b8

注意！！这个地方在我录制视频的时候还不可以重启，但现在已经可以选择Y 让服务器重启，也可以按照视频走把brook按照完毕以后再一起重启！！！反正一定要重启一次不然BBR加速是不运行的。
然后直接跳转第5步继续

3：sudo -i

(最前面显示root@xxxx)

4：bash bbr.sh start

如果用的新代码这3.4 这两步步跳过

---

Part2 搭建brook服务端

如果这一步之前有选Y重启的话 需要 先输入 sudo -i

```shell
5：wget -N --no-check-certificate https://softs.fun/Bash/brook.sh && chmod +x brook.sh && bash brook.sh

#如果失效用这个
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/brook.sh && chmod +x brook.sh && bash brook.sh
```

6：运行脚本后会出现脚本操作菜单，选择并输入 1 就会开始安装

7：输入端口 [1-65535]
(默认: 2333):
大家可以自行输入自己的端口（防火墙开通的）

8：请输入 Brook 密码
(默认: doub.io):

9：选择 Brook

Brook（新版协议，即 [servers]）

Brook Stream（旧版协议，即 [streamservers]，不推荐，除非使用新版协议速度慢）
(默认: 1. Brook（新版协议）):1

`协议 : servers`

[信息] Brook 停止成功 !
[信息] Brook 启动中...
[信息] Brook 启动成功 !

---

9： Brook 用户配置复制或截图以后 最后重启服务器
2018-04-01 23 52 10

再出现这个界面以后需要输入 reboot 重启服务器。BBR 和 RBOOK 就全启动啦 回车后 关掉窗口即可

---

10：如何在手机、电脑（PC/MAC)上使用请参照视频

---

谷歌云防火墙规则 （说白了就是创建完实例以后需要再去防火墙那个地方打开相应的端口才可以使用实例）

谷歌云防火墙规则添加 （位置在谷歌云 VPC网络-防火墙）
点击添加新规则，然后按照一下这个设置好。这样 SSR 设置任何端口都可以使用。并且后续不需要再来防火墙规则做设置了。缺点是 所有端口开放。当然也会有一些危险。