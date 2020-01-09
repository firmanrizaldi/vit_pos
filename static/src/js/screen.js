odoo.define('pos_qty.screens', function(require){
"use strict" ;
    
var  screen= require('point_of_sale.screens') ;

screen.OrderWidget.include({

        get_total_qty: function(){
            var order = this.pos.get_order();
            var lines = order.get_orderlines();
            console.log(lines);
            var qty = 0 ;

            for (var i=0; i<lines.length ; i++) {
                qty += lines[i].quantity ;
            }

            return qty ;
        },

        update_summary: function(){
            this._super();
            var qty = this.get_total_qty() ;
            console.log(qty) ;
            
            if(qty){
                this.el.querySelector('.sip').textContent = qty;
            }

        }
    }) ;
    



});