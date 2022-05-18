"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[473],{3905:function(e,n,r){r.d(n,{Zo:function(){return o},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},o=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||c;return r?t.createElement(g,l(l({ref:n},o),{},{components:r})):t.createElement(g,l({ref:n},o))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<c;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8129:function(e,n,r){r.r(n),r.d(n,{default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i}});var t=r(7462),a=r(3366),c=(r(7294),r(3905)),l=["components"],s={},p={unversionedId:"advance/rpc-call",id:"advance/rpc-call",isDocsHomePage:!1,title:"rpc\u7f16\u5199\u4e0e\u8c03\u7528",description:"\u5728\u4e00\u4e2a\u5927\u7684\u7cfb\u7edf\u4e2d\uff0c\u591a\u4e2a\u5b50\u7cfb\u7edf\uff08\u670d\u52a1\uff09\u95f4\u5fc5\u7136\u5b58\u5728\u6570\u636e\u4f20\u9012\uff0c\u6709\u6570\u636e\u4f20\u9012\u5c31\u9700\u8981\u901a\u4fe1\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u6700\u7b80\u5355\u7684http\u8fdb\u884c\u901a\u4fe1\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9rpc\u670d\u52a1\u8fdb\u884c\u901a\u4fe1\uff0c",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/advance/rpc-call.md",sourceDirName:"advance",slug:"/advance/rpc-call",permalink:"/cn/docs/advance/rpc-call",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/advance/rpc-call.md",version:"current",lastUpdatedAt:1652859644,formattedLastUpdatedAt:"5/18/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u4e2d\u95f4\u4ef6\u4f7f\u7528",permalink:"/cn/docs/advance/middleware"},next:{title:"\u9519\u8bef\u5904\u7406",permalink:"/cn/docs/advance/error-handle"}},i=[{value:"\u573a\u666f",id:"\u573a\u666f",children:[]},{value:"rpc\u670d\u52a1\u7f16\u5199",id:"rpc\u670d\u52a1\u7f16\u5199",children:[]},{value:"\u4f7f\u7528rpc",id:"\u4f7f\u7528rpc",children:[]},{value:"\u542f\u52a8\u5e76\u9a8c\u8bc1\u670d\u52a1",id:"\u542f\u52a8\u5e76\u9a8c\u8bc1\u670d\u52a1",children:[]}],o={toc:i};function u(e){var n=e.components,r=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5728\u4e00\u4e2a\u5927\u7684\u7cfb\u7edf\u4e2d\uff0c\u591a\u4e2a\u5b50\u7cfb\u7edf\uff08\u670d\u52a1\uff09\u95f4\u5fc5\u7136\u5b58\u5728\u6570\u636e\u4f20\u9012\uff0c\u6709\u6570\u636e\u4f20\u9012\u5c31\u9700\u8981\u901a\u4fe1\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u6700\u7b80\u5355\u7684http\u8fdb\u884c\u901a\u4fe1\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9rpc\u670d\u52a1\u8fdb\u884c\u901a\u4fe1\uff0c\n\u5728go-zero\uff0c\u6211\u4eec\u4f7f\u7528zrpc\u6765\u8fdb\u884c\u670d\u52a1\u95f4\u7684\u901a\u4fe1\uff0czrpc\u662f\u57fa\u4e8egrpc\u3002"),(0,c.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,c.kt)("p",null,"\u5728\u524d\u9762\u6211\u4eec\u5b8c\u5584\u4e86\u5bf9\u7528\u6237\u8fdb\u884c\u767b\u5f55\uff0c\u7528\u6237\u67e5\u8be2\u56fe\u4e66\u7b49\u63a5\u53e3\u534f\u8bae\uff0c\u4f46\u662f\u7528\u6237\u5728\u67e5\u8be2\u56fe\u4e66\u65f6\u6ca1\u6709\u505a\u4efb\u4f55\u7528\u6237\u6821\u9a8c\uff0c\u5982\u679c\u5f53\u524d\u7528\u6237\u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u7528\u6237\u5219\u6211\u4eec\u4e0d\u5141\u8bb8\u5176\u67e5\u9605\u56fe\u4e66\u4fe1\u606f\uff0c\n\u4ece\u4e0a\u6587\u4fe1\u606f\u6211\u4eec\u53ef\u4ee5\u5f97\u77e5\uff0c\u9700\u8981user\u670d\u52a1\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5\u6765\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u4f9bsearch\u670d\u52a1\u4f7f\u7528\uff0c\u56e0\u6b64\u6211\u4eec\u5c31\u9700\u8981\u521b\u5efa\u4e00\u4e2auser rpc\u670d\u52a1\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2agetUser\u65b9\u6cd5\u3002"),(0,c.kt)("h2",{id:"rpc\u670d\u52a1\u7f16\u5199"},"rpc\u670d\u52a1\u7f16\u5199"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u7f16\u8bd1proto\u6587\u4ef6")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/rpc/user.proto\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\n\noption go_package = "./user";\n\nmessage IdReq{\n  int64 id = 1;\n}\n\nmessage UserInfoReply{\n  int64 id = 1;\n  string name = 2;\n  string number = 3;\n  string gender = 4;\n}\n\nservice user {\n  rpc getUser(IdReq) returns(UserInfoReply);\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u751f\u6210rpc\u670d\u52a1\u4ee3\u7801")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/rpc\n$ goctl rpc protoc user.proto --go_out=./types --go-grpc_out=./types --zrpc_out=.\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u5982\u679c\u5b89\u88c5\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")," \u7248\u5927\u4e8e1.4.0, proto\u6587\u4ef6\u5efa\u8bae\u52a0\u4e0a",(0,c.kt)("inlineCode",{parentName:"p"},"go_package")))),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u914d\u7f6e\u53ca\u5b8c\u5584yaml\u914d\u7f6e\u9879")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/rpc/internal/config/config.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    zrpc.RpcServerConf\n    Mysql struct {\n        DataSource string\n    }\n    CacheRedis cache.CacheConf\n}\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/user/rpc/etc/user.yaml\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yml"},"Name: user.rpc\nListenOn: 127.0.0.1:8080\nEtcd:\n  Hosts:\n    - $etcdHost\n  Key: user.rpc\nMysql:\n  DataSource: $user:$password@tcp($url)/$db?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai\nCacheRedis:\n  - Host: $host\n    Pass: $pass\n    Type: node  \n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"$user: mysql\u6570\u636e\u5e93user"),(0,c.kt)("p",{parentName:"div"},"$password: mysql\u6570\u636e\u5e93\u5bc6\u7801"),(0,c.kt)("p",{parentName:"div"},"$url: mysql\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740"),(0,c.kt)("p",{parentName:"div"},"$db: mysql\u6570\u636e\u5e93db\u540d\u79f0\uff0c\u5373user\u8868\u6240\u5728database"),(0,c.kt)("p",{parentName:"div"},"$host: redis\u8fde\u63a5\u5730\u5740 \u683c\u5f0f\uff1aip:port\uff0c\u5982:127.0.0.1:6379"),(0,c.kt)("p",{parentName:"div"},"$pass: redis\u5bc6\u7801"),(0,c.kt)("p",{parentName:"div"},"$etcdHost: etcd\u8fde\u63a5\u5730\u5740\uff0c\u683c\u5f0f\uff1aip:port\uff0c\u5982\uff1a 127.0.0.1:2379"),(0,c.kt)("p",{parentName:"div"},"\u66f4\u591a\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,c.kt)("a",{parentName:"p",href:"../configuration/rpc"},"rpc\u914d\u7f6e\u4ecb\u7ecd")))),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u8d44\u6e90\u4f9d\u8d56")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/rpc/internal/svc/servicecontext.go  \n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config    config.Config\n    UserModel model.UserModel\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    conn := sqlx.NewMysql(c.Mysql.DataSource)\n    return &ServiceContext{\n        Config: c,\n        UserModel: model.NewUserModel(conn, c.CacheRedis),\n    }\n}\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0rpc\u903b\u8f91")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ service/user/rpc/internal/logic/getuserlogic.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"func (l *GetUserLogic) GetUser(in *user.IdReq) (*user.UserInfoReply, error) {\n    one, err := l.svcCtx.UserModel.FindOne(in.Id)\n    if err != nil {\n        return nil, err\n    }\n    \n    return &user.UserInfoReply{\n        Id:     one.Id,\n        Name:   one.Name,\n        Number: one.Number,\n        Gender: one.Gender,\n    }, nil\n}\n")),(0,c.kt)("h2",{id:"\u4f7f\u7528rpc"},"\u4f7f\u7528rpc"),(0,c.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5728search\u670d\u52a1\u4e2d\u8c03\u7528user rpc"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0UserRpc\u914d\u7f6e\u53cayaml\u914d\u7f6e\u9879")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/config/config.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    rest.RestConf\n    Auth struct {\n        AccessSecret string\n        AccessExpire int64\n    }\n    UserRpc zrpc.RpcClientConf\n}\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/etc/search-api.yaml\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: search-api\nHost: 0.0.0.0\nPort: 8889\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\nUserRpc:\n  Etcd:\n    Hosts:\n      - $etcdHost\n    Key: user.rpc\n")),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"$AccessSecret\uff1a\u8fd9\u4e2a\u503c\u5fc5\u987b\u8981\u548cuser api\u4e2d\u58f0\u660e\u7684\u4e00\u81f4\u3002"),(0,c.kt)("p",{parentName:"div"},"$AccessExpire: \u6709\u6548\u671f"),(0,c.kt)("p",{parentName:"div"},"$etcdHost\uff1a etcd\u8fde\u63a5\u5730\u5740"),(0,c.kt)("p",{parentName:"div"},"etcd\u4e2d\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"Key"),"\u5fc5\u987b\u8981\u548cuser rpc\u670d\u52a1\u914d\u7f6e\u4e2dKey\u4e00\u81f4"))),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4f9d\u8d56")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"  $ vim service/search/api/internal/svc/servicecontext.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config  config.Config\n    Example rest.Middleware\n    UserRpc user.User\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config:  c,\n        Example: middleware.NewExampleMiddleware().Handle,\n        UserRpc: user.NewUser(zrpc.MustNewClient(c.UserRpc)),\n    }\n}\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8865\u5145\u903b\u8f91")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/search/api/internal/logic/searchlogic.go\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'func (l *SearchLogic) Search(req types.SearchReq) (*types.SearchReply, error) {\n    userIdNumber := json.Number(fmt.Sprintf("%v", l.ctx.Value("userId")))\n    logx.Infof("userId: %s", userIdNumber)\n    userId, err := userIdNumber.Int64()\n    if err != nil {\n        return nil, err\n    }\n    \n    // \u4f7f\u7528user rpc\n    _, err = l.svcCtx.UserRpc.GetUser(l.ctx, &user.IdReq{\n        Id: userId,\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.SearchReply{\n        Name:  req.Name,\n        Count: 100,\n    }, nil\n}\n')),(0,c.kt)("h2",{id:"\u542f\u52a8\u5e76\u9a8c\u8bc1\u670d\u52a1"},"\u542f\u52a8\u5e76\u9a8c\u8bc1\u670d\u52a1"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u542f\u52a8etcd\u3001redis\u3001mysql"),(0,c.kt)("li",{parentName:"ul"},"\u542f\u52a8user rpc",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/rpc\n$ go run user.go -f etc/user.yaml\n")),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-text"},"Starting rpc server at 127.0.0.1:8080...\n"))),(0,c.kt)("li",{parentName:"ul"},"\u542f\u52a8search api")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/search/api\n$ go run search.go -f etc/search-api.yaml\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u670d\u52a1",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0' \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80'\n")),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent\n-Type: application/json\nDate: Tue, 09 Feb 2021 06:05:52 GMT\nContent-Length: 32\n\n{"name":"\u897f\u6e38\u8bb0","count":100}\n')))))}u.isMDXComponent=!0}}]);