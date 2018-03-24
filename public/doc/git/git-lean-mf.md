# git lean mf

## git  init
## git add read.txt
## git status
## git commit -m "edit redame.txt"
## git log --pretty=oneline
## git --hard HEAD^^
## git --hard HEAD 6d2007
## git reflog
## git diff HEAD -- readme.txt #查看工作区文件变化

$ ssh -T git@github.com
重写了一次
$ git config --global user.name "your name"
$ git config --global user.email "your_email@youremail.com"
$ git remote add origin git@github.com:codecoke/learngit.git

https://github.com/codecoke/htmltools.git

git remote add origin git@github.com:codecoke/htmltools.git

就是在上面（Create a new repo）创建远程仓库的时候，如果你勾选了Initialize this repository with a README（就是创建仓库的时候自动给你创建一个README文件），那么到了你将本地仓库内容推送到远程仓库（git push -u origin master）的时候就会报一个failed to push some refs to  git@github.com:michaelliao/learngit.git。 这是由于你新创建的那个仓库里面的README文件不在本地仓库目录中，这时我们可以通过以下命令将内容合并：
$ git pull --rebase origin master  这时候就不会报错了。


上面是将github仓库文件合并到本地版本库，并没有提交。接下来只需要把本地文件提交到远程库就行了，代码：$ git push origin master


方法有三种：
1.修改命令
git remote set-url origin [url]
例如：git remote set-url origin gitlab@gitlab.chumob.com:php/hasoffer.git

2.先删后加

git remote rm origin
git remote add origin [url]
3.直接修改config文件

git diff 是工作区和暂存区的对比
git diff -- cached 是暂存区和分支的对比
git diff HEAD -- readme.txt  工作区和分支的对比

git checkeout -b 'dev'

$ git branch dev
$ git checkout dev

git add * && git commit -m "comm banch dev"

git checkout master
git merge dev
git branch -d dev

git fetch origin master
git log -p master ..orgin/master
git merge origin/master

git pull

### 自定义命令

$ git config --global alias.st status