<template>
  <div id="app" ref="app">
    <button @click="download">下载</button>
    <div data-v-1674cdf1="" class="reportedit_edit"><!-- <editor ></editor> --><!-- 让文本可编辑  contenteditable="true" -->
      <div data-v-1674cdf1="" class="reportedit_edit_center">
        <div data-v-1674cdf1="" class="edit_head_title">
          <h4 data-v-1674cdf1="">2022年4月3日 - 2022年5月1日XX企业飞行检查报告</h4></div>
        <div data-v-1674cdf1="" class="edit_head_data"><p data-v-1674cdf1="">报告撰写者：
          <span data-v-1674cdf1=""></span>
        </p>
          <p data-v-1674cdf1="">受检公司： <span data-v-1674cdf1=""></span></p>
          <p data-v-1674cdf1="">检查日期： <span data-v-1674cdf1="">1970年01月01日-1970年01月01日</span></p>
          <p data-v-1674cdf1="">生成报告日期： <!--v-if--></p><!-- //CID 16711 //2023.02.07 //Begin -->
          <p data-v-1674cdf1="">风险提示（分数越高风险越大，仅供参考）： <span data-v-1674cdf1="">260</span>
          </p><!-- //CID 16711 //2023.02.07 //End --><!-- //CID 16891 //2023.02.16  Begin -->
          <div data-v-1674cdf1="" class="tableexhibition">
            <table data-v-1674cdf1="" border="1" cellspacing="0" class="risktable">
              <tbody data-v-1674cdf1="">
              <tr data-v-1674cdf1="">
                <td data-v-1674cdf1=""></td>
                <td data-v-1674cdf1="" colspan="2">低</td>
                <td data-v-1674cdf1="" colspan="2">中</td>
                <td data-v-1674cdf1="" colspan="2">高</td>
                <td data-v-1674cdf1=""></td>
              </tr>
              <tr data-v-1674cdf1="">
                <td data-v-1674cdf1=""></td>
                <td data-v-1674cdf1="">个数</td>
                <td data-v-1674cdf1="">得分</td>
                <td data-v-1674cdf1="">个数</td>
                <td data-v-1674cdf1="">得分</td>
                <td data-v-1674cdf1="">个数</td>
                <td data-v-1674cdf1="">得分</td>
                <td data-v-1674cdf1="">总分</td>
              </tr>
              <tr data-v-1674cdf1="">
                <td data-v-1674cdf1="">风险</td>
                <td data-v-1674cdf1="">1</td>
                <td data-v-1674cdf1="">10</td>
                <td data-v-1674cdf1="">1</td>
                <td data-v-1674cdf1="">20</td>
                <td data-v-1674cdf1="">3</td>
                <td data-v-1674cdf1="">90</td>
                <td data-v-1674cdf1="">120</td>
              </tr>
              <tr data-v-1674cdf1="">
                <td data-v-1674cdf1="">频率</td>
                <td data-v-1674cdf1="">0</td>
                <td data-v-1674cdf1="">0</td>
                <td data-v-1674cdf1="">1</td>
                <td data-v-1674cdf1="">20</td>
                <td data-v-1674cdf1="">4</td>
                <td data-v-1674cdf1="">120</td>
                <td data-v-1674cdf1="">140</td>
              </tr>
              </tbody>
            </table>
          </div><!-- //CID 16891 //2023.02.16  End --></div><!--  请输入概述部分内容 -->
        <div data-v-1674cdf1="" style="padding-bottom: 5px;">
          <div data-v-1674cdf1="" class="reportview_item_content">
            <div data-v-1674cdf1=""><p>112341414141 123123141414141</p></div><!--v-if--></div><!--v-if--><!-- <editor
                v-if="showEditor"
                :title="'概述内容'"
                class="reportview_item_content"
                :datas="topData.file_summary"
                :fileid="''"
                :filedefectid="''"
                @gethtml="getContent_zg"
            ></editor> --></div>
        <div data-v-1674cdf1="" class="edit_item"><!-- 中栏 --- 报告主题缺陷内容部分 --><!-- //CID 16711 //2023.02.07 //Begin -->
          <div data-v-d14d09ca="" data-v-1674cdf1="" class="reporteditloop">
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="" id="defect7">
                <div data-v-d14d09ca="" class="edit_item_meiti"><h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;">
                    <p data-v-d14d09ca="">12312312315144111124141414141</p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">1.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">未由[相应的部门起草/由质量管理部门审核和批准][质量标准/标准/取样计划/检验程序/实验室控制措施]，包括任何相关变更。</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""><p>
                      <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">缺陷描述 test 123123</span>
                    </p></div><!--v-if--></div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""><p>
                      <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">整改措施 test整改措施 test整改</span>
                      <span style="color: rgb(250, 250, 250); background-color: rgb(0, 58, 140); font-size: 14px;">措施 test整改措施 test整改措施 test整</span>
                      <span style="color: rgb(81, 90, 110); background-color: rgb(0, 58, 140); font-size: 14px;">改</span>
                      <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 tes</span>
                    </p>
                      <p>
  <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">
    <strong> &nbsp; t整改措施 test整改措施 test整改措施 test整改措施 test整改措施 &nbsp;</strong>
  </span>
                      </p>
                      <p>
  <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">
    <strong> &nbsp;test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措 &nbsp; </strong>
  </span>
                      </p>
                      <p>
                        <span style="color: rgb(81, 90, 110); background-color: rgb(245, 245, 245); font-size: 14px;">施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test整改措施 test 123123</span>
                      </p></div><!--v-if--></div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">2.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条 &amp;</span><span data-v-d14d09ca="">通则第四条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">3.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">4.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第四条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">5.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第七十一条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">6.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">防止污染或混淆的独立或指定区域内的实验室控制和操作有缺陷。</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第十一条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="" id="defect7">
                <div data-v-d14d09ca="" class="edit_item_meiti"><h4 data-v-d14d09ca="">实验室记录场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;">
                    <p data-v-d14d09ca="">12312312312313231231414141asdwdasdwd</p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">7.</span><span data-v-d14d09ca=""><!--v-if--><!--v-if--><span data-v-d14d09ca="" style="color: rgb(141, 141, 141);">【一般缺陷】</span></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">未能确保实验室记录包括确保既定质量标准和标准符合性需进行的所有检验项目的全部数据。</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二条 &amp;</span><span data-v-d14d09ca="">通则第三条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室记录场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">8.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第十三条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室记录场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">9.</span><span data-v-d14d09ca=""><!--v-if--><!--v-if--><span data-v-d14d09ca="" style="color: rgb(141, 141, 141);">【一般缺陷】</span></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">未能确保实验室记录包括确保既定质量标准和标准符合性需进行的所有检验项目的全部数据。</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二条 &amp;</span><span data-v-d14d09ca="">通则第三条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">实验室记录场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">10.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第十三条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="" id="defect14">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">取样场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">11.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">企业未能建立无菌工艺区域环境监测系统。</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">取样场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">12.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">1</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二百二十二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">取样场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">13.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;">2</span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二百二十二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="" id="defect9">
                <div data-v-d14d09ca="" class="edit_item_meiti"><h4 data-v-d14d09ca="">超标场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;">
                    <p data-v-d14d09ca="">阿萨德文档阿萨德文档文档阿萨德文档</p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">14.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="" id="defect49">
                <div data-v-d14d09ca="" class="edit_item_meiti"><h4 data-v-d14d09ca="">变更场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;">
                    <img data-v-d14d09ca="" src="https://shilinx-inspectest.oss-cn-beijing.aliyuncs.com/inspection%2Fattachment%2F50%2F1%2Fe854a261-5026-4a32-9565-c17d1b5e7818%2Favatar.png?OSSAccessKeyId=LTAI5tMUfczHvvpm1dZxisXN&amp;Expires=4911094241&amp;Signature=8o63jZ9XsPhiSCU65vL2RXF5xAI%3D" style="height: 50px; width: 50px; cursor: pointer;">
                    <p data-v-d14d09ca="">阿萨德文档文档</p><!--v-if--></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">15.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二条 &amp;</span><span data-v-d14d09ca="">通则第三条 &amp;</span><span data-v-d14d09ca="">通则第四条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">变更场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">16.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">变更场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">17.</span><span data-v-d14d09ca=""><span data-v-d14d09ca="" style="color: rgb(255, 0, 0);">【严重缺陷】</span><!--v-if--><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">变更场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">18.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div>
            <div data-v-d14d09ca="">
              <div data-v-d14d09ca="">
                <div data-v-d14d09ca="" class="edit_item_meiti" style="display: none;">
                  <h4 data-v-d14d09ca="">变更场景描述：</h4>
                  <div data-v-d14d09ca="" style="margin-left: 40px;"><p data-v-d14d09ca=""></p></div>
                </div>
                <div data-v-d14d09ca="">
                  <div data-v-d14d09ca="" class="edit_item_theme">
                    <div data-v-d14d09ca="" class="edit_item_theme_more" contenteditable="false"><!-- //CID 17724 //2023.03.28 //Begin -->
                      <div data-v-d14d09ca="" class="ivu-poptip">
                        <div class="ivu-poptip-rel"><span data-v-d14d09ca="">⋮</span>
                        </div><!--teleport start--><!--teleport end--></div><!-- //CID 17724 //2023.03.28 //End -->
                    </div>
                    <p data-v-d14d09ca="" class="ubdtextdefect">
                      <span data-v-d14d09ca="">19.</span><span data-v-d14d09ca=""><!--v-if--><span data-v-d14d09ca="" style="color: rgb(236, 175, 103);">【主要缺陷】</span><!--v-if--></span><span data-v-d14d09ca="" style="outline: none; cursor: pointer;"></span><!-- //CID 15213 //2022.10.24 //Begin--><span data-v-d14d09ca="" style="color: rgb(6, 168, 240);"> （<span data-v-d14d09ca="">通则第一条 &amp;</span><span data-v-d14d09ca="">通则第二条</span>） </span><!-- //CID 15213 //2022.10.24 //End-->
                    </p></div>
                  <div data-v-d14d09ca="" class="edit_item_theme" style="display: none;"><!--v-if--></div><!-- //CID 16703 //2023.02.07 //Begin -->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">缺陷描述:</p><!-- <editor
              :title="'缺陷描述'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if-->
                  <p data-v-d14d09ca="" style="padding-top: 3px; padding-left: 5px; font-weight: bold;">整改措施:</p><!-- <editor
              :title="'整改措施'"
              v-if="item1.is_show_editor"
              class="reportview_item_content"
              :datas="item1.defect_update_content"
              :fileid="item1.file_id"
              :filedefectid="item1.file_defect_id"
              @gethtml="getContent_zg"
          ></editor> -->
                  <div data-v-d14d09ca="" class="reportview_item_content">
                    <div data-v-d14d09ca=""><p></p></div>
                    <div data-v-d14d09ca="" class="reportview_item_content_item">请输入缺陷描述内容...</div>
                  </div><!--v-if--><!-- //CID 16703 //2023.02.07 //End --></div>
              </div>
            </div><!-- 法规选择器 --><!-- //CID 14482 //2022.09.22 //Begin --><!-- 关联法规选择 --><!--teleport start--><!--teleport end--><!-- //CID 14482 //2022.09.22 //End --><!-- 选择模板 --><!--teleport start--><!--teleport end--><!-- 点击查看大图 --><!--teleport start--><!--teleport end-->
          </div><!-- //CID 16711 //2023.02.07 //End --></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, useTemplateRef, onMounted } from 'vue'
  import juice from 'juice'
  // import htmlDocx from 'html-docx-js'
  import { saveAs } from 'file-saver'

  import style from './style.json'

  const app = useTemplateRef('app')

  const download = () => {
    let html = app.value.innerHTML
    let inlineStyleHtml = juice(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${ style.value }</style>
          </head>
          <body>${ html }</body>
        </html>
    `)

    var converted = window.htmlDocx.asBlob(inlineStyleHtml);
    saveAs(converted, 'test.docx');
  }
</script>

<style>
  .reportedit_edit {
    color: red;
    font-size: 18px;
  }
</style>