/*
* @Author: dmyang
* @Date:   2015-06-04 19:08:47
* @Last Modified by:   dmyang
* @Last Modified time: 2015-06-05 00:51:11
*/

'use strict';

var toolbar = [
    {
        text: 'monkey',
        iconCls: 'icomoon-stackoverflow'
    },
    '-',
    {
        text: 'Replay',
        iconCls: 'icomoon-redo2'
    },
    '-',
    {
        text: 'Remove',
        iconCls: 'icomoon-remove2',
        xtype: 'splitbutton',
        // handler: observers.onRemoveAll,
        menu: [{
            text: 'Remove All',
            // handler: observers.onRemoveAll
        }, {
            text: 'Images',
            // handler: observers.onRemoveImages
        }, {
            text: 'NON 200s',
            // handler: observers.onRemoveNon200s
        }]
    }
];

var mainPlane = {
    id: 'mainContainer',
    region: 'center',
    minWidth: 300,
    border: 0,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    tbar: toolbar,
    items: [
        // MAIN_SESSION,
        {
            xtype: 'splitter'
        },
        {
            flex: 1,
            id: 'tabContainerRight',
            xtype: 'tabpanel',
            defaults: {
                border: 0
            },
            items: []
        }
    ]
};

var northPlane = {
    region: 'south',
    height: 18,
    border: 0
};

Ext.define('Monkey.App', {
    extend: 'Ext.container.Viewport',
    initComponent: function() {
        Ext.apply(this, {
            layout: 'border',
            items: [mainPlane, northPlane]
        });
        this.callParent(arguments);
    }
});

Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            html: '<h1 class="x-panel-header">Page Title</h1>',
            border: false,
            margin: '0 0 5 0'
        }, {
            region: 'west',
            collapsible: true,
            title: 'Navigation',
            width: 150
            // could use a TreePanel or AccordionLayout for navigational items
        }, {
            region: 'south',
            title: 'South Panel',
            collapsible: true,
            html: 'Information goes here',
            split: true,
            height: 100,
            minHeight: 100
        }, {
            region: 'east',
            title: 'East Panel',
            collapsible: true,
            split: true,
            width: 150
        }, {
            region: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,      // First tab active by default
            items: {
                title: 'Default Tab',
                html: 'The first tab\'s content. Others may be added dynamically'
            }
        }]
    });
});
