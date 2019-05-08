(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{362:function(s,n,e){"use strict";e.r(n);var a=e(3),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("本机以centOS为例：")]),s._v(" "),e("p",[s._v("安装依赖，一条命令行全部都可以搞定：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel lrzsz lrzsz-devel p7zip p7zip-devel net-tools net-tools-devel "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" vim-devel libaio libaio-devel "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("hr"),s._v(" "),e("p",[s._v("把Linux的idea代理软件上传到服务器（我把文件名改为ideaServer64）：\n输入rz会自动弹出选择文件窗口，选择好文件之后点确认就可以了。")]),s._v(" "),e("p",[s._v("上传之后命令行会自动跳到下一行，但是没有任何上传完成提示，可以查看上传目录下是否有该文件：\nll")]),s._v(" "),e("p",[s._v("接下来 需要把它运行起来，先加一个可执行权限：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ideaServer64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("开始运行，输入路径加文件名加命令，我把文件上传到/usr/local/src/目录下的：\n/usr/local/src/ideaServer64 -p 1027 -prolongationPeriod 999999999999")]),s._v(" "),e("p",[s._v("默认运行会出现运行的信息：\n包括制作代理软件的作者信息，和IP端口信息，注意要记住端口号，有作用。")]),s._v(" "),e("p",[s._v("按Ctrl加c退出当前运行。")]),s._v(" "),e("p",[s._v("如果要后台运行，请使用nohup命令：\n先切换到代理软件的目录下：cd /usr/local/src/\n再输入：nohup ./ideaServer64 -p 1027 -prolongationPeriod 999999999999 2>&1 &\n之后会有一个进程号，可以用jobs -l命令查看。")]),s._v(" "),e("p",[s._v("可以通过supervisor实现守护进程，自启动。命令如下：\n编辑supervisord.conf文件：\nvi /etc/supervisord.conf\n输入i:")]),s._v(" "),e("p",[s._v("#添加以下内容\n[program:idea-server]\ncommand = /usr/local/src/ideaServer64 -p 1027 -u 域名（不带前缀） -prolongationPeriod 999999999 -l 127.0.0.1\nautostart=true\nautorestart=true\nstartsecs=3\n按Esc按键，再输入:wq保存并关闭（:q退出，:wq保存并关闭，:q!撤销编辑，:!q强制退出）")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("如果你安装了NGINX，操作如下,如果没有安装请往下看：\n接下来更改NGINX的nginx.conf配置信息：\n输入：\nvi /usr/local/nginx/nginx.conf\n在最后一个}前加入以下代码：")]),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("\tserver{\n\t\tlisten 80;\n\t\t#自己的域名，没有的话就是自己的公网ip，域名一定要解析到这台服务器上\n\t\tserver_name 域名或者ip;\n\t\troot /home/www/;\n\n\t\tlocation / {\n\t\t\t#注意这里的端口一定要跟之前运行代理软件的端口一样\n\t\t\tproxy_pass http://127.0.0.1:1027;\n\t\t\tproxy_redirect off;\n\t\t\tproxy_set_header Host $host;\n\t\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\t}\n\t\taccess_log off; #access_log end\n\t\terror_log /dev/null; #error_log end\n\t}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("按Esc按键，再输入:wq保存并关闭。\n重启nginx：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/usr/local/nginx/nginx -s reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("hr"),s._v(" "),e("p",[s._v("如果你没有安装NGINX，操作如下：\n源码编译安装，继续往下看有更简单的方式！！！（yum安装）\nNginx 一般有两个版本，分别是稳定版和开发版，您可以根据您的目的来选择这两个版本的其中一个，\n下面是把 Nginx 安装到 /usr/local/nginx 目录下的详细步骤：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/src\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.13.8.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.13.8.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" nginx-1.13.8\n\n./configure --sbin-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/nginx \\\n--conf-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/nginx.conf \\\n--pid-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/nginx.pid \\\n--with-http_ssl_module \\\n--with-pcre"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/pcre-8.39 \\\n--with-zlib"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/zlib-1.2.11 \\\n--with-openssl"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/openssl-1.1.0g\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("安装成功后 /usr/local/nginx 目录下如下\nfastcgi.conf            koi-win             nginx.conf.default\nfastcgi.conf.default    logs                scgi_params\nfastcgi_params          mime.types          scgi_params.default\nfastcgi_params.default  mime.types.default  uwsgi_params\nhtml                    nginx               uwsgi_params.default\nkoi-utf                 nginx.conf          win-utf")]),s._v(" "),e("p",[s._v("6.启动\n确保系统的 80 端口没被其他程序占用，运行命令来启动Nginx：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/usr/local/nginx/nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看占用端口：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果出现：-bash: netstat: command not found\n可能是CentOS 7的最小化安装少了一些工具,比如 ifconfig 及 netstat")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("hr"),s._v(" "),e("p",[s._v("或者用yum安装：\n下载并安装nginx")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("刚安装的Nginx不会自行启动。运行Nginx:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("CentOS 7 开机启动Nginx：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" nginx.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("网站文件存放默认目录：\n/usr/share/nginx/html\n网站默认站点配置：\n/etc/nginx/conf.d/default.conf\n自定义Nginx站点配置文件存放目录：\n/etc/nginx/conf.d/\nNginx全局配置：\n/etc/nginx/nginx.conf")]),s._v(" "),e("p",[s._v("#config: /etc/nginx/nginx.conf 安装目录\n#config: /etc/sysconfig/nginx\n#pidfile: /var/run/nginx.pid\n#log日志文件在var/log/nginx")]),s._v(" "),e("p",[s._v("项目文件存放在/usr/share/nginx/html/")]),s._v(" "),e("p",[s._v("启动直接输入nginx")]),s._v(" "),e("p",[s._v("关闭nginx进程,强制停止Nginx:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" -9 nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其他的停止nginx 方式：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主进程号 >>>>从容停止Nginx ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -QUIT\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主进程号 >>>>快速停止Nginx ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -TERM\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("打开浏览器访问此机器的 IP，如果浏览器出现 Welcome to nginx! 则表示 Nginx 已经安装并运行成功。")]),s._v(" "),e("p",[s._v("ssh遇到port 22:No route to host问题的解决方法\n把防火墙端口放开！！！")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v('启动Nginx出现这个错误：\nnginx: [error] open() "/usr/local/var/run/nginx.pid" failed (2: No such file or directory)\n解决方法：找到你的nginx.conf的文件夹目录，然后运行这个命令：')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("nginx -c /etc/nginx/nginx.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再重启就可以了。")]),s._v(" "),e("p",[s._v("Linux每个应用运行都会产生一个进程，那么我们就可以通过查看Nginx进程是否存在来判断它是否启动。\n用ps -ef列出进程列表，然后通过grep过滤。\n如： ps -ef | grep nginx 就可以看到Nginx进程是否存在了。")]),s._v(" "),e("p",[s._v("第二种方法：直接查看进程id")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -C nginx -o pid\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("第三种方法：使用netstat命令\n如果我们的Nginx运行在80端口，那么就可以通过netstat -anp | grep :80命令来判断Nginx是否启动。")]),s._v(" "),e("p",[s._v("第四种方法：使用lsof命令\nlsof -i:80 也可以查到80端口进程是否有进程在运行。")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("rpm 安装 Php7 相应的 yum源：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("安装php7.0：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php70w\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装php扩展：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php70w-mysql.x86_64 php70w-gd.x86_64 php70w-ldap.x86_64 php70w-mbstring.x86_64 php70w-mcrypt.x86_64\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxml2 libxml2-devel openssl openssl-devel "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bzip2")]),s._v(" bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel libmcrypt libmcrypt-devel readline readline-devel libxslt libxslt-devel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("安装PHP FPM：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php70w-fpm php70w-opcache\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("验证安装\n终端命令：php -v，显示当前PHP版本")]),s._v(" "),e("p",[s._v("修改Nginx配置文件：")]),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("\tserver {\n\t    listen       80;\n\t    server_name  www.jostin.top;\n\t    root         /home/www;\n\t     \n\t    location / {\n\t        index index.php;\n\t        try_files $uri $uri/ /index.php?$args;\n\t    }\n\t \n\t    rewrite /wp-admin$ $scheme://$host$uri/ permanent;\n\t \n\t    location ~*^.+\\.(ogg|ogv|svg|svgz|eot|otf|woff|mp4|ttf|rss|atom|jpg|jpeg|gif|png|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf)$ {\n\t                access_log off; log_not_found off; expires max;\n\t    }\n\t \n\t    location ~ \\.php$ {\n\t        try_files $uri =404;\n\t        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n\t        fastcgi_pass 127.0.0.1:9000;\n\t        fastcgi_index index.php;\n\t        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n\t        include fastcgi_params;\n\t    }\n\t}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("修改php-fpm配置文件：\nphp-fpm配置文件位置：（/etc/php-fpm.d/www.conf）\n指定用户和组，必须要指定root以外的：\nuser =www\ngroup=www")]),s._v(" "),e("p",[s._v("放入测试文件：\ncd nginx指定的root目录\n在index.php中输入：\n<?php phpinfo(); ?>")]),s._v(" "),e("p",[s._v("启动PHP-FPM：\nsystemctl start php-fpm.service\n查看启动状态：\nsystemctl status php-fpm.service\n设置开机自启动\nsystemctl enable php-fpm.service")]),s._v(" "),e("p",[s._v("报错说www 用户不存在或者无法启动：\n[26-Feb-2015 15:57:38] ERROR: [pool www] cannot get uid for user 'www'\n[26-Feb-2015 15:57:38] ERROR: FPM initialization failed\n那我们新建www 用户组：\ngroupadd www\nuseradd -g www www")]),s._v(" "),e("p",[s._v('php7连接mysql测试代码：\n<?php\n$mysqli = new mysqli("localhost", "root", "123456");\nif(!$mysqli)  {\necho"database error";\n}else{\necho"php env successful";\n}\n$mysqli->close();\n?>')]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("VPS搭建Wordpress更新/安装插件时需要输入FTP信息的解决方法:")]),s._v(" "),e("p",[s._v("解决方法就是利用chown语句将网站文件夹的所有者设置给服务器：")]),s._v(" "),e("p",[s._v("如果你是LNMP的用户，请执行下面语句：")]),s._v(" "),e("p",[s._v("改变目录的组和用户\nchown nginx.nginx 文件夹名")]),s._v(" "),e("p",[s._v("修改目录下所有文件所属\nchown -R www 网站目录\n这样，你的Wordpress在更新或安装东东的时候就不会再提示你填入什么FTP信息了~")]),s._v(" "),e("p",[s._v("文件夹授权（7权限-读写执行）\nchmod -R 777 文件夹名\n参数 -R 表示递归，文件夹名及其之内的所有文件夹、文件都被改变了权限。")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("http{\n\n    gzip on;\n    client_max_body_size 50m; #缓冲区代理缓冲用户端请求的最大字节数,可以理解为保存到本地再传给用户\n    client_body_buffer_size 256k;\n    client_header_timeout 3m;\n    client_body_timeout 3m;\n    send_timeout 3m;\n    proxy_connect_timeout 300s; #nginx跟后端服务器连接超时时间(代理连接超时)\n    proxy_read_timeout 300s; #连接成功后，后端服务器响应时间(代理接收超时)\n    proxy_send_timeout 300s;\n    proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小\n    proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置\n    proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）\n    proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传递请求，而不缓冲到磁盘\n    proxy_ignore_client_abort on; #不允许代理端主动关闭连接\n    \n    \n }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("NGINX用ip代理其他NGINX服务器")]),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("\tupstream zml{#如果想对后端机器做负载均衡\n\t#被代理IP\n            server 193.112.13.35:8085;\n        }\n\n\tserver {\n\t    listen       80;\n\t    #域名\n\t    server_name  0tip.top www.0tip.top;\n\t    \n            location / {\n            \tproxy_pass http://193.112.13.35:8085;#如果负载均衡就填upstream的名称\n                proxy_redirect off;\n                proxy_set_header Host $host;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t        \n            }\n\n\t}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("proxy_set_header Host $host:$proxy_port;服务器名可以和后端服务器的端口一起传送：\n$host代表转发服务器，$host就是nginx代理服务器。\n$proxy_port代表转发服务器请求后端服务器的端口，也就是80，将请求的报文首部重新封装，将proxy_host封装为请求的host\nproxy_set_header X-Real-IP $remote_addr:\n将$remote_addr的值放进变量X-Real-IP中，此变量名可变，$remote_addr的值为客户端的ip\n1、proxy_set_header X-Forwarded-For $remote_addr;\n后端服务器成功的显示了真实客户端的ip.\n2、proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;")]),s._v(" "),e("p",[s._v('1和2在只有一个代理服务器的转发的情况下，两者的效果貌似差不多，都可以真实的显示出客户端原始ip\n但是区别在于：\n$proxy_add_x_forwarded_for变量包含客户端请求头中的"X-Forwarded-For"，与$remote_addr两部分，他们之间用逗号分开。\n举个例子，有一个web应用，在它之前通过了两个nginx转发，www.linuxidc.com 即用户访问该web通过两台nginx。\n在第一台nginx中,使用\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n现在的$proxy_add_x_forwarded_for变量的"X-Forwarded-For"部分是空的，所以只有$remote_addr，而$remote_addr的值是用户的ip，于是赋值以后，X-Forwarded-For变量的值就是用户的真实的ip地址了。\n到了第二台nginx，使用\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;')]),s._v(" "),e("p",[s._v("现在的$proxy_add_x_forwarded_for变量，X-Forwarded-For部分包含的是用户的真实ip，$remote_addr部分的值是上一台nginx的ip地址，于是通过这个赋值以后现在的X-Forwarded-For的值就变成了“用户的真实ip，第一台nginx的ip”，这样就清楚了吧。")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("\tserver {\n\t    listen       80;\n\t    #公网IP,可以在ip后面加端口，要与listen端口号一致\n\t    server_name  公网IP;\n\t    #网站项目地址\n\t    root         /home/www/jostin/;\n\n\t    location / {\n\t        index index.php index.html;\n\t    }\n\t}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h1",{attrs:{id:"返回顶部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回顶部","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"#readme"}},[s._v("返回顶部")])])])},[],!1,null,null,null);n.default=t.exports}}]);