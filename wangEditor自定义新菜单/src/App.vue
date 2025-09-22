<template>
  <div style="display: flex; align-items: center">
    <div style="border-right:1px solid #ddd; padding-right: 15px; margin-right: 15px;">
      <Toolbar
        v-if="editorRef1"
        :editor="editorRef1"/>
      <Editor
        v-model="content"
        style="height: 80vh"
        :default-config="editorConfig"
        @on-created="editor => onEditorCreated(1, editor)"/>
    </div>
    <div>
      <Toolbar
        v-if="editorRef2"
        :editor="editorRef2"/>
      <Editor
        v-model="content"
        style="height: 80vh"
        :default-config="editorConfig"
        @on-created="editor => onEditorCreated(2, editor)"/>
    </div>
  </div>
</template>

<script>

</script>

<script setup>
  import $ from 'jquery'
  import { createApp, ref } from 'vue'
  import { uid } from 'uid'

  import { Boot } from '@wangeditor/editor'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import '@wangeditor/editor/dist/css/style.css' // 引入 css

  import Component from './components/Component.vue'

  // 文档：https://www.wangeditor.com/v5/development.html
  Boot.registerMenu({
    key: '按钮形式',
    factory () {
      return new class {
        // TS 语法
        // class MyButtonMenu {                       // JS 语法

        constructor () {
          this.title = '按钮形式' // 自定义菜单标题
          // this.iconSvg = '<svg>...</svg>' // 可选
          this.tag = 'button'
        }

        // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
        getValue (editor) {
          // TS 语法
          // getValue(editor) {                              // JS 语法
          return ' hello '
        }

        // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
        isActive (editor) {
          // TS 语法
          // isActive(editor) {                    // JS 语法
          return false
        }

        // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
        isDisabled (editor) {
          // TS 语法
          // isDisabled(editor) {                     // JS 语法
          return false
        }

        // 点击菜单时触发的函数
        exec (editor) {
          // TS 语法
          // exec(editor, value) {                              // JS 语法
          if (this.isDisabled(editor)) return
          editor.insertText('123213') // value 即 this.value(editor) 的返回值
        }
      }
    }
  })
  Boot.registerMenu({
    key: '选择形式',
    factory () {
      return new class {
        // TS 语法
        // class MySelectMenu {                       // JS 语法

        constructor () {
          this.title = '选择形式'
          this.tag = 'select'
          this.width = 60
        }

        // 下拉框的选项
        getOptions (editor) {
          // TS 语法
          // getOptions(editor) {            // JS 语法
          const options = [
            {
              value: 'beijing',
              text: '北京',
              styleForRenderMenuList: { 'font-size': '32px', 'font-weight': 'bold' }
            },
            { value: 'shanghai', text: '上海', selected: true },
            { value: 'shenzhen', text: '深圳' }
          ]
          return options
        }

        // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
        isActive (editor) {
          // TS 语法
          // isActive(editor) {                      // JS 语法
          return false
        }

        // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
        getValue (editor) {
          // TS 语法
          // getValue(editor) {                               // JS 语法
          return 'shanghai' // 匹配 options 其中一个 value
        }

        // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
        isDisabled (editor) {
          // TS 语法
          // isDisabled(editor) {                     // JS 语法
          return false
        }

        // 点击菜单时触发的函数
        exec (editor, value) {
          // TS 语法
          // exec(editor, value) {                              // JS 语法
          // Select menu ，这个函数不用写，空着即可
        }
      }
    }
  })
  Boot.registerMenu({
    key: '弹框形式（bar不消失）',
    factory () {
      return new class {
        // TS 语法
        // class MyDropPanelMenu {                           // JS 语法

        constructor () {
          this.title = '弹框形式（bar不消失）'
          // this.iconSvg = '<svg >...</svg>'
          this.tag = 'button'
          this.showDropPanel = true
        }

        // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
        isActive (editor) {
          // TS 语法
          // isActive(editor) {                      // JS 语法
          return false
        }

        // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
        getValue (editor) {
          // TS 语法
          // getValue(editor) {                               // JS 语法
          return ''
        }

        // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
        isDisabled (editor) {
          // TS 语法
          // isDisabled(editor) {                     // JS 语法
          return false
        }

        // 点击菜单时触发的函数
        exec (editor, value) {
          // TS 语法
          // exec(editor, value) {                              // JS 语法
          // DropPanel menu ，这个函数不用写，空着即可
        }

        // 定义 DropPanel 内部的 DOM Element
        getPanelContentElem (editor) {
          // TS 语法
          // getPanelContentElem(editor) {                        // JS 语法
          const $list = $(`<ul>
            <li>北京</li> <li>上海</li> <li>深圳</li>
          </ul>`)

          $list.on('click', 'li', function () {
            editor.insertText(this.innerHTML)
            editor.insertText(' ')
          })

          return $list[ 0 ] // 返回 DOM Element 类型

          // PS：也可以把 $list 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
        }
      }
    }
  })

  // *这里面有用 vue 组件实现弹框的内容的例子
  Boot.registerMenu({
    key: '弹框形式（bar消失）',
    factory () {
      return new class {
        constructor () {
          this.title = '弹框形式（bar消失）'
          this.tag = 'button'
          this.showModal = true
          this.modalWidth = 500
        }

        // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
        getValue (editor) {
          // this.$root.$refs.myModal.init(editor, this)
          return false
        }

        // 弹出框 modal 的定位：1. 返回某一个 SlateNode； 2. 返回 null （根据当前选区自动定位）
        getModalPositionNode (editor) {
          // TS 语法
          // getModalPositionNode(editor) {                             // JS 语法
          return null // modal 依据选区定位
        }

        // 定义 modal 内部的 DOM Element
        getModalContentElem (editor) {
          const contentEl = document.createElement('div')

          contentEl.className += 'menu1'

          const app = createApp(Component, {
            /**
             *  可以在这里把组件需要的参数穿进去
             *  比如说一个页面需要多个编辑器，需要区分是哪个编辑器传递不同的参数
             *  就可以在这里实现区分，editor.$params 是在 on-created 时手动赋值的
             **/
            uid: editor.$params.uid,

            // 通常要传递进去 editor，方便组件内操作编辑器
            editor: editor
          })

          app.mount(contentEl)

          return contentEl
        }

        isActive (editor) {
          return false // or false
        }

        isDisabled (editor) {
          return false // or true
        }

        exec (editor, value) {
          if (this.ifInit) {
            return
          }
          this.ifInit = true
        }
      }
    }
  })

  const content = ref(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque blanditiis eaque inventore provident quam? Atque excepturi exercitationem iste itaque laborum optio pariatur, quaerat qui repellat sapiente similique sint vitae!`)

  const editorRef1 = ref()
  const editorRef2 = ref()
  const editorConfig = {
    hoverbarKeys: {
      text: {
        menuKeys: [
          'bold',
          'through',
          'color',
          'bgColor',
          'clearStyle',
          '|',
          '按钮形式',
          '选择形式',
          '弹框形式（bar不消失）',
          '弹框形式（bar消失）'
        ]
      }
    }
  }

  // *一定要写 Object.seal(editor)
  const onEditorCreated = (num, editor) => {
    const editorRef = num === 1 ? editorRef1 : editorRef2

    // *设置自定义参数，需要写在 Object.seal(editor) 之前，否则会报错
    editor.$params = {
      uid: uid()
    }

    editorRef.value = Object.seal(editor)

    /**
     *  这里可以修改默认和自定义弹框的样式以及文本
     *  可以根据 modalOrPanel.$elem 里的内容区别是什么弹框然后进行操作
     *  注意：modalOrPanel.$elem 是个数组
     **/
    editorRef.value.on('modalOrPanelShow', (modalOrPanel) => {
      const el = modalOrPanel.$elem[ 0 ]
      const $el = $(el)
      const html = el.innerHTML

      // 例子1：修改引用网络图片的问题
      if (
        html.includes('图片地址') &&
        html.includes('图片描述') &&
        html.includes('图片链接')
      ) {
        $el.find('.babel-container:nth-child(1) span').html('我是自定义的图片地址')
        $el.find('.babel-container:nth-child(2) span').html('我是自定义的图片描述')
        $el.find('.babel-container:nth-child(3) span').html('我是自定义的图片链接')
      }

      // 例子2：识别自定义新菜单弹框，改样式
      if (html.includes('custom-component')) {
        $el.css({
          padding: 0,
          minHeight: 0
        })
        $el.find('.btn-close').hide()
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>