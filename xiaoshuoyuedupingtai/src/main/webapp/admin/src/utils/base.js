const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoshuoyuedupingtai/",
            name: "xiaoshuoyuedupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoshuoyuedupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小说阅读平台"
        } 
    }
}
export default base
