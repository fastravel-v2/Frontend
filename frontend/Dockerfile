# Nginx 이미지를 기반으로 한다.
FROM nginx:20

# /usr/share/nginx/html 디렉토리의 기존 파일을 삭제한다.
RUN rm -rf /usr/share/nginx/html/*

# dist 디렉토리의 내용을 /usr/share/nginx/html로 복사한다.
# 이 디렉토리는 Nginx가 정적 파일을 서빙하는 기본 디렉토리이다.
COPY dist/ /usr/share/nginx/html/

# Nginx 설정 파일을 복사한다. (아래에서 설명)
COPY nginx.conf /etc/nginx/nginx.conf

# 80 포트를 열어 웹 애플리케이션에 접근할 수 있도록 한다.
EXPOSE 80

# Nginx 서버를 실행한다.
CMD ["nginx", "-g", "daemon off;"]
