/**
 * Created by Leaf on 2017/7/20.
 */

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery.validate.min"], a) : a()
}(function () {
    $.extend($.validator.prototype,{
        toolTipStyle:{
            position:"relative"
            ,
            /*top:$(element).position().top,
            left:$(element).position().left+$(element).width()+10,*/
            border:"1px solid #fff",
            background:"#f1dcb0",
            color:"#333",
            padding: "7px",
            "font-size": "10px",
            "font-weight":"400",
            "border-width": "1px",
            "border-style": "solid",
            "border-radius": "30px",
            "-moz-border-radius": "30px",
            "-webkit-border-radius": "30px",
            "box-shadow":" 3px 3px 5px #888",
            "-webkit-box-shadow": "3px 3px 5px #888",
            " -moz-box-shadow": "3px 3px 5px #888"
            
        }
    },{
        getToolTipStyle:function(element){
            return $.extend(this.toolTipStyle,{
                top:$(element).position().top-47,
                left:$(element).position().left+$(element).width()+10
            });
        }
    },{
        showLabel:function( element, message ) {
            var label = this.errorsFor( element );
            if ( label.length ) {
                // refresh error/success class
                label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
                // replace message on existing label
                label.html(message);
            } else {
                // create label
                label = $("<" + this.settings.errorElement + ">")
                    .attr("for", this.idOrName(element))
                    .addClass(this.settings.errorClass)
                    .html(message || "")
                    .css(this.getToolTipStyle(element));

                /*var container=$("<div></div>")
                 .css({
                 position:"absolute",
                 top:$(element).position().top,
                 left:$(element).position().left+$(element).width()+10,
                 border:"1px solid #ff0000",
                 color:"blue",
                 zIndex:10
                 }).attr("for", this.idOrName(element))
                 .addClass(this.settings.errorClass);
                 container.html(label);*/
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if ( !this.labelContainer.append(label).length ) {
                    if ( this.settings.errorPlacement ) {
                        this.settings.errorPlacement(label, $(element) );
                    } else {
                        label.insertAfter(element);
                        //label.appendTo(document.body);

                        //container.appendTo(document.body);
                    }
                }
            }
            if ( !message && this.settings.success ) {
                label.text("");
                if ( typeof this.settings.success === "string" ) {
                    label.addClass( this.settings.success );
                } else {
                    this.settings.success( label, element );
                }
            }
            //this.toShow = this.toShow.add(container);
            this.toShow = this.toShow.add(label);
        },
    })

    $.extend($.fn,{
        /**
         * 调用表单自定义校验框架的初始化方法
         * @param options
         *      {
         *          submitFn:"submitFn函数为表单验证通过时，调用表单的submit,执行的函数，
         *                      若此参数为空，请调用valid()方法进行校验，返回true后进行，执行下一步操作",
         *          toolTipStyle:"tooltip的自定义样式，可以为空"
         *      }
         * @constructor
         */
        LvalidateInit:function(options){
            if(options && options.toolTipStyle){
                $.extend($.validator.prototype.toolTipStyle,options.toolTipStyle);
            }
            this.validate({
                onkeyup:function(element) { $(element).valid(); } ,//true
                onfocusout: function(element) { $(element).valid(); },
                debug: true,
                submitHandler:function(form){
                    if(options && options.submitFn)
                        options.submitFn(form);
                    else
                        console.log("submitFn属性为空，submitFn函数为表单验证通过时，调用表单的submit,执行的函数")
                }
            });
        }
    })
});
