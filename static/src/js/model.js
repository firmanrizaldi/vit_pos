odoo.define('pos_onhand.models', function(require){
"use strict" ;

    var models = require('point_of_sale.models') ;
    var model_list = models.PosModel.prototype.models ;

    models.load_fields('product.product',['qty_available']) ;

    return models ;



});

