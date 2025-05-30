import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import dictionary from '@/views/modules/dictionary/list'
        import forum from '@/views/modules/forum/list'
        import gonggao from '@/views/modules/gonggao/list'
        import shuji from '@/views/modules/shuji/list'
        import shujiCollection from '@/views/modules/shujiCollection/list'
        import shujiLiuyan from '@/views/modules/shujiLiuyan/list'
        import yonghu from '@/views/modules/yonghu/list'
        import zhangjie from '@/views/modules/zhangjie/list'
        import zuozhe from '@/views/modules/zuozhe/list'
        import config from '@/views/modules/config/list'
        import dictionaryForum from '@/views/modules/dictionaryForum/list'
        import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
        import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
        import dictionaryShuji from '@/views/modules/dictionaryShuji/list'
        import dictionaryShujiCollection from '@/views/modules/dictionaryShujiCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型名称',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型名称',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShuji',
        name: '小说类型名称',
        component: dictionaryShuji
    }
    ,{
        path: '/dictionaryShujiCollection',
        name: '收藏表类型',
        component: dictionaryShujiCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shuji',
        name: '小说',
        component: shuji
      }
    ,{
        path: '/shujiCollection',
        name: '小说收藏',
        component: shujiCollection
      }
    ,{
        path: '/shujiLiuyan',
        name: '小说留言',
        component: shujiLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhangjie',
        name: '章节',
        component: zhangjie
      }
    ,{
        path: '/zuozhe',
        name: '作者',
        component: zuozhe
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
