import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Menu } from 'antd';
  import React, { useState } from 'react';
  import { useNavigate, useLocation } from 'react-router-dom';
 
  type MenuItem = Required<MenuProps>['items'][number];
  // // 定义数组中的类型
  // function getItem(
  //   label: React.ReactNode,
  //   key: React.Key,
  //   icon?: React.ReactNode,
  //   children?: MenuItem[],
  // ): MenuItem {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //   } as MenuItem;
  // }
  
  // const items: MenuItem[] = [
  //   getItem('Option 1', '/page1', <PieChartOutlined />),
  //   getItem('Option 2', '/page2', <DesktopOutlined />),
  //   getItem('User', 'page3', <UserOutlined />, [
  //     getItem('Tom', '3'),
  //     getItem('Bill', '4'),
  //     getItem('Alex', '5'),
  //   ]),
  //   getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  //   getItem('Files', '9', <FileOutlined />),
  // ];
  // 将上诉数组对象更改为更加直观的写法
  const items: MenuItem[] = [
    {
      label: 'Option 1',
       key: '/page1',
      icon: <PieChartOutlined />,
    },
    {
      label: 'Option 2',
       key: '/page2',
      icon: <DesktopOutlined />,
    },
    {
      label: 'Option 3',
      key: 'page3',
     icon: <UserOutlined />,
     children:[
       {
         label: 'Option 301',
         key: '/page3/page301'
       },
       {
        label: 'Option 302',
        key: '/page3/page302'
      },
      {
        label: 'Option 303',
        key: '/page3/page303'
      }
     ]
    },
    {
      label: 'Option 4',
      key: 'page4',
     icon: <TeamOutlined />,
     children:[
       {
         label: 'Option 401',
         key: '/page4/page401'
       },
       {
        label: 'Option 402',
        key: '/page4/page402'
      }
     ]
    },
    {
      label: 'Option 5',
       key: '/page5',
      icon: <FileOutlined />,
    }
  ]

   
  const View: React.FC = () => {
    // 获取当前网页的路由

    const currentRoute = useLocation();
    const navigateTo = useNavigate()
    // menu菜单跳转路由方法
    const menuClick = (e:{key:string}) => {
        console.log(e.key);
        navigateTo(e.key)
    } 
  // 该数组决定，对应的子组件在默认情况下是否展开
  // 如何解决？但是刷新时会使得弹出的组件收回
  // 通过currentRoute.pathname获取当前的网页地址，因为需要展开的统统是上一组件
  // 解决方案：将currentRoute.pathname与chilren中的每一项子组件的key进行比较
  // 如果相同就展开他的父组件
  let firstOpenKey:string ="";
  // 在这里进行对比 find
  function findKey(obj:{key:string}) {
    return obj.key === currentRoute.pathname
  }

  // 多对比的是多个children
  for(let i = 0; i < items.length; i++) {
  // 判断找不到
      if(items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
           firstOpenKey = items[i]!.key as string;
           break;  
      }
  }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    // 展开该子组件，关闭其他已经展开子组件的方法
    const handleOpenChange = (keys:string[]) => {
      // 为什么只展开key数组的最后一项?
      // 因为在key数组中，被鼠标最后选择的组件在数组中最后一位
      setOpenKeys([keys[keys.length - 1]])
      console.log(keys);
    }

    return (
          <Menu 
            theme="dark" 
            // 每次刷新网页，都跳转到刷新之前的网页
            // 但是刷新时会使得弹出的组件收回
            // 如何解决？

            defaultSelectedKeys={[currentRoute.pathname]} 
            // in
            mode="inline" items={items} 
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
             />
    );
  };
  
  export default View;