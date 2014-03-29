var App = function($el) {
    this.$el = $el;
    this.$viewport = $el.find('#viewport');
    this.$win = $(window);
    this.$root = $el.find('#root_load');
}

App.prototype.start = function() {
    // this.sidebar = new SidebarView(this.$el.find('#sidebar'));
    this.page = new PageView(this.$el.find('#page'), this);

    // adjust height if sidebar and page contents are very small
    this.$viewport.css('minHeight',this.$win.height());
    this.$el.css('minHeight',this.$win.height());
}

window.scrollTo(0,0);
$(function() {
    app = new App($('body'));
    app.start();
});

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);