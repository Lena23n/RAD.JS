RAD.view("view.popup", RAD.Blanks.Popup.extend({
    url: 'source/views/popup/popup.html',
    events: {
        'tap .close-dialog': 'closeDialog'
    },
    onInitialize: function () {
        'use strict';
        this.model = new (Backbone.Model.extend())();
    },
    onNewExtras: function (extras) {
        'use strict';
        this.model.set({msg: extras.msg});
        this.caller = extras.parent;

        this.outSideClose = extras.outSideClose;
        this.onCloseDestroy = extras.onCloseDestroy;
    },
    onStartAttach: function () {
        "use strict";
        if (this.outSideClose) {
            this.$el.addClass('outside');
        } else {
            this.$el.removeClass('outside');
        }
    },
    onEndDetach: function () {
        "use strict";
        var tag = this.$('#text').get(0),
            resultString = (tag) ? tag.value : '';
        //transfer data to parent
        this.publish(this.caller + '.popup', {result: resultString });

    },
    closeDialog: function () {
        "use strict";
        this.close();
        // you can use also this.publish('navigation.popup.close', {content: self.viewID });
    }
}));
