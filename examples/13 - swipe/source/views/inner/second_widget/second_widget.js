RAD.view("view.inner_second_widget", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/inner/second_widget/second_widget.html',
    events: {
        'tap button': 'click'
    },
    click: function (e) {
        console.log('console');
    }
}));