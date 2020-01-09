# -*- coding: utf-8 -*-
{
    'name': "Customize POS ",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    
    'author': 'firmanrizaldiyusup@gmail.com',
    'website': 'http://www.vitraining.com',

    'category': 'Point of Sales',
    'version': '0.1',

    'depends': ['base','point_of_sale'],
    'qweb' : [
        'static/src/xml/customize.xml'
    ], 

    'data': [
       'view/assets.xml'
    ],
  
}