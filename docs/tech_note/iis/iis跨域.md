# iis 跨域

打开IIS，找到“HTTP响应标头”点进去，

在右侧可以看到添加，然后添加如下标头即可

Access-Control-Allow-Headers：Content-Type, api_key, Authorization

Access-Control-Allow-Origin：*