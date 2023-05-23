FROM nginx:latest

# 将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY source/dist/ /usr/share/nginx/html/

# 将项目根目录下nginx.conf文件复制到镜像中 /etc/nginx/conf.d/ 目录下
COPY nginx.conf /etc/nginx/conf.d/default.conf

